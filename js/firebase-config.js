/**
 * RichVine College - Firebase Config v2
 * Includes Firestore sync for students, payments, auditLogs, and expenses
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
  addDoc,
  onSnapshot,
  serverTimestamp
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

  // Pull all data from Firestore and merge into LocalStorage
  async pullFromCloud() {
    try {
      const collections = ["students", "payments", "expenses", "auditLogs"];
      const localDb = RichVineDB.get();
      let changed = false;

      for (const colName of collections) {
        try {
          const snap = await getDocs(collection(db, colName));
          if (!snap.empty) {
            snap.forEach(docSnap => {
              const cloudRecord = { id: docSnap.id, ...docSnap.data() };
              const arr = colName === "auditLogs" ? "auditLogs" : colName;
              if (!localDb[arr]) localDb[arr] = [];
              const existingIdx = localDb[arr].findIndex(r => r.id === cloudRecord.id);
              if (existingIdx === -1) {
                localDb[arr].unshift(cloudRecord);
                changed = true;
              } else {
                // Cloud wins for students (to sync arrears), local wins for payments (immutability)
                if (colName === "students") {
                  localDb[arr][existingIdx] = { ...localDb[arr][existingIdx], ...cloudRecord };
                  changed = true;
                }
              }
            });
          }
        } catch (e) {
          console.warn(`Could not pull ${colName}:`, e.message);
        }
      }

      if (changed) {
        RichVineDB.save(localDb);
        // Notify app if it's ready
        if (window.RichVineApp && window.RichVineApp.refreshCurrentTab) {
          window.RichVineApp.refreshCurrentTab();
        }
      }
      window.RichVineFirebase.ready = true;
      console.log("[RichVine Firebase] Sync complete ✓");
    } catch (e) {
      console.warn("[RichVine Firebase] Pull failed:", e.message);
    }
  },

  // ── Students ────────────────────────────────────────────────────────────
  async saveStudent(student) {
    try {
      if (!student || !student.id) return;
      await setDoc(doc(db, "students", student.id), { ...student, _updatedAt: serverTimestamp() }, { merge: true });
    } catch (e) {
      console.warn("[Firebase] saveStudent failed:", e.message);
    }
  },

  async deleteStudent(id) {
    try {
      await deleteDoc(doc(db, "students", id));
    } catch (e) {
      console.warn("[Firebase] deleteStudent failed:", e.message);
    }
  },

  // ── Payments ────────────────────────────────────────────────────────────
  async savePayment(payment) {
    try {
      if (!payment || !payment.id) return;
      await setDoc(doc(db, "payments", payment.id), { ...payment, _createdAt: serverTimestamp() }, { merge: true });
    } catch (e) {
      console.warn("[Firebase] savePayment failed:", e.message);
    }
  },

  // ── Expenses ────────────────────────────────────────────────────────────
  async saveExpense(expense) {
    try {
      if (!expense || !expense.id) return;
      await setDoc(doc(db, "expenses", expense.id), { ...expense, _createdAt: serverTimestamp() }, { merge: true });
    } catch (e) {
      console.warn("[Firebase] saveExpense failed:", e.message);
    }
  },

  async deleteExpense(id) {
    try {
      await deleteDoc(doc(db, "expenses", id));
    } catch (e) {
      console.warn("[Firebase] deleteExpense failed:", e.message);
    }
  },

  // ── Audit Logs ──────────────────────────────────────────────────────────
  async saveLog(log) {
    try {
      if (!log || !log.id) return;
      await setDoc(doc(db, "auditLogs", log.id), log, { merge: true });
    } catch (e) {
      console.warn("[Firebase] saveLog failed:", e.message);
    }
  },

  // ── Realtime Listeners ──────────────────────────────────────────────────
  initRealtimeSync(callbacks = {}) {
    // Students changes
    onSnapshot(collection(db, "students"), snap => {
      const localDb = RichVineDB.get();
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.students.findIndex(s => s.id === data.id);
          if (idx === -1) localDb.students.unshift(data);
          else localDb.students[idx] = { ...localDb.students[idx], ...data };
        } else if (change.type === "removed") {
          localDb.students = localDb.students.filter(s => s.id !== data.id);
        }
      });
      RichVineDB.save(localDb);
      if (callbacks.onStudentsChange) callbacks.onStudentsChange(localDb.students);
    }, e => console.warn("[Realtime] students:", e.message));

    // Payments changes
    onSnapshot(collection(db, "payments"), snap => {
      const localDb = RichVineDB.get();
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added") {
          if (!localDb.payments.find(p => p.id === data.id)) {
            localDb.payments.unshift(data);
          }
        }
      });
      RichVineDB.save(localDb);
      if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
    }, e => console.warn("[Realtime] payments:", e.message));

    // Expenses changes
    onSnapshot(collection(db, "expenses"), snap => {
      const localDb = RichVineDB.get();
      if (!localDb.expenses) localDb.expenses = [];
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.expenses.findIndex(e => e.id === data.id);
          if (idx === -1) localDb.expenses.unshift(data);
          else localDb.expenses[idx] = data;
        } else if (change.type === "removed") {
          localDb.expenses = localDb.expenses.filter(e => e.id !== data.id);
        }
      });
      RichVineDB.save(localDb);
      if (callbacks.onExpensesChange) callbacks.onExpensesChange(localDb.expenses);
    }, e => console.warn("[Realtime] expenses:", e.message));
  }
};

// Trigger initial sync
window.RichVineFirebase.pullFromCloud();
