/**
 * RichVine College - Complete Data Schema v5 (Cleaned & Reset)
 * 2026/2027 Academic Session
 * Fresh start: Zero dummy students, zero dummy payments, zero dummy expenses.
 * Clean, production-ready schema with:
 * - Expected Term School Fee per learner
 * - Arrears-first payment deduction
 * - Outstanding calculation per learner (arrears, term fee, and total)
 * - Flexible amounts with decimal kobo and thousands separators
 */

// ─── School Section & Class Definitions ───────────────────────────────────
const SCHOOL_SECTIONS = {
  primary: {
    id: "primary",
    name: "Primary School",
    icon: "fas fa-child",
    color: "emerald",
    classes: [
      "Day Care", "Creche", "Kindergarten",
      "Nursery 1", "Nursery 2",
      "Primary 1", "Primary 2", "Primary 3",
      "Primary 4", "Primary 5", "Primary 6"
    ]
  },
  junior: {
    id: "junior",
    name: "Junior College",
    icon: "fas fa-school",
    color: "sky",
    classes: [
      "JSS 1A", "JSS 1B",
      "JSS 2A", "JSS 2B",
      "JSS 3A", "JSS 3B"
    ]
  },
  senior: {
    id: "senior",
    name: "Senior College",
    icon: "fas fa-graduation-cap",
    color: "purple",
    classes: [
      "SSS 1 Science", "SSS 1 Art", "SSS 1 Commercial",
      "SSS 2 Science", "SSS 2 Art", "SSS 2 Commercial",
      "SSS 3 Science", "SSS 3 Art", "SSS 3 Commercial"
    ]
  }
};

const ALL_CLASSES = [
  ...SCHOOL_SECTIONS.primary.classes,
  ...SCHOOL_SECTIONS.junior.classes,
  ...SCHOOL_SECTIONS.senior.classes
];

function getSectionByClass(className) {
  for (const [key, sec] of Object.entries(SCHOOL_SECTIONS)) {
    if (sec.classes.includes(className)) return sec;
  }
  return null;
}

// ─── Expense Accounts ───────────────────────────────────────────────────
const EXPENSE_ACCOUNTS = [
  { id: "general", name: "General / Central Account", icon: "fas fa-university", color: "#475569" },
  { id: "primary", name: "Primary School Account", icon: "fas fa-child", color: "#d97706" },
  { id: "junior",  name: "Junior College Account", icon: "fas fa-book-reader", color: "#0284c7" },
  { id: "senior",  name: "Senior College Account", icon: "fas fa-graduation-cap", color: "#7c3aed" }
];
if (typeof window !== "undefined") window.EXPENSE_ACCOUNTS = EXPENSE_ACCOUNTS;

