/**
 * RichVine College - Firebase Config v3
 * Robust two-way cloud sync for multi-device live real-time synchronization
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  writeBatch
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUlH62ZDntFFCX965zw45tqhNmnQ17mQQ",
  authDomain: "richvine-4696c.firebaseapp.com",
  projectId: "richvine-4696c",
  storageBucket: "richvine-4696c.firebasestorage.app",
  messagingSenderId: "495473769171",
  appId: "1:495473769171:web:64a0180f71ae33a95db226",
  measurementId: "G-DWD4TR5GMJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ─── Window Bridge ─────────────────────────────────────────────────────────
window.RichVineFirebase = {
  ready: false,
  _syncing: false,

  _sanitize(obj) {
    if (!obj || typeof obj !== "object") return obj;
    const clean = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined || v === null) {
        // Omit null/undefined properties so they don't violate type constraints in Firestore rules
        continue;
      } else if (Array.isArray(v)) {
        clean[k] = v.map(item => (item && typeof item === "object") ? this._sanitize(item) : (item === undefined || item === null ? "" : item));
      } else if (typeof v === "object" && !(v instanceof Date)) {
        clean[k] = this._sanitize(v);
      } else {
        clean[k] = v;
      }
    }
    return clean;
  },

  _setSyncStatus(status, text) {
    const badge = document.getElementById("cloud-sync-badge");
    const textEl = document.getElementById("cloud-sync-text");
    const iconEl = badge ? badge.querySelector("i") : null;
    if (!badge || !textEl) return;
    if (status === "synced") {
      badge.style.background = "#f0fdf4";
      badge.style.borderColor = "#bbf7d0";
      badge.style.color = "#166534";
      if (iconEl) iconEl.className = "fas fa-cloud text-emerald-500";
      textEl.textContent = text || "Cloud Synced";
    } else if (status === "syncing") {
      badge.style.background = "#eff6ff";
      badge.style.borderColor = "#bfdbfe";
      badge.style.color = "#1e40af";
      if (iconEl) iconEl.className = "fas fa-sync fa-spin text-sky-500";
      textEl.textContent = text || "Syncing...";
    } else if (status === "offline") {
      badge.style.background = "#fffbeb";
      badge.style.borderColor = "#fde68a";
      badge.style.color = "#92400e";
      if (iconEl) iconEl.className = "fas fa-cloud-rain text-amber-500";
      textEl.textContent = text || "Offline";
    } else {
      badge.style.background = "#fef2f2";
      badge.style.borderColor = "#fecaca";
      badge.style.color = "#991b1b";
      if (iconEl) iconEl.className = "fas fa-exclamation-triangle text-red-500";
      textEl.textContent = text || "Sync Alert";
    }
  },

  // Full two-way reconciliation: pull cloud records, prune deleted items, and push offline records
  async syncWithCloud() {
    if (this._syncing) return;
    this._syncing = true;
    this._setSyncStatus("syncing", "Syncing Cloud...");

    try {
      const collections = ["students", "payments", "expenses", "stocks", "stockSales", "stockRestocks", "cbtSubmissions", "auditLogs"];
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = { students: [], payments: [], expenses: [], stocks: [], cbtSubmissions: [] };
      if (!localDb._deleted.cbtSubmissions) localDb._deleted.cbtSubmissions = [];
      let changed = false;

      // 1. Ensure any locally deleted IDs are purged from Firestore
      if (localDb._deleted) {
        if (Array.isArray(localDb._deleted.students)) {
          for (const sId of localDb._deleted.students) {
            try { await deleteDoc(doc(db, "students", sId)); } catch (_) {}
          }
        }
        if (Array.isArray(localDb._deleted.payments)) {
          for (const pId of localDb._deleted.payments) {
            try { await deleteDoc(doc(db, "payments", pId)); } catch (_) {}
          }
        }
        if (Array.isArray(localDb._deleted.expenses)) {
          for (const eId of localDb._deleted.expenses) {
            try { await deleteDoc(doc(db, "expenses", eId)); } catch (_) {}
          }
        }
        if (Array.isArray(localDb._deleted.stocks)) {
          for (const sId of localDb._deleted.stocks) {
            try { await deleteDoc(doc(db, "stocks", sId)); } catch (_) {}
          }
        }
        if (Array.isArray(localDb._deleted.cbtSubmissions)) {
          for (const cId of localDb._deleted.cbtSubmissions) {
            try { await deleteDoc(doc(db, "cbtSubmissions", cId)); } catch (_) {}
          }
        }
      }

      for (const colName of collections) {
        try {
          const snap = await getDocs(collection(db, colName));
          const cloudIds = new Set();
          const cloudDocsMap = new Map();

          if (!snap.empty) {
            for (const docSnap of snap.docs) {
              const cloudRecord = { id: docSnap.id, ...docSnap.data() };

              // Check if item was marked as deleted locally
              const wasDeleted = localDb._deleted && Array.isArray(localDb._deleted[colName]) && localDb._deleted[colName].includes(cloudRecord.id);
              if (wasDeleted) {
                try { await deleteDoc(docSnap.ref); } catch (_) {}
                continue;
              }

              // If it is a payment belonging to a deleted student, purge from cloud
              if (colName === "payments" && cloudRecord.studentId) {
                const studentWasDeleted = localDb._deleted?.students?.includes(cloudRecord.studentId);
                const studentStillExists = (localDb.students || []).some(s => s.id === cloudRecord.studentId);
                if (studentWasDeleted || !studentStillExists) {
                  try { await deleteDoc(docSnap.ref); } catch (_) {}
                  continue;
                }
              }

              cloudIds.add(cloudRecord.id);
              cloudDocsMap.set(cloudRecord.id, cloudRecord);
            }
          }

          if (!localDb[colName]) localDb[colName] = [];

          // 2. Reconciliation of local items against Cloud
          const reconciledLocal = [];
          for (const item of localDb[colName]) {
            if (!item || !item.id) continue;

            // If item is in deleted list, drop it permanently
            if (localDb._deleted?.[colName]?.includes(item.id)) {
              changed = true;
              continue;
            }

            if (cloudIds.has(item.id)) {
              // Present in cloud: merge cloud data (cloud is authoritative)
              const cloudData = cloudDocsMap.get(item.id);
              if (colName === "payments" && window.RichVineDB?.getPaymentBreakdown) {
                const b = window.RichVineDB.getPaymentBreakdown(cloudData);
                cloudData.termFeePaid = b.termFeePaid;
                cloudData.arrearsDeducted = b.arrearsRecovered;
                cloudData.otherFeesPaid = b.otherFeesPaid;
              }
              reconciledLocal.push({ ...item, ...cloudData });
              cloudDocsMap.delete(item.id); // marked as merged
            } else if (item._pendingUpload) {
              // Newly created offline item on this device: upload to cloud
              console.log(`[RichVine Firebase] Uploading offline-created ${colName} ->`, item.id);
              try {
                const clean = this._sanitize(item);
                delete clean._pendingUpload;
                await setDoc(doc(db, colName, item.id), clean, { merge: true });
                delete item._pendingUpload;
                reconciledLocal.push(item);
                changed = true;
              } catch (pushErr) {
                console.warn(`[RichVine Firebase] Upload failed for ${colName}/${item.id}:`, pushErr.message);
                reconciledLocal.push(item);
              }
            } else {
              // Item exists locally but is NOT in cloud, and was NOT created offline:
              // THIS MEANS IT WAS DELETED FROM FIRESTORE (OR ON ANOTHER DEVICE)!
              // REMOVE IT FROM LOCAL STORAGE! DO NOT UPLOAD IT TO CLOUD!
              console.log(`[RichVine Firebase] Pruning deleted ${colName} ->`, item.id);
              if (!localDb._deleted[colName]) localDb._deleted[colName] = [];
              if (!localDb._deleted[colName].includes(item.id)) localDb._deleted[colName].push(item.id);
              changed = true;
            }
          }

          // Add any new cloud items that were not present locally
          for (const [cId, cloudData] of cloudDocsMap.entries()) {
            if (localDb._deleted?.[colName]?.includes(cId)) continue;
            if (colName === "payments" && cloudData.studentId) {
              if (localDb._deleted?.students?.includes(cloudData.studentId)) continue;
            }
            if (colName === "payments" && window.RichVineDB?.getPaymentBreakdown) {
              const b = window.RichVineDB.getPaymentBreakdown(cloudData);
              cloudData.termFeePaid = b.termFeePaid;
              cloudData.arrearsDeducted = b.arrearsRecovered;
              cloudData.otherFeesPaid = b.otherFeesPaid;
            }
            reconciledLocal.unshift(cloudData);
            changed = true;
          }

          localDb[colName] = reconciledLocal;
        } catch (colErr) {
          console.warn(`[RichVine Firebase] Error syncing collection ${colName}:`, colErr.message);
        }
      }

      localDb._hasCloudSynced = true;

      // Deduplicate payments and rebalance student balances cleanly
      if (window.RichVineDB) {
        if (window.RichVineDB.cleanDuplicatePayments) {
          const dupRes = window.RichVineDB.cleanDuplicatePayments(localDb);
          if (dupRes && dupRes.removedCount > 0) changed = true;
        }
        if (window.RichVineDB.recalculateAllStudentBalances) {
          window.RichVineDB.recalculateAllStudentBalances(localDb);
        }
      }

      if (changed) {
        RichVineDB.save(localDb);
        if (window.RichVineApp && window.RichVineApp.refreshCurrentTab) {
          window.RichVineApp.refreshCurrentTab();
        }
      }

      this.ready = true;
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[RichVine Firebase] Two-way multi-device sync complete ✓");
    } catch (e) {
      console.warn("[RichVine Firebase] Sync failed:", e.message);
      this._setSyncStatus("offline", "Offline Mode");
    } finally {
      this._syncing = false;
    }
  },

  // Backwards compatibility alias
  async pullFromCloud() {
    return this.syncWithCloud();
  },

  // ── Students ────────────────────────────────────────────────────────────
  async saveStudent(student) {
    try {
      if (!student || !student.id) return;
      const clean = this._sanitize(student);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "students", student.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Student synced to cloud:", student.id);
    } catch (e) {
      console.warn("[Firebase] saveStudent failed:", e.message);
      this._setSyncStatus("error", "Sync Pending");
    }
  },

  async deleteStudent(id) {
    try {
      await deleteDoc(doc(db, "students", id));
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.students) localDb._deleted.students = [];
      if (!localDb._deleted.students.includes(id)) {
        localDb._deleted.students.push(id);
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Student permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStudent failed:", e.message);
    }
  },

  // ── Payments ────────────────────────────────────────────────────────────
  async savePayment(payment) {
    try {
      if (!payment || !payment.id) return;
      const clean = this._sanitize(payment);
      await setDoc(doc(db, "payments", payment.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Payment synced to cloud:", payment.id);
    } catch (e) {
      console.warn("[Firebase] savePayment failed:", e.message);
      this._setSyncStatus("error", "Sync Pending");
    }
  },

  async deletePayment(id) {
    try {
      await deleteDoc(doc(db, "payments", id));
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.payments) localDb._deleted.payments = [];
      if (!localDb._deleted.payments.includes(id)) {
        localDb._deleted.payments.push(id);
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Payment permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deletePayment failed:", e.message);
    }
  },

  // ── Expenses ────────────────────────────────────────────────────────────
  async saveExpenses(expensesList) {
    if (!Array.isArray(expensesList) || !expensesList.length) return;
    try {
      // Chunk into batches of up to 400 (well within Firestore's 500 max limit)
      const chunkSize = 400;
      for (let i = 0; i < expensesList.length; i += chunkSize) {
        const chunk = expensesList.slice(i, i + chunkSize);
        const batch = writeBatch(db);
        chunk.forEach(expense => {
          if (!expense || !expense.id) return;
          const clean = this._sanitize(expense);
          batch.set(doc(db, "expenses", expense.id), clean, { merge: true });
        });
        await batch.commit();
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log(`[Firebase] Successfully synced ${expensesList.length} expenses to cloud via batch ✓`);
    } catch (e) {
      console.warn("[Firebase] Batch saveExpenses failed, falling back to individual saves:", e.message);
      for (const expense of expensesList) {
        await this.saveExpense(expense);
      }
    }
  },

  async saveExpense(expense) {
    try {
      if (!expense || !expense.id) return;
      const clean = this._sanitize(expense);
      await setDoc(doc(db, "expenses", expense.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveExpense failed:", e.message);
    }
  },

  async deleteExpense(id) {
    try {
      await deleteDoc(doc(db, "expenses", id));
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.expenses) localDb._deleted.expenses = [];
      if (!localDb._deleted.expenses.includes(id)) {
        localDb._deleted.expenses.push(id);
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Expense permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteExpense failed:", e.message);
    }
  },

  // ── Stocks / Inventory ──────────────────────────────────────────────────
  async saveStockItem(item) {
    try {
      if (!item || !item.id) return;
      const clean = this._sanitize(item);
      await setDoc(doc(db, "stocks", item.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockItem failed:", e.message);
    }
  },

  async saveStockSale(sale) {
    try {
      if (!sale || !sale.id) return;
      const clean = this._sanitize(sale);
      await setDoc(doc(db, "stockSales", sale.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockSale failed:", e.message);
    }
  },

  async saveStockRestock(restock) {
    try {
      if (!restock || !restock.id) return;
      const clean = this._sanitize(restock);
      await setDoc(doc(db, "stockRestocks", restock.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockRestock failed:", e.message);
    }
  },

  async deleteStockItem(id) {
    try {
      await deleteDoc(doc(db, "stocks", id));
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.stocks) localDb._deleted.stocks = [];
      if (!localDb._deleted.stocks.includes(id)) {
        localDb._deleted.stocks.push(id);
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Stock permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStockItem failed:", e.message);
    }
  },

  // ── CBT Examination Submissions ─────────────────────────────────────────
  async saveCbtSubmission(submission) {
    try {
      if (!submission || !submission.id) return;
      const clean = this._sanitize(submission);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "cbtSubmissions", submission.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] CBT submission synced to cloud:", submission.id);
    } catch (e) {
      console.warn("[Firebase] saveCbtSubmission failed:", e.message);
    }
  },

  async deleteCbtSubmission(id) {
    try {
      await deleteDoc(doc(db, "cbtSubmissions", id));
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.cbtSubmissions) localDb._deleted.cbtSubmissions = [];
      if (!localDb._deleted.cbtSubmissions.includes(id)) {
        localDb._deleted.cbtSubmissions.push(id);
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] CBT submission permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteCbtSubmission failed:", e.message);
    }
  },

  // ── Audit Logs ──────────────────────────────────────────────────────────
  async saveLog(log) {
    try {
      if (!log || !log.id) return;
      const clean = this._sanitize(log);
      await setDoc(doc(db, "auditLogs", log.id), clean, { merge: true });
    } catch (e) {
      console.warn("[Firebase] saveLog failed:", e.message);
    }
  },

  // ── Realtime Multi-Device Listeners ─────────────────────────────────────
  initRealtimeSync(callbacks = {}) {
    // 1. Listen for Student additions/edits from other devices
    onSnapshot(collection(db, "students"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb._deleted) localDb._deleted = {};
      if (!localDb._deleted.students) localDb._deleted.students = [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          // Permanently ignore any item that was deleted
          if (localDb._deleted.students.includes(data.id)) return;
          const idx = localDb.students.findIndex(s => s.id === data.id);
          if (idx === -1) {
            localDb.students.unshift(data);
            changed = true;
          } else {
            localDb.students[idx] = { ...localDb.students[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.students = localDb.students.filter(s => s.id !== data.id);
          if (!localDb._deleted.students.includes(data.id)) localDb._deleted.students.push(data.id);
          // Purge all payments belonging to this removed student as well
          localDb.payments = (localDb.payments || []).filter(p => p.studentId !== data.id);
          changed = true;
        }
      });

      if (changed) {
        RichVineDB.save(localDb);
        if (callbacks.onStudentsChange) callbacks.onStudentsChange(localDb.students);
        if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => {
      console.warn("[Realtime] students sync warning:", e.message);
      this._setSyncStatus("offline", "Offline");
    });

    // 2. Listen for Payment additions/edits from other devices
    onSnapshot(collection(db, "payments"), snap => {
      const localDb = RichVineDB.get();
      const deletedStudents = localDb._deleted?.students || [];
      const deletedPayments = localDb._deleted?.payments || [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          // Skip if payment was locally deleted or belongs to a deleted/non-existent student
          if (deletedPayments.includes(data.id)) return;
          if (data.studentId && deletedStudents.includes(data.studentId)) return;
          const studentStillExists = (localDb.students || []).some(s => s.id === data.studentId);
          if (data.studentId && !studentStillExists) return;

          if (window.RichVineDB && window.RichVineDB.getPaymentBreakdown) {
            const b = window.RichVineDB.getPaymentBreakdown(data);
            data.termFeePaid = b.termFeePaid;
            data.arrearsDeducted = b.arrearsRecovered;
            data.otherFeesPaid = b.otherFeesPaid;
          }

          const idx = localDb.payments.findIndex(p => p.id === data.id);
          if (idx === -1) {
            localDb.payments.unshift(data);
            changed = true;
          } else {
            localDb.payments[idx] = { ...localDb.payments[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.payments = localDb.payments.filter(p => p.id !== data.id);
          if (!localDb._deleted) localDb._deleted = {};
          if (!localDb._deleted.payments) localDb._deleted.payments = [];
          if (!localDb._deleted.payments.includes(data.id)) localDb._deleted.payments.push(data.id);
          changed = true;
        }
      });

      if (changed) {
        if (window.RichVineDB) {
          if (window.RichVineDB.cleanDuplicatePayments) window.RichVineDB.cleanDuplicatePayments(localDb);
          if (window.RichVineDB.recalculateAllStudentBalances) window.RichVineDB.recalculateAllStudentBalances(localDb);
        }
        RichVineDB.save(localDb);
        if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] payments sync warning:", e.message));

    // Listen for Stocks changes
    onSnapshot(collection(db, "stocks"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.stocks) localDb.stocks = [];
      const deletedStocks = (localDb._deleted?.stocks) || [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          if (deletedStocks.includes(data.id)) return;
          const idx = localDb.stocks.findIndex(s => s.id === data.id);
          if (idx === -1) { localDb.stocks.unshift(data); changed = true; }
          else { localDb.stocks[idx] = { ...localDb.stocks[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stocks = localDb.stocks.filter(s => s.id !== data.id);
          changed = true;
        }
      });
      if (changed) {
        if (window.RichVineDB && window.RichVineDB.recalculateStockQuantities) {
          window.RichVineDB.recalculateStockQuantities(localDb);
        }
        RichVineDB.save(localDb);
        if (callbacks.onStocksChange) callbacks.onStocksChange(localDb.stocks);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stocks sync warning:", e.message));

    // Listen for Stock Sales changes
    onSnapshot(collection(db, "stockSales"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.stockSales) localDb.stockSales = [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.stockSales.findIndex(s => s.id === data.id);
          if (idx === -1) { localDb.stockSales.unshift(data); changed = true; }
          else { localDb.stockSales[idx] = { ...localDb.stockSales[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stockSales = localDb.stockSales.filter(s => s.id !== data.id);
          changed = true;
        }
      });
      if (changed) {
        if (window.RichVineDB && window.RichVineDB.recalculateStockQuantities) {
          window.RichVineDB.recalculateStockQuantities(localDb);
        }
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stockSales sync warning:", e.message));

    // Listen for Stock Restocks changes
    onSnapshot(collection(db, "stockRestocks"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.stockRestocks) localDb.stockRestocks = [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.stockRestocks.findIndex(r => r.id === data.id);
          if (idx === -1) { localDb.stockRestocks.unshift(data); changed = true; }
          else { localDb.stockRestocks[idx] = { ...localDb.stockRestocks[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stockRestocks = localDb.stockRestocks.filter(r => r.id !== data.id);
          changed = true;
        }
      });
      if (changed) {
        if (window.RichVineDB && window.RichVineDB.recalculateStockQuantities) {
          window.RichVineDB.recalculateStockQuantities(localDb);
        }
        RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stockRestocks sync warning:", e.message));

    // 3. Listen for Expense changes
    onSnapshot(collection(db, "expenses"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.expenses) localDb.expenses = [];
      const deletedExpenses = (localDb._deleted && Array.isArray(localDb._deleted.expenses)) ? localDb._deleted.expenses : [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          if (deletedExpenses.includes(data.id)) return;
          const idx = localDb.expenses.findIndex(e => e.id === data.id);
          if (idx === -1) {
            localDb.expenses.unshift(data);
            changed = true;
          } else {
            localDb.expenses[idx] = { ...localDb.expenses[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.expenses = localDb.expenses.filter(e => e.id !== data.id);
          changed = true;
        }
      });

      if (changed) {
        // Guarantee deduplication by id
        const seen = new Set();
        localDb.expenses = localDb.expenses.filter(e => {
          if (!e || !e.id || seen.has(e.id)) return false;
          seen.add(e.id);
          return true;
        });
        RichVineDB.save(localDb);
        if (callbacks.onExpensesChange) callbacks.onExpensesChange(localDb.expenses);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] expenses sync warning:", e.message));

    // 4. Listen for CBT Submissions
    onSnapshot(collection(db, "cbtSubmissions"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.cbtSubmissions) localDb.cbtSubmissions = [];
      const deletedCbt = (localDb._deleted && Array.isArray(localDb._deleted.cbtSubmissions)) ? localDb._deleted.cbtSubmissions : [];
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          if (deletedCbt.includes(data.id)) return;
          const idx = localDb.cbtSubmissions.findIndex(s => s.id === data.id);
          if (idx === -1) {
            localDb.cbtSubmissions.unshift(data);
            changed = true;
          } else {
            localDb.cbtSubmissions[idx] = { ...localDb.cbtSubmissions[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.cbtSubmissions = localDb.cbtSubmissions.filter(s => s.id !== data.id);
          changed = true;
        }
      });
      if (changed) {
        RichVineDB.save(localDb);
        if (callbacks.onCbtChange) callbacks.onCbtChange(localDb.cbtSubmissions);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] cbtSubmissions sync warning:", e.message));
  }
};

// Start initial two-way synchronization
window.RichVineFirebase.syncWithCloud();
