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

// ─── Clean Initial State (Zero Dummy Data) ────────────────────────────────
const DEFAULT_DATA = {
  config: {
    schoolName: "RICHVINE COLLEGE",
    motto: "Excellence, Character & Wisdom",
    address: "Plot 12-16 RichVine Boulevard, Lekki-Epe Expressway, Lagos State, Nigeria",
    contactEmail: "admin@richvinecollege.edu.ng",
    phone: "+234 (0) 803 123 4567, +234 (0) 812 987 6543",
    currentSession: "2026/2027",
    currentTerm: "1st Term",
    currency: "₦"
  },

  classes: ALL_CLASSES,

  feeCategories: [
    { id: "school_fees", name: "School Fees / Tuition", hasMeta: false },
    { id: "uniform", name: "School Uniform", hasMeta: false },
    { id: "sport", name: "Sport Wear", hasMeta: true, metaType: "sport" },
    { id: "friday_wear", name: "Friday Wear", hasMeta: false },
    { id: "exercise_books", name: "Exercise Books", hasMeta: true, metaType: "exercise_books" },
    { id: "textbook", name: "Textbooks", hasMeta: true, metaType: "textbook" },
    { id: "misc_1", name: "Miscellaneous 1 (Development / PTA)", hasMeta: false },
    { id: "misc_2", name: "Miscellaneous 2 (ICT / Computer Lab)", hasMeta: false },
    { id: "misc_3", name: "Miscellaneous 3 (Club / Medical / Excursion)", hasMeta: false },
    // SS3 Special Senior School Fees
    { id: "waec_fee", name: "WAEC Examination Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "neco_fee", name: "NECO Examination Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "waec_logistics", name: "WAEC Logistics Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "neco_logistics", name: "NECO Logistics Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "waec_id_card", name: "WAEC ID Card Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "neco_id_card", name: "NECO ID Card Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "lessons_fee", name: "Morning & Afternoon Extension Lesson Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "camping_fee", name: "Monthly Intensive Camping Fee", hasMeta: false, forClass: "SSS 3" },
    { id: "other_special_fee", name: "Other SS3 Special / Optional Fees", hasMeta: true, metaType: "other_special", forClass: "SSS 3" }
  ],

  // Fresh, empty collections
  students: [],
  payments: [],
  expenses: [],
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

// ─── LocalStorage + Firebase DB Manager ──────────────────────────────────
class RichVineDB {
  static KEY = "RICHVINE_COLLEGE_DB_V5_LIVE";

  static init() {
    // Clean out any old version keys
    try {
      ["RICHVINE_COLLEGE_DB_V2026", "RICHVINE_COLLEGE_DB_V3", "RICHVINE_COLLEGE_DB_V4_FRESH"].forEach(k => {
        if (localStorage.getItem(k)) localStorage.removeItem(k);
      });
    } catch(e) {}

    if (!localStorage.getItem(this.KEY)) {
      localStorage.setItem(this.KEY, JSON.stringify(DEFAULT_DATA));
    }
  }

  static get() {
    this.init();
    try {
      const data = JSON.parse(localStorage.getItem(this.KEY));
      if (!data.students) data.students = [];
      if (!data.payments) data.payments = [];
      if (!data.expenses) data.expenses = [];
      if (!data.auditLogs) data.auditLogs = [];
      data.classes = ALL_CLASSES;
      return data;
    } catch (e) {
      console.error("DB read error, reinitializing fresh state:", e);
      localStorage.setItem(this.KEY, JSON.stringify(DEFAULT_DATA));
      return DEFAULT_DATA;
    }
  }

  static save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
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
    return all.filter(c => !c.forClass || (c.forClass === "SSS 3" && isSS3));
  }

  // ── Outstanding Balance Calculator for a Student ────────────────────────
  static getStudentBalance(studentId) {
    const student = this.getStudentById(studentId);
    if (!student) return null;

    const arrears = Number(student.arrears) || 0;
    const termFee = Number(student.termFee) || 0;

    const payments = this.getPayments({ studentId, category: "school_fees" });
    const termPaid = payments.reduce((sum, p) => sum + (Number(p.termFeePaid) || 0), 0);
    const arrearsPaid = payments.reduce((sum, p) => sum + (Number(p.arrearsDeducted) || 0), 0);

    const termFeeBalance = Math.max(0, Math.round((termFee - termPaid) * 100) / 100);
    const arrearsBalance = Math.round(arrears * 100) / 100;
    const totalOutstanding = Math.round((arrearsBalance + termFeeBalance) * 100) / 100;

    const allPayments = this.getPayments({ studentId });
    const totalPaidAll = allPayments.reduce((sum, p) => sum + Number(p.amount), 0);

    return {
      studentId: student.id,
      name: `${student.firstName} ${student.lastName}`,
      class: student.currentClass,
      termFeeExpected: termFee,
      termFeePaid: termPaid,
      termFeeBalance: termFeeBalance,
      arrearsBalance: arrearsBalance,
      arrearsPaid: arrearsPaid,
      totalOutstanding: totalOutstanding,
      totalPaidAll: totalPaidAll
    };
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
    const num = String(db.students.length + 1).padStart(3, "0");
    student.id = `RVC-${year}-${num}`;
    student.regNo = student.regNo || `RVC/${year}/${num}`;
    student.section = getSectionByClass(student.currentClass)?.id || "junior";
    student.termFee = Number(student.termFee) || 0;
    student.arrears = Number(student.arrears) || 0;
    const initialPaid = Number(student.initialPaid) || 0;
    delete student.initialPaid; // Do not store transient enrollment field on student doc
    student.enrolledDate = student.enrolledDate || new Date().toISOString().split("T")[0];

    db.students.unshift(student);

    const log = this._buildLog("STUDENT_ENROLLED",
      `Enrolled ${student.firstName} ${student.lastName} into ${student.currentClass} | Term Fee: ₦${student.termFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` +
      (student.arrears > 0 ? ` | Opening Arrears: ₦${student.arrears.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : "") +
      (initialPaid > 0 ? ` | Initial School Fee Paid: ₦${initialPaid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : "")
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
        date: student.enrolledDate,
        status: "Confirmed",
        details: { description: "Initial school fee payment recorded at enrollment profile creation" }
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
    if (fields.hasOwnProperty("arrears")) {
      db.students[idx].arrears = Number(fields.arrears) || 0;
    }
    if (fields.hasOwnProperty("termFee")) {
      db.students[idx].termFee = Number(fields.termFee) || 0;
    }
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
    db.students = db.students.filter(s => s.id !== id);
    const log = this._buildLog("STUDENT_ARCHIVED",
      `Archived learner: ${student.firstName} ${student.lastName} (${student.regNo})`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.deleteStudent(id);
      window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  // ── Payments ────────────────────────────────────────────────────────────
  static getPayments(filter = {}) {
    const db = this.get();
    let payments = [...db.payments];
    if (filter.studentId) payments = payments.filter(p => p.studentId === filter.studentId);
    if (filter.class && filter.class !== "All") payments = payments.filter(p => p.studentClass === filter.class);
    if (filter.section && filter.section !== "All") payments = payments.filter(p => p.section === filter.section);
    if (filter.category && filter.category !== "All") payments = payments.filter(p => p.category === filter.category);
    if (filter.session && filter.session !== "All") payments = payments.filter(p => p.session === filter.session);
    if (filter.term && filter.term !== "All") payments = payments.filter(p => p.term === filter.term);
    if (filter.startDate) payments = payments.filter(p => p.date >= filter.startDate);
    if (filter.endDate) payments = payments.filter(p => p.date <= filter.endDate);
    return payments.sort((a, b) => b.timestamp - a.timestamp);
  }

  static addPayment(payment) {
    const db = this.get();
    const year = 2026;
    payment.id = "PAY-" + Date.now();
    payment.receiptNo = `RVCPAY/${year}/${String(db.payments.length + 1).padStart(4, "0")}`;
    payment.timestamp = Date.now();
    payment.session = payment.session || "2026/2027";
    payment.recordedBy = sessionStorage.getItem("richvine_admin_username") || "Super Admin";
    payment.section = getSectionByClass(payment.studentClass)?.id || "junior";

    // ─── STRICT ARREARS-FIRST DEDUCTION ALGORITHM ────────────────────────
    let arrearsDeducted = 0;
    let termFeePaid = 0;
    const paymentAmount = Number(payment.amount);

    if (payment.category === "school_fees") {
      const studentIdx = db.students.findIndex(s => s.id === payment.studentId);
      if (studentIdx !== -1) {
        const currentArrears = Number(db.students[studentIdx].arrears) || 0;
        
        if (currentArrears > 0) {
          arrearsDeducted = Math.min(currentArrears, paymentAmount);
          termFeePaid = Math.round((paymentAmount - arrearsDeducted) * 100) / 100;
          db.students[studentIdx].arrears = Math.round((currentArrears - arrearsDeducted) * 100) / 100;
        } else {
          arrearsDeducted = 0;
          termFeePaid = paymentAmount;
        }

        if (window.RichVineFirebase) {
          window.RichVineFirebase.saveStudent(db.students[studentIdx]);
        }
      } else {
        termFeePaid = paymentAmount;
      }
    } else {
      termFeePaid = paymentAmount;
    }

    payment.arrearsDeducted = Math.round(arrearsDeducted * 100) / 100;
    payment.termFeePaid = Math.round(termFeePaid * 100) / 100;

    db.payments.unshift(payment);

    const arrearsNote = arrearsDeducted > 0 ? ` [Arrears cleared: ₦${arrearsDeducted.toLocaleString(undefined, {minimumFractionDigits:2})}, Term Fee: ₦${termFeePaid.toLocaleString(undefined, {minimumFractionDigits:2})}]` : "";
    const log = this._buildLog("PAYMENT_RECORDED",
      `Payment of ₦${paymentAmount.toLocaleString(undefined, {minimumFractionDigits:2})} (${payment.categoryName}) for ${payment.studentName} [${payment.studentClass}]${arrearsNote}`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.savePayment(payment);
      window.RichVineFirebase.saveLog(log);
    }
    return payment;
  }

  // ── Expenses ────────────────────────────────────────────────────────────
  static getExpenses(filter = {}) {
    const db = this.get();
    let expenses = [...(db.expenses || [])];
    if (filter.period && filter.period !== "All") expenses = expenses.filter(e => e.period === filter.period);
    if (filter.category && filter.category !== "All") expenses = expenses.filter(e => e.category === filter.category);
    if (filter.session && filter.session !== "All") expenses = expenses.filter(e => e.session === filter.session);
    if (filter.term && filter.term !== "All") expenses = expenses.filter(e => e.term === filter.term);
    if (filter.startDate) expenses = expenses.filter(e => e.date >= filter.startDate);
    if (filter.endDate) expenses = expenses.filter(e => e.date <= filter.endDate);
    return expenses.sort((a, b) => b.timestamp - a.timestamp);
  }

  static addExpense(expense) {
    const db = this.get();
    if (!db.expenses) db.expenses = [];
    expense.id = "EXP-" + Date.now();
    expense.timestamp = Date.now();
    expense.session = expense.session || "2026/2027";
    expense.recordedBy = sessionStorage.getItem("richvine_admin_username") || "Super Admin";

    db.expenses.unshift(expense);
    const log = this._buildLog("EXPENSE_LOGGED",
      `Logged ${expense.period} expense: ${expense.description} — ₦${Number(expense.amount).toLocaleString(undefined, {minimumFractionDigits:2})} (${expense.category})`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.saveExpense && window.RichVineFirebase.saveExpense(expense);
      window.RichVineFirebase.saveLog(log);
    }
    return expense;
  }

  static deleteExpense(id) {
    const db = this.get();
    const exp = (db.expenses || []).find(e => e.id === id);
    if (!exp) return false;
    db.expenses = db.expenses.filter(e => e.id !== id);
    const log = this._buildLog("EXPENSE_DELETED",
      `Deleted expense: ${exp.description} — ₦${Number(exp.amount).toLocaleString(undefined, {minimumFractionDigits:2})}`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    return true;
  }

  // ── Financial Summary ───────────────────────────────────────────────────
  static getFinancialSummary(filter = {}) {
    const payments = this.getPayments(filter);
    const expenses = this.getExpenses(filter);
    const totalRevenue = payments.reduce((s, p) => s + Number(p.amount), 0);
    const totalExpenses = expenses.reduce((s, e) => s + Number(e.amount), 0);
    return {
      totalRevenue,
      totalExpenses,
      netProfit: totalRevenue - totalExpenses,
      paymentCount: payments.length,
      expenseCount: expenses.length
    };
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

// Global exposure
window.SCHOOL_SECTIONS = SCHOOL_SECTIONS;
window.ALL_CLASSES = ALL_CLASSES;
window.getSectionByClass = getSectionByClass;

// Boot
RichVineDB.init();