// ─── Clean Initial State (Zero Dummy Data) ────────────────────────────────
const DEFAULT_DATA = {
  config: {
    schoolName: "RICHVINE COLLEGE",
    motto: "Soaring High",
    address: "5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State",
    contactEmail: "admin@richvinecollege.edu.ng",
    phone: "09053126809",
    adminContact: "09053126809",
    currentSession: "2026/2027",
    currentTerm: "1st Term",
    currency: "₦"
  },

  classes: ALL_CLASSES,

  feeCategories: [
    { id: "school_fees", name: "School Fees / Tuition", hasMeta: false },
    { id: "daycare_fee", name: "Day Care / Creche Monthly Fee", hasMeta: true, metaType: "daycare", forClass: null, daycare: true },
    { id: "uniform", name: "School Uniform", hasMeta: false },
    { id: "sport", name: "Sport Wear", hasMeta: true, metaType: "sport" },
    { id: "friday_wear", name: "Friday Wear", hasMeta: false },
    { id: "exercise_books", name: "Exercise Books", hasMeta: true, metaType: "exercise_books" },
    { id: "stationery", name: "Stationery (Pencil, Biro, Books, etc.)", hasMeta: true, metaType: "stationery" },
    { id: "textbook", name: "Textbooks", hasMeta: true, metaType: "textbook" },
    { id: "misc_1", name: "Miscellaneous 1 (Development / PTA)", hasMeta: false },
    { id: "misc_2", name: "Miscellaneous 2 (ICT / Computer Lab)", hasMeta: false },
    // JSS 3 Special Examination Fees
    { id: "bece_fee", name: "BECE Examination Fee", hasMeta: false, forClass: "JSS 3" },
    { id: "bece_lesson_fee", name: "BECE Lesson Fee", hasMeta: false, forClass: "JSS 3" },
    // SS3 Special Senior School Fees & Official Pricing
    { id: "waec_fee", name: "WAEC Examination Fee", defaultAmount: 65000, hasMeta: false, forClass: "SSS 3" },
    { id: "neco_fee", name: "NECO Examination Fee", defaultAmount: 60000, hasMeta: false, forClass: "SSS 3" },
    { id: "waec_logistics", name: "WAEC Logistics Fee", defaultAmount: 20000, hasMeta: false, forClass: "SSS 3" },
    { id: "neco_logistics", name: "NECO Logistics Fee", defaultAmount: 20000, hasMeta: false, forClass: "SSS 3" },
    { id: "waec_id_card", name: "WAEC ID Card Fee", defaultAmount: 4000, hasMeta: false, forClass: "SSS 3" },
    { id: "neco_id_card", name: "NECO ID Card Fee", defaultAmount: 4000, hasMeta: false, forClass: "SSS 3" },
    { id: "lessons_fee", name: "Morning & Afternoon Extension Lesson Fee", defaultAmount: 25000, hasMeta: false, forClass: "SSS 3" },
    { id: "mock_exams_fee", name: "3 Mock Exams Fee", defaultAmount: 10000, hasMeta: false, forClass: "SSS 3" },
    { id: "practical_fee", name: "BOTH WAEC & NECO Practical Fee", defaultAmount: 10000, hasMeta: false, forClass: "SSS 3" },
    { id: "camping_fee", name: "Monthly Intensive Camping Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "other_special_fee", name: "Other SS3 Special / Optional Fees", hasMeta: true, metaType: "other_special", forClass: "SSS 3" }
  ],

  // Fresh, empty collections
  students: [
    {
      id: "RVC-2026-001",
      regNo: "RVC/2026/001",
      firstName: "Emmanuel",
      lastName: "Adesina",
      gender: "Male",
      currentClass: "SSS 1 Science",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 65000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Mr. B. Adesina",
      parentPhone: "08031112233",
      parentEmail: "b.adesina@gmail.com",
      address: "Imoro, Ogijo, Ogun State"
    },
    {
      id: "RVC-2026-002",
      regNo: "RVC/2026/002",
      firstName: "Fatimah",
      lastName: "Balogun",
      gender: "Female",
      currentClass: "SSS 2 Commercial",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 65000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Alhaji T. Balogun",
      parentPhone: "08022223344",
      parentEmail: "t.balogun@yahoo.com",
      address: "Shagamu Road, Ogijo, Ogun State"
    },
    {
      id: "RVC-2026-003",
      regNo: "RVC/2026/003",
      firstName: "David",
      lastName: "Chukwuma",
      gender: "Male",
      currentClass: "SSS 3 Art",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 75000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Chief P. Chukwuma",
      parentPhone: "08055556677",
      parentEmail: "p.chukwuma@outlook.com",
      address: "Ikorodu - Shagamu Expressway, Ogun State"
    },
    {
      id: "RVC-2026-004",
      regNo: "RVC/2026/004",
      firstName: "Blessing",
      lastName: "Okonkwo",
      gender: "Female",
      currentClass: "SSS 1 Art",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 65000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Mrs. N. Okonkwo",
      parentPhone: "08144445566",
      parentEmail: "n.okonkwo@gmail.com",
      address: "Olukayode Street, Ogijo, Ogun State"
    },
    {
      id: "RVC-2026-005",
      regNo: "RVC/2026/005",
      firstName: "Ibrahim",
      lastName: "Yusuf",
      gender: "Male",
      currentClass: "SSS 2 Science",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 65000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Dr. K. Yusuf",
      parentPhone: "08077778899",
      parentEmail: "k.yusuf@gmail.com",
      address: "Ogijo Central, Ogun State"
    },
    {
      id: "RVC-2026-006",
      regNo: "RVC/2026/006",
      firstName: "Grace",
      lastName: "Adeyemi",
      gender: "Female",
      currentClass: "SSS 3 Science",
      section: "senior",
      status: "Active",
      enrolledDate: "2026-09-15",
      termFee: 75000,
      openingArrears: 0,
      arrears: 0,
      parentName: "Pastor S. Adeyemi",
      parentPhone: "09088889900",
      parentEmail: "s.adeyemi@gmail.com",
      address: "Imoro Town, Ogijo, Ogun State"
    }
  ],
  payments: [],
  expenses: [],
  stocks: [],
  stockSales: [],
  stockRestocks: [],
  cbtSubmissions: [],
  auditLogs: [
    {
      id: "LOG-INIT",
      timestamp: Date.now(),
      date: new Date().toLocaleString("en-GB"),
      action: "DATABASE_RESET",
      user: "System",
      details: "RichVine College Database Reset Clean. Ready for live records."
    }
  ]
};

// ─── LocalStorage + Firebase DB Manager (High-Performance In-Memory Caching) ──
class RichVineDB {
  static KEY = "RICHVINE_COLLEGE_DB_V6_LIVE";
  static _cache = null;

  static init() {
    try {
      ["RICHVINE_COLLEGE_DB_V2026", "RICHVINE_COLLEGE_DB_V3", "RICHVINE_COLLEGE_DB_V4_FRESH", "RICHVINE_COLLEGE_DB_V5_LIVE"].forEach(k => {
        if (localStorage.getItem(k)) localStorage.removeItem(k);
      });
    } catch(e) {}

    if (!localStorage.getItem(this.KEY)) {
      localStorage.setItem(this.KEY, JSON.stringify(DEFAULT_DATA));
    }
  }

  static invalidateCache() {
    this._cache = null;
  }

  static get() {
    if (this._cache) return this._cache;
    this.init();
    try {
      const raw = localStorage.getItem(this.KEY);
      const data = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_DATA));
      if (!data.students || data.students.length === 0) {
        data.students = JSON.parse(JSON.stringify(DEFAULT_DATA.students));
      }
      if (!data.payments) data.payments = [];
      if (!data.expenses) data.expenses = [];
      if (!data.stocks) data.stocks = [];
      if (!data.stockSales) data.stockSales = [];
      if (!data.stockRestocks) data.stockRestocks = [];
      if (!data.cbtSubmissions) data.cbtSubmissions = [];

      // One-time purge of previous practice attempts as requested
      const CBT_PRACTICE_PURGED_KEY = 'RICHVINE_CBT_PRACTICE_PURGED_V2';
      if (!localStorage.getItem(CBT_PRACTICE_PURGED_KEY)) {
        data.cbtSubmissions = [];
        try {
          sessionStorage.removeItem('RICHVINE_ACTIVE_CBT_SESSION');
        } catch (_) {}
        localStorage.setItem(CBT_PRACTICE_PURGED_KEY, 'true');
      }
      if (!data.auditLogs) data.auditLogs = [];
      if (!data._deleted) data._deleted = { students: [], payments: [], expenses: [], stocks: [], cbtSubmissions: [] };
      if (!data._deleted.cbtSubmissions) data._deleted.cbtSubmissions = [];
      data.classes = ALL_CLASSES;

      // Ensure updated school credentials are reflected across all sessions
      if (!data.config) data.config = {};
      if (!data.config.motto || data.config.motto.includes("Wisdom") || data.config.motto !== "Soaring High") {
        data.config.motto = "Soaring High";
      }
      if (!data.config.address || data.config.address.includes("Lekki") || !data.config.address.includes("Olukayode")) {
        data.config.address = "5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State";
      }
      if (!data.config.phone || data.config.phone.includes("803 123") || data.config.phone !== "09053126809") {
        data.config.phone = "09053126809";
      }
      data.config.adminContact = "09053126809";

      if (!data.feeCategories || !data.feeCategories.some(c => c.id === "stationery")) {
        data.feeCategories = DEFAULT_DATA.feeCategories;
      }

      // Anti-orphan guard: immediately purge any payment whose student no longer exists
      const validStudentIds = new Set(data.students.map(s => s.id));
      const hasOrphans = data.payments.some(p => p.studentId && !validStudentIds.has(p.studentId));
      if (hasOrphans) {
        const purgedIds = [];
        data.payments = data.payments.filter(p => {
          if (p.studentId && !validStudentIds.has(p.studentId)) {
            purgedIds.push(p.id);
            return false;
          }
          return true;
        });
        if (!data._deleted.payments) data._deleted.payments = [];
        purgedIds.forEach(pId => {
          if (!data._deleted.payments.includes(pId)) data._deleted.payments.push(pId);
        });
        try {
          localStorage.setItem(this.KEY, JSON.stringify(data));
        } catch (_) {}
      }

      this._cache = data;
      return data;
    } catch (e) {
      console.error("DB read error, reinitializing fresh state:", e);
      const fallback = JSON.parse(JSON.stringify(DEFAULT_DATA));
      try { localStorage.setItem(this.KEY, JSON.stringify(fallback)); } catch (_) {}
      this._cache = fallback;
      return this._cache;
    }
  }

  static save(data) {
    this._cache = data;
    try {
      if (data && Array.isArray(data.auditLogs) && data.auditLogs.length > 500) {
        data.auditLogs = data.auditLogs.slice(0, 500);
      }
      if (data && data._deleted) {
        ['students', 'payments', 'expenses', 'stocks'].forEach(k => {
          if (Array.isArray(data._deleted[k]) && data._deleted[k].length > 500) {
            data._deleted[k] = data._deleted[k].slice(-500);
          }
        });
      }
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage save error, attempting pruned retry:", e);
      try {
        if (data.auditLogs) data.auditLogs = data.auditLogs.slice(0, 100);
        localStorage.setItem(this.KEY, JSON.stringify(data));
      } catch (inner) {
        console.error("Critical storage failure:", inner);
      }
    }
  }

  static clearAllData() {
    localStorage.setItem(this.KEY, JSON.stringify(DEFAULT_DATA));
    if (window.RichVineApp && window.RichVineApp.refreshCurrentTab) {
      window.RichVineApp.refreshCurrentTab();
    }
  }

  // ── Config ──────────────────────────────────────────────────────────────
  static getConfig() { return this.get().config; }
  static updateConfig(newConfig) {
    const db = this.get();
    db.config = { ...db.config, ...newConfig };
    this.save(db);
  }

  // ── Classes & Sections ──────────────────────────────────────────────────
  static getClasses() { return ALL_CLASSES; }
  static getSections() { return SCHOOL_SECTIONS; }
  static getSectionByClass(cls) { return getSectionByClass(cls); }
  static getFeeCategories(className = "") {
    const all = this.get().feeCategories;
    if (!className) return all;
    const isSS3 = className.includes("SSS 3");
    const isJSS3 = className.includes("JSS 3");
    return all.filter(c => {
      if (!c.forClass) return true;
      if (c.forClass === "SSS 3") return isSS3;
      if (c.forClass === "JSS 3") return isJSS3;
      return false;
    });
  }

  // ── Tuition vs Other Fee Classification ─────────────────────────────────
  static isTuitionCategory(category, categoryName = "") {
    if (!category && !categoryName) return false;
    if (category === "school_fees" || category === "daycare_fee") return true;
    if (category === "multi") return false;
    return /school fee|tuition|day care|creche|term fee/i.test(categoryName || category);
  }

  // ── Payment Breakdown Helper ───────────────────────────────────────────
  static getPaymentBreakdown(payment) {
    if (!payment) return { arrearsRecovered: 0, termFeePaid: 0, otherFeesPaid: 0, totalAmount: 0 };
    const totalAmount = Number(payment.amount) || 0;

    // Multi-item payment
    if (Array.isArray(payment.items) && payment.items.length > 0) {
      let tuitionSum = 0;
      let otherSum = 0;
      payment.items.forEach(it => {
        const itAmt = Number(it.amount) || 0;
        if (this.isTuitionCategory(it.category, it.categoryName)) {
          tuitionSum += itAmt;
        } else {
          otherSum += itAmt;
        }
      });
      tuitionSum = Math.round(tuitionSum * 100) / 100;
      otherSum = Math.round(otherSum * 100) / 100;

      const arrearsRecovered = Math.min(tuitionSum, Math.max(0, Number(payment.arrearsDeducted) || 0));
      const termFeePaid = Math.max(0, Math.round((tuitionSum - arrearsRecovered) * 100) / 100);
      const otherFeesPaid = otherSum;
      return {
        arrearsRecovered: Math.round(arrearsRecovered * 100) / 100,
        termFeePaid: Math.round(termFeePaid * 100) / 100,
        otherFeesPaid: Math.round(otherFeesPaid * 100) / 100,
        totalAmount
      };
    }

    // Single item / legacy payment
    if (this.isTuitionCategory(payment.category, payment.categoryName)) {
      const arrearsRecovered = Math.min(totalAmount, Math.max(0, Number(payment.arrearsDeducted) || 0));
      const termFeePaid = Math.max(0, Math.round((totalAmount - arrearsRecovered) * 100) / 100);
      return {
        arrearsRecovered: Math.round(arrearsRecovered * 100) / 100,
        termFeePaid: Math.round(termFeePaid * 100) / 100,
        otherFeesPaid: 0,
        totalAmount
      };
    }

    // Pure Non-tuition payment (Uniform, Books, Sport wear, Lessons, Exam fees, etc.)
    return {
      arrearsRecovered: 0,
      termFeePaid: 0,
      otherFeesPaid: totalAmount,
      totalAmount
    };
  }

  // ── Outstanding Balance Calculator for a Student ────────────────────────
  static getStudentBalance(studentId) {
    const student = this.getStudentById(studentId);
    if (!student) return null;

    const parse = (v) => {
      if (typeof v === 'number') return isNaN(v) ? 0 : v;
      if (!v) return 0;
      const num = parseFloat(String(v).replace(/,/g, '').trim());
      return isNaN(num) ? 0 : num;
    };

    const termFee = parse(student.termFee);

    const allStudentPayments = this.getPayments({ studentId });
    let termPaid = 0;
    let arrearsPaid = 0;

    allStudentPayments.forEach(p => {
      const b = this.getPaymentBreakdown(p);
      termPaid += b.termFeePaid;
      arrearsPaid += b.arrearsRecovered;
    });

    termPaid = Math.round(termPaid * 100) / 100;
    arrearsPaid = Math.round(arrearsPaid * 100) / 100;

    const openingArrears = (student.openingArrears !== undefined && student.openingArrears !== null)
      ? parse(student.openingArrears)
      : Math.round((parse(student.arrears) + arrearsPaid) * 100) / 100;

    const arrearsBalance = Math.max(0, Math.round((openingArrears - arrearsPaid) * 100) / 100);
    const termFeeBalance = Math.max(0, Math.round((termFee - termPaid) * 100) / 100);
    const totalOutstanding = Math.max(0, Math.round((arrearsBalance + termFeeBalance) * 100) / 100);
    const totalPaidAll = allStudentPayments.reduce((sum, p) => sum + parse(p.amount), 0);

    return {
      studentId: student.id,
      name: `${student.firstName} ${student.lastName}`,
      class: student.currentClass,
      termFeeExpected: termFee,
      termFeePaid: termPaid,
      termFeeBalance: termFeeBalance,
      openingArrears: openingArrears,
      arrearsBalance: arrearsBalance,
      arrearsPaid: arrearsPaid,
      totalOutstanding: totalOutstanding,
      totalPaidAll: totalPaidAll
    };
  }

  // ── Automatic Deduplication & Balance Reconciliation ────────────────────
  static _cleanAndRebalance(db) {
    if (!db || !Array.isArray(db.payments)) return;
    let changed = false;

    // 1. Purge duplicate payment records
    const dupRes = this.cleanDuplicatePayments(db);
    if (dupRes && dupRes.removedCount > 0) changed = true;

    // 2. Rebalance all student balances and payment breakdown allocations
    this.recalculateAllStudentBalances(db);

    if (changed) {
      localStorage.setItem(this.KEY, JSON.stringify(db));
    }
  }

  static cleanDuplicatePayments(db = null) {
    const isLocal = !db;
    db = db || this.get();
    if (!Array.isArray(db.payments) || db.payments.length <= 1) return { removedCount: 0, removedAmount: 0 };

    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.payments) db._deleted.payments = [];

    const valid = [];
    const seenIds = new Set();
    const seenReceipts = new Set();
    const purgedIds = [];
    let removedAmount = 0;

    // Sort ascending by timestamp to keep the earliest original payment and prune subsequent duplicates
    const sorted = [...db.payments].sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));

    for (const p of sorted) {
      if (!p || !p.id) continue;

      // 1. Check duplicate ID
      if (seenIds.has(p.id)) {
        purgedIds.push(p.id);
        removedAmount += Number(p.amount) || 0;
        continue;
      }

      // 2. Check duplicate Receipt No
      if (p.receiptNo && seenReceipts.has(p.receiptNo)) {
        purgedIds.push(p.id);
        removedAmount += Number(p.amount) || 0;
        continue;
      }

      // 3. Check duplicate rapid submission (same student, same amount, same date, same category within 60s)
      const isRapidDuplicate = valid.some(existing => {
        if (existing.studentId !== p.studentId) return false;
        if (Number(existing.amount) !== Number(p.amount)) return false;
        if (existing.date !== p.date) return false;
        if (existing.category !== p.category) return false;
        const timeDiff = Math.abs((Number(p.timestamp) || 0) - (Number(existing.timestamp) || 0));
        return timeDiff < 60000;
      });

      if (isRapidDuplicate) {
        purgedIds.push(p.id);
        removedAmount += Number(p.amount) || 0;
        continue;
      }

      seenIds.add(p.id);
      if (p.receiptNo) seenReceipts.add(p.receiptNo);
      valid.push(p);
    }

    if (purgedIds.length > 0) {
      db.payments = valid.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
      purgedIds.forEach(id => {
        if (!db._deleted.payments.includes(id)) db._deleted.payments.push(id);
      });

      const log = this._buildLog("DUPLICATE_PAYMENTS_PURGED",
        `Purged ${purgedIds.length} duplicate payment record(s) totaling ₦${removedAmount.toLocaleString(undefined, {minimumFractionDigits:2})}`
      );
      if (!db.auditLogs) db.auditLogs = [];
      db.auditLogs.unshift(log);

      if (isLocal) {
        this.save(db);
        if (window.RichVineFirebase) {
          purgedIds.forEach(id => window.RichVineFirebase.deletePayment && window.RichVineFirebase.deletePayment(id));
          window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
        }
      }
    }

    return { removedCount: purgedIds.length, removedAmount };
  }

  static recalculateAllStudentBalances(db = null) {
    const isLocal = !db;
    db = db || this.get();
    if (!db || !Array.isArray(db.students)) return;
    const allPayments = Array.isArray(db.payments) ? db.payments : [];

    db.students.forEach(student => {
      // Find all payments for this student, sorted chronologically
      const studentPayments = allPayments
        .filter(p => p.studentId === student.id)
        .sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));

      // Calculate opening arrears:
      let previouslyDeductedTotal = 0;
      studentPayments.forEach(p => {
        previouslyDeductedTotal += Number(p.arrearsDeducted) || 0;
      });

      let openingArrears = 0;
      if (student.openingArrears !== undefined && student.openingArrears !== null) {
        openingArrears = Number(student.openingArrears) || 0;
      } else {
        openingArrears = Math.round(((Number(student.arrears) || 0) + previouslyDeductedTotal) * 100) / 100;
        student.openingArrears = openingArrears;
      }

      let remainingArrears = openingArrears;

      // Replay payments in order to allocate arrearsDeducted and termFeePaid
      studentPayments.forEach(p => {
        const totalAmount = Number(p.amount) || 0;
        let tuitionAmount = 0;
        let otherFees = 0;

        if (Array.isArray(p.items) && p.items.length > 0) {
          p.items.forEach(it => {
            const itAmt = Number(it.amount) || 0;
            if (this.isTuitionCategory(it.category, it.categoryName)) {
              tuitionAmount += itAmt;
            } else {
              otherFees += itAmt;
            }
          });
        } else if (this.isTuitionCategory(p.category, p.categoryName)) {
          tuitionAmount = totalAmount;
        } else {
          otherFees = totalAmount;
        }

        tuitionAmount = Math.round(tuitionAmount * 100) / 100;
        otherFees = Math.round(otherFees * 100) / 100;

        let arrearsDeducted = 0;
        let termFeePaid = 0;

        if (tuitionAmount > 0) {
          if (remainingArrears > 0) {
            arrearsDeducted = Math.min(remainingArrears, tuitionAmount);
            remainingArrears = Math.round((remainingArrears - arrearsDeducted) * 100) / 100;
            termFeePaid = Math.round((tuitionAmount - arrearsDeducted) * 100) / 100;
          } else {
            arrearsDeducted = 0;
            termFeePaid = tuitionAmount;
          }
        }

        p.arrearsDeducted = Math.round(arrearsDeducted * 100) / 100;
        p.termFeePaid = Math.round(termFeePaid * 100) / 100;
        p.otherFeesPaid = Math.round(otherFees * 100) / 100;
      });

      // Update student's current arrears balance
      student.arrears = Math.max(0, Math.round(remainingArrears * 100) / 100);
    });

    if (isLocal) {
      this.save(db);
    }
  }

  // ── Students ────────────────────────────────────────────────────────────
  static getStudents(filter = {}) {
    const db = this.get();
    let students = [...db.students];
    if (filter.class && filter.class !== "All") {
      students = students.filter(s => s.currentClass === filter.class);
    }
    if (filter.section && filter.section !== "All") {
      students = students.filter(s => s.section === filter.section);
    }
    if (filter.status) {
      students = students.filter(s => s.status === filter.status);
    }
    return students;
  }

  static getStudentById(id) {
    return this.get().students.find(s => s.id === id) || null;
  }

  static addStudent(student) {
    const db = this.get();
    const year = 2026;
    let maxNum = 0;
    (db.students || []).forEach(s => {
      const match = s.regNo && String(s.regNo).match(/\/(\d+)$/);
      if (match) {
        const val = parseInt(match[1], 10);
        if (val > maxNum) maxNum = val;
      }
    });
    const nextNum = Math.max((db.students || []).length + 1, maxNum + 1);
    const numStr = String(nextNum).padStart(3, "0");
    student.id = student.id || `RVC-${year}-${numStr}-${Date.now().toString(36)}`;
    student.regNo = student.regNo || `RVC/${year}/${numStr}`;
    student.section = getSectionByClass(student.currentClass)?.id || "junior";
    student.termFee = Number(student.termFee) || 0;
    student.openingArrears = Number(student.arrears) || 0;
    student.arrears = student.openingArrears;
    student.dob = student.dob || "";
    student.parentName = student.parentName || "";
    student.parentPhone = student.parentPhone || "";
    student.parentEmail = student.parentEmail || "";
    student.address = student.address || "";
    student.gender = student.gender || "Male";
    student.status = student.status || "Active";
    const initialPaid = Number(student.initialPaid) || 0;
    const initialPaymentDate = student.initialPaymentDate || student.enrolledDate || new Date().toISOString().split("T")[0];
    delete student.initialPaid; // Do not store transient enrollment field on student doc
    delete student.initialPaymentDate;
    student.enrolledDate = student.enrolledDate || new Date().toISOString().split("T")[0];

    student._pendingUpload = true;
    db.students.unshift(student);

    const log = this._buildLog("STUDENT_ENROLLED",
      `Enrolled ${student.firstName} ${student.lastName} into ${student.currentClass} | Term Fee: ₦${student.termFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` +
      (student.arrears > 0 ? ` | Opening Arrears: ₦${student.arrears.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : "") +
      (initialPaid > 0 ? ` | Initial School Fee Paid: ₦${initialPaid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} [Paid on ${initialPaymentDate}]` : "")
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveStudent(student);
      window.RichVineFirebase.saveLog(log);
    }

    // Automatically create the initial payment transaction if initialPaid > 0
    if (initialPaid > 0) {
      this.addPayment({
        studentId: student.id,
        studentName: `${student.firstName} ${student.lastName}`,
        studentClass: student.currentClass,
        category: "school_fees",
        categoryName: "School Fees / Tuition",
        amount: initialPaid,
        paymentMethod: "Bank Transfer",
        reference: `ENROLL-${student.regNo.replace(/[^A-Za-z0-9]/g, "")}`,
        session: db.config.currentSession || "2026/2027",
        term: db.config.currentTerm || "1st Term",
        date: initialPaymentDate,
        status: "Confirmed",
        details: { description: `Initial school fee payment recorded at enrollment (Backdated payment: ${initialPaymentDate})` }
      });
    }

    return student;
  }

  static updateStudent(id, fields) {
    const db = this.get();
    const idx = db.students.findIndex(s => s.id === id);
    if (idx === -1) return null;
    const prev = db.students[idx];
    db.students[idx] = { ...prev, ...fields };
    if (fields.currentClass) {
      db.students[idx].section = getSectionByClass(fields.currentClass)?.id || prev.section;
    }
    if (fields.hasOwnProperty("arrears") || fields.hasOwnProperty("openingArrears")) {
      const arrVal = Number(fields.openingArrears !== undefined ? fields.openingArrears : fields.arrears) || 0;
      db.students[idx].openingArrears = arrVal;
      db.students[idx].arrears = arrVal;
    }
    if (fields.hasOwnProperty("termFee")) {
      db.students[idx].termFee = Number(fields.termFee) || 0;
    }
    this.recalculateAllStudentBalances(db);
    const log = this._buildLog("STUDENT_UPDATED",
      `Updated record for ${db.students[idx].firstName} ${db.students[idx].lastName}`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveStudent(db.students[idx]);
      window.RichVineFirebase.saveLog(log);
    }
    return db.students[idx];
  }

  static deleteStudent(id) {
    const db = this.get();
    const student = db.students.find(s => s.id === id);
    if (!student) return false;

    // Ensure _deleted tracking object exists
    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.students) db._deleted.students = [];
    if (!db._deleted.payments) db._deleted.payments = [];

    const studentFullName = `${student.firstName} ${student.lastName}`.trim().toLowerCase();
    const regNo = (student.regNo || "").trim().toLowerCase();

    // Gather and remove ALL payments belonging to this student (by id, by studentName, or by regNo)
    const studentPayments = (db.payments || []).filter(p =>
      p.studentId === id ||
      (p.studentName && p.studentName.trim().toLowerCase() === studentFullName) ||
      (regNo && p.studentRegNo && p.studentRegNo.trim().toLowerCase() === regNo) ||
      (regNo && p.receiptNo && p.receiptNo.toLowerCase().includes(regNo))
    );
    const deletedPaymentIds = studentPayments.map(p => p.id);
    const deletedRevenue = studentPayments.reduce((s, p) => s + Number(p.amount), 0);

    // Remove payments locally
    db.payments = (db.payments || []).filter(p => !deletedPaymentIds.includes(p.id) && p.studentId !== id);

    // Track deleted payment IDs so syncWithCloud can purge them from Firestore
    deletedPaymentIds.forEach(pId => {
      if (!db._deleted.payments.includes(pId)) db._deleted.payments.push(pId);
    });
    if (!db._deleted.students.includes(id)) db._deleted.students.push(id);

    // Remove student locally
    db.students = (db.students || []).filter(s => s.id !== id);

    // Purge any past audit logs that reference this deleted student
    if (db.auditLogs && Array.isArray(db.auditLogs)) {
      db.auditLogs = db.auditLogs.filter(log => {
        const text = (log.details || "").toLowerCase();
        const mentionsName = studentFullName && text.includes(studentFullName);
        const mentionsReg = regNo && text.includes(regNo);
        const mentionsId = text.includes(id.toLowerCase());
        return !(mentionsName || mentionsReg || mentionsId);
      });
    }

    const revenueNote = deletedRevenue > 0
      ? ` | ${deletedPaymentIds.length} payment(s) purged — ₦${deletedRevenue.toLocaleString(undefined, {minimumFractionDigits:2})} deducted from revenue`
      : '';

    const log = this._buildLog("STUDENT_DELETED",
      `Deleted learner (error correction): ${student.firstName} ${student.lastName} (${student.regNo})${revenueNote}`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      // Delete student from cloud
      window.RichVineFirebase.deleteStudent(id);
      // Delete each payment from cloud
      for (const pId of deletedPaymentIds) {
        window.RichVineFirebase.deletePayment(pId);
      }
      window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  // ── Payments ────────────────────────────────────────────────────────────
  static getPayments(filter = {}) {
    const db = this.get();
    const validStudentIds = new Set((db.students || []).map(s => s.id));
    // Strict isolation: never return payments for students that were deleted
    let payments = (db.payments || []).filter(p => p.studentId && validStudentIds.has(p.studentId));
    if (filter.studentId) payments = payments.filter(p => p.studentId === filter.studentId);
    if (filter.class && filter.class !== "All") payments = payments.filter(p => p.studentClass === filter.class);
    if (filter.section && filter.section !== "All") {
      payments = payments.filter(p => p.section === filter.section || (typeof getSectionByClass === "function" && getSectionByClass(p.studentClass)?.id === filter.section));
    }
    if (filter.category && filter.category !== "All") {
      payments = payments.filter(p =>
        p.category === filter.category ||
        (Array.isArray(p.items) && p.items.some(it => it.category === filter.category))
      );
    }
    if (filter.session && filter.session !== "All") payments = payments.filter(p => p.session === filter.session);
    if (filter.term && filter.term !== "All") payments = payments.filter(p => p.term === filter.term);
    if (filter.startDate) payments = payments.filter(p => p.date >= filter.startDate);
    if (filter.endDate) payments = payments.filter(p => p.date <= filter.endDate);
    return payments.sort((a, b) => b.timestamp - a.timestamp);
  }

  static deletePayment(id) {
    const db = this.get();
    const idx = (db.payments || []).findIndex(p => p.id === id);
    if (idx === -1) return false;
    const payment = db.payments[idx];
    const studentId = payment.studentId;

    db.payments.splice(idx, 1);

    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.payments) db._deleted.payments = [];
    if (!db._deleted.payments.includes(id)) db._deleted.payments.push(id);

    // Rebalance all student balances and restore arrears cleanly
    this.recalculateAllStudentBalances(db);
    const updatedStudent = (db.students || []).find(s => s.id === studentId);

    const log = this._buildLog("PAYMENT_DELETED",
      `Deleted payment record ${payment.receiptNo} for ${payment.studentName}: ₦${Number(payment.amount).toLocaleString(undefined, {minimumFractionDigits:2})} (${payment.categoryName})`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.deletePayment(id);
      if (updatedStudent) window.RichVineFirebase.saveStudent(updatedStudent);
      window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  static addPayment(payment) {
    const db = this.get();

    // Accidental double-submission guard: block identical payment submitted within 20s
    const isDup = (db.payments || []).find(p =>
      p.studentId === payment.studentId &&
      Number(p.amount) === Number(payment.amount) &&
      p.date === payment.date &&
      p.category === payment.category &&
      Math.abs(Date.now() - (Number(p.timestamp) || 0)) < 20000
    );
    if (isDup) {
      console.warn("Blocked duplicate payment submission:", payment);
      return isDup;
    }

    const year = 2026;
    payment.id = payment.id || ("PAY-" + Date.now() + "-" + Math.floor(Math.random() * 1000));
    let maxReceipt = 0;
    (db.payments || []).forEach(p => {
      const match = p.receiptNo && String(p.receiptNo).match(/\/(\d+)$/);
      if (match) {
        const val = parseInt(match[1], 10);
        if (val > maxReceipt) maxReceipt = val;
      }
    });
    const nextReceipt = Math.max((db.payments || []).length + 1, maxReceipt + 1);
    payment.receiptNo = payment.receiptNo || `RVCPAY/${year}/${String(nextReceipt).padStart(4, "0")}`;
    payment.timestamp = payment.timestamp || Date.now();
    payment.session = payment.session || "2026/2027";
    payment.recordedBy = sessionStorage.getItem("richvine_admin_username") || "Super Admin";
    payment.section = getSectionByClass(payment.studentClass)?.id || "junior";

    // ── Multi-item handling & validation ───────────────────────────────
    if (Array.isArray(payment.items) && payment.items.length > 0) {
      payment.items = payment.items.map(it => ({
        category: it.category || "misc_1",
        categoryName: it.categoryName || "Miscellaneous",
        description: (it.description || "").trim(),
        amount: Number(it.amount) || 0,
        details: it.details || {}
      }));
      payment.itemCount = payment.items.length;
      payment.amount = Math.round(payment.items.reduce((sum, it) => sum + it.amount, 0) * 100) / 100;

      if (payment.items.length === 1) {
        payment.category = payment.items[0].category;
        payment.categoryName = payment.items[0].categoryName;
        payment.description = payment.items[0].description || payment.description || payment.items[0].categoryName;
      } else {
        payment.category = "multi";
        const distinctCats = [...new Set(payment.items.map(it => it.categoryName))];
        payment.categoryName = distinctCats.join(", ");
        payment.description = payment.description || payment.items.map(it =>
          `${it.categoryName}${it.description ? ' (' + it.description + ')' : ''}: ₦${Number(it.amount).toLocaleString(undefined, {minimumFractionDigits:2})}`
        ).join("; ");
      }
    } else {
      payment.amount = Number(payment.amount) || 0;
      payment.description = (payment.description || payment.details?.description || "").trim();
      payment.items = [{
        category: payment.category,
        categoryName: payment.categoryName,
        description: payment.description,
        amount: payment.amount,
        details: payment.details || {}
      }];
      payment.itemCount = 1;
    }

    const paymentAmount = Number(payment.amount);

    // ── STRICT ARREARS-FIRST DEDUCTION ALGORITHM ────────────────────────
    let tuitionAmount = 0;
    if (payment.items && payment.items.length) {
      tuitionAmount = payment.items.filter(it => this.isTuitionCategory(it.category, it.categoryName))
        .reduce((sum, it) => sum + Number(it.amount), 0);
    } else if (this.isTuitionCategory(payment.category, payment.categoryName)) {
      tuitionAmount = paymentAmount;
    }

    let arrearsDeducted = 0;
    let termFeePaid = 0;

    if (tuitionAmount > 0) {
      const studentIdx = db.students.findIndex(s => s.id === payment.studentId);
      if (studentIdx !== -1) {
        const currentArrears = Number(db.students[studentIdx].arrears) || 0;
        if (currentArrears > 0) {
          arrearsDeducted = Math.min(currentArrears, tuitionAmount);
          termFeePaid = Math.round((tuitionAmount - arrearsDeducted) * 100) / 100;
          db.students[studentIdx].arrears = Math.round((currentArrears - arrearsDeducted) * 100) / 100;
        } else {
          arrearsDeducted = 0;
          termFeePaid = tuitionAmount;
        }
        if (window.RichVineFirebase) {
          window.RichVineFirebase.saveStudent(db.students[studentIdx]);
        }
      } else {
        termFeePaid = tuitionAmount;
      }
    } else {
      arrearsDeducted = 0;
      termFeePaid = 0;
    }

    payment.arrearsDeducted = Math.round(arrearsDeducted * 100) / 100;
    payment.termFeePaid = Math.round(termFeePaid * 100) / 100;
    payment.otherFeesPaid = Math.max(0, Math.round((paymentAmount - arrearsDeducted - termFeePaid) * 100) / 100);

    payment._pendingUpload = true;
    db.payments.unshift(payment);
    this.recalculateAllStudentBalances(db);
    const updatedStudent = (db.students || []).find(s => s.id === payment.studentId);

    const arrearsNote = arrearsDeducted > 0 ? ` [Arrears cleared: ₦${arrearsDeducted.toLocaleString(undefined, {minimumFractionDigits:2})}, Term Fee: ₦${termFeePaid.toLocaleString(undefined, {minimumFractionDigits:2})}]` : "";
    const otherNote = payment.otherFeesPaid > 0 ? ` [Other fees: ₦${payment.otherFeesPaid.toLocaleString(undefined, {minimumFractionDigits:2})}]` : "";
    const log = this._buildLog("PAYMENT_RECORDED",
      `Payment of ₦${paymentAmount.toLocaleString(undefined, {minimumFractionDigits:2})} (${payment.categoryName}) for ${payment.studentName} [${payment.studentClass}]${arrearsNote}${otherNote}`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.savePayment(payment);
      if (updatedStudent) window.RichVineFirebase.saveStudent(updatedStudent);
      window.RichVineFirebase.saveLog(log);
    }
    return payment;
  }

  static updatePayment(id, fields) {
    const db = this.get();
    const idx = db.payments.findIndex(p => p.id === id);
    if (idx === -1) return null;
    const prev = db.payments[idx];

    // Allow editing: amount, category, categoryName, paymentMethod, date, reference, details, term, description, items
    const allowed = ['amount', 'categoryName', 'category', 'paymentMethod', 'date', 'reference', 'details', 'term', 'description', 'items'];
    allowed.forEach(key => {
      if (fields.hasOwnProperty(key)) prev[key] = fields[key];
    });
    // Ensure amount is always a Number (prevents string concat in revenue sums)
    if (fields.hasOwnProperty('amount')) prev.amount = Number(fields.amount);

    // Recalculate breakdown & arrears deduction
    const studentIdx = db.students.findIndex(s => s.id === prev.studentId);
    const isTuition = this.isTuitionCategory(prev.category, prev.categoryName);
    if (studentIdx !== -1) {
      // First restore previously deducted arrears
      const oldArrears = Number(db.students[studentIdx].arrears) || 0;
      const restoredArrears = Math.round((oldArrears + Number(prev.arrearsDeducted || 0)) * 100) / 100;
      db.students[studentIdx].arrears = restoredArrears;

      let tuitionAmount = 0;
      if (Array.isArray(prev.items) && prev.items.length) {
        tuitionAmount = prev.items.filter(it => this.isTuitionCategory(it.category, it.categoryName))
          .reduce((sum, it) => sum + Number(it.amount), 0);
      } else if (isTuition) {
        tuitionAmount = Number(prev.amount) || 0;
      }

      let newArrearsDeducted = 0;
      let newTermFeePaid = 0;
      if (tuitionAmount > 0) {
        newArrearsDeducted = Math.min(restoredArrears, tuitionAmount);
        newTermFeePaid = Math.round((tuitionAmount - newArrearsDeducted) * 100) / 100;
        db.students[studentIdx].arrears = Math.round((restoredArrears - newArrearsDeducted) * 100) / 100;
      }
      prev.arrearsDeducted = Math.round(newArrearsDeducted * 100) / 100;
      prev.termFeePaid = Math.round(newTermFeePaid * 100) / 100;
      prev.otherFeesPaid = Math.max(0, Math.round(((Number(prev.amount) || 0) - newArrearsDeducted - newTermFeePaid) * 100) / 100);

      if (window.RichVineFirebase) window.RichVineFirebase.saveStudent(db.students[studentIdx]);
    } else {
      const b = this.getPaymentBreakdown(prev);
      prev.arrearsDeducted = b.arrearsRecovered;
      prev.termFeePaid = b.termFeePaid;
      prev.otherFeesPaid = b.otherFeesPaid;
    }

    prev.updatedAt = new Date().toISOString();
    db.payments[idx] = prev;
    this.recalculateAllStudentBalances(db);
    const updatedStudent = (db.students || []).find(s => s.id === prev.studentId);

    const log = this._buildLog('PAYMENT_UPDATED',
      `Corrected payment ${prev.receiptNo} for ${prev.studentName}: ₦${Number(prev.amount).toLocaleString(undefined,{minimumFractionDigits:2})} (${prev.categoryName})`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.savePayment(prev);
      if (updatedStudent) window.RichVineFirebase.saveStudent(updatedStudent);
      window.RichVineFirebase.saveLog(log);
    }
    return prev;
  }

  // ── Expenses ────────────────────────────────────────────────────────────
  static getExpenses(filter = {}) {
    const db = this.get();
    let expenses = [...(db.expenses || [])];
    if (filter.period && filter.period !== "All") expenses = expenses.filter(e => e.period === filter.period);
    if (filter.category && filter.category !== "All") expenses = expenses.filter(e => e.category === filter.category);
    if (filter.section && filter.section !== "All") {
      expenses = expenses.filter(e => (e.section || "general") === filter.section || e.account === filter.section);
    }
    if (filter.session && filter.session !== "All") expenses = expenses.filter(e => e.session === filter.session);
    if (filter.term && filter.term !== "All") expenses = expenses.filter(e => e.term === filter.term);
    if (filter.startDate) expenses = expenses.filter(e => e.date >= filter.startDate);
    if (filter.endDate) expenses = expenses.filter(e => e.date <= filter.endDate);
    return expenses.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  static addExpenses(expensesList) {
    if (!Array.isArray(expensesList) || !expensesList.length) return [];
    const db = this.get();
    if (!db.expenses) db.expenses = [];
    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.expenses) db._deleted.expenses = [];

    const session = db.config?.currentSession || "2026/2027";
    const recordedBy = sessionStorage.getItem("richvine_admin_username") || "Super Admin";

    const accountsMap = {
      general: "General / Central Account",
      primary: "Primary School Account",
      junior: "Junior College Account",
      senior: "Senior College Account"
    };

    const now = Date.now();
    const savedExpenses = [];

    expensesList.forEach((expense, idx) => {
      // Always generate a fresh unique ID — never reuse, avoid any millisecond collisions
      expense.id = `EXP-${now}-${idx}-${Math.floor(Math.random() * 9999999)}`;
      expense.timestamp = now + idx;
      expense.session = expense.session || session;
      expense.recordedBy = expense.recordedBy || recordedBy;
      expense.section = expense.section || "general";
      expense.account = expense.section;
      expense.accountName = expense.accountName || accountsMap[expense.section] || "General / Central Account";
      expense.amount = Math.round((Number(expense.amount) || 0) * 100) / 100;
      if (!expense.date) {
        expense.date = new Date().toISOString().split("T")[0];
      }
      
      db.expenses.unshift(expense);
      savedExpenses.push(expense);
    });

    // Ensure db.expenses is fully deduplicated by id
    const seen = new Set();
    db.expenses = db.expenses.filter(e => {
      if (!e || !e.id || seen.has(e.id)) return false;
      seen.add(e.id);
      return true;
    });

    const total = Math.round(savedExpenses.reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;
    const summary = savedExpenses.length === 1
      ? `${savedExpenses[0].description} — ₦${savedExpenses[0].amount.toLocaleString(undefined, {minimumFractionDigits:2})} (${savedExpenses[0].accountName})`
      : `${savedExpenses.length} expenses totalling ₦${total.toLocaleString(undefined, {minimumFractionDigits:2})}`;

    const log = this._buildLog("EXPENSE_LOGGED", `Logged expense: ${summary}`);
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      if (window.RichVineFirebase.saveExpenses) {
        window.RichVineFirebase.saveExpenses(savedExpenses);
      } else {
        savedExpenses.forEach(expense => {
          window.RichVineFirebase.saveExpense && window.RichVineFirebase.saveExpense(expense);
        });
      }
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return savedExpenses;
  }

  static addExpense(expense) {
    return this.addExpenses([expense])[0];
  }

  static updateExpense(id, fields) {
    const db = this.get();
    if (!db.expenses) db.expenses = [];
    const idx = db.expenses.findIndex(e => e.id === id);
    if (idx === -1) return null;
    const prev = db.expenses[idx];

    const accountsMap = {
      general: "General / Central Account",
      primary: "Primary School Account",
      junior: "Junior College Account",
      senior: "Senior College Account"
    };

    const allowed = ['description', 'category', 'amount', 'period', 'section', 'date', 'term', 'paymentMethod', 'notes'];
    allowed.forEach(key => {
      if (fields.hasOwnProperty(key)) {
        if (key === 'amount') {
          prev[key] = Math.round((Number(fields[key]) || 0) * 100) / 100;
        } else {
          prev[key] = fields[key];
        }
      }
    });

    if (fields.section) {
      prev.section = fields.section;
      prev.account = fields.section;
      prev.accountName = accountsMap[fields.section] || "General / Central Account";
    }

    prev.updatedAt = new Date().toISOString();
    db.expenses[idx] = prev;

    const log = this._buildLog("EXPENSE_UPDATED",
      `Corrected expense ${prev.id}: ${prev.description} — ₦${Number(prev.amount).toLocaleString(undefined, {minimumFractionDigits:2})} (${prev.category})`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveExpense && window.RichVineFirebase.saveExpense(prev);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return prev;
  }

  static deleteExpense(id) {
    const db = this.get();
    const exp = (db.expenses || []).find(e => e.id === id);
    if (!exp) return false;
    db.expenses = db.expenses.filter(e => e.id !== id);

    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.expenses) db._deleted.expenses = [];
    if (!db._deleted.expenses.includes(id)) db._deleted.expenses.push(id);

    const log = this._buildLog("EXPENSE_DELETED",
      `Deleted expense: ${exp.description} — ₦${Number(exp.amount).toLocaleString(undefined, {minimumFractionDigits:2})} (${exp.accountName || exp.section || 'General'})`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.deleteExpense && window.RichVineFirebase.deleteExpense(id);
      window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  // ── Stocks ──────────────────────────────────────────────────────────────

  static getStocks(filter = {}) {
    const db = this.get();
    let items = [...(db.stocks || [])];
    if (filter.category && filter.category !== 'All') items = items.filter(s => s.category === filter.category);
    if (filter.status && filter.status !== 'All') items = items.filter(s => s.status === filter.status);
    return items.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  static getStockById(id) {
    const db = this.get();
    return (db.stocks || []).find(s => s.id === id) || null;
  }

  // Recompute quantityLeft from opening + restocks - sales
  static recalculateStockQuantities(db = null) {
    if (!db) db = this.get();
    const stocks = db.stocks || [];
    const restocks = db.stockRestocks || [];
    const sales = db.stockSales || [];
    stocks.forEach(item => {
      const totalRestocked = restocks.filter(r => r.stockId === item.id).reduce((s, r) => s + (Number(r.quantity) || 0), 0);
      const totalSold = sales.filter(s => s.stockId === item.id).reduce((s, sl) => s + (Number(sl.quantity) || 0), 0);
      item.totalReceived = (Number(item.openingQty) || 0) + totalRestocked;
      item.quantityRestocked = totalRestocked;
      item.quantitySold = totalSold;
      item.quantityLeft = Math.max(0, item.totalReceived - totalSold);
      item.lowStockThreshold = Math.ceil(item.totalReceived * 0.2);
      if (item.quantityLeft === 0) {
        item.stockStatus = 'out_of_stock';
      } else if (item.quantityLeft <= item.lowStockThreshold) {
        item.stockStatus = 'low_stock';
      } else {
        item.stockStatus = 'in_stock';
      }
    });
    return db;
  }

  static addStockItem(fields) {
    const db = this.get();
    if (!db.stocks) db.stocks = [];
    const now = Date.now();
    const recordedBy = sessionStorage.getItem('richvine_admin_username') || 'Admin';
    const openingQty = Math.max(0, Math.round(Number(fields.openingQty) || 0));
    const item = {
      id: `STK-${now}-${Math.floor(Math.random() * 999999)}`,
      name: String(fields.name || '').trim(),
      description: String(fields.description || '').trim(),
      category: String(fields.category || 'Others'),
      unit: String(fields.unit || 'piece'),
      costPrice: Math.round((Number(fields.costPrice) || 0) * 100) / 100,
      sellingPrice: Math.round((Number(fields.sellingPrice) || 0) * 100) / 100,
      openingQty: openingQty,
      totalReceived: openingQty,
      quantityRestocked: 0,
      quantitySold: 0,
      quantityLeft: openingQty,
      lowStockThreshold: Math.ceil(openingQty * 0.2),
      status: fields.status || 'active',
      stockStatus: openingQty === 0 ? 'out_of_stock' : (openingQty <= Math.ceil(openingQty * 0.2) ? 'low_stock' : 'in_stock'),
      session: db.config?.currentSession || '2026/2027',
      term: fields.term || db.config?.currentTerm || '1st Term',
      recordedBy,
      timestamp: now,
      updatedAt: new Date().toISOString()
    };
    db.stocks.unshift(item);
    this.recalculateStockQuantities(db);
    const log = this._buildLog('STOCK_ADDED', `Added stock item: ${item.name} — ${item.openingQty} ${item.unit}(s) @ ₦${item.sellingPrice.toLocaleString(undefined, {minimumFractionDigits:2})} each`);
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveStockItem && window.RichVineFirebase.saveStockItem(item);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return item;
  }

  static updateStockItem(id, fields) {
    const db = this.get();
    if (!db.stocks) db.stocks = [];
    const idx = db.stocks.findIndex(s => s.id === id);
    if (idx === -1) return null;
    const item = db.stocks[idx];
    const allowed = ['name', 'description', 'category', 'unit', 'costPrice', 'sellingPrice', 'openingQty', 'status'];
    allowed.forEach(key => {
      if (fields.hasOwnProperty(key)) {
        if (key === 'costPrice' || key === 'sellingPrice') {
          item[key] = Math.round((Number(fields[key]) || 0) * 100) / 100;
        } else if (key === 'openingQty') {
          item[key] = Math.max(0, Math.round(Number(fields[key]) || 0));
        } else {
          item[key] = fields[key];
        }
      }
    });
    item.updatedAt = new Date().toISOString();
    db.stocks[idx] = item;
    this.recalculateStockQuantities(db);
    const log = this._buildLog('STOCK_UPDATED', `Updated stock item: ${item.name} — selling price ₦${item.sellingPrice.toLocaleString(undefined,{minimumFractionDigits:2})}`);
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveStockItem && window.RichVineFirebase.saveStockItem(item);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return item;
  }

  static deleteStockItem(id) {
    const db = this.get();
    const item = (db.stocks || []).find(s => s.id === id);
    if (!item) return false;
    db.stocks = db.stocks.filter(s => s.id !== id);
    db.stockSales = (db.stockSales || []).filter(s => s.stockId !== id);
    db.stockRestocks = (db.stockRestocks || []).filter(r => r.stockId !== id);
    if (!db._deleted) db._deleted = {};
    if (!db._deleted.stocks) db._deleted.stocks = [];
    if (!db._deleted.stocks.includes(id)) db._deleted.stocks.push(id);
    const log = this._buildLog('STOCK_DELETED', `Deleted stock item: ${item.name}`);
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.deleteStockItem && window.RichVineFirebase.deleteStockItem(id);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  static recordStockSale(fields) {
    const db = this.get();
    if (!db.stockSales) db.stockSales = [];
    const item = (db.stocks || []).find(s => s.id === fields.stockId);
    if (!item) return { error: 'Stock item not found' };
    const qty = Math.max(1, Math.round(Number(fields.quantity) || 1));
    if (item.quantityLeft < qty) return { error: `Insufficient stock. Only ${item.quantityLeft} ${item.unit}(s) left.` };
    const now = Date.now();
    const recordedBy = sessionStorage.getItem('richvine_admin_username') || 'Admin';
    const costPrice = Number(fields.costPrice !== undefined ? fields.costPrice : item.costPrice) || 0;
    const sellingPrice = Number(fields.sellingPrice !== undefined ? fields.sellingPrice : item.sellingPrice) || 0;
    const totalCost = Math.round(costPrice * qty * 100) / 100;
    const totalRevenue = Math.round(sellingPrice * qty * 100) / 100;
    const sale = {
      id: `STKSALE-${now}-${Math.floor(Math.random() * 999999)}`,
      stockId: item.id,
      stockName: item.name,
      stockCategory: item.category,
      unit: item.unit,
      studentId: fields.studentId || '',
      studentName: fields.studentName || 'Walk-in Customer',
      studentClass: fields.studentClass || '',
      quantity: qty,
      costPrice: Math.round(costPrice * 100) / 100,
      sellingPrice: Math.round(sellingPrice * 100) / 100,
      totalCost,
      totalRevenue,
      profit: Math.round((totalRevenue - totalCost) * 100) / 100,
      date: fields.date || new Date().toISOString().split('T')[0],
      term: fields.term || db.config?.currentTerm || '1st Term',
      session: db.config?.currentSession || '2026/2027',
      paymentMethod: fields.paymentMethod || 'Cash',
      notes: fields.notes || '',
      isPaymentLinked: Boolean(fields.isPaymentLinked),
      paymentId: fields.paymentId || '',
      recordedBy,
      timestamp: now
    };
    db.stockSales.unshift(sale);
    this.recalculateStockQuantities(db);
    const log = this._buildLog('STOCK_SALE', `Sold ${qty} ${item.unit}(s) of ${item.name} to ${sale.studentName} — Revenue: ₦${totalRevenue.toLocaleString(undefined,{minimumFractionDigits:2})}`);
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      const updatedItem = (db.stocks || []).find(s => s.id === item.id);
      window.RichVineFirebase.saveStockItem && updatedItem && window.RichVineFirebase.saveStockItem(updatedItem);
      window.RichVineFirebase.saveStockSale && window.RichVineFirebase.saveStockSale(sale);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return sale;
  }

  static restockItem(stockId, fields) {
    const db = this.get();
    if (!db.stockRestocks) db.stockRestocks = [];
    const item = (db.stocks || []).find(s => s.id === stockId);
    if (!item) return null;
    const now = Date.now();
    const recordedBy = sessionStorage.getItem('richvine_admin_username') || 'Admin';
    const qty = Math.max(1, Math.round(Number(fields.quantity) || 1));
    const costPrice = Math.round((Number(fields.costPrice) || Number(item.costPrice) || 0) * 100) / 100;
    const restock = {
      id: `STKRESTOCK-${now}-${Math.floor(Math.random() * 999999)}`,
      stockId: item.id,
      stockName: item.name,
      quantity: qty,
      costPrice,
      totalCost: Math.round(costPrice * qty * 100) / 100,
      date: fields.date || new Date().toISOString().split('T')[0],
      supplier: fields.supplier || '',
      invoiceNo: fields.invoiceNo || '',
      term: fields.term || db.config?.currentTerm || '1st Term',
      session: db.config?.currentSession || '2026/2027',
      notes: fields.notes || '',
      recordedBy,
      timestamp: now
    };
    if (fields.costPrice && Number(fields.costPrice) > 0) {
      item.costPrice = costPrice;
      item.updatedAt = new Date().toISOString();
    }
    db.stockRestocks.unshift(restock);
    this.recalculateStockQuantities(db);
    const log = this._buildLog('STOCK_RESTOCKED', `Restocked ${qty} ${item.unit}(s) of ${item.name} — Cost: ₦${restock.totalCost.toLocaleString(undefined,{minimumFractionDigits:2})}`);
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      const updatedItem = (db.stocks || []).find(s => s.id === stockId);
      window.RichVineFirebase.saveStockItem && updatedItem && window.RichVineFirebase.saveStockItem(updatedItem);
      window.RichVineFirebase.saveStockRestock && window.RichVineFirebase.saveStockRestock(restock);
      window.RichVineFirebase.saveLog && window.RichVineFirebase.saveLog(log);
    }
    return restock;
  }

  static getStockSales(filter = {}) {
    const db = this.get();
    let sales = [...(db.stockSales || [])];
    if (filter.stockId) sales = sales.filter(s => s.stockId === filter.stockId);
    if (filter.startDate) sales = sales.filter(s => s.date >= filter.startDate);
    if (filter.endDate) sales = sales.filter(s => s.date <= filter.endDate);
    return sales.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  static getStockRestocks(filter = {}) {
    const db = this.get();
    let restocks = [...(db.stockRestocks || [])];
    if (filter.stockId) restocks = restocks.filter(r => r.stockId === filter.stockId);
    if (filter.startDate) restocks = restocks.filter(r => r.date >= filter.startDate);
    if (filter.endDate) restocks = restocks.filter(r => r.date <= filter.endDate);
    return restocks.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  static getStockAlerts() {
    const db = this.get();
    this.recalculateStockQuantities(db);
    const items = db.stocks || [];
    return {
      outOfStock: items.filter(s => s.status === 'active' && s.quantityLeft === 0),
      lowStock: items.filter(s => s.status === 'active' && s.quantityLeft > 0 && s.quantityLeft <= s.lowStockThreshold)
    };
  }

  static getStockSummary(filter = {}) {
    const db = this.get();
    this.recalculateStockQuantities(db);
    const sales = this.getStockSales(filter);
    const restocks = this.getStockRestocks(filter);
    const items = db.stocks || [];
    const totalSaleRevenue = Math.round(sales.reduce((s, sl) => s + (Number(sl.totalRevenue) || 0), 0) * 100) / 100;
    const totalSaleCost = Math.round(sales.reduce((s, sl) => s + (Number(sl.totalCost) || 0), 0) * 100) / 100;
    const totalRestockCost = Math.round(restocks.reduce((s, r) => s + (Number(r.totalCost) || 0), 0) * 100) / 100;
    const totalStockValuation = Math.round(items.reduce((s, it) => s + ((Number(it.quantityLeft) || 0) * (Number(it.costPrice) || 0)), 0) * 100) / 100;
    return {
      totalItems: items.filter(s => s.status === 'active').length,
      totalSaleRevenue,
      totalSaleCost,
      totalRestockCost,
      totalStockValuation,
      grossProfit: Math.round((totalSaleRevenue - totalSaleCost) * 100) / 100,
      totalItemsSold: sales.reduce((s, sl) => s + (Number(sl.quantity) || 0), 0),
      outOfStockCount: items.filter(s => s.status === 'active' && s.quantityLeft === 0).length,
      lowStockCount: items.filter(s => s.status === 'active' && s.quantityLeft > 0 && s.quantityLeft <= s.lowStockThreshold).length
    };
  }

  // ── Financial Summary ───────────────────────────────────────────────────
  static getFinancialSummary(filter = {}) {
    const isSectionSpecific = filter.section && filter.section !== "All";

    // Overall base filters (filtered by timeframe/dates/session, ignoring section)
    const baseFilter = { ...filter };
    delete baseFilter.section;

    const allPayments = this.getPayments(baseFilter);
    const allExpenses = this.getExpenses(baseFilter);

    // Total School Revenue: payments + independent stock sales revenue
    const allStockSales = this.getStockSales(baseFilter);
    const allStockRestocks = this.getStockRestocks(baseFilter);
    const independentStockSales = allStockSales.filter(s => !s.isPaymentLinked);
    const stockSalesRevenue = Math.round(independentStockSales.reduce((s, sl) => s + (Number(sl.totalRevenue) || 0), 0) * 100) / 100;
    const stockRestockCost = Math.round(allStockRestocks.reduce((s, r) => s + (Number(r.totalCost) || 0), 0) * 100) / 100;

    const overallTotalRevenue  = Math.round((allPayments.reduce((s, p) => s + (Number(p.amount) || 0), 0) + stockSalesRevenue) * 100) / 100;
    const overallTotalExpenses = Math.round((allExpenses.reduce((s, e) => s + (Number(e.amount) || 0), 0) + stockRestockCost) * 100) / 100;

    // Helper for robust matching across section key, account, or accountName (case-insensitive)
    const matchSec = (e, sec) => {
      const s = String(e.section || "").trim().toLowerCase();
      const a = String(e.account || "").trim().toLowerCase();
      const n = String(e.accountName || "").trim().toLowerCase();
      return s === sec || a === sec || n.includes(sec);
    };

    // General / Central Operations overhead expenses (not assigned to primary/junior/senior)
    const generalExpensesList = allExpenses.filter(e => !e.section || matchSec(e, "general"));
    const generalTotal = Math.round(generalExpensesList.reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;

    // Direct section expenses
    const directPrimaryExpenses = Math.round(allExpenses.filter(e => matchSec(e, "primary")).reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;
    const directJuniorExpenses  = Math.round(allExpenses.filter(e => matchSec(e, "junior")).reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;
    const directSeniorExpenses  = Math.round(allExpenses.filter(e => matchSec(e, "senior")).reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;

    // Allocate 1/3 of general overhead to each of the 3 sections with exact penny balancing
    const overheadSharePrimary = Math.round((generalTotal / 3) * 100) / 100;
    const overheadShareJunior  = Math.round((generalTotal / 3) * 100) / 100;
    const overheadShareSenior  = Math.round((generalTotal - overheadSharePrimary - overheadShareJunior) * 100) / 100;

    if (isSectionSpecific) {
      if (filter.section === "general") {
        // Accounting rule: "And the General / Central Operations is thesame as total revenue."
        return {
          section: "general",
          sectionName: "General / Central Operations",
          totalRevenue: overallTotalRevenue, // Central operations pools total revenue
          totalExpenses: generalTotal,       // Central overhead expenses
          directExpenses: generalTotal,
          allocatedOverhead: 0,
          overheadDistributed: generalTotal,  // Apportioned to the 3 sections
          netProfit: Math.round((overallTotalRevenue - generalTotal) * 100) / 100,
          paymentCount: allPayments.length,
          expenseCount: generalExpensesList.length,
          totalArrearsRecovered: 0,
          totalTermFeesPaid: 0,
          totalOtherFeesPaid: 0
        };
      }

      // Academic section (primary, junior, senior)
      const secKey = filter.section;
      const secPayments = this.getPayments(filter);
      const secRevenue  = Math.round(secPayments.reduce((s, p) => s + (Number(p.amount) || 0), 0) * 100) / 100;

      let directExpenses = 0;
      let allocatedOverhead = 0;

      if (secKey === "primary") {
        directExpenses = directPrimaryExpenses;
        allocatedOverhead = overheadSharePrimary;
      } else if (secKey === "junior") {
        directExpenses = directJuniorExpenses;
        allocatedOverhead = overheadShareJunior;
      } else if (secKey === "senior") {
        directExpenses = directSeniorExpenses;
        allocatedOverhead = overheadShareSenior;
      }

      const totalSectionExpenses = Math.round((directExpenses + allocatedOverhead) * 100) / 100;
      const netProfit = Math.round((secRevenue - totalSectionExpenses) * 100) / 100;

      let totalArrearsRecovered = 0;
      let totalTermFeesPaid = 0;
      let totalOtherFeesPaid = 0;

      secPayments.forEach(p => {
        const b = this.getPaymentBreakdown(p);
        totalArrearsRecovered += b.arrearsRecovered;
        totalTermFeesPaid     += b.termFeePaid;
        totalOtherFeesPaid    += b.otherFeesPaid;
      });

      return {
        section: secKey,
        sectionName: window.SCHOOL_SECTIONS?.[secKey]?.name || secKey,
        totalRevenue: secRevenue,
        totalExpenses: totalSectionExpenses,
        directExpenses,
        allocatedOverhead,
        netProfit,
        totalArrearsRecovered: Math.round(totalArrearsRecovered * 100) / 100,
        totalTermFeesPaid: Math.round(totalTermFeesPaid * 100) / 100,
        totalOtherFeesPaid: Math.round(totalOtherFeesPaid * 100) / 100,
        paymentCount: secPayments.length,
        expenseCount: allExpenses.filter(e => e.section === secKey || e.account === secKey).length
      };
    }

    // Default: Overall School Financial Summary
    let totalArrearsRecovered = 0;
    let totalTermFeesPaid = 0;
    let totalOtherFeesPaid = 0;

    allPayments.forEach(p => {
      const b = this.getPaymentBreakdown(p);
      totalArrearsRecovered += b.arrearsRecovered;
      totalTermFeesPaid     += b.termFeePaid;
      totalOtherFeesPaid    += b.otherFeesPaid;
    });

    return {
      totalRevenue: overallTotalRevenue,
      stockSalesRevenue,
      stockRestockCost,
      totalExpenses: overallTotalExpenses,
      generalExpenses: generalTotal,
      directExpenses: Math.round((overallTotalExpenses - generalTotal) * 100) / 100,
      overheadSharePerSection: Math.round((generalTotal / 3) * 100) / 100,
      netProfit: Math.round((overallTotalRevenue - overallTotalExpenses) * 100) / 100,
      totalArrearsRecovered: Math.round(totalArrearsRecovered * 100) / 100,
      totalTermFeesPaid:     Math.round(totalTermFeesPaid * 100) / 100,
      totalOtherFeesPaid:    Math.round(totalOtherFeesPaid * 100) / 100,
      paymentCount: allPayments.length,
      expenseCount: allExpenses.length
    };
  }

  // ── CBT Submissions ──────────────────────────────────────────────────────
  static getCbtSubmissions(filter = {}) {
    const db = this.get();
    let list = Array.isArray(db.cbtSubmissions) ? [...db.cbtSubmissions] : [];
    if (filter.class && filter.class !== "All") {
      list = list.filter(s => s.studentClass === filter.class);
    }
    if (filter.baseClass && filter.baseClass !== "All") {
      list = list.filter(s => s.baseClass === filter.baseClass);
    }
    if (filter.studentId) {
      list = list.filter(s => s.studentId === filter.studentId);
    }
    return list.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  static getCbtSubmissionByStudent(identifier) {
    if (!identifier) return null;
    const cleanId = String(identifier).trim().toLowerCase();
    const cleanAlphanum = cleanId.replace(/[^A-Za-z0-9]/g, "");
    const db = this.get();
    const list = Array.isArray(db.cbtSubmissions) ? db.cbtSubmissions : [];
    return list.find(s => {
      const sId = (s.studentId || "").toLowerCase();
      const sReg = (s.regNo || "").toLowerCase();
      const sRegAlpha = sReg.replace(/[^A-Za-z0-9]/g, "");
      return sId === cleanId || sReg === cleanId || (cleanAlphanum && sRegAlpha === cleanAlphanum);
    }) || null;
  }

  static saveCbtSubmission(submission) {
    if (!submission || !submission.studentId) return { success: false, error: "Invalid submission data" };
    const db = this.get();
    if (!db.cbtSubmissions) db.cbtSubmissions = [];

    // Enforce single attempt rule: check if student has already submitted
    const existing = this.getCbtSubmissionByStudent(submission.studentId) || (submission.regNo ? this.getCbtSubmissionByStudent(submission.regNo) : null);
    if (existing && existing.id !== submission.id) {
      return { success: false, error: "Student has already completed this examination", submission: existing };
    }

    if (!submission.id) {
      submission.id = `CBT-${submission.studentId.replace(/[^A-Za-z0-9]/g, "")}-${Date.now()}`;
    }
    submission.timestamp = submission.timestamp || Date.now();
    submission.submittedAt = submission.submittedAt || new Date().toISOString();
    submission.status = submission.status || "Completed";

    const idx = db.cbtSubmissions.findIndex(s => s.id === submission.id);
    if (idx !== -1) {
      db.cbtSubmissions[idx] = submission;
    } else {
      db.cbtSubmissions.unshift(submission);
    }

    const log = this._buildLog("CBT_EXAM_SUBMITTED",
      `CBT Submission: ${submission.studentName} (${submission.studentClass}) scored ${submission.score}/${submission.totalQuestions} (${submission.percentage}%) - Grade: ${submission.grade}`
    );
    if (!db.auditLogs) db.auditLogs = [];
    db.auditLogs.unshift(log);

    this.save(db);

    if (window.RichVineFirebase && window.RichVineFirebase.saveCbtSubmission) {
      window.RichVineFirebase.saveCbtSubmission(submission);
      if (window.RichVineFirebase.saveLog) window.RichVineFirebase.saveLog(log);
    }

    return { success: true, submission };
  }

  static deleteCbtSubmission(id) {
    const db = this.get();
    if (!db.cbtSubmissions) return false;
    const item = db.cbtSubmissions.find(s => s.id === id);
    if (!item) return false;

    db.cbtSubmissions = db.cbtSubmissions.filter(s => s.id !== id);
    if (!db._deleted) db._deleted = {};
    if (!db._deleted.cbtSubmissions) db._deleted.cbtSubmissions = [];
    if (!db._deleted.cbtSubmissions.includes(id)) db._deleted.cbtSubmissions.push(id);

    const log = this._buildLog("CBT_EXAM_RESET",
      `Reset CBT attempt for ${item.studentName} (${item.studentClass}) - Previous Score: ${item.score}/${item.totalQuestions}`
    );
    if (!db.auditLogs) db.auditLogs = [];
    db.auditLogs.unshift(log);

    this.save(db);

    if (window.RichVineFirebase) {
      if (window.RichVineFirebase.deleteCbtSubmission) window.RichVineFirebase.deleteCbtSubmission(id);
      if (window.RichVineFirebase.saveLog) window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  // ── Internal Helper ──────────────────────────────────────────────────────
  static _buildLog(action, details) {
    return {
      id: "LOG-" + Date.now() + "-" + Math.floor(Math.random() * 10000),
      timestamp: Date.now(),
      date: new Date().toLocaleString("en-GB"),
      action,
      user: sessionStorage.getItem("richvine_admin_username") || "Super Admin",
      details
    };
  }
}

// ─── Day Care / Creche 2026/2027 Monthly Billing Cycles ───────────────────
// Resumption: 14 September 2026. Cycles run from 14th of month to 13th of next month.
const DAYCARE_BILLING_CYCLES = [
  { id: "Month 1", label: "Month 1 (14 Sep – 13 Oct 2026)", shortLabel: "Month 1 (14 Sep – 13 Oct)", term: "1st Term", startDate: "2026-09-14", endDate: "2026-10-13" },
  { id: "Month 2", label: "Month 2 (14 Oct – 13 Nov 2026)", shortLabel: "Month 2 (14 Oct – 13 Nov)", term: "1st Term", startDate: "2026-10-14", endDate: "2026-11-13" },
  { id: "Month 3", label: "Month 3 (14 Nov – 13 Dec 2026)", shortLabel: "Month 3 (14 Nov – 13 Dec)", term: "1st Term", startDate: "2026-11-14", endDate: "2026-12-13" },
  { id: "Month 4", label: "Month 4 (14 Dec – 13 Jan 2027)", shortLabel: "Month 4 (14 Dec – 13 Jan)", term: "1st Term", startDate: "2026-12-14", endDate: "2027-01-13" },
  { id: "Month 5", label: "Month 5 (14 Jan – 13 Feb 2027)", shortLabel: "Month 5 (14 Jan – 13 Feb)", term: "2nd Term", startDate: "2027-01-14", endDate: "2027-02-13" },
  { id: "Month 6", label: "Month 6 (14 Feb – 13 Mar 2027)", shortLabel: "Month 6 (14 Feb – 13 Mar)", term: "2nd Term", startDate: "2027-02-14", endDate: "2027-03-13" },
  { id: "Month 7", label: "Month 7 (14 Mar – 13 Apr 2027)", shortLabel: "Month 7 (14 Mar – 13 Apr)", term: "2nd Term", startDate: "2027-03-14", endDate: "2027-04-13" },
  { id: "Month 8", label: "Month 8 (14 Apr – 13 May 2027)", shortLabel: "Month 8 (14 Apr – 13 May)", term: "3rd Term", startDate: "2027-04-14", endDate: "2027-05-13" },
  { id: "Month 9", label: "Month 9 (14 May – 13 Jun 2027)", shortLabel: "Month 9 (14 May – 13 Jun)", term: "3rd Term", startDate: "2027-05-14", endDate: "2027-06-13" },
  { id: "Month 10", label: "Month 10 (14 Jun – 13 Jul 2027)", shortLabel: "Month 10 (14 Jun – 13 Jul)", term: "3rd Term", startDate: "2027-06-14", endDate: "2027-07-13" },
  { id: "Month 11", label: "Month 11 (14 Jul – 13 Aug 2027)", shortLabel: "Month 11 (14 Jul – 13 Aug)", term: "Summer / Holiday", startDate: "2027-07-14", endDate: "2027-08-13" },
  { id: "Month 12", label: "Month 12 (14 Aug – 13 Sep 2027)", shortLabel: "Month 12 (14 Aug – 13 Sep)", term: "Summer / Holiday", startDate: "2027-08-14", endDate: "2027-09-13" }
];

// Global exposure
window.RichVineDB = RichVineDB;
window.SCHOOL_SECTIONS = SCHOOL_SECTIONS;
window.ALL_CLASSES = ALL_CLASSES;
window.getSectionByClass = getSectionByClass;
window.DAYCARE_BILLING_CYCLES = DAYCARE_BILLING_CYCLES;

// Boot
RichVineDB.init();
