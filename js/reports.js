/**
 * RichVine College — Reports Module v3
 * Handles CSV export, receipts, ledger, expenses, student balance breakdown, and P&L overview
 */
const RichVineReports = (() => {
  const currency = "₦";
  const school   = "RICHVINE COLLEGE";
  const addr     = "5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State";

  // ── Date range helpers ──────────────────────────────────────────────────
  function getDateRange(timeframe) {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    let startDate = null, label = "All Time";

    if (timeframe === "daily") {
      startDate = today;
      label = "Today (" + new Date().toLocaleDateString("en-GB") + ")";
    } else if (timeframe === "weekly") {
      const d = new Date();
      d.setDate(d.getDate() - 6);
      startDate = d.toISOString().split("T")[0];
      label = "This Week (Last 7 Days)";
    } else if (timeframe === "monthly") {
      startDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
      label = now.toLocaleString("default", { month: "long", year: "numeric" });
    } else if (timeframe === "termly") {
      startDate = "2026-09-01";
      label = "1st Term 2026/2027";
    } else if (timeframe === "session") {
      startDate = "2026-09-01";
      label = "Full Session 2026/2027";
    }
    return { startDate, endDate: today, label };
  }

  // ── Print helper — uses Blob URL (works on file://, no popup permissions needed) ──
  function printHtmlDocument(html, title) {
    try {
      // PRIMARY: Blob URL approach — works on file://, http://, https://
      // No popup blocker issues because we're opening a real navigatable URL
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      const blobUrl = URL.createObjectURL(blob);
      const win = window.open(blobUrl, '_blank');
      if (win) {
        win.focus();
        // Revoke after enough time to load
        setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
        return;
      }
      // If window.open returns null, fall through to iframe
      URL.revokeObjectURL(blobUrl);
    } catch (e) {
      console.warn('Blob URL print failed:', e);
    }

    // FALLBACK: Hidden iframe (works when popup is blocked)
    try {
      let iframe = document.getElementById('rv-print-frame');
      if (iframe) iframe.remove();
      iframe = document.createElement('iframe');
      iframe.id = 'rv-print-frame';
      iframe.style.cssText = 'position:fixed;width:1px;height:1px;border:none;left:-9999px;top:-9999px;opacity:0';
      document.body.appendChild(iframe);
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open('text/html', 'replace');
      doc.write(html);
      doc.close();
      setTimeout(() => {
        try { iframe.contentWindow.focus(); iframe.contentWindow.print(); }
        catch(err) { alert('Could not open print dialog. Please allow popups for this page.'); }
      }, 500);
    } catch (e2) {
      console.error('iframe print failed:', e2);
      alert('Print failed. Please allow popups for this site and try again.');
    }
  }

  // ── Payment receipts ────────────────────────────────────────────────────
  function printReceipt(paymentId) {
    const payment = RichVineDB.getPayments().find(p => p.id === paymentId);
    if (!payment) return alert("Payment record not found.");

    const student = RichVineDB.getStudentById(payment.studentId);
    const config  = RichVineDB.getConfig();
    const balanceInfo = student ? RichVineDB.getStudentBalance(student.id) : null;

    const arrearsDeducted = Number(payment.arrearsDeducted) || 0;
    const termFeePaid     = Number(payment.termFeePaid)     || (Number(payment.amount) - arrearsDeducted);
    const totalPaid       = Number(payment.amount);

    const fmt = (n) => Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const isMultiItem = Array.isArray(payment.items) && payment.items.length > 0;

    const arrearsRow = arrearsDeducted > 0 ? `
      <tr style="background:#fff3cd">
        <td colspan="${isMultiItem ? 3 : 1}" style="padding:6px 10px;font-weight:600;color:#856404;">Priority Arrears Deducted</td>
        <td style="padding:6px 10px;color:#856404;font-weight:700;text-align:${isMultiItem ? 'right' : 'left'}">${currency}${fmt(arrearsDeducted)}</td>
      </tr>
      <tr>
        <td colspan="${isMultiItem ? 3 : 1}" style="padding:6px 10px;font-weight:600;color:#15803d;">Applied to Term School Fee</td>
        <td style="padding:6px 10px;font-weight:700;color:green;text-align:${isMultiItem ? 'right' : 'left'}">${currency}${fmt(termFeePaid)}</td>
      </tr>` : "";

    let balanceSection = "";
    if (balanceInfo) {
      balanceSection = `
      <table style="margin-top:16px;border:1px solid #e2e8f0;background:#fafcff">
        <tr><th colspan="2" style="background:#475569">Outstanding School Fee Status After This Payment</th></tr>
        <tr><td>Outstanding Arrears Balance:</td><td style="font-weight:700;color:${balanceInfo.arrearsBalance > 0 ? '#b91c1c' : '#15803d'}">${currency}${fmt(balanceInfo.arrearsBalance)} ${balanceInfo.arrearsBalance === 0 ? '✓' : ''}</td></tr>
        <tr><td>Term School Fee Remaining:</td><td style="font-weight:700;color:${balanceInfo.termFeeBalance > 0 ? '#b91c1c' : '#15803d'}">${currency}${fmt(balanceInfo.termFeeBalance)} ${balanceInfo.termFeeBalance === 0 ? '✓' : ''}</td></tr>
        <tr style="background:#f1f5f9;font-weight:800;font-size:14px">
          <td>TOTAL OUTSTANDING AMOUNT:</td>
          <td style="color:${balanceInfo.totalOutstanding > 0 ? '#b91c1c' : '#15803d'}">${currency}${fmt(balanceInfo.totalOutstanding)}</td>
        </tr>
      </table>`;
    }

    const itemsTableHtml = isMultiItem ? `
      <table>
        <thead>
          <tr>
            <th style="width:32px;text-align:center">#</th>
            <th>Fee Item / Category</th>
            <th>Description / Purpose</th>
            <th style="text-align:right">Amount (${currency})</th>
          </tr>
        </thead>
        <tbody>
          ${payment.items.map((it, idx) => `
            <tr>
              <td style="text-align:center;font-weight:700;color:#64748b">${idx + 1}</td>
              <td style="font-weight:700;color:#0f172a">${it.categoryName || it.category}</td>
              <td style="color:#334155">${it.description || '—'}</td>
              <td style="text-align:right;font-weight:700;color:green">${currency}${fmt(it.amount)}</td>
            </tr>
          `).join("")}
          ${arrearsRow}
          <tr class="total">
            <td colspan="3">TOTAL AMOUNT PAID</td>
            <td style="text-align:right">${currency}${fmt(totalPaid)}</td>
          </tr>
        </tbody>
      </table>` : `
      <table>
        <tr><th colspan="2">Payment Breakdown</th></tr>
        <tr><td>Fee Category</td><td><b>${payment.categoryName}</b></td></tr>
        ${payment.description ? `<tr><td>Description</td><td>${payment.description}</td></tr>` : (payment.details?.description ? `<tr><td>Description</td><td>${payment.details.description}</td></tr>` : "")}
        ${payment.details?.month ? `<tr><td>Month Covered</td><td style="font-weight:700;color:#0369a1">📅 ${payment.details.month}</td></tr>` : ""}
        ${arrearsRow}
        <tr class="total"><td>TOTAL AMOUNT PAID</td><td>${currency}${fmt(totalPaid)}</td></tr>
      </table>`;

    const html = `<!DOCTYPE html><html><head>
    <title>Receipt ${payment.receiptNo}</title>
    <style>
      body{font-family:'Segoe UI',Arial,sans-serif;color:#1a1a2e;margin:0;background:#f4f7fb}
      .page{max-width:700px;margin:20px auto;background:#fff;padding:30px;border-radius:12px;box-shadow:0 4px 30px rgba(0,90,185,.08)}
      h1{color:#0080c8;margin:0 0 4px;font-size:22px;letter-spacing:1px}
      h2{margin:0;font-size:13px;color:#555;font-weight:400}
      .header{display:flex;align-items:center;gap:18px;border-bottom:3px solid #0080c8;padding-bottom:16px;margin-bottom:22px}
      .logo{width:72px;height:72px;background:#0080c8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px;font-weight:900}
      table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:13.5px}
      th{background:#0080c8;color:#fff;padding:8px 10px;text-align:left}
      td{padding:7px 10px;border-bottom:1px solid #e8edf3}
      tr:nth-child(even) td{background:#f7faff}
      .total td{font-size:15px;font-weight:700;background:#0080c8;color:#fff}
      .stamp{text-align:center;margin-top:18px;color:green;font-size:22px;font-weight:900;letter-spacing:3px;border:3px solid green;display:inline-block;padding:6px 28px;border-radius:8px;transform:rotate(-6deg);opacity:.85}
      .footer{text-align:center;font-size:11px;color:#888;margin-top:22px;border-top:1px solid #e8edf3;padding-top:12px}
      @media print{.page{box-shadow:none;margin:0}.no-print{display:none}}
    </style></head><body>
    <div class="page">
      <div class="header">
        <div class="logo">RV</div>
        <div><h1>${school}</h1><h2>${config.motto}</h2><h2>${addr}</h2></div>
      </div>
      <div style="text-align:center;background:#0080c8;color:#fff;padding:8px;border-radius:8px;margin-bottom:20px;letter-spacing:2px;font-weight:700">
        OFFICIAL PAYMENT RECEIPT
      </div>

      <table>
        <tr><th colspan="2">Receipt Details</th></tr>
        <tr><td>Receipt No.</td><td><b>${payment.receiptNo}</b></td></tr>
        <tr><td>Date</td><td>${new Date(payment.date).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})}</td></tr>
        <tr><td>Academic Session</td><td>${payment.session} — ${payment.term}</td></tr>
        <tr><td>Payment Method</td><td>${payment.paymentMethod}</td></tr>
        <tr><td>Transaction Ref.</td><td>${payment.reference || "—"}</td></tr>
        <tr><td>Recorded By</td><td>${payment.recordedBy}</td></tr>
      </table>

      <table>
        <tr><th colspan="2">Student Information</th></tr>
        <tr><td>Full Name</td><td><b>${payment.studentName}</b></td></tr>
        <tr><td>Class / Section</td><td>${payment.studentClass} &nbsp;·&nbsp; ${(window.getSectionByClass && window.getSectionByClass(payment.studentClass)?.name) || "—"}</td></tr>
        ${student ? `<tr><td>Reg. No.</td><td>${student.regNo}</td></tr>` : ""}
      </table>

      ${itemsTableHtml}

      ${balanceSection}

      <div style="text-align:center;margin-top:16px">
        <span class="stamp">CONFIRMED</span>
      </div>

      <div class="footer">
        <p>Official receipt generated from the RichVine College Automated Bursary System.</p>
        <p>Enquiries: ${config.contactEmail} | ${config.phone}</p>
        <button onclick="window.print()" class="no-print" style="margin-top:12px;padding:10px 28px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">🖨 Print Receipt</button>
      </div>
    </div>
    </body></html>`;

    printHtmlDocument(html, "Receipt " + payment.receiptNo);
  }

  // ── Print Student Statement ─────────────────────────────────────────────
  function printStudentStatement(studentId) {
    const student = RichVineDB.getStudentById(studentId);
    if (!student) return alert("Student not found.");
    const payments = RichVineDB.getPayments({ studentId });
    const config   = RichVineDB.getConfig();
    const bal      = RichVineDB.getStudentBalance(studentId);

    const rows = payments.map(p => `<tr>
      <td>${p.receiptNo}</td><td>${p.date}</td><td><b>${p.categoryName}</b></td>
      <td style="color:#475569;font-size:12px">${p.description || '—'}</td>
      <td style="color:green;font-weight:600">${currency}${Number(p.amount).toLocaleString()}</td>
      <td style="color:#b45309">${p.arrearsDeducted > 0 ? currency + Number(p.arrearsDeducted).toLocaleString() : '—'}</td>
      <td style="color:green">${p.termFeePaid > 0 ? currency + Number(p.termFeePaid).toLocaleString() : '—'}</td>
      <td>${p.paymentMethod}</td>
    </tr>`).join("") || `<tr><td colspan="8" style="text-align:center;color:#888">No payment records yet</td></tr>`;

    const html = `<!DOCTYPE html><html><head><title>Account Statement - ${student.firstName} ${student.lastName}</title>
    <style>
      body{font-family:'Segoe UI',sans-serif;color:#1a1a2e;background:#f4f7fb;margin:0}
      .page{max-width:840px;margin:20px auto;background:#fff;padding:28px;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.06)}
      h1{color:#0080c8;margin:0 0 4px;font-size:20px}
      h2{margin:0 0 16px;font-size:13px;color:#666;font-weight:400}
      .info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;font-size:13px}
      .info-item{padding:8px 12px;background:#f7faff;border-radius:6px}
      .bal-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}
      .bal-card{padding:12px;border-radius:8px;text-align:center}
      .bal-card .lbl{font-size:11px;color:#666;text-transform:uppercase;font-weight:600}
      .bal-card .val{font-size:18px;font-weight:800;margin-top:4px}
      table{width:100%;border-collapse:collapse;font-size:13px}
      th{background:#0080c8;color:#fff;padding:9px 8px;text-align:left}
      td{padding:8px;border-bottom:1px solid #e8edf3}
      @media print{.page{box-shadow:none;margin:0} .no-print{display:none}}
    </style></head><body>
    <div class="page">
      <h1>${school} — Complete Learner Account Statement</h1>
      <h2>Academic Session: ${config.currentSession} &nbsp;|&nbsp; Generated: ${new Date().toLocaleString("en-GB")}</h2>
      <div class="info-grid">
        <div class="info-item"><b>Learner:</b> ${student.firstName} ${student.lastName}</div>
        <div class="info-item"><b>Reg. No:</b> ${student.regNo}</div>
        <div class="info-item"><b>Class:</b> ${student.currentClass}</div>
        <div class="info-item"><b>Section:</b> ${window.getSectionByClass?.(student.currentClass)?.name || "—"}</div>
        <div class="info-item"><b>Parent:</b> ${student.parentName}</div>
        <div class="info-item"><b>Phone:</b> ${student.parentPhone}</div>
      </div>

      <div class="bal-cards" style="grid-template-columns:repeat(5,1fr)">
        <div class="bal-card" style="background:#f1f5f9">
          <div class="lbl">Term Fee Expected</div>
          <div class="val" style="color:#0f172a">${currency}${bal.termFeeExpected.toLocaleString()}</div>
        </div>
        <div class="bal-card" style="background:#ecfdf5;border:1px solid #10b981">
          <div class="lbl">Paid So Far</div>
          <div class="val" style="color:#047857">${currency}${bal.termFeePaid.toLocaleString()}</div>
        </div>
        <div class="bal-card" style="background:#fef3c7;border:1px solid #f59e0b">
          <div class="lbl">Arrears Balance</div>
          <div class="val" style="color:#b45309">${currency}${bal.arrearsBalance.toLocaleString()}</div>
        </div>
        <div class="bal-card" style="background:#fee2e2;border:1px solid #ef4444">
          <div class="lbl">Term Fee Remaining</div>
          <div class="val" style="color:#b91c1c">${currency}${bal.termFeeBalance.toLocaleString()}</div>
        </div>
        <div class="bal-card" style="background:#ede9fe;border:1px solid #8b5cf6">
          <div class="lbl">Total Outstanding</div>
          <div class="val" style="color:#6d28d9">${currency}${bal.totalOutstanding.toLocaleString()}</div>
        </div>
      </div>

      <h3 style="font-size:14px;margin-bottom:10px">Payment History</h3>
      <table>
        <tr><th>Receipt No</th><th>Date</th><th>Category</th><th>Amount Paid</th><th>Arrears Deducted</th><th>Term Fee Paid</th><th>Method</th></tr>
        ${rows}
        <tr style="background:#0080c8;color:#fff;font-weight:700">
          <td colspan="3">TOTAL COLLECTED (${payments.length} transactions)</td>
          <td colspan="4">${currency}${bal.totalPaidAll.toLocaleString()}</td>
        </tr>
      </table>

      <div style="text-align:center;margin-top:20px">
        <button onclick="window.print()" class="no-print" style="padding:10px 28px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">🖨 Print Statement</button>
      </div>
    </div></body></html>`;

    printHtmlDocument(html, "Student Statement");
  }

  // ── CSV Export (Payments) ───────────────────────────────────────────────
  function downloadPaymentsCSV(timeframe, sectionId, classFilter, categoryFilter) {
    const { startDate, endDate, label } = getDateRange(timeframe);
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionId && sectionId !== "All" ? { section: sectionId } : {}),
      ...(classFilter && classFilter !== "All" ? { class: classFilter } : {}),
      ...(categoryFilter && categoryFilter !== "All" ? { category: categoryFilter } : {})
    };
    const payments = RichVineDB.getPayments(filter);
    if (!payments.length) return alert("No payment records found for the selected criteria.");

    const isSpecificCategory = categoryFilter && categoryFilter !== "All";
    const getCatAmount = (p, catId) => {
      if (Array.isArray(p.items) && p.items.length > 0) {
        return p.items.filter(it => it.category === catId).reduce((s, it) => s + (Number(it.amount) || 0), 0);
      }
      return p.category === catId ? (Number(p.amount) || 0) : 0;
    };

    const rows = [
      ["Receipt No", "Date", "Student Name", "Class", "Section", "Category", "Description", "Arrears Deducted", "Term Fee Paid", "Amount (₦)", "Payment Method", "Reference", "Session", "Term", "Recorded By"]
    ];
    let totalRevenue = 0;
    payments.forEach(p => {
      const sec = window.getSectionByClass ? window.getSectionByClass(p.studentClass)?.name || "" : "";
      let amt = 0;
      let catName = p.categoryName;
      let desc = p.description || "";
      if (isSpecificCategory) {
        amt = getCatAmount(p, categoryFilter);
        if (amt <= 0) return;
        const matchingItem = Array.isArray(p.items) ? p.items.find(it => it.category === categoryFilter) : null;
        if (matchingItem) {
          catName = matchingItem.categoryName || catName;
          desc = matchingItem.description || desc;
        }
      } else {
        amt = Number(p.amount) || 0;
        if (Array.isArray(p.items) && p.items.length > 1) {
          desc = p.items.map(it => `${it.categoryName}: ₦${Number(it.amount).toLocaleString()}${it.description ? ' (' + it.description + ')' : ''}`).join('; ');
        }
      }
      totalRevenue += amt;
      rows.push([
        p.receiptNo, p.date, p.studentName, p.studentClass, sec,
        catName, desc, p.arrearsDeducted || 0, p.termFeePaid || p.amount, amt,
        p.paymentMethod, p.reference || "", p.session, p.term, p.recordedBy
      ]);
    });

    rows.push([]);
    rows.push(["", "", "", "", "", "", "", "", "TOTAL REVENUE", totalRevenue, "", "", "", "", ""]);

    const csv = rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    triggerDownload(csv, `RichVine_Payments_${timeframe}_${new Date().toISOString().split("T")[0]}.csv`);
  }

  // ── CSV Export (Expenses) ───────────────────────────────────────────────
  function downloadExpensesCSV(timeframe, period, category, section) {
    const { startDate, endDate, label } = getDateRange(timeframe);
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(period && period !== "All" ? { period } : {}),
      ...(category && category !== "All" ? { category } : {}),
      ...(section && section !== "All" ? { section } : {})
    };
    const expenses = RichVineDB.getExpenses(filter);
    if (!expenses.length) return alert("No expense records found for the selected criteria.");

    const rows = [["Expense ID", "Date", "Description", "Category", "Account / Section", "Period", "Amount (₦)", "Session", "Term", "Recorded By", "Notes"]];
    expenses.forEach(e => {
      const periodFmt = (e.period === "one_time" || e.period === "onetime")
        ? "One-Time"
        : (e.period ? e.period.charAt(0).toUpperCase() + e.period.slice(1) : "");
      rows.push([e.id, e.date, e.description, e.category, e.accountName || e.section || "General / Central Account", periodFmt, e.amount, e.session, e.term, e.recordedBy, e.notes || ""]);
    });
    const total = expenses.reduce((s, e) => s + Number(e.amount), 0);
    rows.push([]);
    rows.push(["", "", "", "", "", "TOTAL EXPENSES", total, "", "", "", ""]);

    const csv = rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    triggerDownload(csv, `RichVine_Expenses_${timeframe}_${new Date().toISOString().split("T")[0]}.csv`);
  }

  // ── Print Ledger Statement ──────────────────────────────────────────────
  function printLedgerStatement(timeframe, sectionId, classFilter, categoryFilter, searchFilter) {
    // Flexible fallback to read from DOM if not passed or partially passed
    timeframe = timeframe || document.getElementById('pay-timeframe-export')?.value || document.getElementById('report-timeframe')?.value || 'all';
    sectionId = sectionId || document.getElementById('pay-section-filter')?.value || document.getElementById('report-section-filter')?.value || 'All';
    classFilter = classFilter || document.getElementById('pay-class-filter')?.value || document.getElementById('report-class-filter')?.value || 'All';
    categoryFilter = categoryFilter || document.getElementById('pay-category-filter')?.value || document.getElementById('report-category-filter')?.value || 'All';
    searchFilter = searchFilter !== undefined ? searchFilter : (document.getElementById('pay-search')?.value || '');

    const { startDate, endDate, label } = getDateRange(timeframe);
    const config = RichVineDB.getConfig();
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionId && sectionId !== "All" ? { section: sectionId } : {}),
      ...(classFilter && classFilter !== "All" ? { class: classFilter } : {}),
      ...(categoryFilter && categoryFilter !== "All" ? { category: categoryFilter } : {})
    };
    let payments = RichVineDB.getPayments(filter);

    if (searchFilter && searchFilter.trim()) {
      const q = searchFilter.trim().toLowerCase();
      payments = payments.filter(p =>
        `${p.studentName} ${p.receiptNo} ${p.categoryName} ${p.description || ''} ${p.studentClass}`.toLowerCase().includes(q)
      );
    }

    const isSpecificCategory = categoryFilter && categoryFilter !== "All";
    const getCatAmount = (p, catId) => {
      if (Array.isArray(p.items) && p.items.length > 0) {
        return p.items.filter(it => it.category === catId).reduce((s, it) => s + (Number(it.amount) || 0), 0);
      }
      return p.category === catId ? (Number(p.amount) || 0) : 0;
    };

    const feeCats = RichVineDB.getFeeCategories() || [];
    const catObj = feeCats.find(c => c.id === categoryFilter);
    const categoryLabel = isSpecificCategory ? (catObj ? catObj.name : categoryFilter) : "All Fee Categories";
    const secLabel = (sectionId && sectionId !== "All") ? ((window.SCHOOL_SECTIONS && window.SCHOOL_SECTIONS[sectionId]?.name) || sectionId) : "All Sections";
    const classLabel = (classFilter && classFilter !== "All") ? classFilter : "All Classes";

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    let totalRevenue = 0;
    let paymentCount = 0;

    const rows = payments.map(p => {
      let amt = 0;
      let catDisplay = p.categoryName || '';
      let descDisplay = p.description || p.details?.description || '—';

      if (isSpecificCategory) {
        amt = getCatAmount(p, categoryFilter);
        if (amt <= 0) return '';
        paymentCount++;
        totalRevenue += amt;

        const matchingItem = Array.isArray(p.items) ? p.items.find(it => it.category === categoryFilter) : null;
        if (matchingItem) {
          catDisplay = matchingItem.categoryName || catDisplay;
          descDisplay = matchingItem.description || descDisplay;
        }
        if (Array.isArray(p.items) && p.items.length > 1) {
          descDisplay += ` <small style="color:#64748b;display:block">(Receipt Total: ${currency}${fmt(p.amount)} · ${p.items.length} items)</small>`;
        }
      } else {
        amt = Number(p.amount) || 0;
        paymentCount++;
        totalRevenue += amt;

        if (Array.isArray(p.items) && p.items.length > 1) {
          catDisplay = `${p.categoryName || 'Multi-Item'} (${p.items.length} items)`;
          descDisplay = p.items.map(it => `${it.categoryName}: ${currency}${fmt(it.amount)}${it.description ? ' (' + it.description + ')' : ''}`).join('; ');
        }
      }

      return `<tr>
        <td style="font-family:monospace;font-weight:700">${p.receiptNo}</td>
        <td>${p.date}</td>
        <td><b>${p.studentName}</b></td>
        <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:11.5px;font-weight:600">${p.studentClass}</span></td>
        <td><b>${catDisplay}</b></td>
        <td style="font-size:12px;color:#475569">${descDisplay}</td>
        <td style="color:#15803d;font-weight:700;text-align:right">${currency}${fmt(amt)}</td>
        <td>${p.paymentMethod || '—'}</td>
        <td style="font-size:11.5px;color:#64748b">${p.term || ''}</td>
      </tr>`;
    }).filter(Boolean).join("");

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Payment Ledger Report — ${school}</title>
    <style>
      body{font-family:'Segoe UI',Arial,sans-serif;color:#1a1a2e;margin:0;background:#f4f7fb;-webkit-print-color-adjust:exact;print-color-adjust:exact}
      .page{max-width:1050px;margin:20px auto;background:#fff;padding:28px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.06)}
      h1{color:#0080c8;margin:0 0 4px;font-size:20px;font-weight:800}
      .sub{margin:0 0 16px;font-size:12.5px;color:#475569;display:flex;gap:12px;flex-wrap:wrap}
      .sub span{background:#f1f5f9;padding:4px 10px;border-radius:6px;border:1px solid #e2e8f0}
      .sub span b{color:#0f172a}
      table{width:100%;border-collapse:collapse;font-size:12.5px}
      th{background:#0080c8;color:#fff;padding:9px 10px;text-align:left;white-space:nowrap}
      th:nth-child(7){text-align:right}
      td{padding:8px 10px;border-bottom:1px solid #e8edf3}
      tr:nth-child(even) td{background:#f8fafc}
      .total-row td{font-size:14px;font-weight:800;background:#0080c8;color:#fff}
      .total-row td:nth-child(2){text-align:right}
      .footer{text-align:center;font-size:11px;color:#888;margin-top:20px;border-top:1px solid #e8edf3;padding-top:12px}
      @media print{.page{box-shadow:none;margin:0;max-width:100%;border-radius:0} .no-print{display:none}}
    </style></head><body>
    <div class="page">
      <h1>${school} — Payment Ledger Report</h1>
      <div class="sub">
        <span><b>Period:</b> ${label}</span>
        <span><b>Category:</b> ${categoryLabel}</span>
        <span><b>Section:</b> ${secLabel}</span>
        <span><b>Class:</b> ${classLabel}</span>
        <span><b>Generated:</b> ${new Date().toLocaleString("en-GB")}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Receipt No</th>
            <th>Date</th>
            <th>Learner Name</th>
            <th>Class</th>
            <th>Category</th>
            <th>Description</th>
            <th style="text-align:right">Amount</th>
            <th>Method</th>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          ${rows || "<tr><td colspan='9' style='text-align:center;color:#888;padding:24px'>No payment records found matching the selected filters.</td></tr>"}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="6">TOTAL REVENUE (${paymentCount} record${paymentCount === 1 ? '' : 's'})</td>
            <td style="text-align:right">${currency}${fmt(totalRevenue)}</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
      <div class="footer">
        <p>${addr} | ${config.contactEmail || ''} | ${config.phone || ''}</p>
        <button onclick="window.print()" class="no-print" style="margin-top:12px;padding:9px 26px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">🖨 Print Ledger</button>
      </div>
    </div></body></html>`;

    printHtmlDocument(html, "Ledger Statement - " + categoryLabel);
  }

  // ── Print P&L Overview ──────────────────────────────────────────────────
  function printOverviewStatement(timeframe, sectionId) {
    const { startDate, endDate, label } = getDateRange(timeframe);
    const config = RichVineDB.getConfig();
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionId && sectionId !== "All" ? { section: sectionId } : {})
    };
    const summary = RichVineDB.getFinancialSummary(filter);
    const sections = window.SCHOOL_SECTIONS || {};

    let sectionRows = "";
    for (const [key, sec] of Object.entries(sections)) {
      const secSummary = RichVineDB.getFinancialSummary({ ...(startDate ? { startDate, endDate } : {}), section: key });
      sectionRows += `<tr>
        <td>${sec.name}</td>
        <td style="color:green">${currency}${secSummary.totalRevenue.toLocaleString()}</td>
        <td style="color:crimson">${currency}${secSummary.totalExpenses.toLocaleString()}</td>
        <td style="color:${secSummary.netProfit >= 0 ? 'green' : 'crimson'};font-weight:700">${currency}${secSummary.netProfit.toLocaleString()}</td>
      </tr>`;
    }

    const generalExpenses = RichVineDB.getExpenses({ ...(startDate ? { startDate, endDate } : {}), section: "general" });
    const generalTotal = generalExpenses.reduce((s, e) => s + (Number(e.amount) || 0), 0);
    if (generalTotal > 0) {
      sectionRows += `<tr style="background:#f8fafc">
        <td><i>General / Central Operations</i></td>
        <td style="color:#64748b">—</td>
        <td style="color:crimson">${currency}${generalTotal.toLocaleString()}</td>
        <td style="color:crimson;font-weight:700">-${currency}${generalTotal.toLocaleString()}</td>
      </tr>`;
    }

    const html = `<!DOCTYPE html><html><head><title>P&L Overview</title>
    <style>
      body{font-family:'Segoe UI',sans-serif;color:#1a1a2e;background:#f4f7fb;margin:0}
      .page{max-width:800px;margin:20px auto;background:#fff;padding:28px;border-radius:10px}
      h1{color:#0080c8;margin:0 0 4px;font-size:20px} h2{margin:0 0 20px;font-size:13px;color:#666;font-weight:400}
      .cards{display:flex;gap:14px;margin-bottom:22px}
      .card{flex:1;padding:18px;border-radius:10px;text-align:center}
      .green{background:#e6f9ee;border:1px solid #6fcf97} .red{background:#ffe4e4;border:1px solid #eb5757} .blue{background:#e8f4fd;border:1px solid #56ccf2}
      .card .amount{font-size:22px;font-weight:800;margin-top:6px}
      table{width:100%;border-collapse:collapse;font-size:13px}
      th{background:#0080c8;color:#fff;padding:9px 8px;text-align:left}
      td{padding:8px;border-bottom:1px solid #e8edf3}
      .footer{text-align:center;font-size:11px;color:#888;margin-top:18px;border-top:1px solid #e8edf3;padding-top:10px}
      @media print{.page{box-shadow:none;margin:0} .no-print{display:none}}
    </style></head><body>
    <div class="page">
      <h1>${school} — Financial Overview Report</h1>
      <h2>Period: ${label} &nbsp;|&nbsp; Generated: ${new Date().toLocaleString("en-GB")}</h2>
      <div class="cards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px">
        <div class="card green"><div>Total Revenue</div><div class="amount" style="color:green">${currency}${summary.totalRevenue.toLocaleString()}</div></div>
        <div class="card" style="background:#e0f2fe;border:1px solid #7dd3fc"><div>Term Fees Paid</div><div class="amount" style="color:#0284c7">${currency}${(summary.totalTermFeesPaid || 0).toLocaleString()}</div></div>
        <div class="card" style="background:#fef3c7;border:1px solid #fcd34d"><div>Arrears Cleared</div><div class="amount" style="color:#b45309">${currency}${(summary.totalArrearsRecovered || 0).toLocaleString()}</div></div>
        <div class="card" style="background:#f3e8ff;border:1px solid #d8b4fe"><div>Other Fees Paid</div><div class="amount" style="color:#7c3aed">${currency}${(summary.totalOtherFeesPaid || 0).toLocaleString()}</div></div>
        <div class="card red"><div>Total Expenses</div><div class="amount" style="color:crimson">${currency}${summary.totalExpenses.toLocaleString()}</div></div>
        <div class="card blue"><div>Net Profit</div><div class="amount" style="color:${summary.netProfit>=0?'#0080c8':'crimson'}">${currency}${summary.netProfit.toLocaleString()}</div></div>
      </div>
      <table>
        <tr><th>Section</th><th>Revenue</th><th>Expenses</th><th>Net Profit</th></tr>
        ${sectionRows}
      </table>
      <div class="footer">
        <p>${addr} | ${config.contactEmail}</p>
        <button onclick="window.print()" class="no-print" style="margin-top:10px;padding:8px 24px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">🖨 Print Report</button>
      </div>
    </div></body></html>`;
    printHtmlDocument(html, "Financial Overview Report");
  }

  // ── Per-Category Per-Class Report (CSV + Printable HTML) ────────────────
  // ── Per-Category Per-Class Report (CSV + Printable HTML) ────────────────
  function downloadCategoryClassReport(timeframe, classFilter, sectionFilter, categoryFilter, format = 'print') {
    // If called with single argument or reversed arguments
    if (['print', 'csv'].includes(timeframe) && !format) {
      format = timeframe;
      timeframe = null;
    }
    timeframe = timeframe || document.getElementById('cat-report-timeframe')?.value || 'all';
    classFilter = classFilter || document.getElementById('cat-report-class')?.value || 'All';
    sectionFilter = sectionFilter || document.getElementById('cat-report-section')?.value || 'All';
    categoryFilter = categoryFilter || document.getElementById('cat-report-category')?.value || 'All';
    format = format || 'print';

    // Auto-detect if class and section were passed in swapped order
    const knownSections = ['primary', 'junior', 'senior'];
    if (knownSections.includes(classFilter) && (!sectionFilter || sectionFilter === 'All' || !knownSections.includes(sectionFilter))) {
      const tmp = classFilter;
      classFilter = sectionFilter;
      sectionFilter = tmp;
    }

    const { startDate, endDate, label } = getDateRange(timeframe || 'all');
    const config = RichVineDB.getConfig();
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionFilter && sectionFilter !== 'All' ? { section: sectionFilter } : {}),
      ...(classFilter && classFilter !== 'All' ? { class: classFilter } : {}),
      ...(categoryFilter && categoryFilter !== 'All' ? { category: categoryFilter } : {})
    };
    const payments = RichVineDB.getPayments(filter);
    const feeCats = RichVineDB.getFeeCategories();
    const classes = classFilter && classFilter !== 'All' ? [classFilter] : (window.ALL_CLASSES || []);
    const cats = categoryFilter && categoryFilter !== 'All'
      ? feeCats.filter(c => c.id === categoryFilter)
      : feeCats;

    if (!payments.length) {
      alert('No payment records found for the selected timeframe and filter criteria.');
      return;
    }

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Universal helper to get category amount from single or multi-item payment
    const getCatAmount = (p, catId) => {
      if (Array.isArray(p.items) && p.items.length > 0) {
        return p.items.filter(it => it.category === catId).reduce((s, it) => s + (Number(it.amount) || 0), 0);
      }
      return p.category === catId ? (Number(p.amount) || 0) : 0;
    };

    if (format === 'csv') {
      const catFilterLabel = categoryFilter && categoryFilter !== 'All'
        ? (feeCats.find(c => c.id === categoryFilter)?.name || categoryFilter)
        : 'All Categories';
      const secFilterLabel = sectionFilter && sectionFilter !== 'All'
        ? ((window.SCHOOL_SECTIONS && window.SCHOOL_SECTIONS[sectionFilter]?.name) || sectionFilter)
        : 'All Sections';

      // Build detailed transactions sheet & category summary
      const rows = [
        [`RICHVINE COLLEGE — Category Bill Report per Class`],
        [`Timeframe: ${label}`, `Filter Section: ${secFilterLabel}`, `Filter Class: ${classFilter || 'All'}`, `Filter Category: ${catFilterLabel}`],
        [`Generated: ${new Date().toLocaleString('en-GB')}`],
        [],
        ['SUMMARY MATRIX: CLASS vs CATEGORY'],
        ['Class / Section', ...cats.map(c => c.name), 'CLASS TOTAL']
      ];

      let grandTotal = 0;
      const catTotals = {};
      cats.forEach(c => { catTotals[c.id] = 0; });

      classes.forEach(cls => {
        const clsPayments = payments.filter(p => p.studentClass === cls);
        if (!clsPayments.length && classFilter && classFilter !== 'All') return;
        const row = [cls];
        let rowTotal = 0;
        cats.forEach(cat => {
          const amt = clsPayments.reduce((s, p) => s + getCatAmount(p, cat.id), 0);
          row.push(amt);
          rowTotal += amt;
          catTotals[cat.id] = (catTotals[cat.id] || 0) + amt;
        });
        row.push(rowTotal);
        grandTotal += rowTotal;
        if (rowTotal > 0 || (classFilter && classFilter !== 'All')) rows.push(row);
      });

      const catTotalsRow = ['GRAND TOTAL'];
      cats.forEach(c => catTotalsRow.push(catTotals[c.id] || 0));
      catTotalsRow.push(grandTotal);
      rows.push(catTotalsRow);

      rows.push([]);
      rows.push(['DETAILED TRANSACTION BREAKDOWN']);
      rows.push(['Receipt No', 'Date', 'Learner Name', 'Class', 'Category', 'Description / Items', 'Amount (₦)', 'Method', 'Recorded By', 'Term', 'Reference']);
      
      payments.forEach(p => {
        if (categoryFilter && categoryFilter !== 'All') {
          const amt = getCatAmount(p, categoryFilter);
          if (amt <= 0) return;
          const matchingItem = Array.isArray(p.items) ? p.items.find(it => it.category === categoryFilter) : null;
          rows.push([
            p.receiptNo,
            p.date,
            p.studentName,
            p.studentClass,
            matchingItem?.categoryName || p.categoryName,
            matchingItem?.description || p.description || p.details?.description || '',
            amt,
            p.paymentMethod,
            p.recordedBy || '',
            p.term || '',
            p.reference || ''
          ]);
        } else {
          let desc = p.description || p.details?.description || '';
          if (Array.isArray(p.items) && p.items.length > 0) {
            desc = p.items.map(it => `${it.categoryName}: ₦${fmt(it.amount)}${it.description ? ' (' + it.description + ')' : ''}`).join('; ');
          }
          rows.push([
            p.receiptNo,
            p.date,
            p.studentName,
            p.studentClass,
            p.categoryName,
            desc,
            p.amount,
            p.paymentMethod,
            p.recordedBy || '',
            p.term || '',
            p.reference || ''
          ]);
        }
      });

      const csv = rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
      triggerDownload(csv, `RichVine_CategoryClass_${timeframe || 'all'}_${new Date().toISOString().split('T')[0]}.csv`);
    } else {
      // Printable HTML Report
      const sections = window.SCHOOL_SECTIONS || {};
      let tableRows = '';
      let grandTotal = 0;
      const catTotals = {};
      cats.forEach(c => { catTotals[c.id] = 0; });

      for (const [secKey, sec] of Object.entries(sections)) {
        if (sectionFilter && sectionFilter !== 'All' && sectionFilter !== secKey) continue;
        const secClasses = classFilter && classFilter !== 'All'
          ? sec.classes.filter(c => c === classFilter)
          : sec.classes;
        if (!secClasses.length) continue;

        let secRows = '';
        let secTotal = 0;

        secClasses.forEach(cls => {
          const clsPayments = payments.filter(p => p.studentClass === cls);
          let rowTotal = 0;
          const cells = cats.map(cat => {
            const amt = clsPayments.reduce((s, p) => s + getCatAmount(p, cat.id), 0);
            rowTotal += amt;
            catTotals[cat.id] = (catTotals[cat.id] || 0) + amt;
            return `<td style="text-align:right;color:${amt > 0 ? '#15803d' : '#94a3b8'};font-weight:${amt > 0 ? '700' : '400'}">₦${fmt(amt)}</td>`;
          }).join('');
          grandTotal += rowTotal;
          secTotal += rowTotal;
          if (rowTotal > 0 || (classFilter && classFilter !== 'All')) {
            secRows += `<tr><td style="font-weight:600;padding:7px 10px;color:#0f172a">${cls}</td>${cells}<td style="font-weight:800;color:#0080c8;text-align:right">₦${fmt(rowTotal)}</td></tr>`;
          }
        });

        if (secRows) {
          tableRows += `<tr style="background:#0f172a;color:#fff"><td colspan="${cats.length + 2}" style="padding:8px 10px;font-weight:700;font-size:12.5px;letter-spacing:0.5px"><i>${sec.name}</i></td></tr>` + secRows;
        }
      }

      const catTotalCells = cats.map(cat =>
        `<td style="text-align:right;font-weight:800;color:#15803d">₦${fmt(catTotals[cat.id] || 0)}</td>`
      ).join('');

      let itemizedRows = '';
      let itemizedTotal = 0;
      let matchedCount = 0;

      payments.forEach(p => {
        if (categoryFilter && categoryFilter !== 'All') {
          const amt = getCatAmount(p, categoryFilter);
          if (amt <= 0) return;
          matchedCount++;
          itemizedTotal += amt;
          const matchingItem = Array.isArray(p.items) ? p.items.find(it => it.category === categoryFilter) : null;
          const desc = matchingItem?.description || p.description || p.details?.description || '—';
          itemizedRows += `<tr>
            <td style="font-family:monospace;font-weight:700">${p.receiptNo}</td>
            <td>${p.date}</td>
            <td><b>${p.studentName}</b></td>
            <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600">${p.studentClass}</span></td>
            <td>${matchingItem?.categoryName || p.categoryName}</td>
            <td style="font-size:11.5px;color:#475569">${desc}</td>
            <td style="text-align:right;color:#15803d;font-weight:700">₦${fmt(amt)}</td>
            <td>${p.paymentMethod}</td>
            <td>${p.term || ''}</td>
          </tr>`;
        } else {
          matchedCount++;
          itemizedTotal += Number(p.amount) || 0;
          let catDisplay = p.categoryName;
          if (Array.isArray(p.items) && p.items.length > 1) {
            catDisplay = `<span title="${p.items.map(it=>it.categoryName+': ₦'+fmt(it.amount)).join(', ')}" style="font-weight:600;color:#7c3aed">${p.categoryName} (${p.items.length} items)</span>`;
          }
          const desc = p.description || p.details?.description || (Array.isArray(p.items) ? p.items.map(it=>it.description).filter(Boolean).join('; ') : '') || '—';
          itemizedRows += `<tr>
            <td style="font-family:monospace;font-weight:700">${p.receiptNo}</td>
            <td>${p.date}</td>
            <td><b>${p.studentName}</b></td>
            <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600">${p.studentClass}</span></td>
            <td>${catDisplay}</td>
            <td style="font-size:11.5px;color:#475569">${desc}</td>
            <td style="text-align:right;color:#15803d;font-weight:700">₦${fmt(p.amount)}</td>
            <td>${p.paymentMethod}</td>
            <td>${p.term || ''}</td>
          </tr>`;
        }
      });

      const catFilterName = categoryFilter && categoryFilter !== 'All'
        ? (feeCats.find(c => c.id === categoryFilter)?.name || categoryFilter)
        : 'All Categories';

      const secFilterName = sectionFilter && sectionFilter !== 'All'
        ? (sections[sectionFilter]?.name || sectionFilter)
        : 'All Sections';

      const html = `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Category Fee Collection Report per Class — ${school}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #1a1a2e;
            background: #f4f7fb;
            margin: 0;
            padding: 16px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page {
            max-width: 1150px;
            margin: 0 auto;
            background: #fff;
            padding: 28px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,.06);
          }
          .action-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0f172a;
            color: #fff;
            padding: 12px 18px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .action-bar h2 {
            margin: 0;
            font-size: 15px;
            font-weight: 600;
          }
          .btn-print {
            background: #0080c8;
            color: #fff;
            border: none;
            padding: 8px 20px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .btn-print:hover { background: #0068a3; }
          .report-header {
            display: flex;
            align-items: center;
            gap: 16px;
            border-bottom: 2px solid #0080c8;
            padding-bottom: 14px;
            margin-bottom: 16px;
          }
          .logo {
            width: 52px;
            height: 52px;
            background: #0080c8;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 20px;
          }
          h1 { margin: 0 0 4px; color: #0080c8; font-size: 21px; }
          .school-sub { margin: 0; font-size: 12px; color: #64748b; }
          .meta-band {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 22px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            font-size: 12.5px;
          }
          .meta-item b { color: #0f172a; }
          .meta-item span { color: #475569; }
          .section-title {
            font-size: 14.5px;
            font-weight: 700;
            color: #0f172a;
            margin: 24px 0 10px;
            border-bottom: 2px solid #0080c8;
            padding-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .table-responsive {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin-bottom: 22px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            min-width: 700px;
          }
          th {
            background: #0080c8;
            color: #fff;
            padding: 9px 10px;
            text-align: left;
            font-size: 11.5px;
            white-space: nowrap;
          }
          th.num, td.num { text-align: right; }
          td {
            padding: 7px 10px;
            border-bottom: 1px solid #e8edf3;
            color: #1e293b;
          }
          tr:nth-child(even) td { background: #f8fafc; }
          .total-row td {
            font-size: 13px;
            font-weight: 800;
            background: #0080c8;
            color: #fff;
            text-align: right;
          }
          .total-row td:first-child { text-align: left; }
          .footer {
            text-align: center;
            font-size: 11px;
            color: #64748b;
            margin-top: 24px;
            border-top: 1px solid #e2e8f0;
            padding-top: 14px;
          }
          @media print {
            body { background: #fff; padding: 0; }
            .page { box-shadow: none; margin: 0; padding: 0; max-width: 100%; }
            .no-print { display: none !important; }
            .action-bar { display: none !important; }
            table { page-break-inside: auto; }
            tr { page-break-inside: avoid; page-break-after: auto; }
          }
        </style>
        <script>
          window.addEventListener('load', function() {
            setTimeout(function() {
              try { window.print(); } catch(e){}
            }, 300);
          });
        </script>
      </head>
      <body>
        <div class="page">
          <div class="action-bar no-print">
            <h2>📄 Category Bills per Class Report Preview</h2>
            <button class="btn-print" onclick="window.print()">🖨 Print / Save as PDF</button>
          </div>

          <div class="report-header">
            <div class="logo">RV</div>
            <div>
              <h1>${school}</h1>
              <p class="school-sub">${addr}</p>
              <p class="school-sub">Category Fee Collection Report per Class</p>
            </div>
          </div>

          <div class="meta-band">
            <div class="meta-item"><b>Period:</b> <span>${label}</span></div>
            <div class="meta-item"><b>Section:</b> <span>${secFilterName}</span></div>
            <div class="meta-item"><b>Class:</b> <span>${classFilter || 'All Classes'}</span></div>
            <div class="meta-item"><b>Category:</b> <span>${catFilterName}</span></div>
            <div class="meta-item"><b>Generated:</b> <span>${new Date().toLocaleString('en-GB')}</span></div>
          </div>

          <div class="section-title">
            <span>1. Class vs Fee Category Breakdown Matrix</span>
            <span style="font-size:12px;font-weight:600;color:#0080c8">Total: ₦${fmt(grandTotal)}</span>
          </div>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Class / Level</th>
                  ${cats.map(c => `<th class="num">${c.name}</th>`).join('')}
                  <th class="num">CLASS TOTAL</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows || '<tr><td colspan="100%" style="text-align:center;padding:16px;color:#64748b">No records found for this period.</td></tr>'}
              </tbody>
              <tfoot>
                <tr class="total-row">
                  <td>GRAND TOTAL</td>
                  ${catTotalCells}
                  <td class="num">₦${fmt(grandTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="section-title">
            <span>2. Detailed Transaction Log (${matchedCount} Record${matchedCount !== 1 ? 's' : ''})</span>
            <span style="font-size:12px;font-weight:600;color:#15803d">Total: ₦${fmt(itemizedTotal)}</span>
          </div>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Receipt No</th>
                  <th>Date</th>
                  <th>Learner Name</th>
                  <th>Class</th>
                  <th>Category</th>
                  <th>Description / Details</th>
                  <th class="num">Amount (₦)</th>
                  <th>Method</th>
                  <th>Term</th>
                </tr>
              </thead>
              <tbody>
                ${itemizedRows || '<tr><td colspan="100%" style="text-align:center;padding:16px;color:#64748b">No itemized payments logged.</td></tr>'}
              </tbody>
              <tfoot>
                <tr style="background:#0f172a;color:#fff;font-weight:700">
                  <td colspan="6" style="padding:9px 10px">TOTAL COLLECTED</td>
                  <td class="num" style="color:#4ade80;font-weight:800;font-size:13px">₦${fmt(itemizedTotal)}</td>
                  <td colspan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="footer">
            <p>Official Bursary Financial Statement &bull; RichVine College Bursary Management System &bull; Generated on ${new Date().toLocaleString('en-GB')}</p>
            <button onclick="window.print()" class="btn-print no-print" style="margin-top:10px">🖨 Print / Save as PDF</button>
          </div>
        </div>
      </body>
      </html>`;

      printHtmlDocument(html, 'Category Bills per Class');
    }
  }

  // ── Examination Clearance Passes (5 per A4 sheet) ────────────────────────
  function printExamClearancePasses(students, options = {}) {
    if (!students || !students.length) {
      return alert("No eligible cleared learners selected for examination pass printing.");
    }

    const config = RichVineDB.getConfig();
    const groupByClass = options.groupByClass !== false; // default true
    const term = options.term || "1st Term";
    const session = options.session || "2026/2027";
    const issueDate = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

    // Build pages: 5 passes per A4 sheet
    let pages = [];
    if (groupByClass) {
      // Group by currentClass
      const byClass = {};
      students.forEach(s => {
        const cls = s.currentClass || "Unassigned";
        if (!byClass[cls]) byClass[cls] = [];
        byClass[cls].push(s);
      });

      for (const [cls, list] of Object.entries(byClass)) {
        for (let i = 0; i < list.length; i += 5) {
          pages.push({
            className: cls,
            students: list.slice(i, i + 5)
          });
        }
      }
    } else {
      for (let i = 0; i < students.length; i += 5) {
        pages.push({
          className: "All Classes",
          students: students.slice(i, i + 5)
        });
      }
    }

    const totalPasses = students.length;
    const totalPages = pages.length;

    // Render each page
    let pagesHtml = "";
    pages.forEach((page, pIdx) => {
      let passesHtml = "";
      page.students.forEach((s, sIdx) => {
        const sec = (window.getSectionByClass && window.getSectionByClass(s.currentClass)?.name) || "College";
        const passSerial = `RVC-CLR-26-${s.regNo ? s.regNo.replace(/[^a-zA-Z0-9]/g, "").slice(-4) : String(sIdx + 1).padStart(4, "0")}`;
        const hasAvatar = s.avatar && typeof s.avatar === "string" && s.avatar.startsWith("http");

        passesHtml += `
        <div class="exam-pass">
          <!-- Pass Header -->
          <div class="pass-header">
            <div class="pass-brand">
              <div class="pass-logo">RV</div>
              <div>
                <div class="school-name">${school}</div>
                <div class="school-motto">${config.motto} &bull; ${addr}</div>
              </div>
            </div>
            <div class="pass-title-box">
              <div class="pass-badge">EXAMINATION CLEARANCE PASS</div>
              <div class="pass-term">${session} &bull; ${term}</div>
            </div>
          </div>

          <!-- Pass Body -->
          <div class="pass-body">
            <!-- Student Information -->
            <div class="pass-student-info">
              <div class="info-row">
                <span class="info-label">LEARNER:</span>
                <span class="info-val name-val">${(s.firstName || '').toUpperCase()} ${(s.lastName || '').toUpperCase()}</span>
              </div>
              <div class="info-grid-2">
                <div>
                  <span class="info-label">REG / ADM NO:</span>
                  <span class="info-val reg-val">${s.regNo || '—'}</span>
                </div>
                <div>
                  <span class="info-label">CLASS:</span>
                  <span class="info-val class-val">${s.currentClass || '—'}</span>
                </div>
              </div>
              <div class="info-grid-2">
                <div>
                  <span class="info-label">SECTION:</span>
                  <span class="info-val">${sec}</span>
                </div>
                <div>
                  <span class="info-label">GENDER:</span>
                  <span class="info-val">${s.gender || '—'}</span>
                </div>
              </div>
              <div class="info-row" style="margin-top:2px">
                <span class="info-label">STATUS:</span>
                <span class="status-cleared-tag">&#10003; 100% FEES CLEARED &bull; ADMIT TO EXAM HALL</span>
              </div>
            </div>

            <!-- Passport Photo Box -->
            <div class="pass-photo-box">
              ${hasAvatar 
                ? `<img src="${s.avatar}" alt="Photo" class="pass-photo-img">`
                : `<div class="photo-placeholder"><span>AFFIX<br>PASSPORT</span></div>`
              }
            </div>

            <!-- Official Seal & Authorization -->
            <div class="pass-auth-box">
              <div class="seal-badge">
                <div class="seal-check">&#10003; FULLY CLEARED</div>
                <div class="seal-sub">BURSARY APPROVED</div>
              </div>
              <div class="pass-serial">ID: ${passSerial}</div>
              <div class="pass-signature-line">
                <div class="sig-line"></div>
                <div class="sig-title">Bursar / Accounts Seal</div>
              </div>
            </div>
          </div>

          <!-- Bottom Micro Bar -->
          <div class="pass-footer-micro">
            <span>Issue Date: ${issueDate}</span>
            <span>Valid with official school stamp only &bull; Non-transferable</span>
            <span>RichVine Bursary &bull; 2026/2027</span>
          </div>
        </div>`;

        // Scissor cut line between passes
        if (sIdx < page.students.length - 1) {
          passesHtml += `
          <div class="cut-guide">
            <span class="cut-scissors">&#9986;</span>
            <span class="cut-line"></span>
            <span class="cut-label">CUT HERE FOR LEARNER SLIP</span>
          </div>`;
        }
      });

      pagesHtml += `
      <div class="a4-sheet">
        <div class="sheet-watermark-header no-print">
          <span>Sheet ${pIdx + 1} of ${totalPages} &bull; Class: <b>${page.className}</b> (${page.students.length} Pass${page.students.length > 1 ? 'es' : ''})</span>
          <span style="font-size:11px;color:#64748b">RichVine College Clearance Passes &bull; 5 per A4</span>
        </div>
        <div class="passes-container">
          ${passesHtml}
        </div>
      </div>`;
    });

    const printDoc = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Examination Clearance Passes - ${school}</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
          background: #f1f5f9;
          color: #0f172a;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .controls-bar {
          background: #0f172a;
          color: #fff;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .controls-bar h2 {
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-print {
          background: #0080c8;
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background .15s;
        }
        .btn-print:hover { background: #006da8; }

        /* A4 Page Dimensions (Portrait) */
        @page {
          size: A4 portrait;
          margin: 6mm 8mm;
        }

        .a4-sheet {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          margin: 15px auto;
          background: #fff;
          padding: 6mm 7mm;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          page-break-after: always;
          break-after: page;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .sheet-watermark-header {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          color: #475569;
          padding-bottom: 3px;
          margin-bottom: 3px;
          border-bottom: 1px dashed #cbd5e1;
        }

        .passes-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          justify-content: space-between;
        }

        /* ── Individual Small Exam Pass (Exactly 5 fit on A4 sheet) ── */
        .exam-pass {
          height: 50.5mm;
          max-height: 50.5mm;
          border: 1.5px solid #0080c8;
          border-radius: 5px;
          padding: 2.5mm 3.5mm;
          background: #ffffff;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        /* Subtle Security Watermark */
        .exam-pass::before {
          content: "RICHVINE CLEARANCE";
          position: absolute;
          top: 35%;
          left: 10%;
          font-size: 24pt;
          font-weight: 900;
          color: rgba(0, 128, 200, 0.04);
          transform: rotate(-10deg);
          pointer-events: none;
          z-index: 0;
          letter-spacing: 4px;
        }

        /* Pass Header */
        .pass-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 1.5mm;
          position: relative;
          z-index: 1;
        }
        .pass-brand {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pass-logo {
          width: 22px;
          height: 22px;
          background: #0080c8;
          color: #fff;
          font-weight: 900;
          font-size: 11px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
        }
        .school-name {
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .school-motto {
          font-size: 7px;
          color: #64748b;
          line-height: 1.1;
        }
        .pass-title-box {
          text-align: right;
        }
        .pass-badge {
          background: #0080c8;
          color: #fff;
          font-size: 8.5px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 3px;
          letter-spacing: 0.6px;
          display: inline-block;
        }
        .pass-term {
          font-size: 7.5px;
          font-weight: 700;
          color: #475569;
          margin-top: 1px;
        }

        /* Pass Body */
        .pass-body {
          display: grid;
          grid-template-columns: 1fr 23mm 32mm;
          gap: 6px;
          align-items: center;
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 1.2mm 0;
        }

        .pass-student-info {
          display: flex;
          flex-direction: column;
          gap: 1.5px;
        }
        .info-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .info-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          align-items: baseline;
        }
        .info-label {
          font-size: 7.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }
        .info-val {
          font-size: 9px;
          font-weight: 700;
          color: #0f172a;
        }
        .name-val {
          font-size: 10.5px;
          font-weight: 900;
          color: #0080c8;
          letter-spacing: 0.3px;
        }
        .reg-val {
          color: #0f172a;
          font-family: monospace;
          font-size: 9.5px;
        }
        .class-val {
          color: #0369a1;
          background: #e0f2fe;
          padding: 1px 5px;
          border-radius: 3px;
          font-size: 8.5px;
        }
        .status-cleared-tag {
          font-size: 7.5px;
          font-weight: 800;
          color: #15803d;
          background: #dcfce7;
          border: 1px solid #86efac;
          padding: 1px 5px;
          border-radius: 3px;
          letter-spacing: 0.3px;
        }

        /* Passport Photo Box */
        .pass-photo-box {
          width: 22mm;
          height: 26mm;
          border: 1px dashed #94a3b8;
          border-radius: 3px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          justify-self: center;
        }
        .pass-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .photo-placeholder {
          text-align: center;
          font-size: 6.5px;
          font-weight: 700;
          color: #94a3b8;
          line-height: 1.2;
          letter-spacing: 0.3px;
        }

        /* Official Seal & Authorization Box */
        .pass-auth-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          text-align: center;
        }
        .seal-badge {
          border: 1.2px solid #16a34a;
          background: #f0fdf4;
          border-radius: 3px;
          padding: 1.5px 5px;
          width: 100%;
        }
        .seal-check {
          color: #15803d;
          font-size: 7.5px;
          font-weight: 900;
          letter-spacing: 0.3px;
        }
        .seal-sub {
          color: #166534;
          font-size: 6px;
          font-weight: 700;
        }
        .pass-serial {
          font-size: 6.5px;
          font-family: monospace;
          color: #64748b;
          font-weight: 700;
        }
        .pass-signature-line {
          width: 100%;
        }
        .sig-line {
          border-bottom: 1px solid #475569;
          width: 85%;
          margin: 0 auto 1px;
        }
        .sig-title {
          font-size: 6.5px;
          color: #475569;
          font-weight: 700;
        }

        /* Micro footer */
        .pass-footer-micro {
          display: flex;
          justify-content: space-between;
          font-size: 6.5px;
          color: #94a3b8;
          border-top: 1px dotted #e2e8f0;
          padding-top: 0.8mm;
          position: relative;
          z-index: 1;
        }

        /* Scissor cut guide between passes */
        .cut-guide {
          height: 3.5mm;
          display: flex;
          align-items: center;
          position: relative;
          margin: 0.5mm 0;
        }
        .cut-line {
          flex: 1;
          border-top: 1px dashed #94a3b8;
        }
        .cut-scissors {
          font-size: 9px;
          color: #64748b;
          padding-right: 5px;
        }
        .cut-label {
          font-size: 6.5px;
          color: #94a3b8;
          font-weight: 700;
          letter-spacing: 1px;
          padding-left: 6px;
        }

        @media print {
          body { background: #fff; }
          .controls-bar { display: none !important; }
          .no-print { display: none !important; }
          .a4-sheet {
            box-shadow: none;
            margin: 0;
            padding: 5mm 6mm;
            min-height: auto;
            height: 283mm;
          }
        }
      </style>
    </head>
    <body>
      <div class="controls-bar">
        <h2>
          <span>&#127891;</span>
          <span>RichVine College &mdash; Examination Clearance Passes (${totalPasses} Cleared Learner${totalPasses > 1 ? 's' : ''} &bull; ${totalPages} A4 Sheet${totalPages > 1 ? 's' : ''})</span>
        </h2>
        <button class="btn-print" onclick="window.print()">
          <span>&#128424;</span> Print Passes (5 per A4)
        </button>
      </div>

      ${pagesHtml}
    </body>
    </html>`;

    printHtmlDocument(printDoc, "Examination Clearance Passes");
  }

  // ── Print / PDF Expenses Statement ────────────────────────────────────────
  function printExpensesStatement(timeframe, period, category, section) {
    // Flexible fallback to read from DOM if not passed
    timeframe = timeframe || document.getElementById('exp-report-timeframe')?.value || document.getElementById('exp-timeframe-filter')?.value || 'all';
    period    = period    || document.getElementById('exp-report-period')?.value    || document.getElementById('exp-period-filter')?.value    || 'All';
    category  = category  || document.getElementById('exp-category-filter')?.value  || 'All';
    section   = section   || document.getElementById('exp-report-section')?.value   || document.getElementById('exp-section-filter')?.value   || 'All';

    const { startDate, endDate, label } = getDateRange(timeframe);
    const config = RichVineDB.getConfig();
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(period   && period   !== 'All' ? { period }   : {}),
      ...(category && category !== 'All' ? { category } : {}),
      ...(section  && section  !== 'All' ? { section }  : {})
    };

    const expenses = RichVineDB.getExpenses(filter);
    if (!expenses.length) return alert('No expense records found for the selected criteria.');

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const grandTotal = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);

    const periodLabel = (p) => {
      if (!p) return '';
      if (p === 'one_time' || p === 'onetime') return 'One-Time';
      return p.charAt(0).toUpperCase() + p.slice(1);
    };

    const accountLabel = (e) => e.accountName || (e.section ? (e.section.charAt(0).toUpperCase() + e.section.slice(1) + ' Account') : 'General / Central Account');

    const sectionLabel = section && section !== 'All' ? ` · Account: ${accountLabel({section})}` : '';
    const periodTypeLabel = period && period !== 'All' ? ` · Type: ${periodLabel(period)}` : '';
    const categoryLabel = category && category !== 'All' ? ` · Category: ${category}` : '';

    const rows = expenses.map((e, i) => `
      <tr style="${i % 2 === 0 ? '' : 'background:#f7faff'}">
        <td style="color:#64748b;font-size:11px">${e.date || ''}</td>
        <td style="font-weight:600">${e.description || ''}</td>
        <td><span style="background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:12px;font-size:11px;white-space:nowrap">${e.category || ''}</span></td>
        <td style="font-size:11.5px;color:#475569">${accountLabel(e)}</td>
        <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 7px;border-radius:10px;font-size:11px">${periodLabel(e.period)}</span></td>
        <td style="text-align:right;font-weight:700;color:#dc2626">₦${fmt(e.amount)}</td>
        <td style="font-size:11px;color:#64748b">${e.recordedBy || ''}</td>
      </tr>`).join('');

    // Section totals breakdown
    const sectionTotals = {};
    expenses.forEach(e => {
      const key = e.accountName || e.section || 'General / Central Account';
      sectionTotals[key] = (sectionTotals[key] || 0) + Number(e.amount || 0);
    });
    const sectionBreakdown = Object.entries(sectionTotals).map(([name, amt]) =>
      `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px dashed #e2e8f0">
        <span style="font-size:12px;color:#475569">${name}</span>
        <span style="font-weight:700;color:#dc2626">₦${fmt(amt)}</span>
      </div>`
    ).join('');

    const categoryTotals = {};
    expenses.forEach(e => {
      const key = e.category || 'Uncategorised';
      categoryTotals[key] = (categoryTotals[key] || 0) + Number(e.amount || 0);
    });
    const categoryBreakdown = Object.entries(categoryTotals).map(([name, amt]) =>
      `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px dashed #e2e8f0">
        <span style="font-size:12px;color:#475569">${name}</span>
        <span style="font-weight:700;color:#92400e">₦${fmt(amt)}</span>
      </div>`
    ).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Expense Statement – ${label}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#f4f7fb;color:#1a1a2e}
    .page{max-width:1000px;margin:20px auto;background:#fff;padding:32px;border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,.08)}
    .header{border-bottom:3px solid #dc2626;padding-bottom:16px;margin-bottom:20px}
    .header h1{font-size:20px;color:#dc2626;font-weight:800;letter-spacing:.5px}
    .header h2{font-size:13px;color:#64748b;font-weight:400;margin-top:3px}
    .meta{display:flex;gap:24px;flex-wrap:wrap;background:#fff5f5;border:1px solid #fecaca;border-radius:8px;padding:12px 16px;margin-bottom:20px;font-size:12.5px}
    .meta-item{display:flex;flex-direction:column;gap:2px}
    .meta-label{font-size:10.5px;color:#9ca3af;text-transform:uppercase;letter-spacing:.5px;font-weight:600}
    .meta-value{font-weight:700;color:#1a1a2e}
    table{width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:20px}
    th{background:#dc2626;color:#fff;padding:10px 10px;text-align:left;white-space:nowrap;font-size:11.5px;letter-spacing:.3px}
    th:last-child{text-align:right}
    td{padding:8px 10px;border-bottom:1px solid #f1f5f9;vertical-align:top}
    .total-row{background:#1a1a2e!important}
    .total-row td{color:#fff;font-size:14px;font-weight:800;padding:12px 10px;border:none}
    .total-row td:last-child{color:#fca5a5;text-align:right;font-size:16px}
    .summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:4px}
    .summary-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px}
    .summary-box h4{font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
    .grand-total-box{background:linear-gradient(135deg,#dc2626,#b91c1c);border-radius:10px;padding:18px 22px;color:#fff;text-align:center;margin-top:16px}
    .grand-total-box .label{font-size:12px;opacity:.85;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
    .grand-total-box .amount{font-size:28px;font-weight:900;margin-top:4px}
    .grand-total-box .count{font-size:11px;opacity:.75;margin-top:4px}
    .footer{text-align:center;font-size:11px;color:#9ca3af;margin-top:24px;padding-top:14px;border-top:1px solid #f1f5f9}
    .print-btn{display:block;margin:16px auto 0;padding:10px 28px;background:#dc2626;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;letter-spacing:.3px}
    @media print{.no-print{display:none}.page{box-shadow:none;margin:0;padding:20px}}
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <h1><span style="font-size:16px">📋</span> RICHVINE COLLEGE — Expense Statement</h1>
    <h2>Period: ${label}${sectionLabel}${periodTypeLabel}${categoryLabel}</h2>
  </div>

  <div class="meta">
    <div class="meta-item"><span class="meta-label">Report Period</span><span class="meta-value">${label}</span></div>
    <div class="meta-item"><span class="meta-label">Total Records</span><span class="meta-value">${expenses.length} expense(s)</span></div>
    <div class="meta-item"><span class="meta-label">Generated</span><span class="meta-value">${new Date().toLocaleString('en-GB')}</span></div>
    <div class="meta-item"><span class="meta-label">Session</span><span class="meta-value">${config?.currentSession || '2026/2027'}</span></div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Account / Section</th>
        <th>Type</th>
        <th style="text-align:right">Amount (₦)</th>
        <th>Recorded By</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
    <tfoot>
      <tr class="total-row">
        <td colspan="5">GRAND TOTAL — ${expenses.length} EXPENSE RECORD(S)</td>
        <td>₦${fmt(grandTotal)}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>

  <div class="summary-grid">
    <div class="summary-box">
      <h4>By Revenue Account</h4>
      ${sectionBreakdown || '<div style="color:#94a3b8;font-size:12px">No breakdown available</div>'}
    </div>
    <div class="summary-box">
      <h4>By Category</h4>
      ${categoryBreakdown || '<div style="color:#94a3b8;font-size:12px">No breakdown available</div>'}
    </div>
  </div>

  <div class="grand-total-box">
    <div class="label">Grand Total Expenses</div>
    <div class="amount">₦${fmt(grandTotal)}</div>
    <div class="count">${expenses.length} record(s) · ${label}</div>
  </div>

  <div class="footer">
    <p>${config?.address || '5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State'}</p>
    <p style="margin-top:4px">Generated on ${new Date().toLocaleString('en-GB')} by ${sessionStorage.getItem('richvine_admin_username') || 'Admin'}</p>
    <button class="print-btn no-print" onclick="window.print()">🖨 Print / Save as PDF</button>
  </div>
</div>
</body>
</html>`;

    printHtmlDocument(html, `Expense Statement – ${label}`);
  }

  function triggerDownload(csvContent, filename) {
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  return {
    printReceipt,
    downloadPaymentsCSV,
    downloadExpensesCSV,
    printExpensesStatement,
    downloadCategoryClassReport,
    printExamClearancePasses,
    printLedgerStatement,
    printOverviewStatement,
    printStudentStatement,
    getDateRange
  };
})();
