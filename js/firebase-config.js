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
  onSnapshot
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
      if (v === undefined) {
        clean[k] = "";
      } else if (v !== null && typeof v === "object" && !Array.isArray(v) && !(v instanceof Date)) {
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

  // Full two-way reconciliation: pull cloud records AND push missing local records to cloud
  async syncWithCloud() {
    if (this._syncing) return;
    this._syncing = true;
    this._setSyncStatus("syncing", "Syncing Cloud...");

    try {
      const collections = ["students", "payments", "expenses", "auditLogs"];
      const localDb = RichVineDB.get();
      let changed = false;

      for (const colName of collections) {
        try {
          const snap = await getDocs(collection(db, colName));
          const cloudIds = new Set();

          if (!snap.empty) {
            snap.forEach(docSnap => {
              const cloudRecord = { id: docSnap.id, ...docSnap.data() };
              cloudIds.add(cloudRecord.id);
              if (!localDb[colName]) localDb[colName] = [];
              const existingIdx = localDb[colName].findIndex(r => r.id === cloudRecord.id);
              if (existingIdx === -1) {
                localDb[colName].unshift(cloudRecord);
                changed = true;
              } else {
                // Merge cloud data into local
                localDb[colName][existingIdx] = { ...localDb[colName][existingIdx], ...cloudRecord };
                changed = true;
              }
            });
          }

          // Upload any local record that is not in the cloud yet
          const localItems = localDb[colName] || [];
          for (const item of localItems) {
            if (item && item.id && !cloudIds.has(item.id)) {
              console.log(`[RichVine Firebase] Uploading missing local ${colName} ->`, item.id);
              try {
                const clean = this._sanitize(item);
                await setDoc(doc(db, colName, item.id), clean, { merge: true });
              } catch (pushErr) {
                console.warn(`[RichVine Firebase] Upload failed for ${colName}/${item.id}:`, pushErr.message);
              }
            }
          }
        } catch (colErr) {
          console.warn(`[RichVine Firebase] Error syncing collection ${colName}:`, colErr.message);
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
      this._setSyncStatus("synced", "Cloud Synced");
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

  // ── Expenses ────────────────────────────────────────────────────────────
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
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] deleteExpense failed:", e.message);
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
      let changed = false;
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
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
          changed = true;
        }
      });
      if (changed) {
        RichVineDB.save(localDb);
        if (callbacks.onStudentsChange) callbacks.onStudentsChange(localDb.students);
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
          changed = true;
        }
      });
      if (changed) {
        RichVineDB.save(localDb);
        if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] payments sync warning:", e.message));

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
        RichVineDB.save(localDb);
        if (callbacks.onExpensesChange) callbacks.onExpensesChange(localDb.expenses);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] expenses sync warning:", e.message));
  }
};

// Start initial two-way synchronization
window.RichVineFirebase.syncWithCloud();
