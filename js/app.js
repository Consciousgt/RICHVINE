/**
 * RichVine College — Main App Controller v5
 * - Accepts any amount including kobo (step="any") with commas
 * - Currency formatting helper (parseAmount, formatAmount)
 * - Auto-formats input fields on blur and typing
 */
const RichVineApp = (() => {
  let currentTab = "dashboard";

  // ── Currency Helpers ──────────────────────────────────────────────────────
  // Parses a raw input like "150,000", "150,000.50", or 150000 into a clean float
  function parseAmount(val) {
    if (typeof val === "number") return val;
    if (!val) return 0;
    const cleaned = String(val).replace(/,/g, "").trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  }

  // Formats numbers with commas and optional kobo
  function formatAmount(val, includeKobo = false) {
    const num = parseAmount(val);
    if (includeKobo || num % 1 !== 0) {
      return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return num.toLocaleString();
  }

  // Live input formatter for text inputs representing currency
  function bindCurrencyInput(inputEl) {
    if (!inputEl) return;
    inputEl.addEventListener("input", (e) => {
      // Remove any non-digit and non-period characters
      const cursor = inputEl.selectionStart;
      let val = inputEl.value.replace(/[^0-9.]/g, "");
      
      // Ensure only one period
      const parts = val.split(".");
      if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");

      // Format integer part with commas
      const integerPart = parts[0];
      const decimalPart = parts.length > 1 ? "." + parts[1].slice(0, 2) : "";
      
      if (integerPart) {
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        inputEl.value = formattedInteger + decimalPart;
      } else if (decimalPart) {
        inputEl.value = "0" + decimalPart;
      }
    });
  }

  function init() {
    if (!sessionStorage.getItem("richvine_admin_session")) {
      window.location.href = "admin/index.html";
      return;
    }
    const user = sessionStorage.getItem("richvine_admin_username") || "Admin";
    const el = document.getElementById("current-user-name");
    if (el) el.textContent = user;

    document.querySelectorAll("[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    document.querySelectorAll(".btn-logout").forEach(btn => {
      btn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "admin/index.html";
      });
    });

    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    }

    // Bind currency formatting to all amount input fields
    bindCurrencyInput(document.getElementById("enroll-term-fee"));
    bindCurrencyInput(document.getElementById("enroll-arrears"));
    bindCurrencyInput(document.getElementById("enroll-paid-so-far"));
    bindCurrencyInput(document.getElementById("pay-amount"));
    bindCurrencyInput(document.getElementById("exp-amount"));

    // Set default payment date on enrollment form to today
    const enrollPayDate = document.getElementById("enroll-payment-date");
    if (enrollPayDate) enrollPayDate.value = new Date().toISOString().split("T")[0];

    // Close mobile sidebar when clicking main content or outside
    const mainEl = document.getElementById("main");
    if (mainEl && sidebar) {
      mainEl.addEventListener("click", () => {
        if (window.innerWidth < 768 && sidebar.classList.contains("open")) {
          sidebar.classList.remove("open");
        }
      });
    }

    // Dismiss modal when tapping outside or pressing Escape (Mobile friendly)
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.add("hidden");
      });
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
      }
    });

    // Initialize Active Live Clock Ticker
    _startLiveClock();

    loadDashboard();
    switchTab("dashboard");
  }

  function _startLiveClock() {
    function tick() {
      const clockEl = document.getElementById("live-clock-time");
      if (!clockEl) return;
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      const timeStr = now.toLocaleTimeString("en-GB", { hour12: true });
      clockEl.textContent = `${dateStr} • ${timeStr}`;
    }
    tick();
    setInterval(tick, 1000);
  }

  function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll(".tab-section").forEach(s => s.classList.add("hidden"));
    const section = document.getElementById(`view-${tab}`);
    if (section) section.classList.remove("hidden");

    document.querySelectorAll("[data-tab]").forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tab);
    });

    if (tab === "dashboard") loadDashboard();
    else if (tab === "learners") loadLearnersTab();
    else if (tab === "class-hub") loadClassHub();
    else if (tab === "payments") loadPaymentsTab();
    else if (tab === "reports") loadReportsTab();
    else if (tab === "expenses") loadExpensesTab();
    else if (tab === "overview") loadOverviewTab();

    const sidebar = document.getElementById("sidebar");
    if (sidebar && window.innerWidth < 768) sidebar.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refreshCurrentTab() {
    switchTab(currentTab);
  }

  // ── DASHBOARD ─────────────────────────────────────────────────────────────
  function loadDashboard() {
    const students   = RichVineDB.getStudents();
    const payments   = RichVineDB.getPayments();
    const expenses   = RichVineDB.getExpenses();
    const config     = RichVineDB.getConfig();
    const totalRev   = payments.reduce((s, p) => s + Number(p.amount), 0);
    const totalExp   = expenses.reduce((s, e) => s + Number(e.amount), 0);
    const netProfit  = totalRev - totalExp;

    let totalArrearsPending = 0;
    let totalTermFeePending = 0;
    students.forEach(s => {
      const b = RichVineDB.getStudentBalance(s.id);
      if (b) {
        totalArrearsPending += b.arrearsBalance;
        totalTermFeePending += b.termFeeBalance;
      }
    });

    _setText("dash-total-students",   students.length);
    _setText("dash-total-revenue",    "₦" + formatAmount(totalRev, true));
    _setText("dash-total-expenses",   "₦" + formatAmount(totalExp, true));
    _setText("dash-net-profit",       "₦" + formatAmount(netProfit, true));
    _setText("dash-session",          config.currentSession + " — " + config.currentTerm);
    _setText("dash-total-arrears-sum","₦" + formatAmount(totalArrearsPending, true));
    _setText("dash-total-term-sum",   "₦" + formatAmount(totalTermFeePending, true));

    // Section counts
    const sections = window.SCHOOL_SECTIONS || {};
    for (const [key, sec] of Object.entries(sections)) {
      const count = students.filter(s => s.section === key).length;
      _setText(`dash-count-${key}`, count);
    }

    // Recent payments
    const recentContainer = document.getElementById("dash-recent-payments");
    if (recentContainer) {
      const recent = payments.slice(0, 6);
      recentContainer.innerHTML = recent.length ? recent.map(p => `
        <div class="recent-pay-item">
          <div class="rp-icon"><i class="fas fa-receipt"></i></div>
          <div class="rp-info">
            <div class="rp-name">${p.studentName}</div>
            <div class="rp-meta">${p.categoryName} · ${p.studentClass}</div>
          </div>
          <div class="rp-amount" style="color:green;font-weight:700">+₦${formatAmount(p.amount, true)}</div>
        </div>`).join("") : `<div class="empty-state"><i class="fas fa-inbox"></i><p>No payments recorded yet. System is fresh.</p></div>`;
    }

    // Outstanding fees tracker
    const arrearsContainer = document.getElementById("dash-arrears-list");
    if (arrearsContainer) {
      const pendingList = students
        .map(s => RichVineDB.getStudentBalance(s.id))
        .filter(b => b && b.totalOutstanding > 0);

      arrearsContainer.innerHTML = pendingList.length ? pendingList.slice(0, 6).map(b => `
        <div class="recent-pay-item">
          <div class="rp-icon" style="background:#fff3cd"><i class="fas fa-exclamation-triangle" style="color:#856404"></i></div>
          <div class="rp-info">
            <div class="rp-name">${b.name} (${b.class})</div>
            <div class="rp-meta">Arrears: ₦${formatAmount(b.arrearsBalance, true)} | Term Rem: ₦${formatAmount(b.termFeeBalance, true)}</div>
          </div>
          <div class="rp-amount" style="color:#b91c1c;font-weight:700">₦${formatAmount(b.totalOutstanding, true)}</div>
        </div>`).join("") : `<div class="empty-state" style="color:green"><i class="fas fa-check-circle"></i><p>Zero outstanding balance across all learners!</p></div>`;
    }
  }

  // ── LEARNERS TAB ─────────────────────────────────────────────────────────
  function loadLearnersTab() {
    const sectionFilter  = document.getElementById("learner-section-filter")?.value || "All";
    const classFilter    = document.getElementById("learner-class-filter")?.value   || "All";
    const searchInput    = document.getElementById("learner-search")?.value.toLowerCase() || "";

    _populateSectionFilter("learner-section-filter", "All Sections");
    _populateClassFilter("learner-class-filter", sectionFilter, "All Classes");

    const filter = {
      ...(sectionFilter !== "All" ? { section: sectionFilter } : {}),
      ...(classFilter   !== "All" ? { class: classFilter }     : {})
    };
    let students = RichVineDB.getStudents(filter);
    if (searchInput) {
      students = students.filter(s =>
        `${s.firstName} ${s.lastName} ${s.regNo} ${s.currentClass}`.toLowerCase().includes(searchInput)
      );
    }

    const tbody = document.getElementById("learners-table-body");
    if (!tbody) return;
    tbody.innerHTML = students.length ? students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id);
      const isFullyPaid = bal.totalOutstanding === 0;
      return `<tr>
        <td><img src="${s.avatar || 'https://via.placeholder.com/38'}" class="student-avatar-sm"> ${s.regNo}</td>
        <td><b>${s.firstName} ${s.lastName}</b></td>
        <td><span class="class-badge" style="background:#e0f2fe;color:#0369a1;font-weight:600;padding:2px 8px;border-radius:12px;font-size:11px">${s.currentClass}</span></td>
        <td>${(window.getSectionByClass?.(s.currentClass)?.name) || "—"}</td>
        <td style="font-weight:600">₦${formatAmount(s.termFee || 0, true)}</td>
        <td style="color:#047857;font-weight:700">
          ₦${formatAmount(bal.termFeePaid || 0, true)}
          ${isFullyPaid ? ' <span style="font-size:10px;background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:8px">Paid</span>' : ''}
        </td>
        <td style="${bal.arrearsBalance > 0 ? 'color:#b45309;font-weight:700' : 'color:green'}">
          ${bal.arrearsBalance > 0 ? "₦" + formatAmount(bal.arrearsBalance, true) : "✓ ₦0.00"}
        </td>
        <td style="${bal.termFeeBalance > 0 ? 'color:#b91c1c;font-weight:700' : 'color:green'}">
          ${bal.termFeeBalance > 0 ? "₦" + formatAmount(bal.termFeeBalance, true) : "✓ ₦0.00"}
        </td>
        <td style="${bal.totalOutstanding > 0 ? 'color:#6d28d9;font-weight:800' : 'color:green'}">
          ${bal.totalOutstanding > 0 ? "₦" + formatAmount(bal.totalOutstanding, true) : "<span class='badge badge-active'>✓ Fully Paid</span>"}
        </td>
        <td>
          <button class="btn-icon" onclick="RichVineApp.openStudentProfile('${s.id}')" title="View Profile"><i class="fas fa-user"></i></button>
          <button class="btn-icon" style="color:#7c3aed" onclick="RichVineApp.openEditStudentModal('${s.id}')" title="Edit Profile"><i class="fas fa-edit"></i></button>
          <button class="btn-icon" onclick="RichVineApp.openRecordPayment('${s.id}')" title="Record Payment"><i class="fas fa-plus-circle"></i></button>
          <button class="btn-icon btn-danger" onclick="RichVineApp.confirmDeleteStudent('${s.id}')" title="Archive"><i class="fas fa-archive"></i></button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="10" class="empty-cell">No learners enrolled yet. Click "Enroll Learner" above to add your first student record!</td></tr>`;

    _setText("learner-count", students.length + " learner(s)");
  }

  // ── CLASS HUB ────────────────────────────────────────────────────
  function loadClassHub() {
    const sectionFilter = document.getElementById("class-hub-section-filter")?.value || "All";
    const sections = window.SCHOOL_SECTIONS || {};
    const container = document.getElementById("class-hub-grid");
    if (!container) return;

    container.innerHTML = "";
    for (const [secKey, sec] of Object.entries(sections)) {
      if (sectionFilter !== "All" && sectionFilter !== secKey) continue;

      const secHeader = document.createElement("div");
      secHeader.className = "section-header";
      secHeader.innerHTML = `<h3><i class="${sec.icon}"></i> ${sec.name}</h3>`;
      container.appendChild(secHeader);

      const grid = document.createElement("div");
      grid.className = "class-cards-grid";

      sec.classes.forEach(cls => {
        const students = RichVineDB.getStudents({ class: cls });
        const payments = RichVineDB.getPayments({ class: cls });
        const collected = payments.reduce((s, p) => s + Number(p.amount), 0);
        let classPending = 0;
        students.forEach(s => {
          const b = RichVineDB.getStudentBalance(s.id);
          if (b) classPending += b.totalOutstanding;
        });

        const card = document.createElement("div");
        card.className = "class-card";
        card.innerHTML = `
          <div class="class-card-header">
            <div class="class-name">${cls}</div>
            <span class="class-badge">${students.length} Learners</span>
          </div>
          <div class="class-card-stats">
            <div class="stat-item">
              <i class="fas fa-money-bill-wave" style="color:green"></i>
              <span>₦${formatAmount(collected)}</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-clock" style="color:#b91c1c"></i>
              <span>₦${formatAmount(classPending)} pending</span>
            </div>
          </div>
          <button class="btn-primary btn-sm btn-full" onclick="RichVineApp.openClassDetail('${cls}')">
            <i class="fas fa-eye"></i> View Class Records
          </button>`;
        grid.appendChild(card);
      });
      container.appendChild(grid);
    }
  }

  function openClassDetail(className) {
    const students  = RichVineDB.getStudents({ class: className });
    const payments  = RichVineDB.getPayments({ class: className });
    const collected = payments.reduce((s, p) => s + Number(p.amount), 0);
    const section   = window.getSectionByClass?.(className);

    const modal = document.getElementById("modal-class-detail");
    if (!modal) return;

    document.getElementById("class-detail-title").textContent = `${className} — Class Records`;
    document.getElementById("class-detail-section").textContent = section?.name || "";
    document.getElementById("class-detail-count").textContent = students.length;
    document.getElementById("class-detail-revenue").textContent = "₦" + formatAmount(collected, true);

    const tbody = document.getElementById("class-detail-students-body");
    tbody.innerHTML = students.length ? students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id);
      return `<tr>
        <td>${s.regNo}</td>
        <td><b>${s.firstName} ${s.lastName}</b></td>
        <td>₦${formatAmount(s.termFee || 0, true)}</td>
        <td style="color:green;font-weight:600">₦${formatAmount(bal.totalPaidAll, true)}</td>
        <td style="${bal.arrearsBalance > 0 ? 'color:#b45309;font-weight:700' : 'color:green'}">
          ₦${formatAmount(bal.arrearsBalance, true)}
        </td>
        <td style="${bal.termFeeBalance > 0 ? 'color:#b91c1c;font-weight:700' : 'color:green'}">
          ₦${formatAmount(bal.termFeeBalance, true)}
        </td>
        <td style="${bal.totalOutstanding > 0 ? 'color:#6d28d9;font-weight:800' : 'color:green'}">
          ₦${formatAmount(bal.totalOutstanding, true)}
        </td>
        <td>
          <button class="btn-icon" onclick="RichVineApp.openStudentProfile('${s.id}');closeModal('modal-class-detail')">
            <i class="fas fa-user"></i>
          </button>
          <button class="btn-icon" onclick="RichVineApp.openRecordPayment('${s.id}');closeModal('modal-class-detail')">
            <i class="fas fa-plus-circle"></i>
          </button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="8" class="empty-cell">No learners enrolled in this class yet</td></tr>`;

    openModal("modal-class-detail");
  }

  // ── PAYMENTS TAB ──────────────────────────────────────────────────────────
  function loadPaymentsTab() {
    const sectionFilter  = document.getElementById("pay-section-filter")?.value  || "All";
    const classFilter    = document.getElementById("pay-class-filter")?.value    || "All";
    const categoryFilter = document.getElementById("pay-category-filter")?.value || "All";
    const searchInput    = document.getElementById("pay-search")?.value.toLowerCase() || "";

    _populateSectionFilter("pay-section-filter", "All Sections");
    _populateClassFilter("pay-class-filter", sectionFilter, "All Classes");

    const filter = {
      ...(sectionFilter  !== "All" ? { section: sectionFilter }   : {}),
      ...(classFilter    !== "All" ? { class: classFilter }       : {}),
      ...(categoryFilter !== "All" ? { category: categoryFilter } : {})
    };

    let payments = RichVineDB.getPayments(filter);
    if (searchInput) {
      payments = payments.filter(p =>
        `${p.studentName} ${p.receiptNo} ${p.categoryName}`.toLowerCase().includes(searchInput)
      );
    }

    const total = payments.reduce((s, p) => s + Number(p.amount), 0);
    _setText("pay-total-shown", "₦" + formatAmount(total, true) + " (" + payments.length + " records)");

    const tbody = document.getElementById("payments-table-body");
    if (!tbody) return;
    tbody.innerHTML = payments.length ? payments.map(p => `<tr>
      <td>${p.receiptNo}</td>
      <td>${p.date}</td>
      <td>${p.studentName}</td>
      <td>${p.studentClass}</td>
      <td>${p.categoryName}</td>
      <td style="color:green;font-weight:700">₦${formatAmount(p.amount, true)}</td>
      <td style="${Number(p.arrearsDeducted) > 0 ? 'color:#b45309;font-weight:700' : ''}">${Number(p.arrearsDeducted) > 0 ? "₦" + formatAmount(p.arrearsDeducted, true) : "—"}</td>
      <td style="color:green;font-weight:600">${Number(p.termFeePaid) > 0 ? "₦" + formatAmount(p.termFeePaid, true) : "—"}</td>
      <td>${p.paymentMethod}</td>
      <td>
        <button class="btn-icon" onclick="RichVineReports.printReceipt('${p.id}')" title="Print Receipt"><i class="fas fa-print"></i></button>
        <button class="btn-icon" style="color:#7c3aed" onclick="RichVineApp.openEditPaymentModal('${p.id}')" title="Correct Payment"><i class="fas fa-edit"></i></button>
      </td>
    </tr>`).join("") : `<tr><td colspan="10" class="empty-cell">No payment records logged yet.</td></tr>`;
  }

  // ── REPORTS TAB ───────────────────────────────────────────────────────────
  function loadReportsTab() {
    _populateSectionFilter("report-section-filter", "All Sections");
    _populateClassFilter("report-class-filter",
      document.getElementById("report-section-filter")?.value || "All", "All Classes");

    _populateSectionFilter("cat-report-section", "All Sections");
    _populateClassFilter("cat-report-class",
      document.getElementById("cat-report-section")?.value || "All", "All Classes");

    const catSel = document.getElementById("cat-report-category");
    if (catSel) {
      const cats = RichVineDB.getFeeCategories();
      const current = catSel.value;
      catSel.innerHTML = `<option value="All">All Fee Categories</option>` +
        cats.map(c => `<option value="${c.id}" ${c.id === current ? "selected" : ""}>${c.name}</option>`).join("");
    }
  }

  function onCatReportSectionChange() {
    const secVal = document.getElementById("cat-report-section")?.value || "All";
    _populateClassFilter("cat-report-class", secVal, "All Classes");
  }

  // ── EXPENSES TAB ──────────────────────────────────────────────────────────
  function loadExpensesTab() {
    const periodFilter   = document.getElementById("exp-period-filter")?.value   || "All";
    const categoryFilter = document.getElementById("exp-category-filter")?.value || "All";

    const filter = {
      ...(periodFilter   !== "All" ? { period: periodFilter }     : {}),
      ...(categoryFilter !== "All" ? { category: categoryFilter } : {})
    };

    const expenses = RichVineDB.getExpenses(filter);
    const total    = expenses.reduce((s, e) => s + Number(e.amount), 0);
    _setText("exp-total-shown", "₦" + formatAmount(total, true) + " (" + expenses.length + " records)");

    const tbody = document.getElementById("expenses-table-body");
    if (!tbody) return;
    tbody.innerHTML = expenses.length ? expenses.map(e => `<tr>
      <td>${e.id}</td>
      <td>${e.date}</td>
      <td><b>${e.description}</b></td>
      <td>${e.category}</td>
      <td><span class="badge-period ${e.period}">${_capitalise(e.period)}</span></td>
      <td style="color:crimson;font-weight:700">₦${formatAmount(e.amount, true)}</td>
      <td>${e.session} · ${e.term || ""}</td>
      <td>${e.recordedBy}</td>
      <td>
        <button class="btn-icon btn-danger" onclick="RichVineApp.confirmDeleteExpense('${e.id}')" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>`).join("") : `<tr><td colspan="9" class="empty-cell">No expenses logged yet. Click "Log Expense" above to add an expense entry.</td></tr>`;
  }

  // ── OVERVIEW P&L TAB ──────────────────────────────────────────────────────
  function loadOverviewTab() {
    const timeframe = document.getElementById("ov-timeframe")?.value || "all";
    const { startDate, endDate, label } = RichVineReports.getDateRange(timeframe);

    const baseFilter = startDate ? { startDate, endDate } : {};
    const summary    = RichVineDB.getFinancialSummary(baseFilter);
    const sections   = window.SCHOOL_SECTIONS || {};

    _setText("ov-label",         label);
    _setText("ov-total-revenue", "₦" + formatAmount(summary.totalRevenue, true));
    _setText("ov-total-expenses","₦" + formatAmount(summary.totalExpenses, true));
    _setText("ov-net-profit",    "₦" + formatAmount(summary.netProfit, true));

    const profitEl = document.getElementById("ov-net-profit");
    if (profitEl) profitEl.style.color = summary.netProfit >= 0 ? "green" : "crimson";

    const sectionContainer = document.getElementById("ov-section-breakdown");
    if (sectionContainer) {
      sectionContainer.innerHTML = Object.entries(sections).map(([key, sec]) => {
        const s = RichVineDB.getFinancialSummary({ ...baseFilter, section: key });
        return `<div class="ov-section-card">
          <div class="ov-section-name"><i class="${sec.icon}"></i> ${sec.name}</div>
          <div class="ov-section-stats">
            <div class="ov-stat green"><div>Revenue</div><div class="ov-amount">₦${formatAmount(s.totalRevenue, true)}</div></div>
            <div class="ov-stat red"><div>Expenses</div><div class="ov-amount">₦${formatAmount(s.totalExpenses, true)}</div></div>
            <div class="ov-stat blue"><div>Profit</div><div class="ov-amount" style="color:${s.netProfit>=0?'#0080c8':'crimson'}">₦${formatAmount(s.netProfit, true)}</div></div>
          </div>
        </div>`;
      }).join("");
    }

    const feeContainer = document.getElementById("ov-fee-breakdown");
    if (feeContainer) {
      const feeCats = RichVineDB.getFeeCategories();
      const payments = RichVineDB.getPayments(baseFilter);
      feeContainer.innerHTML = feeCats.map(cat => {
        const catPayments = payments.filter(p => p.category === cat.id);
        const catTotal    = catPayments.reduce((s, p) => s + Number(p.amount), 0);
        if (catTotal === 0) return "";
        return `<div class="fee-row">
          <span>${cat.name}</span>
          <span style="font-weight:700;color:green">₦${formatAmount(catTotal, true)}</span>
          <span style="color:#888;font-size:12px">${catPayments.length} txn(s)</span>
        </div>`;
      }).join("") || "<p style='color:#888;text-align:center'>No revenue data for this period</p>";
    }
  }

  // ── STUDENT PROFILE MODAL ─────────────────────────────────────────────────
  function openStudentProfile(studentId) {
    const student  = RichVineDB.getStudentById(studentId);
    if (!student) return;
    const payments = RichVineDB.getPayments({ studentId });
    const section  = window.getSectionByClass?.(student.currentClass);
    const bal      = RichVineDB.getStudentBalance(studentId);

    _setText("profile-name",    student.firstName + " " + student.lastName);
    _setText("profile-reg",     student.regNo);
    _setText("profile-class",   student.currentClass);
    _setText("profile-section", section?.name || "—");
    _setText("profile-gender",  student.gender);
    _setText("profile-dob",     student.dob || "—");
    _setText("profile-parent",  student.parentName || "—");
    _setText("profile-phone",   student.parentPhone || "—");
    _setText("profile-email",   student.parentEmail || "—");
    _setText("profile-address", student.address || "—");
    _setText("profile-enrolled",student.enrolledDate);
    _setText("profile-status",  student.status);

    _setText("profile-term-expected", "₦" + formatAmount(student.termFee || 0, true));
    _setText("profile-school-fees-paid", "₦" + formatAmount(bal.termFeePaid || 0, true));
    _setText("profile-arrears-bal",   "₦" + formatAmount(bal.arrearsBalance, true));
    _setText("profile-term-bal",      "₦" + formatAmount(bal.termFeeBalance, true));
    _setText("profile-total-out",     "₦" + formatAmount(bal.totalOutstanding, true));
    _setText("profile-total-paid",    "₦" + formatAmount(bal.totalPaidAll, true));

    const imgEl = document.getElementById("profile-avatar");
    if (imgEl) imgEl.src = student.avatar || "https://via.placeholder.com/80";

    // Populate Class Fee Schedule for SSS 3 / JSS 3 in Profile Modal
    const profileScheduleEl = document.getElementById("profile-class-fee-schedule");
    if (profileScheduleEl) {
      const isSS3 = student.currentClass.includes("SSS 3");
      const isJSS3 = student.currentClass.includes("JSS 3");
      const specialCats = RichVineDB.getFeeCategories(student.currentClass).filter(c => c.forClass);

      if (isSS3 || isJSS3) {
        let scheduleItems = specialCats.map(cat => {
          const paidTxns = payments.filter(p => p.category === cat.id);
          const totalPaidForCat = paidTxns.reduce((s, p) => s + Number(p.amount), 0);
          const isPaid = totalPaidForCat > 0;
          const priceLabel = cat.defaultAmount ? `₦${cat.defaultAmount.toLocaleString()}` : 'Optional/Flexible';

          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:${isPaid ? '#ecfdf5' : '#f8fafc'};border:1px solid ${isPaid ? '#a7f3d0' : '#e2e8f0'};border-radius:8px;font-size:12.5px;margin-bottom:6px">
              <div style="display:flex;align-items:center;gap:8px">
                <i class="fas ${isPaid ? 'fa-check-circle text-emerald-600' : 'fa-clock text-slate-400'}" style="color:${isPaid ? '#10b981' : '#94a3b8'}"></i>
                <span style="font-weight:600;color:${isPaid ? '#065f46' : '#1e293b'}">${cat.name}</span>
                <span style="color:#64748b;font-size:11px">(${priceLabel})</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px">
                <span style="font-weight:700;color:${isPaid ? '#047857' : '#b91c1c'}">
                  ${isPaid ? `✓ Paid ₦${formatAmount(totalPaidForCat, true)}` : 'Pending'}
                </span>
                <button type="button" class="btn-sm" style="padding:3px 10px;font-size:11px;background:#0284c7;color:#fff;border:none;border-radius:6px;cursor:pointer" onclick="RichVineApp.closeModal('modal-student-profile'); RichVineApp.openRecordPayment('${student.id}'); setTimeout(() => RichVineApp.quickSelectPaymentCategory('${cat.id}'), 100);">Pay Now</button>
              </div>
            </div>`;
        }).join("");

        profileScheduleEl.innerHTML = `
          <div style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:10px;padding:12px 14px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <h4 style="font-size:13px;font-weight:700;color:#0369a1;margin:0">
                <i class="fas fa-tasks mr-1"></i> ${isSS3 ? 'SSS 3 Examination &amp; Logistics Fees Checklist' : 'JSS 3 BECE Examination Fees Checklist'}
              </h4>
              <span style="font-size:11px;color:#64748b">Direct Payment Action</span>
            </div>
            ${scheduleItems}
          </div>`;
      } else if (/day\s*care|creche/i.test(student.currentClass)) {
        const cycles = window.DAYCARE_BILLING_CYCLES || [];
        const scheduleItems = cycles.map(c => {
          const paidTxn = payments.find(p =>
            p.category === "daycare_fee" && (p.details?.month === c.label || p.details?.month === c.id || p.categoryName.includes(c.id))
          );
          const isPaid = !!paidTxn;
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:${isPaid ? '#ecfdf5' : '#f0f9ff'};border:1px solid ${isPaid ? '#a7f3d0' : '#bae6fd'};border-radius:8px;font-size:12.5px;margin-bottom:6px">
              <div style="display:flex;align-items:center;gap:8px">
                <i class="fas ${isPaid ? 'fa-check-circle text-emerald-600' : 'fa-calendar-alt text-sky-500'}" style="color:${isPaid ? '#10b981' : '#0284c7'}"></i>
                <div>
                  <span style="font-weight:700;color:${isPaid ? '#065f46' : '#0369a1'}">${c.id}</span>
                  <span style="color:#64748b;font-size:11px"> — ${c.shortLabel.replace(c.id + ' ', '')} [${c.term}]</span>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:10px">
                <span style="font-weight:700;color:${isPaid ? '#047857' : '#b91c1c'}">
                  ${isPaid ? `✓ Paid (₦${formatAmount(paidTxn.amount, true)})` : 'Pending'}
                </span>
                ${isPaid ? '' : `<button type="button" class="btn-sm" style="padding:3px 10px;font-size:11px;background:#0284c7;color:#fff;border:none;border-radius:6px;cursor:pointer" onclick="RichVineApp.closeModal('modal-student-profile'); RichVineApp.openRecordPayment('${student.id}'); setTimeout(() => RichVineApp.quickSelectDaycareCycle('${c.id}'), 100);">Pay Now</button>`}
              </div>
            </div>`;
        }).join("");

        profileScheduleEl.innerHTML = `
          <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:12px 14px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <h4 style="font-size:13px;font-weight:700;color:#0369a1;margin:0">
                <i class="fas fa-calendar-check mr-1"></i> Day Care Monthly Payment Tracker (14 Sep 2026 Resumption)
              </h4>
              <span style="font-size:11px;color:#0284c7">12-Month Session Billing Cycles</span>
            </div>
            ${scheduleItems}
          </div>`;
      } else {
        profileScheduleEl.innerHTML = "";
      }
    }

    const histContainer = document.getElementById("profile-payment-history");
    if (histContainer) {
      histContainer.innerHTML = payments.length ? payments.map(p => `
        <div class="profile-pay-row">
          <div>
            <b>${p.categoryName}</b> <span style="color:#888;font-size:12px">— ${p.date}</span>
            ${p.arrearsDeducted > 0 ? `<br><small style="color:#b45309">₦${formatAmount(p.arrearsDeducted, true)} applied to arrears</small>` : ''}
          </div>
          <div style="color:green;font-weight:700">₦${formatAmount(p.amount, true)}</div>
          <div style="display:flex;gap:4px">
            <button class="btn-icon btn-sm" onclick="RichVineReports.printReceipt('${p.id}')" title="Print"><i class="fas fa-print"></i></button>
            <button class="btn-icon btn-sm" style="color:#7c3aed" onclick="RichVineApp.closeModal('modal-student-profile');RichVineApp.openEditPaymentModal('${p.id}')" title="Edit"><i class="fas fa-edit"></i></button>
          </div>
        </div>`).join("") : `<div class="empty-state"><i class="fas fa-receipt"></i><p>No payment records yet</p></div>`;
    }

    document.getElementById("profile-btn-payment").onclick = () => {
      closeModal("modal-student-profile");
      openRecordPayment(studentId);
    };
    document.getElementById("profile-btn-statement").onclick = () => {
      RichVineReports.printStudentStatement(studentId);
    };
    const editProfileBtn = document.getElementById("profile-btn-edit");
    if (editProfileBtn) {
      editProfileBtn.onclick = () => {
        closeModal("modal-student-profile");
        openEditStudentModal(studentId);
      };
    }

    openModal("modal-student-profile");
  }

  // ── ENROLL NEW STUDENT MODAL ──────────────────────────────────────────────
  function openEnrollModal() {
    const form = document.getElementById("enroll-form");
    if (form) {
      form.reset();
      const paidSoFarEl = form.querySelector("#enroll-paid-so-far");
      if (paidSoFarEl) paidSoFarEl.value = "0.00";
      const fullyPaidChk = form.querySelector("#enroll-fully-paid");
      if (fullyPaidChk) fullyPaidChk.checked = false;
      const payDateEl = form.querySelector("#enroll-payment-date");
      if (payDateEl) payDateEl.value = new Date().toISOString().split("T")[0];
    }

    const classSel = document.getElementById("enroll-class");
    if (classSel) {
      classSel.innerHTML = `<option value="">— Select Class —</option>`;
      const sections = window.SCHOOL_SECTIONS || {};
      for (const [key, sec] of Object.entries(sections)) {
        const group = document.createElement("optgroup");
        group.label = sec.name;
        sec.classes.forEach(cls => {
          const opt = document.createElement("option");
          opt.value = cls; opt.textContent = cls;
          group.appendChild(opt);
        });
        classSel.appendChild(group);
      }
      classSel.onchange = () => {
        const termFeeInput = document.getElementById("enroll-term-fee");
        if (termFeeInput && classSel.value.includes("SSS 3")) {
          // If no custom amount is typed yet, suggest the official SSS 3 Term School Fee (₦37,500 for this term)
          if (!termFeeInput.value || parseAmount(termFeeInput.value) === 0) {
            termFeeInput.value = formatAmount(37500, true);
          }
        }
      };
    }
    openModal("modal-enroll");
  }

  function toggleFullyPaid(checkbox) {
    const termFeeInput = document.getElementById("enroll-term-fee");
    const arrearsInput = document.getElementById("enroll-arrears");
    const paidSoFarInput = document.getElementById("enroll-paid-so-far");
    if (checkbox.checked) {
      const termFee = parseAmount(termFeeInput?.value);
      const arrears = parseAmount(arrearsInput?.value);
      // If student has arrears and term fee, fully paid covers both!
      const totalRequired = termFee + arrears;
      if (paidSoFarInput) {
        paidSoFarInput.value = formatAmount(totalRequired, true);
      }
    }
  }

  function handleEnrollSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const termFeeRaw = form.querySelector("#enroll-term-fee")?.value;
    const arrearsRaw = form.querySelector("#enroll-arrears")?.value;
    const paidSoFarRaw = form.querySelector("#enroll-paid-so-far")?.value;
    const paymentDateRaw = form.querySelector("#enroll-payment-date")?.value;
    const fullyPaidChk = form.querySelector("#enroll-fully-paid")?.checked;

    const termFee = parseAmount(termFeeRaw);
    const arrears = parseAmount(arrearsRaw);
    let initialPaid = parseAmount(paidSoFarRaw);

    if (fullyPaidChk && initialPaid < (termFee + arrears)) {
      initialPaid = termFee + arrears;
    }

    const student = {
      firstName:   form.querySelector("#enroll-firstname").value.trim(),
      lastName:    form.querySelector("#enroll-lastname").value.trim(),
      gender:      form.querySelector("#enroll-gender").value,
      dob:         form.querySelector("#enroll-dob").value,
      currentClass:form.querySelector("#enroll-class").value,
      termFee:     termFee,
      arrears:     arrears,
      initialPaid: initialPaid,
      initialPaymentDate: paymentDateRaw || new Date().toISOString().split("T")[0],
      parentName:  form.querySelector("#enroll-parent-name").value.trim(),
      parentPhone: form.querySelector("#enroll-parent-phone").value.trim(),
      parentEmail: form.querySelector("#enroll-parent-email").value.trim(),
      address:     form.querySelector("#enroll-address").value.trim(),
      status:      "Active",
      avatar:      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=300&q=80"
    };

    if (!student.firstName || !student.lastName || !student.currentClass) {
      return alert("Please fill in first name, last name, and class.");
    }
    if (student.termFee <= 0) {
      if (!confirm("The learner's term school fee is set to ₦0. Proceed?")) return;
    }

    const saved = RichVineDB.addStudent(student);
    closeModal("modal-enroll");
    loadLearnersTab();
    loadDashboard();
    loadPaymentsTab();
    
    const paidMsg = initialPaid > 0 ? ` | Initial payment of ₦${formatAmount(initialPaid, true)} recorded` : "";
    showToast(`✓ ${saved.firstName} ${saved.lastName} enrolled! Term Fee: ₦${formatAmount(saved.termFee, true)}${paidMsg}`, "success");
  }

  // ── RECORD PAYMENT MODAL ──────────────────────────────────────────────────
  function openRecordPayment(studentId) {
    const student = RichVineDB.getStudentById(studentId);
    if (!student) return;

    const bal = RichVineDB.getStudentBalance(studentId);

    _setText("pay-modal-student-name",  student.firstName + " " + student.lastName);
    _setText("pay-modal-student-class", student.currentClass);
    _setText("pay-modal-student-reg",   student.regNo);

    const arrearsInfoEl = document.getElementById("pay-modal-arrears-info");
    if (arrearsInfoEl) {
      arrearsInfoEl.style.display = "block";
      arrearsInfoEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">
          <div><b>Arrears Outstanding:</b> <span style="color:#b45309;font-weight:700">₦${formatAmount(bal.arrearsBalance, true)}</span></div>
          <div><b>Term Fee Remaining:</b> <span style="color:#b91c1c;font-weight:700">₦${formatAmount(bal.termFeeBalance, true)}</span></div>
          <div><b>Total Remaining to Pay:</b> <span style="color:#6d28d9;font-weight:800">₦${formatAmount(bal.totalOutstanding, true)}</span></div>
        </div>
        ${bal.arrearsBalance > 0 ? `<div style="margin-top:6px;font-size:11.5px;color:#856404"><i class="fas fa-info-circle"></i> Note: For school fees, payments are automatically credited to outstanding arrears first before term fees.</div>` : ''}
      `;
    }

    // Class Fee Schedule & Payment Checklist for JSS 3 and SSS 3
    const classFeesContainer = document.getElementById("pay-modal-class-fees");
    if (classFeesContainer) {
      const isSS3 = student.currentClass.includes("SSS 3");
      const isJSS3 = student.currentClass.includes("JSS 3");
      const studentPayments = RichVineDB.getPayments({ studentId });
      const specialCats = RichVineDB.getFeeCategories(student.currentClass).filter(c => c.forClass);

      if (isSS3 || isJSS3) {
        let itemsHtml = specialCats.map(cat => {
          const paidTxns = studentPayments.filter(p => p.category === cat.id);
          const totalPaidForCat = paidTxns.reduce((s, p) => s + Number(p.amount), 0);
          const isPaid = totalPaidForCat > 0;
          const priceLabel = cat.defaultAmount ? `₦${cat.defaultAmount.toLocaleString()}` : 'Optional/Flexible';

          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:${isPaid ? '#ecfdf5' : '#fff'};border:1px solid ${isPaid ? '#a7f3d0' : '#e2e8f0'};border-radius:8px;font-size:12px;margin-bottom:5px">
              <div style="display:flex;align-items:center;gap:6px">
                <span style="color:${isPaid ? '#059669' : '#94a3b8'};font-size:13px"><i class="fas ${isPaid ? 'fa-check-circle' : 'fa-circle-notch'}"></i></span>
                <span style="font-weight:600;color:${isPaid ? '#065f46' : '#1e293b'}">${cat.name}</span>
                <span style="color:#64748b;font-size:11px">(${priceLabel})</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-weight:700;color:${isPaid ? '#059669' : '#dc2626'}">
                  ${isPaid ? `✓ Paid ₦${formatAmount(totalPaidForCat, true)}` : 'Pending'}
                </span>
                <button type="button" class="btn-sm" style="padding:2px 8px;font-size:10.5px;background:#0284c7;color:#fff;border:none;border-radius:5px;cursor:pointer" onclick="RichVineApp.quickSelectPaymentCategory('${cat.id}')">Select</button>
              </div>
            </div>`;
        }).join("");

        classFeesContainer.innerHTML = `
          <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;padding:10px 12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:11.5px;font-weight:700;color:#0369a1;text-transform:uppercase;letter-spacing:.5px">
                <i class="fas fa-clipboard-list mr-1"></i> ${isSS3 ? 'SSS 3 Examination &amp; Logistics Schedule' : 'JSS 3 BECE Fee Schedule'}
              </span>
              <span style="font-size:11px;color:#64748b">Click "Select" to quickly populate</span>
            </div>
            ${itemsHtml}
          </div>`;
      } else if (/day\s*care|creche/i.test(student.currentClass)) {
        const studentPayments = RichVineDB.getPayments({ studentId });
        const cycles = window.DAYCARE_BILLING_CYCLES || [];

        let itemsHtml = cycles.map(c => {
          const paidTxn = studentPayments.find(p =>
            p.category === "daycare_fee" && (p.details?.month === c.label || p.details?.month === c.id || p.categoryName.includes(c.id))
          );
          const isPaid = !!paidTxn;
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 9px;background:${isPaid ? '#ecfdf5' : '#fff'};border:1px solid ${isPaid ? '#a7f3d0' : '#e0f2fe'};border-radius:6px;font-size:11.5px">
              <div style="display:flex;align-items:center;gap:6px">
                <span style="color:${isPaid ? '#059669' : '#0284c7'};font-size:12px"><i class="fas ${isPaid ? 'fa-check-circle' : 'fa-calendar-alt'}"></i></span>
                <div>
                  <div style="font-weight:700;color:${isPaid ? '#065f46' : '#0369a1'}">${c.id}</div>
                  <div style="font-size:10px;color:#64748b">${c.shortLabel.replace(c.id + ' ', '')}</div>
                </div>
              </div>
              <div>
                ${isPaid
                  ? `<span style="font-weight:700;color:#059669;font-size:11px">✓ Paid</span>`
                  : `<button type="button" class="btn-sm" style="padding:2px 8px;font-size:10.5px;background:#0284c7;color:#fff;border:none;border-radius:5px;cursor:pointer" onclick="RichVineApp.quickSelectDaycareCycle('${c.id}')">Pay ${c.id}</button>`
                }
              </div>
            </div>`;
        }).join("");

        classFeesContainer.innerHTML = `
          <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:10px 12px;margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:11.5px;font-weight:700;color:#0369a1;text-transform:uppercase;letter-spacing:.5px">
                <i class="fas fa-calendar-check mr-1"></i> Day Care Monthly Cycles (14 Sep 2026 Resumption)
              </span>
              <span style="font-size:11px;color:#0284c7">Click "Pay" to record cycle payment</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
              ${itemsHtml}
            </div>
          </div>`;
      } else {
        classFeesContainer.innerHTML = "";
      }
    }

    const form = document.getElementById("payment-form");
    if (form) form.reset();
    document.getElementById("pay-student-id").value = studentId;

    const catSel = document.getElementById("pay-category");
    if (catSel) {
      const isSS3 = student.currentClass.includes("SSS 3");
      const isJSS3 = student.currentClass.includes("JSS 3");
      const isDayCare = /day\s*care|creche/i.test(student.currentClass);
      const cats = RichVineDB.getFeeCategories(student.currentClass);
      
      let html = `<option value="">— Select Fee Category —</option>`;
      const generalCats = cats.filter(c => !c.forClass);
      const jss3Cats = cats.filter(c => c.forClass === "JSS 3");
      const ss3Cats = cats.filter(c => c.forClass === "SSS 3");

      html += `<optgroup label="Standard School Fees">` +
        generalCats.map(c => `<option value="${c.id}" data-meta="${c.metaType || ''}">${c.name}</option>`).join("") +
        `</optgroup>`;

      if (jss3Cats.length > 0) {
        html += `<optgroup label="JSS 3 Examination &amp; Lesson Fees">` +
          jss3Cats.map(c => `<option value="${c.id}" data-meta="${c.metaType || ''}">📘 ${c.name}</option>`).join("") +
          `</optgroup>`;
      }

      if (ss3Cats.length > 0) {
        html += `<optgroup label="SSS 3 Senior Examination &amp; Logistics Fees">` +
          ss3Cats.map(c => {
            const priceTag = c.defaultAmount ? ` (₦${c.defaultAmount.toLocaleString()})` : '';
            return `<option value="${c.id}" data-meta="${c.metaType || ''}" data-amount="${c.defaultAmount || ''}">🎓 ${c.name}${priceTag}</option>`;
          }).join("") +
          `</optgroup>`;
      }

      catSel.innerHTML = html;
      catSel.onchange = () => _updatePaymentMeta(catSel);

      if (isDayCare) {
        catSel.value = "daycare_fee";
        _updatePaymentMeta(catSel);
      }
    }

    const dateEl = document.getElementById("pay-date");
    if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];

    openModal("modal-record-payment");
  }

  function _updatePaymentMeta(catSel) {
    const selected = catSel.options[catSel.selectedIndex];
    const metaType = selected?.dataset?.meta || "";
    const defaultAmt = selected?.dataset?.amount;
    const amountInput = document.getElementById("pay-amount");

    // Auto-populate official fee amount if defined (e.g. WAEC ₦65,000, NECO ₦60,000, etc.)
    if (defaultAmt && amountInput) {
      amountInput.value = formatAmount(Number(defaultAmt), true);
    }

    const metaContainer = document.getElementById("pay-meta-container");
    if (!metaContainer) return;

    if (metaType === "daycare") {
      const cycles = window.DAYCARE_BILLING_CYCLES || [];
      const today = new Date().toISOString().split("T")[0];
      const activeCycle = cycles.find(c => today >= c.startDate && today <= c.endDate) || cycles[0];

      const optionsHtml = cycles.map(c => {
        const isCurrent = c.id === activeCycle?.id;
        return `<option value="${c.label}" data-term="${c.term}" ${isCurrent ? 'selected' : ''}>${c.label} [${c.term}]</option>`;
      }).join("");

      metaContainer.innerHTML = `
        <label class="form-label" style="color:#0369a1;font-weight:700">📅 Daycare Monthly Billing Cycle <span style="color:red">*</span></label>
        <select class="form-control" id="pay-meta-daycare-month" required style="border-color:#7dd3fc;background:#f0f9ff;font-weight:600">
          <option value="">— Select Billing Cycle —</option>
          ${optionsHtml}
        </select>
        <div style="font-size:11.5px;color:#0369a1;margin-top:4px">
          <i class="fas fa-calendar-check"></i> <b>Resumption Cycle:</b> 14th of each month to 13th of next month (Resumed 14 Sep 2026).
        </div>`;

      // Auto-sync term selector with selected billing cycle
      const daycareMonthSel = document.getElementById("pay-meta-daycare-month");
      if (daycareMonthSel) {
        const syncTerm = () => {
          const opt = daycareMonthSel.options[daycareMonthSel.selectedIndex];
          const term = opt?.dataset?.term;
          const termSel = document.getElementById("pay-term");
          if (termSel && (term === "1st Term" || term === "2nd Term" || term === "3rd Term")) {
            termSel.value = term;
          }
        };
        daycareMonthSel.onchange = syncTerm;
        syncTerm();
      }
    } else if (metaType === "sport") {
      metaContainer.innerHTML = `
        <label class="form-label">Sport Wear Colour</label>
        <select class="form-control" id="pay-meta-sport-color" required>
          <option value="">Select Colour</option>
          ${["Blue","Red","Yellow","Green","White","Purple","Orange","Black"].map(c => `<option>${c}</option>`).join("")}
        </select>`;
    } else if (metaType === "exercise_books") {
      metaContainer.innerHTML = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label class="form-label">Book Type (Leaves)</label>
            <select class="form-control" id="pay-meta-leaves">
              ${["20 Leaves","40 Leaves","60 Leaves","80 Leaves","2A","2B","3B","Higher Education"].map(l => `<option>${l}</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" id="pay-meta-qty" min="1" value="1" required>
          </div>
        </div>`;
    } else if (metaType === "textbook") {
      metaContainer.innerHTML = `
        <label class="form-label">Subject / Book Title</label>
        <input type="text" class="form-control" id="pay-meta-textbook" placeholder="e.g. Further Mathematics, Biology..." required>`;
    } else if (metaType === "other_special") {
      metaContainer.innerHTML = `
        <label class="form-label">Fee Description / Specify Purpose</label>
        <input type="text" class="form-control" id="pay-meta-special-desc" placeholder="e.g. Graduation Gown, Valedictory Service, Special Project..." required>`;
    } else {
      metaContainer.innerHTML = "";
    }
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const studentId  = form.querySelector("#pay-student-id").value;
    const student    = RichVineDB.getStudentById(studentId);
    if (!student) return alert("Student not found.");

    const catSel     = form.querySelector("#pay-category");
    const selected   = catSel.options[catSel.selectedIndex];
    const metaType   = selected?.dataset?.meta || "";

    let details = {};
    if (metaType === "daycare") {
      const month = form.querySelector("#pay-meta-daycare-month")?.value;
      if (!month) return alert("Please select the month this Day Care / Creche payment covers.");
      details = { month };
    } else if (metaType === "sport") {
      const colour = form.querySelector("#pay-meta-sport-color")?.value;
      if (!colour) return alert("Please select a sport wear colour.");
      details = { colour };
    } else if (metaType === "exercise_books") {
      const leaves = form.querySelector("#pay-meta-leaves")?.value;
      const qty    = form.querySelector("#pay-meta-qty")?.value;
      details = { leaves, qty };
    } else if (metaType === "textbook") {
      const book = form.querySelector("#pay-meta-textbook")?.value;
      if (!book) return alert("Please enter the textbook title.");
      details = { bookTitle: book };
    } else if (metaType === "other_special") {
      const desc = form.querySelector("#pay-meta-special-desc")?.value;
      if (!desc) return alert("Please enter the fee description.");
      details = { description: desc };
    }

    const rawAmount = form.querySelector("#pay-amount").value;
    const amount = parseAmount(rawAmount);
    if (!amount || amount <= 0) return alert("Please enter a valid amount.");

    // For daycare, embed month into categoryName so it shows clearly on table/receipt
    const baseCatName = selected?.text || "";
    const displayCatName = (metaType === "daycare" && details.month)
      ? `${baseCatName} — ${details.month}`
      : baseCatName;

    const payment = {
      studentId,
      studentName:  `${student.firstName} ${student.lastName}`,
      studentClass: student.currentClass,
      category:     catSel.value,
      categoryName: displayCatName,
      amount,
      paymentMethod: form.querySelector("#pay-method").value,
      reference:     form.querySelector("#pay-reference")?.value || "",
      session:       "2026/2027",
      term:          form.querySelector("#pay-term").value,
      date:          form.querySelector("#pay-date").value,
      status:        "Confirmed",
      details
    };

    const saved = RichVineDB.addPayment(payment);
    closeModal("modal-record-payment");
    loadDashboard();
    loadPaymentsTab();
    loadLearnersTab();

    const arrearsMsg = saved.arrearsDeducted > 0
      ? ` | ₦${formatAmount(saved.arrearsDeducted, true)} applied to arrears, ₦${formatAmount(saved.termFeePaid, true)} to term fee`
      : "";
    showToast(`✓ Payment of ₦${formatAmount(amount, true)} recorded${arrearsMsg}`, "success");

    setTimeout(() => RichVineReports.printReceipt(saved.id), 600);
  }

  // ── LOG EXPENSE MODAL ─────────────────────────────────────────────────────
  function openLogExpenseModal() {
    const form = document.getElementById("expense-form");
    if (form) form.reset();
    const dateEl = document.getElementById("exp-date");
    if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];
    openModal("modal-log-expense");
  }

  function handleExpenseSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const rawAmount = form.querySelector("#exp-amount")?.value;
    const amount = parseAmount(rawAmount);

    const expense = {
      description: form.querySelector("#exp-description").value.trim(),
      category:    form.querySelector("#exp-category-input").value.trim(),
      amount,
      period:      form.querySelector("#exp-period").value,
      date:        form.querySelector("#exp-date").value,
      session:     "2026/2027",
      term:        form.querySelector("#exp-term").value,
      notes:       form.querySelector("#exp-notes").value.trim()
    };

    if (!expense.description || !expense.category || !expense.amount || !expense.period) {
      return alert("Please fill in all required fields.");
    }

    RichVineDB.addExpense(expense);
    closeModal("modal-log-expense");
    loadExpensesTab();
    loadOverviewTab();
    loadDashboard();
    showToast(`✓ Expense of ₦${formatAmount(expense.amount, true)} logged`, "success");
  }

  function confirmDeleteExpense(id) {
    if (confirm("Delete this expense record? This cannot be undone.")) {
      RichVineDB.deleteExpense(id);
      loadExpensesTab();
      loadOverviewTab();
      showToast("Expense deleted.", "warning");
    }
  }

  function confirmDeleteStudent(id) {
    const s = RichVineDB.getStudentById(id);
    if (!s) return;
    const payments = RichVineDB.getPayments({ studentId: id });
    const totalPaid = payments.reduce((sum, p) => sum + Number(p.amount), 0);
    const paymentWarning = payments.length > 0
      ? `\n\n⚠ WARNING: This will also permanently DELETE ${payments.length} payment record(s) totalling ₦${totalPaid.toLocaleString(undefined, {minimumFractionDigits:2})}, and deduct that amount from general revenue.\n\nThis action is IRREVERSIBLE and is only for error correction.`
      : '\n\nNo payment records are linked to this learner.';
    if (confirm(`Delete learner profile: ${s.firstName} ${s.lastName} (${s.regNo})?${paymentWarning}\n\nProceed with permanent deletion?`)) {
      RichVineDB.deleteStudent(id);
      loadLearnersTab();
      loadDashboard();
      loadPaymentsTab();
      loadOverviewTab();
      loadClassHub();
      showToast(`Learner ${s.firstName} ${s.lastName} and all their records permanently deleted.`, "warning");
    }
  }

  // ── HELPERS ───────────────────────────────────────────────────────────────
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
  }
  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  }
  function _setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }
  function _capitalise(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  }
  function _populateSectionFilter(selectId, defaultLabel) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = `<option value="All">${defaultLabel}</option>` +
      Object.entries(window.SCHOOL_SECTIONS || {}).map(([key, sec]) =>
        `<option value="${key}" ${current === key ? "selected" : ""}>${sec.name}</option>`
      ).join("");
  }
  function _populateClassFilter(selectId, sectionId, defaultLabel) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    const current = sel.value;
    const sections = window.SCHOOL_SECTIONS || {};
    let classes = [];
    if (sectionId && sectionId !== "All" && sections[sectionId]) {
      classes = sections[sectionId].classes;
    } else {
      classes = window.ALL_CLASSES || [];
    }
    sel.innerHTML = `<option value="All">${defaultLabel}</option>` +
      classes.map(c => `<option value="${c}" ${current === c ? "selected" : ""}>${c}</option>`).join("");
  }
  function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast toast-${type} show`;
    setTimeout(() => toast.classList.remove("show"), 3500);
  }

  // ── EDIT STUDENT MODAL ─────────────────────────────────────────────────
  function openEditStudentModal(studentId) {
    const s = RichVineDB.getStudentById(studentId);
    if (!s) return;
    const form = document.getElementById('edit-student-form');
    if (!form) return;
    form.querySelector('#edit-s-id').value = s.id;
    form.querySelector('#edit-s-firstname').value = s.firstName;
    form.querySelector('#edit-s-lastname').value = s.lastName;
    form.querySelector('#edit-s-gender').value = s.gender;
    form.querySelector('#edit-s-dob').value = s.dob || '';
    form.querySelector('#edit-s-parent-name').value = s.parentName || '';
    form.querySelector('#edit-s-parent-phone').value = s.parentPhone || '';
    form.querySelector('#edit-s-parent-email').value = s.parentEmail || '';
    form.querySelector('#edit-s-address').value = s.address || '';
    form.querySelector('#edit-s-status').value = s.status;
    // Populate class dropdown
    const classSel = form.querySelector('#edit-s-class');
    classSel.innerHTML = '';
    const sections = window.SCHOOL_SECTIONS || {};
    for (const [, sec] of Object.entries(sections)) {
      const group = document.createElement('optgroup');
      group.label = sec.name;
      sec.classes.forEach(cls => {
        const opt = document.createElement('option');
        opt.value = cls; opt.textContent = cls;
        if (cls === s.currentClass) opt.selected = true;
        group.appendChild(opt);
      });
      classSel.appendChild(group);
    }
    // Term fee & arrears
    form.querySelector('#edit-s-term-fee').value = formatAmount(s.termFee || 0, true);
    form.querySelector('#edit-s-arrears').value = formatAmount(s.arrears || 0, true);
    bindCurrencyInput(form.querySelector('#edit-s-term-fee'));
    bindCurrencyInput(form.querySelector('#edit-s-arrears'));
    openModal('modal-edit-student');
  }

  function handleEditStudentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const id = form.querySelector('#edit-s-id').value;
    const fields = {
      firstName:   form.querySelector('#edit-s-firstname').value.trim(),
      lastName:    form.querySelector('#edit-s-lastname').value.trim(),
      gender:      form.querySelector('#edit-s-gender').value,
      dob:         form.querySelector('#edit-s-dob').value,
      currentClass:form.querySelector('#edit-s-class').value,
      parentName:  form.querySelector('#edit-s-parent-name').value.trim(),
      parentPhone: form.querySelector('#edit-s-parent-phone').value.trim(),
      parentEmail: form.querySelector('#edit-s-parent-email').value.trim(),
      address:     form.querySelector('#edit-s-address').value.trim(),
      status:      form.querySelector('#edit-s-status').value,
      termFee:     parseAmount(form.querySelector('#edit-s-term-fee').value),
      arrears:     parseAmount(form.querySelector('#edit-s-arrears').value)
    };
    if (!fields.firstName || !fields.lastName || !fields.currentClass) {
      return alert('First name, last name, and class are required.');
    }
    RichVineDB.updateStudent(id, fields);
    closeModal('modal-edit-student');
    loadLearnersTab();
    loadDashboard();
    showToast(`✓ Profile updated for ${fields.firstName} ${fields.lastName}`, 'success');
  }

  // ── EDIT PAYMENT MODAL ─────────────────────────────────────────────────
  function openEditPaymentModal(paymentId) {
    const payments = RichVineDB.getPayments();
    const p = payments.find(x => x.id === paymentId);
    if (!p) return;
    const form = document.getElementById('edit-payment-form');
    if (!form) return;
    form.querySelector('#edit-pay-id').value = p.id;
    form.querySelector('#edit-pay-student-info').textContent = `${p.studentName} · ${p.studentClass} · ${p.receiptNo}`;
    form.querySelector('#edit-pay-amount').value = formatAmount(p.amount, true);
    form.querySelector('#edit-pay-date').value = p.date;
    form.querySelector('#edit-pay-method').value = p.paymentMethod;
    form.querySelector('#edit-pay-reference').value = p.reference || '';
    form.querySelector('#edit-pay-term').value = p.term || '1st Term';
    // Category select
    const catSel = form.querySelector('#edit-pay-category');
    const cats = RichVineDB.getFeeCategories();
    catSel.innerHTML = cats.map(c => `<option value="${c.id}" ${c.id===p.category?'selected':''}>${c.name}</option>`).join('');
    
    // Daycare month support in edit modal
    const daycareRow = form.querySelector('#edit-pay-daycare-row');
    const monthSel = form.querySelector('#edit-pay-month');
    if (monthSel && window.DAYCARE_BILLING_CYCLES) {
      monthSel.innerHTML = '<option value="">— Select Billing Cycle —</option>' +
        window.DAYCARE_BILLING_CYCLES.map(c => `<option value="${c.label}">${c.label} [${c.term}]</option>`).join('');
    }
    function updateEditDaycareRow() {
      const isDaycare = catSel.value === 'daycare_fee';
      if (daycareRow) daycareRow.style.display = isDaycare ? 'block' : 'none';
    }
    catSel.onchange = updateEditDaycareRow;
    if (monthSel) monthSel.value = p.details?.month || '';
    updateEditDaycareRow();

    bindCurrencyInput(form.querySelector('#edit-pay-amount'));
    openModal('modal-edit-payment');
  }

  function handleEditPaymentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const id = form.querySelector('#edit-pay-id').value;
    const catSel = form.querySelector('#edit-pay-category');
    const catId = catSel.value;
    const baseCatName = catSel.options[catSel.selectedIndex]?.text || '';
    let finalCatName = baseCatName;
    let details = {};

    if (catId === 'daycare_fee') {
      const month = form.querySelector('#edit-pay-month')?.value;
      if (month) {
        details.month = month;
        finalCatName = `${baseCatName} — ${month}`;
      }
    }

    const fields = {
      amount:        parseAmount(form.querySelector('#edit-pay-amount').value),
      category:      catId,
      categoryName:  finalCatName,
      paymentMethod: form.querySelector('#edit-pay-method').value,
      date:          form.querySelector('#edit-pay-date').value,
      reference:     form.querySelector('#edit-pay-reference').value.trim(),
      term:          form.querySelector('#edit-pay-term').value,
      ...(details.month ? { details } : {})
    };
    if (!fields.amount || fields.amount <= 0) return alert('Please enter a valid amount.');
    if (!fields.date) return alert('Please enter a valid date.');
    RichVineDB.updatePayment(id, fields);
    closeModal('modal-edit-payment');
    loadPaymentsTab();
    loadLearnersTab();
    loadDashboard();
    loadOverviewTab();
    loadClassHub();
    showToast(`✓ Payment record corrected successfully`, 'success');
  }

  function quickSelectPaymentCategory(categoryId) {
    const catSel = document.getElementById("pay-category");
    if (!catSel) return;
    catSel.value = categoryId;
    _updatePaymentMeta(catSel);
    const amountInput = document.getElementById("pay-amount");
    if (amountInput) amountInput.focus();
  }

  function quickSelectDaycareCycle(cycleId) {
    const catSel = document.getElementById("pay-category");
    if (!catSel) return;
    catSel.value = "daycare_fee";
    _updatePaymentMeta(catSel);
    setTimeout(() => {
      const monthSel = document.getElementById("pay-meta-daycare-month");
      const cycles = window.DAYCARE_BILLING_CYCLES || [];
      const cycle = cycles.find(c => c.id === cycleId);
      if (monthSel && cycle) {
        monthSel.value = cycle.label;
        const termSel = document.getElementById("pay-term");
        if (termSel && (cycle.term === "1st Term" || cycle.term === "2nd Term" || cycle.term === "3rd Term")) {
          termSel.value = cycle.term;
        }
      }
      const amountInput = document.getElementById("pay-amount");
      if (amountInput) amountInput.focus();
    }, 60);
  }

  async function manualCloudSync() {
    if (window.RichVineFirebase && window.RichVineFirebase.syncWithCloud) {
      showToast("Syncing with cloud...", "warning");
      await window.RichVineFirebase.syncWithCloud();
      showToast("✓ Cloud Synced! All records up to date across all devices.", "success");
    } else {
      showToast("Cloud connection in progress. Please check internet connection.", "warning");
    }
  }

  return {
    init,
    switchTab,
    refreshCurrentTab,
    manualCloudSync,
    openStudentProfile,
    openEnrollModal,
    openRecordPayment,
    quickSelectPaymentCategory,
    quickSelectDaycareCycle,
    openEditStudentModal,
    handleEditStudentSubmit,
    openEditPaymentModal,
    handleEditPaymentSubmit,
    openLogExpenseModal,
    openClassDetail,
    confirmDeleteStudent,
    confirmDeleteExpense,
    handleEnrollSubmit,
    handlePaymentSubmit,
    handleExpenseSubmit,
    loadDashboard,
    loadLearnersTab,
    loadClassHub,
    loadPaymentsTab,
    loadReportsTab,
    onCatReportSectionChange,
    loadExpensesTab,
    loadOverviewTab,
    closeModal,
    toggleFullyPaid,
    parseAmount,
    formatAmount
  };
})();

window.addEventListener("DOMContentLoaded", () => RichVineApp.init());
