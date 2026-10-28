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

  _lastSyncTime: 0,

  // Safe two-way reconciliation: merges cloud with local data without ANY blind deletions
  async syncWithCloud(force = false) {
    if (this._syncing) return;
    const now = Date.now();
    // Throttle: don't run full collection scans more than once every 3 minutes unless forced
    if (!force && this._lastSyncTime && (now - this._lastSyncTime < 3 * 60 * 1000)) {
      console.log("[RichVine Firebase] Sync throttled (synced recently). Real-time listeners remain active.");
      return;
    }

    this._syncing = true;
    this._setSyncStatus("syncing", "Syncing Cloud...");

    try {
      // NOTE: auditLogs is write-only and deliberately omitted to prevent read quota exhaustion
      const collections = ["students", "payments", "expenses", "stocks", "stockSales", "stockRestocks", "cbtSubmissions"];
      const localDb = RichVineDB.get();
      let changed = false;

      // 1. Process explicit user-initiated pending deletes (if any were performed while offline)
      if (Array.isArray(localDb._pendingDeletes) && localDb._pendingDeletes.length > 0) {
        const remaining = [];
        for (const item of localDb._pendingDeletes) {
          try {
            if (item && item.col && item.id) {
              await deleteDoc(doc(db, item.col, item.id));
              changed = true;
            }
          } catch (e) {
            console.warn(`[Firebase] Pending delete failed for ${item.col}/${item.id}:`, e.message);
            remaining.push(item);
          }
        }
        localDb._pendingDeletes = remaining;
      }
      // Ensure poisonous legacy _deleted object is permanently wiped
      if (localDb._deleted) {
        delete localDb._deleted;
        changed = true;
      }

      // 2. Safe Two-Way Reconciliation
      for (const colName of collections) {
        try {
          const snap = await getDocs(collection(db, colName));
          const cloudDocsMap = new Map();

          if (!snap.empty) {
            for (const docSnap of snap.docs) {
              cloudDocsMap.set(docSnap.id, { id: docSnap.id, ...docSnap.data() });
            }
          }

          if (!localDb[colName]) localDb[colName] = [];
          const currentLocal = Array.isArray(localDb[colName]) ? localDb[colName] : [];
          const reconciledLocal = [];
          const seenIds = new Set();

          // A. For records already in local storage:
          for (const item of currentLocal) {
            if (!item || !item.id || seenIds.has(item.id)) continue;
            seenIds.add(item.id);

            if (cloudDocsMap.has(item.id)) {
              // Exists in cloud: Cloud is authoritative for remote changes
              const cloudData = cloudDocsMap.get(item.id);
              if (colName === "payments" && window.RichVineDB?.getPaymentBreakdown) {
                const b = window.RichVineDB.getPaymentBreakdown(cloudData);
                cloudData.termFeePaid = b.termFeePaid;
                cloudData.arrearsDeducted = b.arrearsRecovered;
                cloudData.otherFeesPaid = b.otherFeesPaid;
              }
              reconciledLocal.push({ ...item, ...cloudData });
              cloudDocsMap.delete(item.id); // Mark handled
            } else {
              // DATA RECOVERY: Record exists locally but NOT in Cloud!
              // NEVER delete it! Upload and restore it to Firestore!
              reconciledLocal.push(item);
              try {
                const clean = this._sanitize(item);
                delete clean._pendingUpload;
                await setDoc(doc(db, colName, item.id), clean, { merge: true });
                console.log(`[RichVine Firebase] Recovered & uploaded local record to Cloud: ${colName}/${item.id}`);
                changed = true;
              } catch (upErr) {
                console.warn(`[RichVine Firebase] Failed to upload ${colName}/${item.id}:`, upErr.message);
              }
            }
          }

          // B. Add any new cloud records that were not yet in local storage:
          for (const [cId, cloudData] of cloudDocsMap.entries()) {
            if (seenIds.has(cId)) continue;
            seenIds.add(cId);

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

      // Safe deduplication by ID only (no heuristic deletes)
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

      this._lastSyncTime = Date.now();
      this.ready = true;
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[RichVine Firebase] Safe two-way cloud sync complete ✓");
    } catch (e) {
      console.warn("[RichVine Firebase] Sync failed:", e.message);
      this._setSyncStatus("offline", "Offline Mode");
    } finally {
      this._syncing = false;
    }
  },

  // Backwards compatibility alias
  async pullFromCloud() {
    return this.syncWithCloud(true);
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
      console.log("[Firebase] Student permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStudent failed/offline:", e.message);
      const localDb = RichVineDB.get();
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "students", id });
      RichVineDB.save(localDb);
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
      console.log("[Firebase] Payment permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deletePayment failed/offline:", e.message);
      const localDb = RichVineDB.get();
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "payments", id });
      RichVineDB.save(localDb);
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
      console.log("[Firebase] Expense permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteExpense failed/offline:", e.message);
      const localDb = RichVineDB.get();
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "expenses", id });
      RichVineDB.save(localDb);
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
      console.log("[Firebase] Stock permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStockItem failed/offline:", e.message);
      const localDb = RichVineDB.get();
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "stocks", id });
      RichVineDB.save(localDb);
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
      console.log("[Firebase] CBT submission permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteCbtSubmission failed/offline:", e.message);
      const localDb = RichVineDB.get();
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "cbtSubmissions", id });
      RichVineDB.save(localDb);
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

  // Lightweight sync for CBT Examination Portal: only reads students collection for authentication
  async syncStudentsOnly() {
    try {
      const snap = await getDocs(collection(db, "students"));
      if (!snap.empty) {
        const localDb = RichVineDB.get();
        const map = new Map();
        snap.docs.forEach(d => map.set(d.id, { id: d.id, ...d.data() }));
        const current = localDb.students || [];
        const merged = current.map(s => map.has(s.id) ? { ...s, ...map.get(s.id) } : s);
        map.forEach((val, id) => {
          if (!merged.some(s => s.id === id)) merged.push(val);
        });
        localDb.students = merged;
        RichVineDB.save(localDb);
      }
      this.ready = true;
    } catch (e) {
      console.warn("[Firebase] syncStudentsOnly notice:", e.message);
    }
  },

  _isPendingDelete(col, id) {
    const localDb = RichVineDB.get();
    return Array.isArray(localDb._pendingDeletes) && localDb._pendingDeletes.some(d => d.col === col && d.id === id);
  },

  // ── Realtime Multi-Device Listeners ─────────────────────────────────────
  initRealtimeSync(callbacks = {}) {
    // 1. Listen for Student additions/edits from other devices
    onSnapshot(collection(db, "students"), snap => {
      const localDb = RichVineDB.get();
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = (localDb.students || []).findIndex(s => s.id === data.id);
          if (idx === -1) {
            if (!localDb.students) localDb.students = [];
            localDb.students.unshift(data);
            changed = true;
          } else {
            localDb.students[idx] = { ...localDb.students[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.students = (localDb.students || []).filter(s => s.id !== data.id);
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
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          if (window.RichVineDB && window.RichVineDB.getPaymentBreakdown) {
            const b = window.RichVineDB.getPaymentBreakdown(data);
            data.termFeePaid = b.termFeePaid;
            data.arrearsDeducted = b.arrearsRecovered;
            data.otherFeesPaid = b.otherFeesPaid;
          }

          const idx = (localDb.payments || []).findIndex(p => p.id === data.id);
          if (idx === -1) {
            if (!localDb.payments) localDb.payments = [];
            localDb.payments.unshift(data);
            changed = true;
          } else {
            localDb.payments[idx] = { ...localDb.payments[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.payments = (localDb.payments || []).filter(p => p.id !== data.id);
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
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
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
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
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
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
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

// Context-aware initialization
if (typeof window !== "undefined") {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("dashboard.html")) {
    // Admin dashboard: full safe two-way sync
    setTimeout(() => {
      if (window.RichVineFirebase && window.RichVineFirebase.syncWithCloud) {
        window.RichVineFirebase.syncWithCloud();
      }
    }, 1000);
  } else if (path.includes("cbt")) {
    // Student CBT portal: only sync student records for login authentication
    setTimeout(() => {
      if (window.RichVineFirebase && window.RichVineFirebase.syncStudentsOnly) {
        window.RichVineFirebase.syncStudentsOnly();
      }
    }, 500);
  }
}
