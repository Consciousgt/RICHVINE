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
    { id: "daycare_fee", name: "Day Care / Creche Monthly Fee", hasMeta: true, metaType: "daycare", forClass: null, daycare: true },
    { id: "uniform", name: "School Uniform", hasMeta: false },
    { id: "sport", name: "Sport Wear", hasMeta: true, metaType: "sport" },
    { id: "friday_wear", name: "Friday Wear", hasMeta: false },
    { id: "exercise_books", name: "Exercise Books", hasMeta: true, metaType: "exercise_books" },
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
  static KEY = "RICHVINE_COLLEGE_DB_V6_LIVE";

  static init() {
    // Clean out any old version keys
    try {
      ["RICHVINE_COLLEGE_DB_V2026", "RICHVINE_COLLEGE_DB_V3", "RICHVINE_COLLEGE_DB_V4_FRESH", "RICHVINE_COLLEGE_DB_V5_LIVE"].forEach(k => {
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
        if (!data._deleted) data._deleted = { students: [], payments: [], expenses: [] };
        if (!data._deleted.payments) data._deleted.payments = [];
        purgedIds.forEach(pId => {
          if (!data._deleted.payments.includes(pId)) data._deleted.payments.push(pId);
        });
        localStorage.setItem(this.KEY, JSON.stringify(data));
        if (window.RichVineFirebase && window.RichVineFirebase.deletePayment) {
          purgedIds.forEach(pId => window.RichVineFirebase.deletePayment(pId));
        }
      }

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
    const isJSS3 = className.includes("JSS 3");
    return all.filter(c => {
      if (!c.forClass) return true;
      if (c.forClass === "SSS 3") return isSS3;
      if (c.forClass === "JSS 3") return isJSS3;
      return false;
    });
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

    const arrears = parse(student.arrears);
    const termFee = parse(student.termFee);

    // Get all school/tuition fee payments (school_fees, daycare_fee, or any payment categorized under school fees)
    const allStudentPayments = this.getPayments({ studentId });
    const feePayments = allStudentPayments.filter(p =>
      p.category === "school_fees" ||
      p.category === "daycare_fee" ||
      (p.categoryName && /school fee|tuition|day care|creche|term fee/i.test(p.categoryName))
    );

    const termPaid = feePayments.reduce((sum, p) => {
      const explicitTermPaid = parse(p.termFeePaid);
      if (explicitTermPaid > 0) return sum + explicitTermPaid;
      const amt = parse(p.amount);
      const arrDed = parse(p.arrearsDeducted);
      return sum + Math.max(0, amt - arrDed);
    }, 0);

    const arrearsPaid = feePayments.reduce((sum, p) => sum + parse(p.arrearsDeducted), 0);

    const termFeeBalance = Math.max(0, Math.round((termFee - termPaid) * 100) / 100);
    const arrearsBalance = Math.max(0, Math.round((arrears - arrearsPaid) * 100) / 100);
    const totalOutstanding = Math.max(0, Math.round((arrearsBalance + termFeeBalance) * 100) / 100);
    const totalPaidAll = allStudentPayments.reduce((sum, p) => sum + parse(p.amount), 0);

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
    student.arrears = Number(student.arrears) || 0;
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
    if (filter.section && filter.section !== "All") payments = payments.filter(p => p.section === filter.section);
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

    // If payment was school_fees, restore student arrears
    if (payment.category === "school_fees" && payment.arrearsDeducted > 0) {
      const studentIdx = (db.students || []).findIndex(s => s.id === payment.studentId);
      if (studentIdx !== -1) {
        db.students[studentIdx].arrears = Math.round(((Number(db.students[studentIdx].arrears) || 0) + Number(payment.arrearsDeducted)) * 100) / 100;
        if (window.RichVineFirebase) window.RichVineFirebase.saveStudent(db.students[studentIdx]);
      }
    }

    db.payments.splice(idx, 1);

    if (!db._deleted) db._deleted = { students: [], payments: [], expenses: [] };
    if (!db._deleted.payments) db._deleted.payments = [];
    if (!db._deleted.payments.includes(id)) db._deleted.payments.push(id);

    const log = this._buildLog("PAYMENT_DELETED",
      `Deleted payment record ${payment.receiptNo} for ${payment.studentName}: ₦${Number(payment.amount).toLocaleString(undefined, {minimumFractionDigits:2})} (${payment.categoryName})`
    );
    db.auditLogs.unshift(log);
    this.save(db);

    if (window.RichVineFirebase) {
      window.RichVineFirebase.deletePayment(id);
      window.RichVineFirebase.saveLog(log);
    }
    return true;
  }

  static addPayment(payment) {
    const db = this.get();
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
    // Sum only portions of the payment that belong to School Fees or Day Care
    let tuitionAmount = 0;
    if (payment.items && payment.items.length) {
      tuitionAmount = payment.items.filter(it =>
        it.category === "school_fees" ||
        it.category === "daycare_fee" ||
        /school fee|tuition|day care|creche/i.test(it.categoryName || "")
      ).reduce((sum, it) => sum + Number(it.amount), 0);
    } else if (payment.category === "school_fees" || payment.category === "daycare_fee") {
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

    // If amount or category changed on a school_fees payment, recalculate arrears deduction
    if ((fields.amount || fields.category) && prev.category === 'school_fees') {
      const newAmount = Number(prev.amount);
      const studentIdx = db.students.findIndex(s => s.id === prev.studentId);
      if (studentIdx !== -1) {
        // Restore student arrears from this payment's previous deduction, then re-apply
        const oldArrears = Number(db.students[studentIdx].arrears) || 0;
        db.students[studentIdx].arrears = Math.round((oldArrears + Number(prev.arrearsDeducted || 0)) * 100) / 100;
        const currentArrears = Number(db.students[studentIdx].arrears);
        const arrearsDeducted = Math.min(currentArrears, newAmount);
        const termFeePaid = Math.round((newAmount - arrearsDeducted) * 100) / 100;
        db.students[studentIdx].arrears = Math.round((currentArrears - arrearsDeducted) * 100) / 100;
        prev.arrearsDeducted = Math.round(arrearsDeducted * 100) / 100;
        prev.termFeePaid = Math.round(termFeePaid * 100) / 100;
        if (window.RichVineFirebase) window.RichVineFirebase.saveStudent(db.students[studentIdx]);
      }
    } else if (fields.amount) {
      prev.termFeePaid = Number(fields.amount);
    }

    prev.updatedAt = new Date().toISOString();
    db.payments[idx] = prev;

    const log = this._buildLog('PAYMENT_UPDATED',
      `Corrected payment ${prev.receiptNo} for ${prev.studentName}: ₦${Number(prev.amount).toLocaleString(undefined,{minimumFractionDigits:2})} (${prev.categoryName})`
    );
    db.auditLogs.unshift(log);
    this.save(db);
    if (window.RichVineFirebase) {
      window.RichVineFirebase.savePayment(prev);
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
    const totalRevenue = Math.round(payments.reduce((s, p) => s + (Number(p.amount) || 0), 0) * 100) / 100;
    const totalExpenses = Math.round(expenses.reduce((s, e) => s + (Number(e.amount) || 0), 0) * 100) / 100;
    const totalArrearsRecovered = Math.round(payments.reduce((s, p) => s + (Number(p.arrearsDeducted) || 0), 0) * 100) / 100;
    const totalTermFeesPaid = Math.round(payments.reduce((s, p) => s + (Number(p.termFeePaid) || 0), 0) * 100) / 100;
    const totalOtherFeesPaid = Math.max(0, Math.round((totalRevenue - totalArrearsRecovered - totalTermFeesPaid) * 100) / 100);
    return {
      totalRevenue,
      totalExpenses,
      netProfit: Math.round((totalRevenue - totalExpenses) * 100) / 100,
      totalArrearsRecovered,
      totalTermFeesPaid,
      totalOtherFeesPaid,
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
