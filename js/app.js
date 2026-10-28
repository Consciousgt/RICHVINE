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
    const confirmEl = document.getElementById("modal-confirm");
    if (confirmEl) {
      confirmEl.classList.add("hidden");
      confirmEl.style.setProperty("display", "none", "important");
    }
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
    const sidebarBackdrop = document.getElementById("sidebar-backdrop");
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("open");
        if (sidebarBackdrop) sidebarBackdrop.classList.toggle("show", isOpen);
      });
    }
    // Close sidebar when a nav item is tapped on mobile
    document.querySelectorAll("#sidebar nav button").forEach(btn => {
      btn.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("open");
          if (sidebarBackdrop) sidebarBackdrop.classList.remove("show");
        }
      });
    });

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
        const confirmEl = document.getElementById("modal-confirm");
        if (confirmEl) {
          confirmEl.classList.add("hidden");
          confirmEl.style.setProperty("display", "none", "important");
        }
      }
    });

    // Initialize Active Live Clock Ticker
    _startLiveClock();

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
    else if (tab === "clearance") loadClearanceTab();
    else if (tab === "payments") loadPaymentsTab();
    else if (tab === "reports") loadReportsTab();
    else if (tab === "expenses") loadExpensesTab();
    else if (tab === "overview") loadOverviewTab();
    else if (tab === "stocks") loadStocksTab();
    else if (tab === "cbt-assessment") loadCbtAssessmentTab();

    const sidebar = document.getElementById("sidebar");
    if (sidebar && window.innerWidth < 768) {
      sidebar.classList.remove("open");
      const bd = document.getElementById("sidebar-backdrop");
      if (bd) bd.classList.remove("show");
    }
    // Update page title in header
    const titles = {
      dashboard: "Dashboard", overview: "P&L Overview", learners: "All Learners",
      "class-hub": "Class Hub", clearance: "Clearance", payments: "Payments",
      expenses: "Expenses", stocks: "Stock Inventory", reports: "Reports", "cbt-assessment": "CBT Assessment"
    };
    const titleEl = document.getElementById("page-title");
    if (titleEl && titles[tab]) titleEl.textContent = titles[tab];
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
    const pendingList = [];
    students.forEach(s => {
      const b = RichVineDB.getStudentBalance(s.id);
      if (b) {
        totalArrearsPending += b.arrearsBalance;
        totalTermFeePending += b.termFeeBalance;
        if (b.totalOutstanding > 0) {
          pendingList.push(b);
        }
      }
    });

    const fin = RichVineDB.getFinancialSummary();

    _setText("dash-total-students",          students.length);
    _setText("dash-total-revenue",           "₦" + formatAmount(fin.totalRevenue, true));
    _setText("dash-total-term-fees-paid",    "₦" + formatAmount(fin.totalTermFeesPaid, true));
    _setText("dash-total-arrears-recovered", "₦" + formatAmount(fin.totalArrearsRecovered, true));
    _setText("dash-total-other-fees-paid",   "₦" + formatAmount(fin.totalOtherFeesPaid, true));
    _setText("dash-total-expenses",          "₦" + formatAmount(fin.totalExpenses, true));
    _setText("dash-net-profit",              "₦" + formatAmount(fin.netProfit, true));
    _setText("dash-session",                 config.currentSession + " — " + config.currentTerm);
    _setText("dash-total-arrears-sum",       "₦" + formatAmount(totalArrearsPending, true));
    _setText("dash-total-term-sum",          "₦" + formatAmount(totalTermFeePending, true));

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
    checkStockAlerts();
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

  // ── CLEARANCE TAB (EXAMINATION PASSES) ────────────────────────────────────
  function onClearanceSectionChange() {
    const secVal = document.getElementById("clearance-section-filter")?.value || "All";
    _populateClassFilter("clearance-class-filter", secVal, "All Classes");
    const classSel = document.getElementById("clearance-class-filter");
    if (classSel) classSel.value = "All";
    loadClearanceTab();
  }

  function loadClearanceTab() {
    const secFilterEl    = document.getElementById("clearance-section-filter");
    const classFilterEl  = document.getElementById("clearance-class-filter");
    const statusFilterEl = document.getElementById("clearance-status-filter");
    const searchInputEl  = document.getElementById("clearance-search");

    const sectionFilter = secFilterEl?.value || "All";
    const classFilter   = classFilterEl?.value || "All";
    const statusFilter  = statusFilterEl?.value || "all";
    const searchInput   = (searchInputEl?.value || "").toLowerCase().trim();

    _populateSectionFilter("clearance-section-filter", "All Sections");
    _populateClassFilter("clearance-class-filter", sectionFilter, "All Classes");

    const allStudents = (window.RichVineDB ? window.RichVineDB.getStudents() : RichVineDB.getStudents()) || [];

    // Calculate balances for all students safely with zero null risk
    let totalClearedCount = 0;
    let totalPendingCount = 0;
    const studentDataList = allStudents.map(s => {
      const bal = (window.RichVineDB ? window.RichVineDB.getStudentBalance(s.id) : RichVineDB.getStudentBalance(s.id)) || {
        termFeeExpected: 0,
        termFeePaid: 0,
        termFeeBalance: 0,
        arrearsBalance: 0,
        totalOutstanding: 0,
        totalPaidAll: 0
      };
      const isCleared = (bal.totalOutstanding <= 0);
      if (isCleared) totalClearedCount++;
      else totalPendingCount++;
      return { student: s, balance: bal, isCleared };
    });

    // Update Clearance KPI Stats
    const totalCount = allStudents.length;
    const rate = totalCount > 0 ? Math.round((totalClearedCount / totalCount) * 100) : 0;
    _setText("clearance-stat-total", totalCount);
    _setText("clearance-stat-cleared", totalClearedCount);
    _setText("clearance-stat-pending", totalPendingCount);
    _setText("clearance-stat-rate", `${rate}%`);

    // Apply Filters
    let filtered = studentDataList;

    if (sectionFilter !== "All") {
      filtered = filtered.filter(item => {
        const sec = (window.getSectionByClass && window.getSectionByClass(item.student.currentClass)) || null;
        const studentSecId = item.student.section || sec?.id || "";
        const studentSecName = sec?.name || "";
        return studentSecId === sectionFilter || studentSecName === sectionFilter;
      });
    }

    if (classFilter !== "All") {
      filtered = filtered.filter(item => item.student.currentClass === classFilter);
    }

    if (statusFilter === "cleared") {
      filtered = filtered.filter(item => item.isCleared);
    } else if (statusFilter === "pending") {
      filtered = filtered.filter(item => !item.isCleared);
    }

    if (searchInput) {
      filtered = filtered.filter(item => {
        const str = `${item.student.firstName} ${item.student.lastName} ${item.student.regNo} ${item.student.currentClass}`.toLowerCase();
        return str.includes(searchInput);
      });
    }

    _setText("clearance-count-label", `Showing ${filtered.length} of ${totalCount} learner(s)`);

    const tbody = document.getElementById("clearance-table-body");
    if (!tbody) return;

    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="10" class="empty-cell" style="padding:28px">
        <i class="fas fa-id-card" style="font-size:28px;color:#cbd5e1;display:block;margin-bottom:8px"></i>
        No learners found matching the selected filter criteria.
        ${statusFilter !== 'all' ? '<br><button type="button" class="btn-sm btn-secondary" style="margin-top:8px" onclick="document.getElementById(\'clearance-status-filter\').value=\'all\';RichVineApp.loadClearanceTab()"><i class="fas fa-users"></i> View All Learners</button>' : ''}
      </td></tr>`;
      updateClearanceSelectionCount();
      return;
    }

    tbody.innerHTML = filtered.map(item => {
      const s = item.student;
      const bal = item.balance;
      const isCleared = item.isCleared;
      const secName = (window.getSectionByClass?.(s.currentClass)?.name) || "—";
      const avatarSrc = s.avatar || "https://via.placeholder.com/38";

      return `<tr>
        <td style="text-align:center">
          <input type="checkbox" class="clearance-chk" value="${s.id}" data-cleared="${isCleared ? '1' : '0'}" ${isCleared ? 'checked' : ''} onchange="RichVineApp.updateClearanceSelectionCount()" style="cursor:pointer;width:16px;height:16px">
        </td>
        <td>
          <img src="${avatarSrc}" class="student-avatar-sm" alt="Learner">
          <span style="font-family:monospace;font-weight:700;font-size:12px">${s.regNo || '—'}</span>
        </td>
        <td>
          <a href="javascript:void(0)" onclick="RichVineApp.openStudentProfile('${s.id}')" style="font-weight:700;color:#0f172a;text-decoration:none">
            ${s.firstName} ${s.lastName}
          </a>
        </td>
        <td><span class="class-badge" style="background:#e0f2fe;color:#0369a1;font-weight:700">${s.currentClass}</span></td>
        <td><span style="font-size:12px;color:#64748b">${secName}</span></td>
        <td style="font-weight:600">₦${formatAmount(s.termFee || 0, true)}</td>
        <td style="font-weight:700;color:#059669">₦${formatAmount(bal.termFeePaid || 0, true)}</td>
        <td style="font-weight:700;color:${isCleared ? 'green' : '#b91c1c'}">
          ${isCleared ? '✓ ₦0.00' : '₦' + formatAmount(bal.totalOutstanding, true)}
        </td>
        <td>
          ${isCleared
            ? `<span class="badge" style="background:#dcfce7;color:#15803d;font-weight:700;padding:4px 8px;border-radius:12px;font-size:11px;display:inline-flex;align-items:center;gap:4px">
                <i class="fas fa-check-circle"></i> 100% Cleared
               </span>`
            : `<span class="badge" style="background:#fee2e2;color:#b91c1c;font-weight:700;padding:4px 8px;border-radius:12px;font-size:11px;display:inline-flex;align-items:center;gap:4px">
                <i class="fas fa-exclamation-triangle"></i> ₦${formatAmount(bal.totalOutstanding, true)} Pending
               </span>`
          }
        </td>
        <td>
          <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap">
            <button type="button" class="btn-sm btn-primary" style="padding:4px 9px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:4px" onclick="RichVineApp.printSingleClearancePass('${s.id}')" title="Print Examination Pass">
              <i class="fas fa-print"></i> Pass
            </button>
            ${!isCleared
              ? `<button type="button" class="btn-sm btn-secondary" style="padding:4px 8px;font-size:11px;background:#fff5f5;color:#dc2626;border-color:#fecaca;font-weight:700;display:inline-flex;align-items:center;gap:3px" onclick="RichVineApp.printSingleFeeReminder('${s.id}')" title="Print 1-Week Ultimatum Reminder Slip">
                  <i class="fas fa-bell"></i> Reminder
                 </button>
                 <button type="button" class="btn-sm btn-secondary" style="padding:4px 8px;font-size:11px" onclick="RichVineApp.openRecordPayment('${s.id}')" title="Record Payment">
                  <i class="fas fa-plus"></i> Pay
                 </button>`
              : ''
            }
          </div>
        </td>
      </tr>`;
    }).join("");

    updateClearanceSelectionCount();
  }

  function updateClearanceSelectionCount() {
    const checked = document.querySelectorAll(".clearance-chk:checked");
    const count = checked ? checked.length : 0;
    const badge = document.getElementById("clearance-selected-badge");
    if (badge) badge.textContent = `${count} selected`;

    const allChks = document.querySelectorAll(".clearance-chk");
    const master = document.getElementById("clearance-master-chk");
    if (master && allChks.length > 0) {
      master.checked = count === allChks.length;
      master.indeterminate = count > 0 && count < allChks.length;
    }
  }

  function toggleSelectAllClearance(checked) {
    document.querySelectorAll(".clearance-chk").forEach(chk => {
      chk.checked = !!checked;
    });
    updateClearanceSelectionCount();
  }

  function selectClearedOnly() {
    document.querySelectorAll(".clearance-chk").forEach(chk => {
      chk.checked = chk.getAttribute("data-cleared") === "1";
    });
    updateClearanceSelectionCount();
  }

  function selectPendingOnly() {
    document.querySelectorAll(".clearance-chk").forEach(chk => {
      chk.checked = chk.getAttribute("data-cleared") === "0";
    });
    updateClearanceSelectionCount();
  }

  function printSelectedClearancePasses() {
    const checkedBoxes = document.querySelectorAll(".clearance-chk:checked");
    let selectedIds = Array.from(checkedBoxes).map(chk => chk.value);

    // If nothing explicitly checked, check if there are cleared students shown in current table
    if (!selectedIds.length) {
      const clearedChks = document.querySelectorAll('.clearance-chk[data-cleared="1"]');
      if (clearedChks.length > 0) {
        selectedIds = Array.from(clearedChks).map(chk => chk.value);
        clearedChks.forEach(c => { c.checked = true; });
        updateClearanceSelectionCount();
      }
    }

    // If still no students checked, ask whether to select all shown
    if (!selectedIds.length) {
      const allChks = document.querySelectorAll(".clearance-chk");
      if (allChks.length > 0) {
          // Auto-select all shown learners when none checked
          selectedIds = Array.from(allChks).map(chk => chk.value);
          allChks.forEach(c => { c.checked = true; });
          updateClearanceSelectionCount();
          showToast(`Auto-selected all ${selectedIds.length} learners shown.`, 'success', 2000);
      } else {
        return showAlert("No learners available in the list to print examination passes. Try changing your filters.");
      }
    }

    const students = selectedIds
      .map(id => RichVineDB.getStudentById(id))
      .filter(Boolean);

    if (!students.length) {
      return showAlert("No valid learner records found for printing.");
    }

    const forceSeparateClassSheets = document.getElementById("clearance-paper-saver")?.checked === false;

    RichVineReports.printExamClearancePasses(students, { forceSeparateClassSheets });
  }

  function printSingleClearancePass(studentId) {
    const student = RichVineDB.getStudentById(studentId);
    if (!student) return showAlert("Student record not found.");
    const bal = RichVineDB.getStudentBalance(studentId);
    if (bal && bal.totalOutstanding > 0) {
      showToast(`⚠️ Note: ${student.firstName} has ₦${formatAmount(bal.totalOutstanding, true)} outstanding — clearance issued by admin.`, 'warning', 4000);
    }
    RichVineReports.printExamClearancePasses([student], { forceSeparateClassSheets: false });
  }

  function printSelectedFeeReminders() {
    const checkedBoxes = document.querySelectorAll(".clearance-chk:checked");
    let selectedIds = Array.from(checkedBoxes).map(chk => chk.value);

    // If nothing checked, check if there are pending debtors visible in the current table view
    if (!selectedIds.length) {
      const pendingChks = document.querySelectorAll('.clearance-chk[data-cleared="0"]');
      if (pendingChks.length > 0) {
        selectedIds = Array.from(pendingChks).map(chk => chk.value);
        pendingChks.forEach(c => { c.checked = true; });
        updateClearanceSelectionCount();
      }
    }

    // If still none, check all debtors in the whole school database
    if (!selectedIds.length) {
      const allStudents = RichVineDB.getStudents() || [];
      const debtors = allStudents.filter(s => {
        const bal = RichVineDB.getStudentBalance(s.id);
        return bal && bal.totalOutstanding > 0;
      });
      if (debtors.length > 0) {
          // Auto-select all debtors when none checked
          selectedIds = debtors.map(s => s.id);
          showToast(`Auto-selected all ${debtors.length} learner(s) with outstanding balance.`, 'success', 2000);
      } else {
        return showAlert("There are currently no learners with an outstanding balance. Everyone is 100% cleared!");
      }
    }

    const students = selectedIds
      .map(id => RichVineDB.getStudentById(id))
      .filter(Boolean);

    if (!students.length) {
      return showAlert("No valid learner records found for reminder printing.");
    }

    // Filter to learners with an actual outstanding balance
    const debtorsToPrint = students.filter(s => {
      const bal = RichVineDB.getStudentBalance(s.id);
      return bal && bal.totalOutstanding > 0;
    });

    if (!debtorsToPrint.length) {
      return showAlert("All selected learners are fully cleared! There are no outstanding balances to send reminders for.");
    }

    const forceSeparateClassSheets = document.getElementById("clearance-paper-saver")?.checked === false;

    RichVineReports.printFeeReminders(debtorsToPrint, { forceSeparateClassSheets });
  }

  function printSingleFeeReminder(studentId) {
    const student = RichVineDB.getStudentById(studentId);
    if (!student) return showAlert("Student record not found.");
    const bal = RichVineDB.getStudentBalance(studentId);
    if (bal && bal.totalOutstanding <= 0) {
      return showAlert(`${student.firstName} ${student.lastName} has no outstanding balance. Their fees are 100% cleared!`);
    }
    RichVineReports.printFeeReminders([student], { forceSeparateClassSheets: false });
  }

  // ── PAYMENTS TAB ──────────────────────────────────────────────────────────
  function loadPaymentsTab() {
    const sectionFilter  = document.getElementById("pay-section-filter")?.value  || "All";
    const classFilter    = document.getElementById("pay-class-filter")?.value    || "All";
    const categoryFilter = document.getElementById("pay-category-filter")?.value || "All";
    const timeframeFilter= document.getElementById("pay-timeframe-export")?.value || "all";
    const searchInput    = document.getElementById("pay-search")?.value.toLowerCase().trim() || "";

    _populateSectionFilter("pay-section-filter", "All Sections");
    _populateClassFilter("pay-class-filter", sectionFilter, "All Classes");
    _populateCategoryFilter("pay-category-filter", "All Categories");

    const { startDate, endDate } = RichVineReports.getDateRange(timeframeFilter);
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionFilter  !== "All" ? { section: sectionFilter }   : {}),
      ...(classFilter    !== "All" ? { class: classFilter }       : {}),
      ...(categoryFilter !== "All" ? { category: categoryFilter } : {})
    };

    let payments = RichVineDB.getPayments(filter);
    if (searchInput) {
      payments = payments.filter(p =>
        `${p.studentName} ${p.receiptNo} ${p.categoryName} ${p.description || ''}`.toLowerCase().includes(searchInput)
      );
    }

    const isSpecificCat = categoryFilter !== "All";
    const getCatAmount = (p, catId) => {
      if (Array.isArray(p.items) && p.items.length > 0) {
        return p.items.filter(it => it.category === catId).reduce((s, it) => s + (Number(it.amount) || 0), 0);
      }
      return p.category === catId ? (Number(p.amount) || 0) : 0;
    };

    let total = 0;
    let totalTermPaid = 0;
    let totalArrRec = 0;
    let totalOtherPaid = 0;

    if (isSpecificCat) {
      total = payments.reduce((s, p) => s + getCatAmount(p, categoryFilter), 0);
      const catObj = (RichVineDB.getFeeCategories() || []).find(c => c.id === categoryFilter);
      const catName = catObj ? catObj.name : categoryFilter;
      _setText("pay-total-shown", `${catName} Total: ₦${formatAmount(total, true)} (${payments.length} receipt${payments.length === 1 ? '' : 's'})`);
    } else {
      total = payments.reduce((s, p) => s + (Number(p.amount) || 0), 0);
      payments.forEach(p => {
        const b = RichVineDB.getPaymentBreakdown(p);
        totalTermPaid += b.termFeePaid;
        totalArrRec   += b.arrearsRecovered;
        totalOtherPaid += b.otherFeesPaid;
      });
      _setText("pay-total-shown", `Total: ₦${formatAmount(total, true)} (${payments.length} receipts) · Term Fees: ₦${formatAmount(totalTermPaid, true)} · Arrears Recovered: ₦${formatAmount(totalArrRec, true)} · Other Fees: ₦${formatAmount(totalOtherPaid, true)}`);
    }

    const tbody = document.getElementById("payments-table-body");
    if (!tbody) return;
    tbody.innerHTML = payments.length ? payments.map(p => {
      const b = RichVineDB.getPaymentBreakdown(p);
      let catDisplay = p.categoryName;
      let descDisplay = p.description;
      let amtDisplay = p.amount;

      if (isSpecificCat) {
        amtDisplay = getCatAmount(p, categoryFilter);
        const matchingItem = Array.isArray(p.items) ? p.items.find(it => it.category === categoryFilter) : null;
        if (matchingItem) {
          catDisplay = matchingItem.categoryName || catDisplay;
          descDisplay = matchingItem.description || descDisplay;
        }
      }

      return `<tr>
        <td><b>${p.receiptNo}</b></td>
        <td>${p.date}</td>
        <td>${p.studentName}</td>
        <td>${p.studentClass}</td>
        <td>
          <div style="font-weight:700;color:#0f172a">${catDisplay}</div>
          ${descDisplay ? `<div style="font-size:11.5px;color:#475569;margin-top:2px"><i class="fas fa-tag" style="font-size:9.5px;color:var(--sky)"></i> ${descDisplay}</div>` : ''}
          ${Array.isArray(p.items) && p.items.length > 1 ? `<span class="badge" style="background:#e0e7ff;color:#4338ca;font-size:10px;padding:2px 7px;border-radius:10px;margin-top:3px;display:inline-block"><i class="fas fa-receipt"></i> ${p.items.length} items on receipt</span>` : ''}
          ${!isSpecificCat && b.otherFeesPaid > 0 ? `<span class="badge" style="background:#f3e8ff;color:#7c3aed;font-size:10px;padding:2px 7px;border-radius:10px;margin-top:3px;margin-left:3px;display:inline-block"><i class="fas fa-tshirt"></i> Other Fee: ₦${formatAmount(b.otherFeesPaid, true)}</span>` : ''}
        </td>
        <td style="color:green;font-weight:700">
          ₦${formatAmount(amtDisplay, true)}
          ${isSpecificCat && Array.isArray(p.items) && p.items.length > 1 ? `<br><small style="color:#64748b;font-weight:400;font-size:10px">Receipt Total: ₦${formatAmount(p.amount, true)}</small>` : ''}
        </td>
        <td style="${b.arrearsRecovered > 0 ? 'color:#b45309;font-weight:700' : ''}">${b.arrearsRecovered > 0 ? "₦" + formatAmount(b.arrearsRecovered, true) : "—"}</td>
        <td style="${b.termFeePaid > 0 ? 'color:green;font-weight:600' : ''}">${b.termFeePaid > 0 ? "₦" + formatAmount(b.termFeePaid, true) : "—"}</td>
        <td>${p.paymentMethod}</td>
        <td>
          <button class="btn-icon" onclick="RichVineReports.printReceipt('${p.id}')" title="Print Receipt"><i class="fas fa-print"></i></button>
          <button class="btn-icon" style="color:#7c3aed" onclick="RichVineApp.openEditPaymentModal('${p.id}')" title="Correct Payment"><i class="fas fa-edit"></i></button>
          <button class="btn-icon btn-danger" onclick="RichVineApp.confirmDeletePayment('${p.id}')" title="Delete Payment"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="10" class="empty-cell">No payment records logged yet.</td></tr>`;
  }

  // ── REPORTS TAB ───────────────────────────────────────────────────────────
  function loadReportsTab() {
    _populateSectionFilter("report-section-filter", "All Sections");
    _populateClassFilter("report-class-filter",
      document.getElementById("report-section-filter")?.value || "All", "All Classes");
    _populateCategoryFilter("report-category-filter", "All Categories");

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
    const periodFilter    = document.getElementById("exp-period-filter")?.value    || "All";
    const categoryFilter  = document.getElementById("exp-category-filter")?.value  || "All";
    const sectionFilter   = document.getElementById("exp-section-filter")?.value   || "All";
    const timeframeFilter = document.getElementById("exp-timeframe-filter")?.value || "all";

    const { startDate, endDate } = RichVineReports.getDateRange(timeframeFilter);

    const filter = {
      ...(startDate      ? { startDate, endDate }                  : {}),
      ...(periodFilter   !== "All" ? { period: periodFilter }     : {}),
      ...(categoryFilter !== "All" ? { category: categoryFilter } : {}),
      ...(sectionFilter  !== "All" ? { section: sectionFilter }   : {})
    };

    const expenses = RichVineDB.getExpenses(filter);
    const total    = expenses.reduce((s, e) => s + Number(e.amount), 0);
    _setText("exp-total-shown", "₦" + formatAmount(total, true) + " (" + expenses.length + " records)");

    const sectionBadges = {
      primary: `<span class="badge" style="background:#fef3c7;color:#b45309;font-weight:700;font-size:11px"><i class="fas fa-child"></i> Primary School</span>`,
      junior:  `<span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:700;font-size:11px"><i class="fas fa-book-reader"></i> Junior College</span>`,
      senior:  `<span class="badge" style="background:#ede9fe;color:#7c3aed;font-weight:700;font-size:11px"><i class="fas fa-graduation-cap"></i> Senior College</span>`,
      general: `<span class="badge" style="background:#f1f5f9;color:#475569;font-weight:700;font-size:11px"><i class="fas fa-university"></i> General Account</span>`
    };

    const tbody = document.getElementById("expenses-table-body");
    if (!tbody) return;
    tbody.innerHTML = expenses.length ? expenses.map(e => {
      const accountBadge = sectionBadges[e.section || "general"] || sectionBadges.general;
      const periodDisplay = (e.period === "one_time" || e.period === "onetime") ? "One-Time" : _capitalise(e.period);
      return `<tr>
        <td style="font-family:monospace;font-size:11.5px;font-weight:700">${e.id}</td>
        <td>${e.date}</td>
        <td>
          <b>${e.description}</b>
          ${e.notes ? `<div style="font-size:11px;color:#64748b;margin-top:2px">${e.notes}</div>` : ''}
          ${e.batchId ? `<span class="badge" style="background:#fce7f3;color:#be185d;font-size:9.5px;padding:1px 5px;border-radius:6px;margin-top:2px;display:inline-block">Batch Entry</span>` : ''}
        </td>
        <td>${e.category}</td>
        <td>${accountBadge}</td>
        <td><span class="badge-period ${e.period}">${periodDisplay}</span></td>
        <td style="color:crimson;font-weight:700;text-align:right">₦${formatAmount(e.amount, true)}</td>
        <td>${e.session} · ${e.term || ""}</td>
        <td>${e.recordedBy}</td>
        <td style="white-space:nowrap">
          <button class="btn-icon" style="color:#7c3aed" onclick="RichVineApp.openEditExpenseModal('${e.id}')" title="Edit / Correct Expense"><i class="fas fa-edit"></i></button>
          <button class="btn-icon btn-danger" onclick="RichVineApp.confirmDeleteExpense('${e.id}')" title="Delete"><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="10" class="empty-cell">No expenses logged yet. Click "Log Expense" above to add an expense entry.</td></tr>`;
  }

  // ── OVERVIEW P&L TAB ──────────────────────────────────────────────────────
  function loadOverviewTab() {
    const timeframe = document.getElementById("ov-timeframe")?.value || "all";
    const { startDate, endDate, label } = RichVineReports.getDateRange(timeframe);

    const baseFilter = startDate ? { startDate, endDate } : {};
    const summary    = RichVineDB.getFinancialSummary(baseFilter);
    const sections   = window.SCHOOL_SECTIONS || {};

    _setText("ov-label",             label);
    _setText("ov-total-revenue",     "₦" + formatAmount(summary.totalRevenue, true));
    _setText("ov-term-fees",         "₦" + formatAmount(summary.totalTermFeesPaid || 0, true));
    _setText("ov-arrears-recovered", "₦" + formatAmount(summary.totalArrearsRecovered || 0, true));
    _setText("ov-other-fees",        "₦" + formatAmount(summary.totalOtherFeesPaid || 0, true));
    _setText("ov-total-expenses",    "₦" + formatAmount(summary.totalExpenses, true));
    _setText("ov-net-profit",        "₦" + formatAmount(summary.netProfit, true));

    const profitEl = document.getElementById("ov-net-profit");
    if (profitEl) profitEl.style.color = summary.netProfit >= 0 ? "green" : "crimson";

    const sectionContainer = document.getElementById("ov-section-breakdown");
    if (sectionContainer) {
      let cardsHtml = Object.entries(sections).map(([key, sec]) => {
        const s = RichVineDB.getFinancialSummary({ ...baseFilter, section: key });
        const profitColor = s.netProfit >= 0 ? "#15803d" : "crimson";
        return `
        <div class="ov-section-card" style="border-left:4px solid var(--sky)">
          <div class="ov-section-name" style="display:flex;align-items:center;justify-content:space-between">
            <div style="display:flex;align-items:center;gap:8px">
              <i class="${sec.icon}" style="color:var(--sky)"></i>
              <span>${sec.name}</span>
            </div>
            <span style="font-size:11px;background:#f8fafc;color:#64748b;padding:2px 8px;border-radius:12px;border:1px solid #e2e8f0;font-weight:600">
              ${sec.classes.length} Classes
            </span>
          </div>
          <div class="ov-section-stats">
            <div class="ov-stat green">
              <div>Revenue</div>
              <div class="ov-amount">₦${formatAmount(s.totalRevenue, true)}</div>
              <div style="font-size:10px;color:#059669;margin-top:2px">Section fee collections</div>
            </div>
            <div class="ov-stat red">
              <div>Total Expenses</div>
              <div class="ov-amount">₦${formatAmount(s.totalExpenses, true)}</div>
              <div style="font-size:10px;color:#b91c1c;margin-top:2px">Direct + ⅓ Central Overhead</div>
            </div>
            <div class="ov-stat" style="background:${s.netProfit>=0?'#f0fdf4':'#fff1f2'}">
              <div>Section Net Profit</div>
              <div class="ov-amount" style="color:${profitColor}">₦${formatAmount(s.netProfit, true)}</div>
              <div style="font-size:10px;color:${profitColor};margin-top:2px">${s.netProfit>=0?'Net Surplus':'Net Deficit'}</div>
            </div>
          </div>
          <div style="background:#f8fafc;border-radius:6px;padding:8px 12px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:#475569;flex-wrap:wrap;gap:8px;border:1px dashed #cbd5e1">
            <span><i class="fas fa-tag" style="color:#64748b"></i> Direct Section Expenses: <b style="color:#b91c1c">₦${formatAmount(s.directExpenses, true)}</b></span>
            <span><i class="fas fa-share-alt" style="color:#0284c7"></i> ⅓ Central Overhead Share: <b style="color:#b45309">₦${formatAmount(s.allocatedOverhead, true)}</b></span>
          </div>
        </div>`;
      }).join("");

      // ── General / Central Operations card — always visible ──────────────
      // User accounting rule: "And the General / Central Operations is thesame as total revenue."
      // "When expense is fromed from General / Central Operations it means the money should be spread over the 3 sections."
      const genSummary = RichVineDB.getFinancialSummary({ ...baseFilter, section: "general" });
      const allExpenses = RichVineDB.getExpenses(baseFilter);
      const genExpenses = allExpenses.filter(e => {
        const s = String(e.section || "").trim().toLowerCase();
        const a = String(e.account || "").trim().toLowerCase();
        const n = String(e.accountName || "").trim().toLowerCase();
        return !e.section || s === "general" || a === "general" || n.includes("general");
      });
      const genTotal    = genSummary.totalExpenses;
      const overheadPerSection = Math.round((genTotal / 3) * 100) / 100;

      // Build per-account mini breakdown
      const acctBreakdown = {};
      genExpenses.forEach(e => {
        const label = e.accountName || "General / Central Account";
        acctBreakdown[label] = (acctBreakdown[label] || 0) + (Number(e.amount) || 0);
      });
      const breakdownHtml = Object.entries(acctBreakdown).length
        ? Object.entries(acctBreakdown).map(([name, amt]) =>
            `<div style="display:flex;justify-content:space-between;font-size:11px;color:#475569;padding:2px 0;border-bottom:1px dotted #e2e8f0">
               <span>${name}</span><span style="color:#b91c1c;font-weight:700">₦${formatAmount(amt, true)}</span>
             </div>`).join("")
        : `<div style="font-size:11px;color:#64748b;text-align:center;padding:4px 0">No overhead expenses logged for this period</div>`;

      cardsHtml += `
      <div class="ov-section-card" style="border-left:4px solid #64748b;background:#ffffff">
        <div class="ov-section-name" style="display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:8px">
            <i class="fas fa-university" style="color:#475569"></i>
            <span>General / Central Operations</span>
          </div>
          <div style="display:flex;gap:6px">
            <span style="font-size:10.5px;background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:10px;font-weight:700">Central Treasury</span>
            <span style="font-size:10.5px;background:#f1f5f9;color:#475569;padding:2px 8px;border-radius:10px;font-weight:600">Overhead Pool</span>
          </div>
        </div>
        <div class="ov-section-stats">
          <div class="ov-stat green" style="background:#dcfce7">
            <div>Central Revenue Pool</div>
            <div class="ov-amount">₦${formatAmount(genSummary.totalRevenue, true)}</div>
            <div style="font-size:10px;color:#059669;margin-top:2px">Total School Revenue (All 3 Sections)</div>
          </div>
          <div class="ov-stat red">
            <div>Total Central Overhead</div>
            <div class="ov-amount">₦${formatAmount(genTotal, true)}</div>
            <div style="font-size:10px;color:#b91c1c;margin-top:2px">Spread ⅓ (₦${formatAmount(overheadPerSection, true)}) to each section</div>
          </div>
          <div class="ov-stat" style="background:${genSummary.netProfit>=0?'#f0fdf4':'#fff1f2'}">
            <div>Net Central Surplus</div>
            <div class="ov-amount" style="color:${genSummary.netProfit>=0?'#15803d':'crimson'}">₦${formatAmount(genSummary.netProfit, true)}</div>
            <div style="font-size:10px;color:${genSummary.netProfit>=0?'#15803d':'crimson'};margin-top:2px">Revenue after Central Costs</div>
          </div>
        </div>

        <div style="background:#f8fafc;border-radius:6px;padding:9px 12px;margin-top:10px;border:1px solid #e2e8f0">
          <div style="display:flex;align-items:center;gap:6px;font-size:11.5px;color:#0369a1;font-weight:700;margin-bottom:6px">
            <i class="fas fa-sitemap"></i> Central Overhead Equal Distribution Policy:
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:6px;font-size:11px;margin-bottom:10px">
            <div style="background:#fff;padding:6px 8px;border-radius:4px;border:1px solid #e2e8f0">
              <span style="color:#64748b">Primary (⅓):</span> <b style="color:#b45309">₦${formatAmount(overheadPerSection, true)}</b>
            </div>
            <div style="background:#fff;padding:6px 8px;border-radius:4px;border:1px solid #e2e8f0">
              <span style="color:#64748b">Junior (⅓):</span> <b style="color:#b45309">₦${formatAmount(overheadPerSection, true)}</b>
            </div>
            <div style="background:#fff;padding:6px 8px;border-radius:4px;border:1px solid #e2e8f0">
              <span style="color:#64748b">Senior (⅓):</span> <b style="color:#b45309">₦${formatAmount(genTotal - 2 * overheadPerSection, true)}</b>
            </div>
          </div>
          <div style="font-size:10.5px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px">
            Central Expenses by Account
          </div>
          ${breakdownHtml}
        </div>
      </div>`;

      sectionContainer.innerHTML = cardsHtml;
    }

    const feeContainer = document.getElementById("ov-fee-breakdown");
    if (feeContainer) {
      const feeCats = RichVineDB.getFeeCategories();
      const payments = RichVineDB.getPayments(baseFilter);
      const getCatAmount = (p, catId) => {
        if (Array.isArray(p.items) && p.items.length > 0) {
          return p.items.filter(it => it.category === catId).reduce((s, it) => s + (Number(it.amount) || 0), 0);
        }
        return p.category === catId ? (Number(p.amount) || 0) : 0;
      };

      feeContainer.innerHTML = feeCats.map(cat => {
        const catTotal = payments.reduce((s, p) => s + getCatAmount(p, cat.id), 0);
        const txnCount = payments.filter(p => p.category === cat.id || (Array.isArray(p.items) && p.items.some(it => it.category === cat.id))).length;
        if (catTotal === 0) return "";
        return `<div class="fee-row">
          <span>${cat.name}</span>
          <span style="font-weight:700;color:green">₦${formatAmount(catTotal, true)}</span>
          <span style="color:#888;font-size:12px">${txnCount} txn(s)</span>
        </div>`;
      }).join("") || "<p style='color:#888;text-align:center'>No revenue data for this period</p>";
    }
  }

  // ── STOCK MANAGEMENT & ACCOUNTING TAB ──────────────────────────────────────
  function checkStockAlerts() {
    if (!window.RichVineDB || !window.RichVineDB.getStockAlerts) return;
    const alerts = RichVineDB.getStockAlerts();
    const badgeEl = document.getElementById("stock-alert-badge");
    const totalAlerts = (alerts.outOfStock?.length || 0) + (alerts.lowStock?.length || 0);

    if (badgeEl) {
      if (totalAlerts > 0) {
        badgeEl.textContent = totalAlerts;
        badgeEl.style.display = "inline-flex";
      } else {
        badgeEl.style.display = "none";
      }
    }
  }

  function loadStocksTab() {
    RichVineDB.recalculateStockQuantities();
    const stocks = RichVineDB.getStocks();
    const summary = RichVineDB.getStockSummary();
    const alerts = RichVineDB.getStockAlerts();
    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Update summary stat cards
    _setText("stk-total-items", summary.totalItems);
    _setText("stk-total-revenue", "₦" + fmt(summary.totalSaleRevenue));
    _setText("stk-gross-profit", "₦" + fmt(summary.grossProfit));
    _setText("stk-valuation", "₦" + fmt(summary.totalStockValuation));
    _setText("stk-items-sold", summary.totalItemsSold);
    _setText("stk-out-of-stock", summary.outOfStockCount);
    _setText("stk-low-stock", summary.lowStockCount);

    // Dynamic Alert Banners
    const alertContainer = document.getElementById("stk-alerts-container");
    if (alertContainer) {
      let html = "";
      if (alerts.outOfStock.length) {
        html += `<div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;padding:12px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px">
          <i class="fas fa-times-circle" style="color:#dc2626;font-size:20px;flex-shrink:0"></i>
          <div>
            <strong style="color:#b91c1c;font-size:13px">Out of Stock (${alerts.outOfStock.length} items):</strong>
            <div style="color:#7f1d1d;font-size:12px;margin-top:2px">${alerts.outOfStock.map(s => `<b>${s.name}</b>`).join(", ")} — <i>Restock required immediately!</i></div>
          </div>
        </div>`;
      }
      if (alerts.lowStock.length) {
        html += `<div style="background:#fef9c3;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px">
          <i class="fas fa-exclamation-triangle" style="color:#d97706;font-size:20px;flex-shrink:0"></i>
          <div>
            <strong style="color:#92400e;font-size:13px">Low Stock Warning (< 20% remaining, ${alerts.lowStock.length} items):</strong>
            <div style="color:#78350f;font-size:12px;margin-top:2px">${alerts.lowStock.map(s => `<b>${s.name}</b> (${s.quantityLeft} ${s.unit || 'unit'}(s) left)`).join(", ")}</div>
          </div>
        </div>`;
      }
      alertContainer.innerHTML = html;
      alertContainer.style.display = html ? "block" : "none";
    }

    // Filter stocks
    const catFilter = document.getElementById("stk-cat-filter")?.value || "All";
    const statusFilter = document.getElementById("stk-status-filter")?.value || "All";
    const searchFilter = document.getElementById("stk-search-filter")?.value.toLowerCase().trim() || "";

    const filtered = stocks.filter(s => {
      if (catFilter !== "All" && s.category !== catFilter) return false;
      if (statusFilter !== "All" && s.status !== statusFilter) return false;
      if (searchFilter && !s.name.toLowerCase().includes(searchFilter) && !s.category.toLowerCase().includes(searchFilter)) return false;
      return true;
    });

    const tbody = document.getElementById("stock-table-body");
    if (!tbody) return;

    tbody.innerHTML = filtered.length ? filtered.map(s => {
      const pctLeft = s.totalReceived > 0 ? Math.round((s.quantityLeft / s.totalReceived) * 100) : 0;
      let stockStatus = "In Stock";
      let stockStatusColor = "#15803d";
      let stockStatusBg = "#dcfce7";
      if (s.quantityLeft === 0) {
        stockStatus = "Out of Stock";
        stockStatusColor = "#b91c1c";
        stockStatusBg = "#fee2e2";
      } else if (s.quantityLeft <= s.lowStockThreshold) {
        stockStatus = "Low Stock (<20%)";
        stockStatusColor = "#92400e";
        stockStatusBg = "#fef9c3";
      }

      const profitPerUnit = s.sellingPrice - s.costPrice;
      const profitMargin = s.sellingPrice > 0 ? Math.round((profitPerUnit / s.sellingPrice) * 100) : 0;

      return `<tr>
        <td style="font-weight:700;max-width:200px">
          <div style="font-size:13px;color:#0f172a">${s.name}</div>
          <div style="font-size:11px;color:#64748b;margin-top:2px"><span class="badge" style="background:#f1f5f9;color:#475569;font-size:10px">${s.category}</span> · ${s.unit}</div>
        </td>
        <td style="text-align:right;color:#0369a1;font-weight:700">₦${fmt(s.costPrice)}</td>
        <td style="text-align:right;color:green;font-weight:700">₦${fmt(s.sellingPrice)}</td>
        <td style="text-align:center">${s.openingQty}</td>
        <td style="text-align:center;color:#7c3aed;font-weight:700">+${s.quantityRestocked || 0}</td>
        <td style="text-align:center;color:#d97706;font-weight:700">${s.quantitySold || 0}</td>
        <td style="text-align:center">
          <span style="font-weight:800;font-size:14px;color:${stockStatusColor}">${s.quantityLeft}</span>
          <div style="background:#e2e8f0;border-radius:4px;height:5px;width:70px;margin:3px auto 0;overflow:hidden">
            <div style="background:${stockStatusColor};height:5px;width:${Math.min(100, pctLeft)}%;border-radius:4px"></div>
          </div>
          <div style="font-size:10px;color:#94a3b8;margin-top:2px">${pctLeft}% left</div>
        </td>
        <td><span style="background:${stockStatusBg};color:${stockStatusColor};padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;white-space:nowrap">${stockStatus}</span></td>
        <td style="text-align:right;font-size:11.5px;color:${profitPerUnit >= 0 ? '#15803d' : '#b91c1c'};font-weight:700">${profitMargin}%</td>
        <td style="white-space:nowrap">
          <button class="btn-icon" style="color:#0369a1" onclick="RichVineApp.openSellStockModal('${s.id}')" title="Sell / Dispense Item"><i class="fas fa-shopping-cart"></i></button>
          <button class="btn-icon" style="color:#15803d" onclick="RichVineApp.openRestockModal('${s.id}')" title="Restock Inventory"><i class="fas fa-plus-circle"></i></button>
          <button class="btn-icon" style="color:#7c3aed" onclick="RichVineApp.openEditStockModal('${s.id}')" title="Edit Item"><i class="fas fa-edit"></i></button>
          <button class="btn-icon btn-danger" onclick="RichVineApp.confirmDeleteStock('${s.id}')" title="Delete Item"><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="10" class="empty-cell"><i class="fas fa-boxes" style="font-size:32px;opacity:.3;margin-bottom:8px;display:block"></i>No stock items found. Click "Add Stock Item" above to add uniforms, books, or supplies.</td></tr>`;

    checkStockAlerts();
  }

  // ── STOCK MODALS ───────────────────────────────────────────────────────────
  function openAddStockModal() {
    const form = document.getElementById("add-stock-form");
    if (!form) return;
    form.reset();
    bindCurrencyInput(form.querySelector("#add-stk-cost"));
    bindCurrencyInput(form.querySelector("#add-stk-sell"));
    openModal("modal-add-stock");
  }

  function handleAddStockSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#add-stk-name").value.trim();
    const category = form.querySelector("#add-stk-category").value;
    const unit = form.querySelector("#add-stk-unit").value;
    const costPrice = parseAmount(form.querySelector("#add-stk-cost").value);
    const sellingPrice = parseAmount(form.querySelector("#add-stk-sell").value);
    const openingQty = parseInt(form.querySelector("#add-stk-qty").value) || 0;
    const description = form.querySelector("#add-stk-desc").value.trim();

    if (!name) return showAlert("Please enter the stock item name.");
    if (sellingPrice <= 0) return showAlert("Please enter a valid selling price.");

    const item = RichVineDB.addStockItem({ name, category, unit, costPrice, sellingPrice, openingQty, description });
    closeModal("modal-add-stock");
    loadStocksTab();
    loadDashboard();
    showToast(`✓ "${item.name}" added to stock inventory`, "success");
  }

  function openEditStockModal(stockId) {
    const item = RichVineDB.getStockById(stockId);
    if (!item) return;
    const form = document.getElementById("edit-stock-form");
    if (!form) return;
    form.querySelector("#edit-stk-id").value = item.id;
    form.querySelector("#edit-stk-name").value = item.name;
    form.querySelector("#edit-stk-category").value = item.category;
    form.querySelector("#edit-stk-unit").value = item.unit || "piece";
    form.querySelector("#edit-stk-cost").value = formatAmount(item.costPrice, true);
    form.querySelector("#edit-stk-sell").value = formatAmount(item.sellingPrice, true);
    form.querySelector("#edit-stk-qty").value = item.openingQty;
    form.querySelector("#edit-stk-desc").value = item.description || "";
    form.querySelector("#edit-stk-status").value = item.status || "active";
    bindCurrencyInput(form.querySelector("#edit-stk-cost"));
    bindCurrencyInput(form.querySelector("#edit-stk-sell"));
    openModal("modal-edit-stock");
  }

  function handleEditStockSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const id = form.querySelector("#edit-stk-id").value;
    const name = form.querySelector("#edit-stk-name").value.trim();
    const sellingPrice = parseAmount(form.querySelector("#edit-stk-sell").value);
    const costPrice = parseAmount(form.querySelector("#edit-stk-cost").value);
    if (!name) return showAlert("Stock item name is required.");
    if (sellingPrice <= 0) return showAlert("Please enter a valid selling price.");
    RichVineDB.updateStockItem(id, {
      name,
      category: form.querySelector("#edit-stk-category").value,
      unit: form.querySelector("#edit-stk-unit").value,
      costPrice,
      sellingPrice,
      openingQty: parseInt(form.querySelector("#edit-stk-qty").value) || 0,
      description: form.querySelector("#edit-stk-desc").value.trim(),
      status: form.querySelector("#edit-stk-status").value
    });
    closeModal("modal-edit-stock");
    loadStocksTab();
    loadDashboard();
    showToast(`✓ Stock item updated`, "success");
  }

  function openSellStockModal(stockId) {
    const item = RichVineDB.getStockById(stockId);
    if (!item) return;
    if (item.quantityLeft <= 0) return showToast(`⚠ "${item.name}" is out of stock!`, "error");
    const form = document.getElementById("sell-stock-form");
    if (!form) return;
    form.querySelector("#sell-stk-id").value = item.id;
    form.querySelector("#sell-stk-item-info").textContent = `${item.name} — ${item.quantityLeft} ${item.unit || 'unit'}(s) available @ ₦${formatAmount(item.sellingPrice, true)} each`;
    form.querySelector("#sell-stk-price").value = formatAmount(item.sellingPrice, true);
    form.querySelector("#sell-stk-qty").value = 1;
    form.querySelector("#sell-stk-date").value = new Date().toISOString().split("T")[0];
    form.querySelector("#sell-stk-student").value = "";
    form.querySelector("#sell-stk-notes").value = "";
    bindCurrencyInput(form.querySelector("#sell-stk-price"));
    _updateSellTotal(item);
    openModal("modal-sell-stock");
  }

  function _updateSellTotal(item = null) {
    const form = document.getElementById("sell-stock-form");
    if (!form) return;
    const stockId = form.querySelector("#sell-stk-id")?.value;
    const currentItem = item || (stockId ? RichVineDB.getStockById(stockId) : null);
    const qty = parseInt(form.querySelector("#sell-stk-qty")?.value) || 1;
    const price = parseAmount(form.querySelector("#sell-stk-price")?.value) || (currentItem ? currentItem.sellingPrice : 0);
    const totalEl = document.getElementById("sell-stk-total-display");
    if (totalEl) totalEl.textContent = "₦" + formatAmount(qty * price, true);
  }

  function handleSellStockSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const stockId = form.querySelector("#sell-stk-id").value;
    const qty = parseInt(form.querySelector("#sell-stk-qty").value) || 1;
    const sellingPrice = parseAmount(form.querySelector("#sell-stk-price").value);
    const studentName = form.querySelector("#sell-stk-student").value.trim() || "Walk-in Customer";
    const date = form.querySelector("#sell-stk-date").value;
    const paymentMethod = form.querySelector("#sell-stk-method").value;
    const notes = form.querySelector("#sell-stk-notes").value.trim();
    if (qty < 1) return showAlert("Quantity must be at least 1.");
    if (!date) return showAlert("Please select a sale date.");
    const result = RichVineDB.recordStockSale({ stockId, quantity: qty, sellingPrice, studentName, date, paymentMethod, notes });
    if (result && result.error) return showAlert(result.error, 'warning', 4000);
    closeModal("modal-sell-stock");
    loadStocksTab();
    loadDashboard();
    loadOverviewTab();
    showToast(`✓ Sale recorded — ₦${formatAmount(result.totalRevenue, true)} revenue`, "success");
  }

  function openRestockModal(stockId) {
    const item = RichVineDB.getStockById(stockId);
    if (!item) return;
    const form = document.getElementById("restock-form");
    if (!form) return;
    form.querySelector("#restock-stk-id").value = item.id;
    form.querySelector("#restock-stk-item-info").textContent = `${item.name} — currently ${item.quantityLeft} ${item.unit || 'unit'}(s) in stock`;
    form.querySelector("#restock-stk-cost").value = formatAmount(item.costPrice, true);
    form.querySelector("#restock-stk-qty").value = "";
    form.querySelector("#restock-stk-date").value = new Date().toISOString().split("T")[0];
    form.querySelector("#restock-stk-supplier").value = "";
    form.querySelector("#restock-stk-invoice").value = "";
    bindCurrencyInput(form.querySelector("#restock-stk-cost"));
    openModal("modal-restock-stock");
  }

  function handleRestockSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const stockId = form.querySelector("#restock-stk-id").value;
    const qty = parseInt(form.querySelector("#restock-stk-qty").value) || 0;
    const costPrice = parseAmount(form.querySelector("#restock-stk-cost").value);
    const date = form.querySelector("#restock-stk-date").value;
    const supplier = form.querySelector("#restock-stk-supplier").value.trim();
    const invoiceNo = form.querySelector("#restock-stk-invoice").value.trim();
    if (qty < 1) return showAlert("Quantity to restock must be at least 1.");
    if (!date) return showAlert("Please select a restock date.");
    const result = RichVineDB.restockItem(stockId, { quantity: qty, costPrice, date, supplier, invoiceNo });
    if (!result) return showAlert("Could not find the stock item.");
    closeModal("modal-restock-stock");
    loadStocksTab();
    loadDashboard();
    loadOverviewTab();
    showToast(`✓ Restocked ${qty} unit(s) — ₦${formatAmount(result.totalCost, true)} cost`, "success");
  }

  function confirmDeleteStock(stockId) {
    const item = RichVineDB.getStockById(stockId);
    if (!item) return;
    showConfirm(`⚠️ Delete <strong>${item.name}</strong> from inventory?<br><small style="color:#64748b">This also removes all associated sales and restock records.<br>This action cannot be undone.</small>`, () => {
      RichVineDB.deleteStockItem(stockId);
      loadStocksTab();
      loadDashboard();
      loadOverviewTab();
      showToast(`Deleted: ${item.name}`, "warning");
    });
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
            <button class="btn-icon btn-sm btn-danger" onclick="RichVineApp.closeModal('modal-student-profile');RichVineApp.confirmDeletePayment('${p.id}')" title="Delete Payment"><i class="fas fa-trash-alt"></i></button>
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
    const passBtn = document.getElementById("profile-btn-pass");
    if (passBtn) {
      if (bal.totalOutstanding === 0) {
        passBtn.style.display = "inline-flex";
        passBtn.onclick = () => {
          RichVineReports.printExamClearancePasses([student], { groupByClass: false });
        };
      } else {
        passBtn.style.display = "none";
      }
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

  let _isSubmittingEnroll = false;
  function handleEnrollSubmit(e) {
    e.preventDefault();
    if (_isSubmittingEnroll) return;
    const form = e.target;
    const submitBtn = form.querySelector("button[type='submit']");
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    _isSubmittingEnroll = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Enrolling...`;
    }

    try {
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
        return showAlert("Please fill in first name, last name, and class.");
      }
      if (student.termFee <= 0) {
        // zero fee — proceed silently, admin can edit later
      }

      const saved = RichVineDB.addStudent(student);
      closeModal("modal-enroll");
      loadLearnersTab();
      loadDashboard();
      loadPaymentsTab();
      loadOverviewTab();
      loadClassHub();
      
      const paidMsg = initialPaid > 0 ? ` | Initial payment of ₦${formatAmount(initialPaid, true)} recorded` : "";
      showToast(`✓ ${saved.firstName} ${saved.lastName} enrolled! Term Fee: ₦${formatAmount(saved.termFee, true)}${paidMsg}`, "success");
    } finally {
      setTimeout(() => {
        _isSubmittingEnroll = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnHtml;
        }
      }, 1000);
    }
  }

  // ── RECORD PAYMENT MODAL (MULTI-ITEM RECEIPT) ─────────────────────────────
  let _paymentItemCounter = 0;

  function _buildCategorySelectOptions(studentClass, selectedCatId = "") {
    const cats = RichVineDB.getFeeCategories(studentClass);
    let html = `<option value="">— Select Fee Category —</option>`;
    const generalCats = cats.filter(c => !c.forClass);
    const jss3Cats    = cats.filter(c => c.forClass === "JSS 3");
    const ss3Cats     = cats.filter(c => c.forClass === "SSS 3");

    html += `<optgroup label="Standard School Fees">` +
      generalCats.map(c => `<option value="${c.id}" data-meta="${c.metaType || ''}" ${c.id === selectedCatId ? 'selected' : ''}>${c.name}</option>`).join("") +
      `</optgroup>`;

    if (jss3Cats.length > 0) {
      html += `<optgroup label="JSS 3 Examination &amp; Lesson Fees">` +
        jss3Cats.map(c => `<option value="${c.id}" data-meta="${c.metaType || ''}" ${c.id === selectedCatId ? 'selected' : ''}>📘 ${c.name}</option>`).join("") +
        `</optgroup>`;
    }

    if (ss3Cats.length > 0) {
      html += `<optgroup label="SSS 3 Senior Examination &amp; Logistics Fees">` +
        ss3Cats.map(c => {
          const priceTag = c.defaultAmount ? ` (₦${c.defaultAmount.toLocaleString()})` : '';
          return `<option value="${c.id}" data-meta="${c.metaType || ''}" data-amount="${c.defaultAmount || ''}" ${c.id === selectedCatId ? 'selected' : ''}>🎓 ${c.name}${priceTag}</option>`;
        }).join("") +
        `</optgroup>`;
    }

    // ── Store & Inventory Stock Items ─────────────────────────────────────
    const activeStocks = RichVineDB.getStocks({ status: 'active' });
    if (activeStocks.length > 0) {
      html += `<optgroup label="📦 Store &amp; Stock Items (Uniforms, Books, Supplies)">`;
      activeStocks.forEach(stk => {
        const qtyLabel = stk.quantityLeft > 0 ? ` [${stk.quantityLeft} left]` : ' [OUT OF STOCK]';
        const isSelected = (`stock:${stk.id}` === selectedCatId) ? 'selected' : '';
        const isDisabled = stk.quantityLeft <= 0 ? 'disabled' : '';
        html += `<option value="stock:${stk.id}" data-meta="stock_item" data-stock-id="${stk.id}" data-stock-name="${stk.name.replace(/"/g,'&quot;')}" data-sell-price="${stk.sellingPrice}" data-qty-left="${stk.quantityLeft}" data-unit="${stk.unit}" ${isSelected} ${isDisabled}>🏷 ${stk.name}${qtyLabel} — ₦${stk.sellingPrice.toLocaleString(undefined,{minimumFractionDigits:2})}/${stk.unit}</option>`;
      });
      html += `</optgroup>`;
    }

    return html;
  }

  function _refreshItemRowLabels() {
    const rows = document.querySelectorAll("#payment-items-container .pay-item-row");
    rows.forEach((r, idx) => {
      const titleEl = r.querySelector(".pay-item-row-title");
      if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-tag" style="color:var(--sky)"></i> Fee Item #${idx + 1}`;
      }
    });
  }

  function addPaymentItemRow(defaultData = {}) {
    const container = document.getElementById("payment-items-container");
    if (!container) return;
    const studentId = document.getElementById("pay-student-id")?.value;
    const student = studentId ? RichVineDB.getStudentById(studentId) : null;
    const studentClass = student?.currentClass || "";

    _paymentItemCounter++;
    const rowId = `pay-item-row-${Date.now()}-${_paymentItemCounter}`;
    const row = document.createElement("div");
    row.className = "pay-item-row";
    row.id = rowId;
    row.style.cssText = "background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:12px;margin-bottom:10px;position:relative;";

    const catsOptions = _buildCategorySelectOptions(studentClass, defaultData.category || "");

    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:.5px" class="pay-item-row-title">
          <i class="fas fa-tag" style="color:var(--sky)"></i> Fee Item
        </span>
        <button type="button" class="btn-icon btn-danger btn-sm" onclick="RichVineApp.removePaymentItemRow('${rowId}')" title="Remove this item" style="width:26px;height:26px">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="form-row" style="margin-bottom:8px">
        <div class="form-group" style="flex:2">
          <label class="form-label" style="font-weight:600">Category *</label>
          <select class="form-control pay-item-category" required onchange="RichVineApp.onPaymentItemCategoryChange(this)">
            ${catsOptions}
          </select>
        </div>
        <div class="form-group" style="flex:1">
          <label class="form-label" style="font-weight:700;color:green">Amount (₦) *</label>
          <input type="text" class="form-control pay-item-amount" inputmode="decimal" required placeholder="0.00" style="border-color:#86efac;font-weight:700;color:green" oninput="RichVineApp.updatePaymentItemsSummary()">
        </div>
      </div>
      <div class="form-group full" style="margin-bottom:6px">
        <label class="form-label">Description / Specific Details</label>
        <input type="text" class="form-control pay-item-desc" placeholder="e.g. Uniform (2 shirts, 1 trouser), Friday wear, SS3 Mock Exam fee, etc.">
      </div>
      <div class="pay-item-meta"></div>
    `;

    container.appendChild(row);

    const amountInput = row.querySelector(".pay-item-amount");
    bindCurrencyInput(amountInput);

    const catSel = row.querySelector(".pay-item-category");
    if (defaultData.category) {
      catSel.value = defaultData.category;
    }
    if (defaultData.amount) {
      amountInput.value = formatAmount(defaultData.amount, true);
    }
    if (defaultData.description) {
      const descInput = row.querySelector(".pay-item-desc");
      if (descInput) descInput.value = defaultData.description;
    }

    onPaymentItemCategoryChange(catSel, defaultData);
    updatePaymentItemsSummary();
    _refreshItemRowLabels();
    return row;
  }

  function removePaymentItemRow(rowId) {
    const container = document.getElementById("payment-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".pay-item-row");
    if (rows.length <= 1) {
      showToast("A receipt must contain at least one fee item.", "warning");
      return;
    }
    const target = document.getElementById(rowId);
    if (target) target.remove();
    updatePaymentItemsSummary();
    _refreshItemRowLabels();
  }

  function onPaymentItemCategoryChange(catSel, defaultData = {}) {
    if (!catSel) return;
    const row = catSel.closest(".pay-item-row");
    if (!row) return;

    const selected = catSel.options[catSel.selectedIndex];
    const metaType = selected?.dataset?.meta || "";
    const defaultAmt = selected?.dataset?.amount;
    const amountInput = row.querySelector(".pay-item-amount");
    const descInput = row.querySelector(".pay-item-desc");

    // Auto-fill official fee amount if defined and amount input is empty or 0
    if (defaultAmt && (!amountInput.value || parseAmount(amountInput.value) === 0)) {
      amountInput.value = formatAmount(Number(defaultAmt), true);
    }

    // Auto-suggest description if description is currently empty
    if (descInput && !descInput.value && selected && selected.value) {
      if (selected.value === "sport_wear") descInput.placeholder = "e.g. Sport wear house color / jersey";
      else if (selected.value === "uniform") descInput.placeholder = "e.g. 2 sets complete uniform & day socks";
      else if (selected.value === "textbooks") descInput.placeholder = "e.g. Mathematics, English & Science textbooks";
      else if (selected.value === "exercise_books") descInput.placeholder = "e.g. 10 copies 60 leaves";
    }

    const metaContainer = row.querySelector(".pay-item-meta");
    if (!metaContainer) return;

    if (metaType === "daycare") {
      const cycles = window.DAYCARE_BILLING_CYCLES || [];
      const today = new Date().toISOString().split("T")[0];
      const activeCycle = cycles.find(c => today >= c.startDate && today <= c.endDate) || cycles[0];

      const optionsHtml = cycles.map(c => {
        const isCurrent = defaultData.cycleId ? c.id === defaultData.cycleId : (c.id === activeCycle?.id);
        return `<option value="${c.label}" data-term="${c.term}" ${isCurrent ? 'selected' : ''}>${c.label} [${c.term}]</option>`;
      }).join("");

      metaContainer.innerHTML = `
        <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;padding:8px 10px">
          <label class="form-label" style="color:#0369a1;font-weight:700">📅 Daycare Monthly Billing Cycle <span style="color:red">*</span></label>
          <select class="form-control pay-item-daycare-month" required style="border-color:#7dd3fc;background:#fff;font-weight:600">
            <option value="">— Select Billing Cycle —</option>
            ${optionsHtml}
          </select>
          <div style="font-size:11px;color:#0369a1;margin-top:4px">
            <i class="fas fa-calendar-check"></i> Resumption cycle: 14th of month to 13th of next month
          </div>
        </div>`;

      const daycareMonthSel = metaContainer.querySelector(".pay-item-daycare-month");
      if (daycareMonthSel) {
        daycareMonthSel.onchange = () => {
          const opt = daycareMonthSel.options[daycareMonthSel.selectedIndex];
          const term = opt?.dataset?.term;
          const termSel = document.getElementById("pay-term");
          if (termSel && (term === "1st Term" || term === "2nd Term" || term === "3rd Term")) {
            termSel.value = term;
          }
        };
      }
    } else if (metaType === "sport") {
      metaContainer.innerHTML = `
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px">
          <label class="form-label" style="font-weight:600">Sport Wear Colour</label>
          <select class="form-control pay-item-sport-color">
            <option value="">Select Colour</option>
            ${["Blue","Red","Yellow","Green","White","Purple","Orange","Black"].map(c => `<option>${c}</option>`).join("")}
          </select>
        </div>`;
    } else if (metaType === "exercise_books") {
      metaContainer.innerHTML = `
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label class="form-label" style="font-weight:600">Book Type (Leaves)</label>
            <select class="form-control pay-item-leaves">
              ${["20 Leaves","40 Leaves","60 Leaves","80 Leaves","2A","2B","3B","Higher Education"].map(l => `<option>${l}</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="form-label" style="font-weight:600">Quantity</label>
            <input type="number" class="form-control pay-item-qty" min="1" value="1">
          </div>
        </div>`;
    } else if (metaType === "stationery") {
      metaContainer.innerHTML = `
        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px">
          <label class="form-label" style="font-weight:700;color:#15803d">📝 Stationery Details</label>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">
            ${["HB Pencil","Biro (Blue)","Biro (Black)","Biro (Red)","20 Leaves Book","40 Leaves Book","60 Leaves Book","80 Leaves Book","Ruler","Eraser","Math Set","Sharpener","Crayon Pack","Colour Pencils","A4 Paper Ream"].map(item =>
              `<button type="button" class="btn-sm" style="background:#dcfce7;color:#15803d;border:1px solid #86efac;border-radius:14px;padding:3px 10px;font-size:11px;cursor:pointer" onclick="RichVineApp.quickPickStationery(this, '${item.replace(/'/g,"\\'")}')">+ ${item}</button>`
            ).join("")}
          </div>
          <input type="text" class="form-control pay-item-stationery-desc" placeholder="e.g. HB Pencil ×10, Blue Biro ×5, 40 Leaves ×6 — type or use quick-pick above" style="font-size:12.5px">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
            <div>
              <label class="form-label" style="font-size:11px;font-weight:600">Quantity (units)</label>
              <input type="number" class="form-control pay-item-stationery-qty" min="1" value="1" placeholder="1">
            </div>
            <div style="display:flex;align-items:flex-end">
              <span style="font-size:11px;color:#64748b;padding-bottom:8px"><i class="fas fa-info-circle"></i> Describe items clearly for stock record</span>
            </div>
          </div>
        </div>`;
    } else if (metaType === "stock_item") {
      // Stock item selected from inventory
      const opt = selected;
      const stockId     = opt?.dataset?.stockId || "";
      const stockName   = opt?.dataset?.stockName || "";
      const sellPrice   = Number(opt?.dataset?.sellPrice || 0);
      const qtyLeft     = Number(opt?.dataset?.qtyLeft || 0);
      const unit        = opt?.dataset?.unit || "piece";

      // Auto-fill selling price
      if (!amountInput.value || parseAmount(amountInput.value) === 0) {
        amountInput.value = formatAmount(sellPrice, true);
      }
      if (descInput && !descInput.value) {
        descInput.value = stockName;
        descInput.placeholder = `e.g. ${stockName} — specify size/colour if applicable`;
      }

      metaContainer.innerHTML = `
        <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-radius:8px;padding:10px 12px" data-stock-id="${stockId}">
          <label class="form-label" style="font-weight:700;color:#6d28d9">📦 Stock Item: ${stockName}</label>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:6px">
            <div>
              <label class="form-label" style="font-size:11px;font-weight:600">Quantity to Sell *</label>
              <input type="number" class="form-control pay-item-stock-qty" min="1" max="${qtyLeft}" value="1" oninput="RichVineApp.onStockItemQtyChange(this, ${sellPrice})" style="border-color:#a78bfa;font-weight:700">
            </div>
            <div>
              <label class="form-label" style="font-size:11px;font-weight:600">Unit Price</label>
              <div style="padding:7px 10px;background:#fff;border:1px solid #ddd6fe;border-radius:6px;font-weight:700;color:#6d28d9">₦${formatAmount(sellPrice, true)}</div>
            </div>
            <div>
              <label class="form-label" style="font-size:11px;font-weight:600">Stock Available</label>
              <div style="padding:7px 10px;background:#fff;border:1px solid ${qtyLeft <= 5 ? '#fca5a5' : '#ddd6fe'};border-radius:6px;font-weight:700;color:${qtyLeft <= 5 ? '#dc2626' : '#15803d'}">${qtyLeft} ${unit}(s)</div>
            </div>
          </div>
          ${qtyLeft <= 5 ? `<div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:6px;padding:6px 10px;font-size:11px;color:#b91c1c;margin-top:6px"><i class="fas fa-exclamation-triangle"></i> Low stock warning — only ${qtyLeft} unit(s) remaining</div>` : ''}
          <input type="hidden" class="pay-item-stock-id" value="${stockId}">
          <input type="hidden" class="pay-item-stock-unit-price" value="${sellPrice}">
        </div>`;
    } else if (metaType === "textbook") {
      metaContainer.innerHTML = `
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px">
          <label class="form-label" style="font-weight:600">Subject / Textbook Title</label>
          <input type="text" class="form-control pay-item-textbook" placeholder="e.g. Further Mathematics, Biology, Chemistry...">
        </div>`;
    } else {
      metaContainer.innerHTML = "";
    }

    updatePaymentItemsSummary();
  }

  // ── Stock item qty → auto-update amount ──────────────────────────────────
  function onStockItemQtyChange(qtyInput, unitPrice) {
    const row = qtyInput.closest(".pay-item-row");
    if (!row) return;
    const qty = Math.max(1, parseInt(qtyInput.value) || 1);
    const total = Math.round(qty * unitPrice * 100) / 100;
    const amountInput = row.querySelector(".pay-item-amount");
    if (amountInput) {
      amountInput.value = formatAmount(total, true);
    }
    updatePaymentItemsSummary();
  }

  // ── Stationery quick-pick chip appends to description field ──────────────
  function quickPickStationery(btnEl, itemName) {
    const row = btnEl.closest(".pay-item-row");
    if (!row) return;
    const descEl = row.querySelector(".pay-item-stationery-desc");
    if (!descEl) return;
    const current = descEl.value.trim();
    descEl.value = current ? `${current}, ${itemName} ×1` : `${itemName} ×1`;
    descEl.focus();
  }

  function updatePaymentItemsSummary() {
    const rows = document.querySelectorAll("#payment-items-container .pay-item-row");
    let totalAmt = 0;
    let tuitionAmt = 0;

    rows.forEach(r => {
      const amt = parseAmount(r.querySelector(".pay-item-amount")?.value) || 0;
      totalAmt += amt;
      const catVal = r.querySelector(".pay-item-category")?.value;
      const catText = r.querySelector(".pay-item-category")?.selectedOptions?.[0]?.text || "";
      if (catVal === "school_fees" || catVal === "daycare_fee" || /school fee|tuition|day care|creche/i.test(catText)) {
        tuitionAmt += amt;
      }
    });

    _setText("pay-items-total-display", "₦" + formatAmount(totalAmt, true));

    const studentId = document.getElementById("pay-student-id")?.value;
    const student = studentId ? RichVineDB.getStudentById(studentId) : null;
    const currentArrears = Number(student?.arrears) || 0;
    const arrearsDeducted = Math.min(currentArrears, tuitionAmt);
    const termFeePaid = Math.round((tuitionAmt - arrearsDeducted) * 100) / 100;
    const otherFees = Math.max(0, Math.round((totalAmt - tuitionAmt) * 100) / 100);

    const previewEl = document.getElementById("pay-items-arrears-preview");
    if (previewEl) {
      if (tuitionAmt > 0) {
        previewEl.innerHTML = `
          <div><span style="color:#b45309;font-weight:700">₦${formatAmount(arrearsDeducted, true)}</span> to Arrears</div>
          <div><span style="color:green;font-weight:700">₦${formatAmount(termFeePaid, true)}</span> to Term Fees</div>
          ${otherFees > 0 ? `<div><span style="color:#0284c7;font-weight:700">₦${formatAmount(otherFees, true)}</span> to Other Fees</div>` : ''}
        `;
      } else if (totalAmt > 0) {
        previewEl.innerHTML = `<div><span style="color:#0284c7;font-weight:700">₦${formatAmount(totalAmt, true)}</span> to Other / Non-tuition Fees</div>`;
      } else {
        previewEl.innerHTML = `<span style="color:#64748b">Add fee items and amounts above</span>`;
      }
    }
  }

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
          const paidTxns = studentPayments.filter(p => p.category === cat.id || (Array.isArray(p.items) && p.items.some(it => it.category === cat.id)));
          const totalPaidForCat = paidTxns.reduce((s, p) => {
            if (Array.isArray(p.items) && p.items.length) {
              return s + p.items.filter(it => it.category === cat.id).reduce((sub, it) => sub + (Number(it.amount) || 0), 0);
            }
            return s + (Number(p.amount) || 0);
          }, 0);
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

    // Reset items container and add initial row
    const itemsContainer = document.getElementById("payment-items-container");
    if (itemsContainer) {
      itemsContainer.innerHTML = "";
      const isDayCare = /day\s*care|creche/i.test(student.currentClass);
      addPaymentItemRow({ category: isDayCare ? "daycare_fee" : "school_fees" });
    }

    const dateEl = document.getElementById("pay-date");
    if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];

    updatePaymentItemsSummary();
    openModal("modal-record-payment");
  }

  let _isSubmittingPayment = false;
  function handlePaymentSubmit(e) {
    e.preventDefault();
    if (_isSubmittingPayment) return;
    const form = e.target;
    const submitBtn = form.querySelector("button[type='submit']");
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    _isSubmittingPayment = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Recording Payment...`;
    }

    try {
      const studentId  = form.querySelector("#pay-student-id").value;
      const student    = RichVineDB.getStudentById(studentId);
      if (!student) return showAlert("Student not found.");

      const rowEls = form.querySelectorAll("#payment-items-container .pay-item-row");
      if (!rowEls.length) return showAlert("Please add at least one fee item to the payment.");

      const items = [];
      const stockLinkedItems = []; // inventory links to decrement after save
      for (let i = 0; i < rowEls.length; i++) {
        const row = rowEls[i];
        const catSel = row.querySelector(".pay-item-category");
        const catId = catSel?.value;
        if (!catId) return showAlert(`Please select a fee category for item #${i + 1}.`);

        const metaType = catSel.options[catSel.selectedIndex]?.dataset?.meta || "";
        const rawText  = catSel.options[catSel.selectedIndex]?.text || catId;
        const catName  = rawText.replace(/^[\u{1F4D8}\u{1F393}\u{1F3F7}]\s*/u, '').split(' —')[0].split(' [')[0].trim();
        const amount = parseAmount(row.querySelector(".pay-item-amount")?.value);
        if (!amount || amount <= 0) return showAlert(`Please enter a valid amount for item #${i + 1} (${catName}).`);

        let itemDesc = (row.querySelector(".pay-item-desc")?.value || "").trim();

        // Collect item-specific meta details
        let details = {};
        const daycareMonth = row.querySelector(".pay-item-daycare-month")?.value;
        if (catId === "daycare_fee") {
          if (!daycareMonth) return showAlert(`Please select the month covered for Daycare Fee (item #${i + 1}).`);
          details.month = daycareMonth;
          if (!itemDesc) itemDesc = `Month: ${daycareMonth}`;
        }

        const sportColor = row.querySelector(".pay-item-sport-color")?.value;
        if (sportColor) {
          details.colour = sportColor;
          if (!itemDesc) itemDesc = `Colour: ${sportColor}`;
        }

        const leaves = row.querySelector(".pay-item-leaves")?.value;
        const qty = row.querySelector(".pay-item-qty")?.value;
        if (leaves || qty) {
          details.leaves = leaves;
          details.qty = qty;
          if (!itemDesc) itemDesc = `${qty || 1} copy (${leaves || ''})`;
        }

        const book = row.querySelector(".pay-item-textbook")?.value?.trim();
        if (book) {
          details.bookTitle = book;
          if (!itemDesc) itemDesc = book;
        }

        // Stationery item
        const statDesc = row.querySelector(".pay-item-stationery-desc")?.value?.trim();
        const statQty  = row.querySelector(".pay-item-stationery-qty")?.value;
        if (metaType === "stationery") {
          details.stationeryDesc = statDesc || "";
          details.qty = statQty || "1";
          if (!itemDesc) itemDesc = statDesc || "Stationery items";
        }

        // Stock inventory item — queue for linked sale
        const stockId        = row.querySelector(".pay-item-stock-id")?.value;
        const stockUnitPrice = Number(row.querySelector(".pay-item-stock-unit-price")?.value || 0);
        const stockQty       = parseInt(row.querySelector(".pay-item-stock-qty")?.value || "1");
        if (metaType === "stock_item" && stockId) {
          const stockItem = RichVineDB.getStockById(stockId);
          if (!stockItem) return showAlert(`Stock item not found for item #${i + 1}. Please refresh and try again.`);
          if (stockItem.quantityLeft < stockQty) return showAlert(`Insufficient stock for "${stockItem.name}". Only ${stockItem.quantityLeft} ${stockItem.unit}(s) available.`);
          stockLinkedItems.push({ stockId, stockQty, stockUnitPrice, stockName: stockItem.name });
          details.stockId  = stockId;
          details.stockQty = stockQty;
          if (!itemDesc) itemDesc = `${stockItem.name} ×${stockQty}`;
        }

        const finalCatId   = metaType === "stock_item" ? "stock_item" : catId;
        const finalCatName = metaType === "stock_item"
          ? `Store: ${catName}`
          : (catId === "daycare_fee" && details.month) ? `${catName} — ${details.month}` : catName;

        items.push({
          category:     finalCatId,
          categoryName: finalCatName,
          description:  itemDesc,
          amount,
          details
        });
      }

      const totalAmount = items.reduce((s, it) => s + it.amount, 0);

      const payment = {
        studentId,
        studentName:  `${student.firstName} ${student.lastName}`,
        studentClass: student.currentClass,
        items,
        amount:        totalAmount,
        paymentMethod: form.querySelector("#pay-method").value,
        reference:     form.querySelector("#pay-reference")?.value?.trim() || "",
        session:       RichVineDB.getConfig()?.currentSession || "2026/2027",
        term:          form.querySelector("#pay-term").value,
        date:          form.querySelector("#pay-date").value,
        status:        "Confirmed"
      };

      const saved = RichVineDB.addPayment(payment);

      // ── Create linked stock sales (decrement inventory) ──────────────────
      if (stockLinkedItems.length > 0) {
        stockLinkedItems.forEach(si => {
          RichVineDB.recordStockSale({
            stockId:         si.stockId,
            quantity:        si.stockQty,
            sellingPrice:    si.stockUnitPrice,
            date:            payment.date,
            term:            payment.term,
            studentId:       payment.studentId,
            studentName:     payment.studentName,
            studentClass:    payment.studentClass,
            paymentMethod:   payment.paymentMethod,
            notes:           `Linked to receipt ${saved.receiptNo}`,
            isPaymentLinked: true,
            paymentId:       saved.id
          });
        });
      }
      closeModal("modal-record-payment");
      loadDashboard();
      loadPaymentsTab();
      loadLearnersTab();
      loadOverviewTab();
      loadClassHub();

      const arrearsMsg = saved.arrearsDeducted > 0
        ? ` | ₦${formatAmount(saved.arrearsDeducted, true)} applied to arrears, ₦${formatAmount(saved.termFeePaid, true)} to term fee`
        : "";
      showToast(`✓ Payment of ₦${formatAmount(saved.amount, true)} recorded (${saved.itemCount || items.length} item(s))${arrearsMsg}`, "success");
    } finally {
      setTimeout(() => {
        _isSubmittingPayment = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnHtml;
        }
      }, 1000);
    }

    setTimeout(() => RichVineReports.printReceipt(saved.id), 600);
  }

  // ── LOG EXPENSE MODAL ─────────────────────────────────────────────────────
  let _expenseItemCounter = 0;

  function openLogExpenseModal() {
    const form = document.getElementById("expense-form");
    if (form) form.reset();
    const dateEl = document.getElementById("exp-date");
    if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];

    const container = document.getElementById("expense-items-container");
    if (container) {
      container.innerHTML = "";
      _expenseItemCounter = 0;
      addExpenseItemRow();
    }
    openModal("modal-log-expense");
  }

  function addExpenseItemRow(defaultData = {}) {
    const container = document.getElementById("expense-items-container");
    if (!container) return;
    _expenseItemCounter++;
    const rowId = `exp-item-row-${Date.now()}-${_expenseItemCounter}`;
    const row = document.createElement("div");
    row.className = "exp-item-row";
    row.id = rowId;
    row.style.cssText = "background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;margin-bottom:10px;position:relative;";

    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:.5px" class="exp-item-row-title">
          <i class="fas fa-file-invoice" style="color:crimson"></i> Expense Item #${_expenseItemCounter}
        </span>
        <button type="button" class="btn-icon btn-danger btn-sm" onclick="RichVineApp.removeExpenseItemRow('${rowId}')" title="Remove this item" style="width:26px;height:26px">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="form-row" style="margin-bottom:8px">
        <div class="form-group" style="flex:2">
          <label class="form-label" style="font-weight:600">Description / Title *</label>
          <input type="text" class="form-control exp-item-desc" required placeholder="e.g. Generator Diesel, Teaching materials, Lab supplies…" value="${defaultData.description || ''}">
        </div>
        <div class="form-group" style="flex:1.2">
          <label class="form-label" style="font-weight:600">Category *</label>
          <select class="form-control exp-item-cat" required>
            <option value="Utilities">Utilities</option>
            <option value="Staff Payroll">Staff Payroll</option>
            <option value="Welfare">Welfare</option>
            <option value="Loan">Loan</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Security">Security</option>
            <option value="Administration">Administration</option>
            <option value="Transport">Transport</option>
            <option value="Catering">Catering</option>
            <option value="Marketing">Marketing</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Examination">Examination</option>
            <option value="Events">Events</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group" style="flex:1.5">
          <label class="form-label" style="font-weight:700;color:#0369a1">
            <i class="fas fa-wallet"></i> Charge Against Revenue / Account *
          </label>
          <select class="form-control exp-item-section" required onchange="RichVineApp.updateExpenseItemsSummary()">
            <option value="general">🏛 General / Central Account</option>
            <option value="primary">🧒 Primary School Account</option>
            <option value="junior">📖 Junior College Account</option>
            <option value="senior">🎓 Senior College Account</option>
          </select>
        </div>
        <div class="form-group" style="flex:1">
          <label class="form-label" style="font-weight:700;color:crimson">Amount (₦) *</label>
          <input type="text" class="form-control exp-item-amount" inputmode="decimal" required placeholder="0.00" style="border-color:#fca5a5;font-weight:700;color:crimson" oninput="RichVineApp.updateExpenseItemsSummary()">
        </div>
      </div>
    `;

    container.appendChild(row);

    const amountInput = row.querySelector(".exp-item-amount");
    bindCurrencyInput(amountInput);

    if (defaultData.category) {
      row.querySelector(".exp-item-cat").value = defaultData.category;
    }
    if (defaultData.section) {
      row.querySelector(".exp-item-section").value = defaultData.section;
    }
    if (defaultData.amount) {
      amountInput.value = formatAmount(defaultData.amount, true);
    }

    _refreshExpenseItemRowLabels();
    updateExpenseItemsSummary();
    return row;
  }

  function _refreshExpenseItemRowLabels() {
    const container = document.getElementById("expense-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".exp-item-row");
    rows.forEach((row, idx) => {
      const titleEl = row.querySelector(".exp-item-row-title");
      if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-file-invoice" style="color:crimson"></i> Expense Item #${idx + 1}`;
      }
    });
  }

  function removeExpenseItemRow(rowId) {
    const container = document.getElementById("expense-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".exp-item-row");
    if (rows.length <= 1) {
      showToast("At least one expense item is required.", "warning");
      return;
    }
    const target = document.getElementById(rowId);
    if (target) target.remove();
    _refreshExpenseItemRowLabels();
    updateExpenseItemsSummary();
  }

  function updateExpenseItemsSummary() {
    const container = document.getElementById("expense-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".exp-item-row");

    let total = 0;
    const perAccount = { general: 0, primary: 0, junior: 0, senior: 0 };
    const accountShortNames = { general: "General", primary: "Primary", junior: "Junior", senior: "Senior" };

    rows.forEach(row => {
      const amt = parseAmount(row.querySelector(".exp-item-amount")?.value || 0);
      const sec = row.querySelector(".exp-item-section")?.value || "general";
      total += amt;
      perAccount[sec] = (perAccount[sec] || 0) + amt;
    });

    _setText("exp-items-total-display", "₦" + formatAmount(total, true));

    const breakdownParts = Object.entries(perAccount)
      .filter(([, v]) => v > 0)
      .map(([k, v]) => `<b>${accountShortNames[k]}:</b> ₦${formatAmount(v, true)}`);

    const breakdownEl = document.getElementById("exp-items-account-breakdown");
    if (breakdownEl) {
      breakdownEl.innerHTML = breakdownParts.length
        ? `${breakdownParts.join(" &nbsp;|&nbsp; ")} <span style="color:#64748b">(${rows.length} item${rows.length === 1 ? '' : 's'})</span>`
        : `<span style="color:#64748b">${rows.length} item${rows.length === 1 ? '' : 's'}</span>`;
    }
  }

  function handleExpenseSubmit(e) {
    e.preventDefault();
    const container = document.getElementById("expense-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".exp-item-row");
    if (!rows.length) return showAlert("Please add at least one expense item.");

    const dateEl = document.getElementById("exp-date");
    const periodEl = document.getElementById("exp-period");
    const termEl = document.getElementById("exp-term");
    const methodEl = document.getElementById("exp-method");
    const notesEl = document.getElementById("exp-notes");

    const date = dateEl ? dateEl.value : new Date().toISOString().split("T")[0];
    const period = periodEl ? periodEl.value : "one_time";
    const term = termEl ? termEl.value : "1st Term";
    const paymentMethod = methodEl ? methodEl.value : "Bank Transfer";
    const sharedNotes = notesEl ? notesEl.value.trim() : "";

    const accountsMap = {
      general: "General / Central Account",
      primary: "Primary School Account",
      junior: "Junior College Account",
      senior: "Senior College Account"
    };

    const itemsToSave = [];
    const baseTime = Date.now();

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const desc = row.querySelector(".exp-item-desc")?.value.trim();
      const cat = row.querySelector(".exp-item-cat")?.value;
      const section = row.querySelector(".exp-item-section")?.value || "general";
      const amt = parseAmount(row.querySelector(".exp-item-amount")?.value);

      if (!desc) {
        return showAlert(`Please enter a description for Expense Item #${i + 1}.`);
      }
      if (!amt || amt <= 0) {
        return showAlert(`Please enter a valid amount for Expense Item #${i + 1} (${desc}).`);
      }

      itemsToSave.push({
        description: desc,
        category: cat,
        section,
        account: section,
        accountName: accountsMap[section] || "General / Central Account",
        amount: amt,
        period,
        date,
        session: RichVineDB.getConfig()?.currentSession || "2026/2027",
        term,
        paymentMethod,
        notes: sharedNotes,
        batchId: rows.length > 1 ? `BATCH-${baseTime}` : "",
        itemCount: rows.length
      });
    }

    RichVineDB.addExpenses(itemsToSave);
    closeModal("modal-log-expense");
    loadExpensesTab();
    loadOverviewTab();
    loadDashboard();

    const totalAmt = itemsToSave.reduce((s, it) => s + it.amount, 0);
    showToast(`✓ Successfully logged ${itemsToSave.length} expense item(s) totalling ₦${formatAmount(totalAmt, true)}`, "success");
  }

  function confirmDeleteExpense(id) {
    showConfirm("⚠️ Delete this expense record?<br><small>This action cannot be undone.</small>", () => {
      RichVineDB.deleteExpense(id);
      loadExpensesTab();
      loadOverviewTab();
      showToast("Expense deleted.", "warning");
    });
  }

  function confirmDeleteStudent(id) {
    const s = RichVineDB.getStudentById(id);
    if (!s) return;
    const payments = RichVineDB.getPayments({ studentId: id });
    const totalPaid = payments.reduce((sum, p) => sum + Number(p.amount), 0);
    const paymentWarning = payments.length > 0
      ? `\n\n⚠ WARNING: This will also permanently DELETE ${payments.length} payment record(s) totalling ₦${totalPaid.toLocaleString(undefined, {minimumFractionDigits:2})}, and deduct that amount from general revenue.\n\nThis action is IRREVERSIBLE and is only for error correction.`
      : '\n\nNo payment records are linked to this learner.';
    const payWarn = payments.length > 0
      ? `<br><span style="color:#b91c1c;font-size:12px">⚠️ This will also DELETE ${payments.length} payment record(s) totalling ₦${totalPaid.toLocaleString(undefined,{minimumFractionDigits:2})} and deduct from revenue.</span>`
      : `<br><small style="color:#64748b">No payment records linked.</small>`;
    showConfirm(`⚠️ Delete learner profile?<br><strong>${s.firstName} ${s.lastName} (${s.regNo})</strong>${payWarn}<br><small>This is irreversible and should only be done to correct an error.</small>`, () => {
      RichVineDB.deleteStudent(id);
      loadLearnersTab();
      loadDashboard();
      loadPaymentsTab();
      loadOverviewTab();
      loadClassHub();
      showToast(`Learner ${s.firstName} ${s.lastName} and all their records permanently deleted.`, "warning");
    });
  }

  function confirmDeletePayment(id) {
    const payments = RichVineDB.getPayments();
    const p = payments.find(x => x.id === id);
    if (!p) return;
    showConfirm(`⚠️ Delete Payment Receipt?<br><strong>${p.receiptNo} — ₦${formatAmount(p.amount, true)}</strong><br>Student: ${p.studentName}<br><small style="color:#64748b">This removes the payment from all records and deducts from revenue. This cannot be undone.</small>`, () => {
      RichVineDB.deletePayment(id);
      loadPaymentsTab();
      loadLearnersTab();
      loadDashboard();
      loadOverviewTab();
      loadClassHub();
      showToast(`✓ Payment ${p.receiptNo} permanently deleted. Revenue updated.`, "warning");
    });
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
  function _escape(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
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
  function _populateCategoryFilter(selectId, defaultLabel = "All Fee Categories") {
    const sel = document.getElementById(selectId);
    if (!sel || !window.RichVineDB) return;
    const current = sel.value;
    const cats = RichVineDB.getFeeCategories() || [];
    sel.innerHTML = `<option value="All">${defaultLabel}</option>` +
      cats.map(c => `<option value="${c.id}" ${current === c.id ? "selected" : ""}>${c.name}</option>`).join("");
  }
  // ── In-app Toast (queued, multi-line safe) ────────────────────────────
  let _toastQueue = [];
  let _toastBusy  = false;
  function showToast(message, type = "success", duration = 3500) {
    _toastQueue.push({ message, type, duration });
    if (!_toastBusy) _processToastQueue();
  }
  function _processToastQueue() {
    if (!_toastQueue.length) { _toastBusy = false; return; }
    _toastBusy = true;
    const { message, type, duration } = _toastQueue.shift();
    const toast = document.getElementById("toast");
    if (!toast) { _toastBusy = false; return; }
    toast.innerHTML = message;
    toast.className = `toast toast-${type} show`;
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(_processToastQueue, 300);
    }, duration);
  }

  // ── In-app Confirm Dialog (replaces browser confirm()) ─────────────────
  function showConfirm(message, onYes, onNo) {
    const el = document.getElementById("modal-confirm");
    const msgEl = document.getElementById("confirm-message");
    const yesBtn = document.getElementById("confirm-yes-btn");
    const noBtn = document.getElementById("confirm-no-btn");
    if (!el || !msgEl || !yesBtn || !noBtn) {
      // Fallback if modal not present
      if (window.confirm(message.replace(/<[^>]*>/g, ""))) { if (onYes) onYes(); } else { if (onNo) onNo(); }
      return;
    }
    msgEl.innerHTML = message;
    // Remove hidden class first, then force display:flex
    el.classList.remove("hidden");
    el.removeAttribute("style");
    el.style.display = "flex";
    const cleanup = () => {
      el.style.display = "none";
      el.classList.add("hidden");
      yesBtn.onclick = null;
      noBtn.onclick = null;
      el.onclick = null;
    };
    yesBtn.onclick = () => { cleanup(); if (onYes) onYes(); };
    noBtn.onclick  = () => { cleanup(); if (onNo)  onNo();  };
    el.onclick = (e) => { if (e.target === el) cleanup(); };
  }

  // ── In-app Alert (replaces browser alert()) ────────────────────────────
  function showAlert(message, type = "warning", duration = 4000) {
    showToast(message, type, duration);
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
    // Term fee & opening arrears
    const arrearsPaidTotal = RichVineDB.getPayments({ studentId }).reduce((sum, p) => sum + (RichVineDB.getPaymentBreakdown(p).arrearsRecovered || 0), 0);
    const openingArrears = (s.openingArrears !== undefined && s.openingArrears !== null)
      ? s.openingArrears
      : Math.round(((Number(s.arrears) || 0) + arrearsPaidTotal) * 100) / 100;

    form.querySelector('#edit-s-term-fee').value = formatAmount(s.termFee || 0, true);
    form.querySelector('#edit-s-arrears').value = formatAmount(openingArrears || 0, true);
    bindCurrencyInput(form.querySelector('#edit-s-term-fee'));
    bindCurrencyInput(form.querySelector('#edit-s-arrears'));
    openModal('modal-edit-student');
  }

  function handleEditStudentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const id = form.querySelector('#edit-s-id').value;
    const newOpeningArrears = parseAmount(form.querySelector('#edit-s-arrears').value);
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
      openingArrears: newOpeningArrears,
      arrears:     newOpeningArrears
    };
    if (!fields.firstName || !fields.lastName || !fields.currentClass) {
      return showAlert('First name, last name, and class are required.');
    }
    RichVineDB.updateStudent(id, fields);
    closeModal('modal-edit-student');
    loadLearnersTab();
    loadDashboard();
    loadOverviewTab();
    loadClassHub();
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
    
    // Description field
    const descInput = form.querySelector('#edit-pay-description');
    if (descInput) descInput.value = p.description || p.details?.description || '';

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

    const description = (form.querySelector('#edit-pay-description')?.value || '').trim();

    const fields = {
      amount:        parseAmount(form.querySelector('#edit-pay-amount').value),
      category:      catId,
      categoryName:  finalCatName,
      paymentMethod: form.querySelector('#edit-pay-method').value,
      date:          form.querySelector('#edit-pay-date').value,
      reference:     form.querySelector('#edit-pay-reference').value.trim(),
      term:          form.querySelector('#edit-pay-term').value,
      description:   description,
      ...(details.month ? { details } : {})
    };
    if (!fields.amount || fields.amount <= 0) return showAlert('Please enter a valid amount.');
    if (!fields.date) return showAlert('Please enter a valid date.');
    RichVineDB.updatePayment(id, fields);
    closeModal('modal-edit-payment');
    loadPaymentsTab();
    loadLearnersTab();
    loadDashboard();
    loadOverviewTab();
    loadClassHub();
    showToast(`✓ Payment record corrected successfully`, 'success');
  }

  // ── EDIT EXPENSE MODAL ─────────────────────────────────────────────────
  function openEditExpenseModal(expenseId) {
    const expenses = RichVineDB.getExpenses();
    const exp = expenses.find(e => e.id === expenseId);
    if (!exp) return;
    const form = document.getElementById("edit-expense-form");
    if (!form) return;

    form.querySelector("#edit-exp-id").value = exp.id;
    const metaEl = form.querySelector("#edit-exp-meta-info");
    if (metaEl) {
      metaEl.textContent = `${exp.id} · Logged by: ${exp.recordedBy || 'Admin'} on ${exp.date}`;
    }
    form.querySelector("#edit-exp-desc").value = exp.description || "";
    form.querySelector("#edit-exp-cat").value = exp.category || "Others";
    form.querySelector("#edit-exp-section").value = exp.section || "general";
    form.querySelector("#edit-exp-amount").value = formatAmount(exp.amount, true);
    form.querySelector("#edit-exp-date").value = exp.date || "";
    form.querySelector("#edit-exp-period").value = exp.period || "one_time";
    form.querySelector("#edit-exp-term").value = exp.term || "1st Term";
    form.querySelector("#edit-exp-method").value = exp.paymentMethod || "Bank Transfer";
    form.querySelector("#edit-exp-notes").value = exp.notes || "";

    bindCurrencyInput(form.querySelector("#edit-exp-amount"));
    openModal("modal-edit-expense");
  }

  function handleEditExpenseSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const id = form.querySelector("#edit-exp-id").value;
    const desc = form.querySelector("#edit-exp-desc").value.trim();
    const cat = form.querySelector("#edit-exp-cat").value;
    const section = form.querySelector("#edit-exp-section").value;
    const amt = parseAmount(form.querySelector("#edit-exp-amount").value);
    const date = form.querySelector("#edit-exp-date").value;
    const period = form.querySelector("#edit-exp-period").value;
    const term = form.querySelector("#edit-exp-term").value;
    const paymentMethod = form.querySelector("#edit-exp-method").value;
    const notes = form.querySelector("#edit-exp-notes").value.trim();

    if (!desc) return showAlert("Please enter an expense description / title.");
    if (!amt || amt <= 0) return showAlert("Please enter a valid expense amount.");
    if (!date) return showAlert("Please select an expense date.");

    const fields = {
      description: desc,
      category: cat,
      section: section,
      amount: amt,
      date: date,
      period: period,
      term: term,
      paymentMethod: paymentMethod,
      notes: notes
    };

    const res = RichVineDB.updateExpense(id, fields);
    if (!res) return showAlert("Error: Could not find or update the expense record.");

    closeModal("modal-edit-expense");
    loadExpensesTab();
    loadOverviewTab();
    loadDashboard();
    showToast(`✓ Expense record corrected successfully`, "success");
  }

  function quickSelectPaymentCategory(categoryId) {
    const container = document.getElementById("payment-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".pay-item-row");
    if (rows.length === 1) {
      const firstCat = rows[0].querySelector(".pay-item-category")?.value;
      const firstAmt = parseAmount(rows[0].querySelector(".pay-item-amount")?.value);
      if (!firstCat && (!firstAmt || firstAmt === 0)) {
        const catSel = rows[0].querySelector(".pay-item-category");
        catSel.value = categoryId;
        onPaymentItemCategoryChange(catSel);
        rows[0].querySelector(".pay-item-amount")?.focus();
        return;
      }
    }
    addPaymentItemRow({ category: categoryId });
    setTimeout(() => {
      const allRows = container.querySelectorAll(".pay-item-row");
      const lastRow = allRows[allRows.length - 1];
      lastRow?.querySelector(".pay-item-amount")?.focus();
    }, 50);
  }

  function quickSelectDaycareCycle(cycleId) {
    const container = document.getElementById("payment-items-container");
    if (!container) return;
    const rows = container.querySelectorAll(".pay-item-row");
    let targetRow = null;
    if (rows.length === 1) {
      const firstCat = rows[0].querySelector(".pay-item-category")?.value;
      const firstAmt = parseAmount(rows[0].querySelector(".pay-item-amount")?.value);
      if (!firstCat && (!firstAmt || firstAmt === 0)) {
        targetRow = rows[0];
      }
    }
    if (!targetRow) {
      addPaymentItemRow({ category: "daycare_fee", cycleId });
      setTimeout(() => {
        const allRows = container.querySelectorAll(".pay-item-row");
        const lastRow = allRows[allRows.length - 1];
        lastRow?.querySelector(".pay-item-amount")?.focus();
      }, 50);
      return;
    }
    const catSel = targetRow.querySelector(".pay-item-category");
    catSel.value = "daycare_fee";
    onPaymentItemCategoryChange(catSel, { cycleId });
    targetRow.querySelector(".pay-item-amount")?.focus();
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


  // ── CBT ASSESSMENT ────────────────────────────────────────────────────────
  function loadCbtAssessmentTab() {
    const submissions = RichVineDB.getCbtSubmissions ? RichVineDB.getCbtSubmissions() : [];
    
    // KPI metrics
    const totalCount = submissions.length;
    let totalScorePercent = 0;
    let distinctionCount = 0;
    let topPerformer = null;

    submissions.forEach(s => {
      const p = Number(s.percentage) || 0;
      totalScorePercent += p;
      if (p >= 65) distinctionCount++;
      if (!topPerformer || p > (Number(topPerformer.percentage) || 0)) {
        topPerformer = s;
      }
    });

    const avgPercent = totalCount > 0 ? (totalScorePercent / totalCount).toFixed(1) : "0.0";
    const distinctionRate = totalCount > 0 ? `${distinctionCount} (${Math.round((distinctionCount / totalCount) * 100)}%)` : "0 (0%)";

    _setText("cbt-kpi-total", totalCount);
    _setText("cbt-kpi-avg", avgPercent + "%");
    _setText("cbt-kpi-pass", distinctionRate);
    _setText("cbt-kpi-top", topPerformer ? `${topPerformer.studentName} (${topPerformer.percentage}%)` : "None yet");

    // Filtering
    const classFilter = document.getElementById("cbt-class-filter")?.value || "All";
    const gradeFilter = document.getElementById("cbt-grade-filter")?.value || "All";
    const searchFilter = (document.getElementById("cbt-search-filter")?.value || "").trim().toLowerCase();

    let filtered = [...submissions];

    if (classFilter !== "All") {
      filtered = filtered.filter(s => {
        if (classFilter === "SSS 1" || classFilter === "SSS 2" || classFilter === "SSS 3") {
          return s.baseClass === classFilter || (s.studentClass && s.studentClass.startsWith(classFilter));
        }
        return s.studentClass === classFilter;
      });
    }

    if (gradeFilter !== "All") {
      if (gradeFilter === "Credit") {
        filtered = filtered.filter(s => ["C4", "C5", "C6"].includes(s.grade));
      } else if (gradeFilter === "Pass") {
        filtered = filtered.filter(s => ["D7", "E8"].includes(s.grade));
      } else {
        filtered = filtered.filter(s => s.grade === gradeFilter);
      }
    }

    if (searchFilter) {
      filtered = filtered.filter(s => 
        (s.studentName && s.studentName.toLowerCase().includes(searchFilter)) ||
        (s.regNo && s.regNo.toLowerCase().includes(searchFilter)) ||
        (s.studentId && s.studentId.toLowerCase().includes(searchFilter))
      );
    }

    _setText("cbt-table-count", filtered.length);

    const tbody = document.getElementById("cbt-table-body");
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" class="empty-cell">No CBT examination records match your filter criteria.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map(sub => {
      const p = Number(sub.percentage) || 0;
      let gradeBadgeColor = "#16a34a"; // green
      let gradeBg = "#dcfce7";
      if (p < 40) {
        gradeBadgeColor = "#dc2626"; gradeBg = "#fee2e2";
      } else if (p < 50) {
        gradeBadgeColor = "#d97706"; gradeBg = "#fef3c7";
      } else if (p < 65) {
        gradeBadgeColor = "#0284c7"; gradeBg = "#e0f2fe";
      }

      const mins = Math.floor((Number(sub.timeSpentSeconds) || 0) / 60);
      const secs = (Number(sub.timeSpentSeconds) || 0) % 60;
      const timeSpentStr = `${mins}m ${secs}s`;
      const dateStr = sub.submittedAt ? new Date(sub.submittedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : (sub.timestamp ? new Date(sub.timestamp).toLocaleDateString("en-GB") : "-");

      return `
        <tr>
          <td>
            <strong>${_escape(sub.studentName)}</strong>
            <div style="font-size:11px;color:#64748b">${_escape(sub.regNo || sub.studentId)}</div>
          </td>
          <td><span class="badge" style="background:#f1f5f9;color:#334155;font-weight:700">${_escape(sub.studentClass)}</span></td>
          <td>${_escape(sub.subject || "General Mathematics")}</td>
          <td style="text-align:center;font-weight:800;font-size:14px">${sub.score} / ${sub.totalQuestions}</td>
          <td style="text-align:center;font-weight:800;color:${gradeBadgeColor}">${sub.percentage}%</td>
          <td style="text-align:center">
            <span style="background:${gradeBg};color:${gradeBadgeColor};padding:3px 8px;border-radius:12px;font-weight:800;font-size:11px">
              ${_escape(sub.grade)}
            </span>
          </td>
          <td style="text-align:center;color:#475569;font-size:12px">${timeSpentStr}</td>
          <td style="color:#64748b;font-size:12px">${dateStr}</td>
          <td style="text-align:center">
            <div style="display:flex;gap:6px;justify-content:center">
              <button class="btn-sm" style="background:#f1f5f9;color:#0284c7;border:1px solid #cbd5e1" onclick="RichVineApp.printCbtSlip('${sub.id}')" title="Print Result Slip">
                <i class="fas fa-print"></i>
              </button>
              <button class="btn-sm" style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5" onclick="RichVineApp.resetCbtAttempt('${sub.id}', '${_escape(sub.studentName)}')" title="Reset Candidate Attempt">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  function exportCbtCsv() {
    const submissions = RichVineDB.getCbtSubmissions ? RichVineDB.getCbtSubmissions() : [];
    if (!submissions.length) {
      showToast("No CBT examination records available to export.", "warning");
      return;
    }

    const headers = ["Student Name", "Registration No", "Class", "Base Level", "Subject", "Score", "Total Questions", "Percentage", "Grade", "Time Spent (Seconds)", "Submitted Date"];
    const rows = submissions.map(s => [
      `"${(s.studentName || '').replace(/"/g, '""')}"`,
      `"${s.regNo || s.studentId || ''}"`,
      `"${s.studentClass || ''}"`,
      `"${s.baseClass || ''}"`,
      `"${s.subject || 'General Mathematics'}"`,
      s.score,
      s.totalQuestions,
      s.percentage,
      `"${s.grade || ''}"`,
      s.timeSpentSeconds || 0,
      `"${s.submittedAt || (s.timestamp ? new Date(s.timestamp).toISOString() : '')}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RichVine_CBT_Results_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("CBT Results exported to CSV successfully!", "success");
  }

  function printCbtSlip(id) {
    const submissions = RichVineDB.getCbtSubmissions ? RichVineDB.getCbtSubmissions() : [];
    const sub = submissions.find(s => s.id === id);
    if (!sub) {
      showToast("Examination submission not found.", "error");
      return;
    }

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      showToast("Pop-up blocked. Please allow pop-ups to print result slip.", "warning");
      return;
    }

    const mins = Math.floor((Number(sub.timeSpentSeconds) || 0) / 60);
    const secs = (Number(sub.timeSpentSeconds) || 0) % 60;
    const timeSpentStr = `${mins} mins ${secs} secs`;
    const dateStr = sub.submittedAt ? new Date(sub.submittedAt).toLocaleString("en-GB") : new Date().toLocaleString("en-GB");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>RichVine College — CBT Result Slip: ${_escape(sub.studentName)}</title>
        <style>
          body { font-family: 'Times New Roman', serif; margin: 40px; color: #111; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 24px; letter-spacing: 0.5px; }
          .header p { margin: 3px 0; font-size: 13px; color: #444; }
          .badge-box { background: #f1f5f9; padding: 6px; font-weight: bold; font-size: 13px; text-transform: uppercase; margin-top: 8px; border: 1px solid #ccc; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
          table td { padding: 8px 6px; border-bottom: 1px solid #ddd; }
          .score-box { border: 2px solid #000; padding: 16px; margin: 20px 0; display: flex; justify-content: space-between; align-items: center; background: #fafafa; }
          .score-big { font-size: 28px; font-weight: bold; }
          .signatures { margin-top: 50px; display: flex; justify-content: space-between; text-align: center; font-size: 12px; }
          .sig-line { width: 180px; border-top: 1px solid #000; padding-top: 6px; margin-top: 50px; }
          @media print {
            body { margin: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>RICHVINE COLLEGE</h1>
          <p><strong>Motto: Soaring High</strong></p>
          <p>5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State</p>
          <p>Admin Contact: 09053126809 | Email: admissions@richvinecollege.edu.ng</p>
          <div class="badge-box">OFFICIAL COMPUTER-BASED TEST (CBT) EXAMINATION RESULT SLIP</div>
        </div>

        <table>
          <tr>
            <td style="width:25%;font-weight:bold">Candidate Name:</td>
            <td style="width:25%;font-weight:bold;font-size:14px">${_escape(sub.studentName)}</td>
            <td style="width:25%;font-weight:bold">Registration No:</td>
            <td style="width:25%;font-weight:bold;font-size:14px">${_escape(sub.regNo || sub.studentId)}</td>
          </tr>
          <tr>
            <td style="font-weight:bold">Class & Department:</td>
            <td>${_escape(sub.studentClass)}</td>
            <td style="font-weight:bold">Subject:</td>
            <td>${_escape(sub.subject || "General Mathematics")}</td>
          </tr>
          <tr>
            <td style="font-weight:bold">Academic Session:</td>
            <td>${_escape(sub.session || "2026/2027")}</td>
            <td style="font-weight:bold">Time Allowed:</td>
            <td>30 Minutes</td>
          </tr>
          <tr>
            <td style="font-weight:bold">Date & Time:</td>
            <td>${dateStr}</td>
            <td style="font-weight:bold">Time Spent:</td>
            <td>${timeSpentStr}</td>
          </tr>
        </table>

        <div class="score-box">
          <div>
            <div style="font-size:12px;text-transform:uppercase;color:#555;font-weight:bold">Senior Assessment Evaluation</div>
            <div style="font-size:18px;font-weight:bold;margin:4px 0">${_escape(sub.subject || "General Mathematics")}</div>
            <div style="font-size:12px;color:#666">Evaluated over 40 Standard Curriculum Questions</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;text-transform:uppercase;color:#555;font-weight:bold">Recorded Score</div>
            <div class="score-big">${sub.score} / ${sub.totalQuestions}</div>
            <div style="font-size:14px;font-weight:bold;color:#16a34a">${sub.percentage}% — Grade ${sub.grade}</div>
          </div>
        </div>

        <div style="font-size:11px;border:1px solid #ccc;padding:10px;margin-bottom:20px">
          <strong>WAEC Senior Grading System:</strong><br>
          75% - 100% (A1 Distinction) | 70% - 74% (B2 Very Good) | 65% - 69% (B3 Good) | 50% - 64% (C4 - C6 Credit) | 40% - 49% (D7 - E8 Pass) | Below 40% (F9 Fail)
        </div>

        <div class="signatures">
          <div>
            <div class="sig-line">Candidate Signature</div>
          </div>
          <div>
            <div class="sig-line" style="font-style:italic;color:#666">RichVine Automated Verifier</div>
          </div>
          <div>
            <div class="sig-line">Principal / Exam Officer</div>
          </div>
        </div>

        <div style="margin-top:40px;text-align:center;font-size:10px;color:#888;border-top:1px solid #eee;padding-top:8px">
          Verified RichVine College CBT Document • Serial: ${_escape(sub.id)} • Valid across school records.
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
  }

  function resetCbtAttempt(id, studentName) {
    const cleanName = String(studentName || "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    showConfirm(
      `Are you sure you want to reset the examination attempt for candidate <strong>${_escape(cleanName)}</strong>?<br><small style="color:#64748b">This will permanently delete their current test record and allow them to take the test again.</small>`,
      () => {
        if (RichVineDB.deleteCbtSubmission) {
          RichVineDB.deleteCbtSubmission(id);
          // Also delete from Firebase cloud
          if (window.RichVineFirebase && window.RichVineFirebase.deleteCbtSubmission) {
            window.RichVineFirebase.deleteCbtSubmission(id);
          }
          showToast(`CBT attempt for ${cleanName} has been reset successfully.`, "success");
          setTimeout(() => loadCbtAssessmentTab(), 800);
        }
      }
    );
  }

  // ── Database Backup & Disaster Recovery ──────────────────────────────────
  function exportDatabaseBackup() {
    const data = RichVineDB.get();
    if (!data) {
      showToast("No database data found to export.", "error");
      return;
    }
    const cleanBackup = {
      backupDate: new Date().toISOString(),
      schoolName: data.config?.schoolName || "RichVine College",
      session: data.config?.currentSession || "2026/2027",
      config: data.config,
      students: data.students || [],
      payments: data.payments || [],
      expenses: data.expenses || [],
      stocks: data.stocks || [],
      stockSales: data.stockSales || [],
      stockRestocks: data.stockRestocks || [],
      cbtSubmissions: data.cbtSubmissions || []
    };
    const jsonStr = JSON.stringify(cleanBackup, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RichVine_Database_Backup_${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`✓ Database Backup saved: ${cleanBackup.students.length} students, ${cleanBackup.payments.length} payments, ${cleanBackup.expenses.length} expenses.`, "success", 5000);
  }

  function importDatabaseBackup(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported || typeof imported !== "object") {
          showToast("Invalid backup file format.", "error");
          return;
        }

        const studentCount = Array.isArray(imported.students) ? imported.students.length : 0;
        const paymentCount = Array.isArray(imported.payments) ? imported.payments.length : 0;
        const expenseCount = Array.isArray(imported.expenses) ? imported.expenses.length : 0;

        showConfirm(
          `Restore Database Backup?<br><strong>${studentCount} students, ${paymentCount} payments, ${expenseCount} expenses</strong> found in backup file.<br><small style="color:#0284c7">This will safely merge records into local storage and synchronize them with Cloud Firestore.</small>`,
          async () => {
            const db = RichVineDB.get();

            // Merge students by ID
            if (Array.isArray(imported.students)) {
              if (!db.students) db.students = [];
              imported.students.forEach(s => {
                if (!s || !s.id) return;
                const idx = db.students.findIndex(cur => cur.id === s.id);
                if (idx !== -1) db.students[idx] = { ...db.students[idx], ...s };
                else db.students.push(s);
              });
            }

            // Merge payments by ID
            if (Array.isArray(imported.payments)) {
              if (!db.payments) db.payments = [];
              imported.payments.forEach(p => {
                if (!p || !p.id) return;
                const idx = db.payments.findIndex(cur => cur.id === p.id);
                if (idx !== -1) db.payments[idx] = { ...db.payments[idx], ...p };
                else db.payments.push(p);
              });
            }

            // Merge expenses by ID
            if (Array.isArray(imported.expenses)) {
              if (!db.expenses) db.expenses = [];
              imported.expenses.forEach(exp => {
                if (!exp || !exp.id) return;
                const idx = db.expenses.findIndex(cur => cur.id === exp.id);
                if (idx !== -1) db.expenses[idx] = { ...db.expenses[idx], ...exp };
                else db.expenses.push(exp);
              });
            }

            // Merge stocks
            if (Array.isArray(imported.stocks)) {
              if (!db.stocks) db.stocks = [];
              imported.stocks.forEach(stk => {
                if (!stk || !stk.id) return;
                const idx = db.stocks.findIndex(cur => cur.id === stk.id);
                if (idx !== -1) db.stocks[idx] = { ...db.stocks[idx], ...stk };
                else db.stocks.push(stk);
              });
            }

            // Merge CBT submissions
            if (Array.isArray(imported.cbtSubmissions)) {
              if (!db.cbtSubmissions) db.cbtSubmissions = [];
              imported.cbtSubmissions.forEach(sub => {
                if (!sub || !sub.id) return;
                const idx = db.cbtSubmissions.findIndex(cur => cur.id === sub.id);
                if (idx !== -1) db.cbtSubmissions[idx] = { ...db.cbtSubmissions[idx], ...sub };
                else db.cbtSubmissions.push(sub);
              });
            }

            RichVineDB.save(db);
            showToast("✓ Database restored locally! Syncing with Cloud Firestore...", "success", 4000);
            refreshCurrentTab();

            // Trigger sync to push restored records to Cloud Firestore
            if (window.RichVineFirebase && window.RichVineFirebase.syncWithCloud) {
              await window.RichVineFirebase.syncWithCloud(true);
            }
          }
        );
      } catch (err) {
        showToast("Failed to parse backup file: " + err.message, "error");
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
  }

  return {
    exportDatabaseBackup,
    importDatabaseBackup,
    loadCbtAssessmentTab,
    exportCbtCsv,
    printCbtSlip,
    resetCbtAttempt,
    init,
    switchTab,
    refreshCurrentTab,
    manualCloudSync,
    openStudentProfile,
    openEnrollModal,
    openRecordPayment,
    addPaymentItemRow,
    removePaymentItemRow,
    onPaymentItemCategoryChange,
    onStockItemQtyChange,
    quickPickStationery,
    updatePaymentItemsSummary,
    quickSelectPaymentCategory,
    quickSelectDaycareCycle,
    openEditStudentModal,
    handleEditStudentSubmit,
    openEditPaymentModal,
    handleEditPaymentSubmit,
    openLogExpenseModal,
    addExpenseItemRow,
    removeExpenseItemRow,
    updateExpenseItemsSummary,
    openClassDetail,
    confirmDeleteStudent,
    confirmDeletePayment,
    confirmDeleteExpense,
    openEditExpenseModal,
    handleEditExpenseSubmit,
    loadStocksTab,
    checkStockAlerts,
    openAddStockModal,
    handleAddStockSubmit,
    openEditStockModal,
    handleEditStockSubmit,
    openSellStockModal,
    _updateSellTotal,
    handleSellStockSubmit,
    openRestockModal,
    handleRestockSubmit,
    confirmDeleteStock,
    handleEnrollSubmit,
    handlePaymentSubmit,
    handleExpenseSubmit,
    loadDashboard,
    loadLearnersTab,
    loadClassHub,
    loadClearanceTab,
    onClearanceSectionChange,
    selectClearedOnly,
    selectPendingOnly,
    toggleSelectAllClearance,
    updateClearanceSelectionCount,
    printSelectedClearancePasses,
    printSingleClearancePass,
    printSelectedFeeReminders,
    printSingleFeeReminder,
    loadPaymentsTab,
    loadReportsTab,
    onCatReportSectionChange,
    loadExpensesTab,
    loadOverviewTab,
    closeModal,
    toggleFullyPaid,
    parseAmount,
    formatAmount,
    showToast,
    showConfirm,
    showAlert
  };
})();

window.RichVineApp = RichVineApp;
window.addEventListener("DOMContentLoaded", () => RichVineApp.init());
