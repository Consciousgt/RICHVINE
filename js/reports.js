/**
 * RichVine College ΓÇö Reports Module v3
 * Handles CSV export, receipts, ledger, expenses, student balance breakdown, and P&L overview
 */
const RichVineReports = (() => {
  const currency = "Γéª";
  const school   = "RICHVINE COLLEGE";
  const addr     = "5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State";

  // ΓöÇΓöÇ Date range helpers ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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

  // ΓöÇΓöÇ Print helper ΓÇö uses Blob URL (works on file://, no popup permissions needed) ΓöÇΓöÇ
  function printHtmlDocument(html, title) {
    try {
      // PRIMARY: Blob URL approach ΓÇö works on file://, http://, https://
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

  // ΓöÇΓöÇ Payment receipts ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
        <tr><td>Outstanding Arrears Balance:</td><td style="font-weight:700;color:${balanceInfo.arrearsBalance > 0 ? '#b91c1c' : '#15803d'}">${currency}${fmt(balanceInfo.arrearsBalance)} ${balanceInfo.arrearsBalance === 0 ? 'Γ£ô' : ''}</td></tr>
        <tr><td>Term School Fee Remaining:</td><td style="font-weight:700;color:${balanceInfo.termFeeBalance > 0 ? '#b91c1c' : '#15803d'}">${currency}${fmt(balanceInfo.termFeeBalance)} ${balanceInfo.termFeeBalance === 0 ? 'Γ£ô' : ''}</td></tr>
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
              <td style="color:#334155">${it.description || 'ΓÇö'}</td>
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
        ${payment.details?.month ? `<tr><td>Month Covered</td><td style="font-weight:700;color:#0369a1">≡ƒôà ${payment.details.month}</td></tr>` : ""}
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
        <tr><td>Academic Session</td><td>${payment.session} ΓÇö ${payment.term}</td></tr>
        <tr><td>Payment Method</td><td>${payment.paymentMethod}</td></tr>
        <tr><td>Transaction Ref.</td><td>${payment.reference || "ΓÇö"}</td></tr>
        <tr><td>Recorded By</td><td>${payment.recordedBy}</td></tr>
      </table>

      <table>
        <tr><th colspan="2">Student Information</th></tr>
        <tr><td>Full Name</td><td><b>${payment.studentName}</b></td></tr>
        <tr><td>Class / Section</td><td>${payment.studentClass} &nbsp;┬╖&nbsp; ${(window.getSectionByClass && window.getSectionByClass(payment.studentClass)?.name) || "ΓÇö"}</td></tr>
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
        <button onclick="window.print()" class="no-print" style="margin-top:12px;padding:10px 28px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">≡ƒû¿ Print Receipt</button>
      </div>
    </div>
    </body></html>`;

    printHtmlDocument(html, "Receipt " + payment.receiptNo);
  }

  // ΓöÇΓöÇ Print Student Statement ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printStudentStatement(studentId) {
    const student = RichVineDB.getStudentById(studentId);
    if (!student) return alert("Student not found.");
    const payments = RichVineDB.getPayments({ studentId });
    const config   = RichVineDB.getConfig();
    const bal      = RichVineDB.getStudentBalance(studentId);

    const rows = payments.map(p => `<tr>
      <td>${p.receiptNo}</td><td>${p.date}</td><td><b>${p.categoryName}</b></td>
      <td style="color:#475569;font-size:12px">${p.description || 'ΓÇö'}</td>
      <td style="color:green;font-weight:600">${currency}${Number(p.amount).toLocaleString()}</td>
      <td style="color:#b45309">${p.arrearsDeducted > 0 ? currency + Number(p.arrearsDeducted).toLocaleString() : 'ΓÇö'}</td>
      <td style="color:green">${p.termFeePaid > 0 ? currency + Number(p.termFeePaid).toLocaleString() : 'ΓÇö'}</td>
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
      <h1>${school} ΓÇö Complete Learner Account Statement</h1>
      <h2>Academic Session: ${config.currentSession} &nbsp;|&nbsp; Generated: ${new Date().toLocaleString("en-GB")}</h2>
      <div class="info-grid">
        <div class="info-item"><b>Learner:</b> ${student.firstName} ${student.lastName}</div>
        <div class="info-item"><b>Reg. No:</b> ${student.regNo}</div>
        <div class="info-item"><b>Class:</b> ${student.currentClass}</div>
        <div class="info-item"><b>Section:</b> ${window.getSectionByClass?.(student.currentClass)?.name || "ΓÇö"}</div>
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
        <button onclick="window.print()" class="no-print" style="padding:10px 28px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">≡ƒû¿ Print Statement</button>
      </div>
    </div></body></html>`;

    printHtmlDocument(html, "Student Statement");
  }

  // ΓöÇΓöÇ CSV Export (Payments) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
      ["Receipt No", "Date", "Student Name", "Class", "Section", "Category", "Description", "Arrears Deducted", "Term Fee Paid", "Amount (Γéª)", "Payment Method", "Reference", "Session", "Term", "Recorded By"]
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
          desc = p.items.map(it => `${it.categoryName}: Γéª${Number(it.amount).toLocaleString()}${it.description ? ' (' + it.description + ')' : ''}`).join('; ');
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

  // ΓöÇΓöÇ CSV Export (Expenses) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function downloadExpensesCSV(timeframe, period, category, section) {
    timeframe = timeframe || document.getElementById('exp-report-timeframe')?.value || document.getElementById('exp-timeframe-filter')?.value || 'all';
    period    = period    || document.getElementById('exp-report-period')?.value    || document.getElementById('exp-period-filter')?.value    || 'All';
    category  = category  || document.getElementById('exp-report-category')?.value  || document.getElementById('exp-category-filter')?.value  || 'All';
    section   = section   || document.getElementById('exp-report-section')?.value   || document.getElementById('exp-section-filter')?.value   || 'All';

    const { startDate, endDate, label } = getDateRange(timeframe);
    // category may be 'All', a single string, or an array of strings (multi-select)
    const categoryList = Array.isArray(category)
      ? category
      : (category && category !== 'All' && category !== 'All Categories' ? [category] : []);
    const baseFilter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(period && period !== "All" ? { period } : {}),
      ...(section && section !== "All" ? { section } : {})
    };
    let expenses;
    if (categoryList.length === 0) {
      expenses = RichVineDB.getExpenses(baseFilter);
    } else if (categoryList.length === 1) {
      expenses = RichVineDB.getExpenses({ ...baseFilter, category: categoryList[0] });
    } else {
      expenses = RichVineDB.getExpenses(baseFilter).filter(e => categoryList.includes(e.category));
    }
    if (!expenses.length) return alert("No expense records found for the selected criteria.");

    const rows = [["Expense ID", "Date", "Description", "Category", "Account / Section", "Period", "Amount (Γéª)", "Session", "Term", "Recorded By", "Notes"]];
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

  // ΓöÇΓöÇ Print Ledger Statement ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
      let descDisplay = p.description || p.details?.description || 'ΓÇö';

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
          descDisplay += ` <small style="color:#64748b;display:block">(Receipt Total: ${currency}${fmt(p.amount)} ┬╖ ${p.items.length} items)</small>`;
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
        <td>${p.paymentMethod || 'ΓÇö'}</td>
        <td style="font-size:11.5px;color:#64748b">${p.term || ''}</td>
      </tr>`;
    }).filter(Boolean).join("");

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Payment Ledger Report ΓÇö ${school}</title>
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
      <h1>${school} ΓÇö Payment Ledger Report</h1>
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
        <button onclick="window.print()" class="no-print" style="margin-top:12px;padding:9px 26px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">≡ƒû¿ Print Ledger</button>
      </div>
    </div></body></html>`;

    printHtmlDocument(html, "Ledger Statement - " + categoryLabel);
  }

  // ΓöÇΓöÇ Print P&L Overview ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printOverviewStatement(timeframe, sectionId) {
    const { startDate, endDate, label } = getDateRange(timeframe);
    const config = RichVineDB.getConfig();
    const filter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(sectionId && sectionId !== "All" ? { section: sectionId } : {})
    };
    const summary = RichVineDB.getFinancialSummary(filter);
    const overallSummary = RichVineDB.getFinancialSummary(startDate ? { startDate, endDate } : {});
    const sections = window.SCHOOL_SECTIONS || {};

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    let totalDirect = 0;
    let totalOverhead = 0;
    let sectionRows = "";

    for (const [key, sec] of Object.entries(sections)) {
      if (sectionId && sectionId !== "All" && sectionId !== key) continue;
      const secSummary = RichVineDB.getFinancialSummary({ ...(startDate ? { startDate, endDate } : {}), section: key });
      totalDirect += (secSummary.directExpenses || 0);
      totalOverhead += (secSummary.allocatedOverhead || 0);
      const profitColor = secSummary.netProfit >= 0 ? "#15803d" : "#dc2626";

      sectionRows += `<tr>
        <td style="font-weight:600;padding:10px 10px">${sec.name}</td>
        <td style="color:#15803d;text-align:right;font-weight:700">${currency}${fmt(secSummary.totalRevenue)}</td>
        <td style="color:#b91c1c;text-align:right">${currency}${fmt(secSummary.directExpenses || 0)}</td>
        <td style="color:#b45309;text-align:right">${currency}${fmt(secSummary.allocatedOverhead || 0)}</td>
        <td style="color:#dc2626;text-align:right;font-weight:700">${currency}${fmt(secSummary.totalExpenses)}</td>
        <td style="color:${profitColor};text-align:right;font-weight:800">${currency}${fmt(secSummary.netProfit)}</td>
      </tr>`;
    }

    const genSummary = RichVineDB.getFinancialSummary({ ...(startDate ? { startDate, endDate } : {}), section: "general" });

    let generalRow = "";
    if (!sectionId || sectionId === "All" || sectionId === "general") {
      generalRow = `<tr style="background:#f8fafc;font-style:italic">
        <td style="padding:10px 10px">
          <strong>General / Central Operations</strong>
          <div style="font-size:10.5px;color:#64748b;font-style:normal">Central treasury pool & overhead apportioned Γàô to Primary, Junior, Senior</div>
        </td>
        <td style="color:#15803d;text-align:right;font-weight:700">${currency}${fmt(genSummary.totalRevenue)}</td>
        <td style="color:#b91c1c;text-align:right">${currency}${fmt(genSummary.totalExpenses)}</td>
        <td style="color:#64748b;text-align:right">(${currency}${fmt(genSummary.totalExpenses)} spread)</td>
        <td style="color:#dc2626;text-align:right;font-weight:700">${currency}${fmt(genSummary.totalExpenses)}</td>
        <td style="color:#0284c7;text-align:right;font-weight:800">${currency}${fmt(genSummary.netProfit)}</td>
      </tr>`;
    }

    const grandRevenue = overallSummary.totalRevenue;
    const grandExpenses = overallSummary.totalExpenses;
    const grandProfit = overallSummary.netProfit;
    const grandProfitColor = grandProfit >= 0 ? "#15803d" : "#dc2626";

    const html = `<!DOCTYPE html><html><head><title>P&L Overview Report</title>
    <style>
      *{margin:0;padding:0;box-sizing:border-box}
      body{font-family:'Segoe UI',Arial,sans-serif;color:#1a1a2e;background:#f4f7fb}
      .page{max-width:960px;margin:20px auto;background:#fff;padding:32px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.08)}
      .header{border-bottom:3px solid #0080c8;padding-bottom:14px;margin-bottom:20px}
      .header h1{color:#0080c8;font-size:22px;font-weight:800;letter-spacing:.3px}
      .header h2{font-size:13px;color:#64748b;font-weight:400;margin-top:4px}
      .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:22px}
      .card{padding:14px 16px;border-radius:10px;text-align:center}
      .card .lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#64748b;margin-bottom:4px}
      .card .amount{font-size:18px;font-weight:800}
      .green{background:#f0fdf4;border:1px solid #86efac;color:#15803d}
      .red{background:#fef2f2;border:1px solid #fca5a5;color:#b91c1c}
      .blue{background:#f0f9ff;border:1px solid #7dd3fc;color:#0284c7}
      .amber{background:#fffbeb;border:1px solid #fde68a;color:#b45309}
      .purple{background:#faf5ff;border:1px solid #d8b4fe;color:#7c3aed}
      .policy-note{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;font-size:11.5px;color:#166534;margin-bottom:18px;line-height:1.5}
      table{width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:20px}
      th{background:#0f172a;color:#fff;padding:10px 10px;text-align:right;font-size:11.5px;letter-spacing:.3px}
      th:first-child{text-align:left}
      td{padding:9px 10px;border-bottom:1px solid #e8edf3;vertical-align:middle}
      .foot-row{background:#0080c8!important;color:#fff}
      .foot-row td{color:#fff;font-size:13px;font-weight:800;padding:12px 10px;border:none}
      .footer{text-align:center;font-size:11px;color:#888;margin-top:22px;border-top:1px solid #e8edf3;padding-top:12px}
      @media print{.page{box-shadow:none;margin:0;padding:16px}.no-print{display:none}}
    </style></head><body>
    <div class="page">
      <div class="header">
        <h1>${school} ΓÇö Financial P&L Statement</h1>
        <h2>Period: ${label} &nbsp;|&nbsp; Operating Scope: ${sectionId && sectionId !== 'All' ? (sections[sectionId]?.name || sectionId) : 'Institutional (All Sections)'} &nbsp;|&nbsp; Generated: ${new Date().toLocaleString("en-GB")}</h2>
      </div>

      <div class="policy-note">
        <strong>Accounting Policy:</strong> School fees and revenues are attributed to their respective operating sections. Central overhead expenses (administration, facility management, institutional utilities) are apportioned equally (Γàô each) across Primary, Junior, and Senior sections. Section direct expenses are attributed directly to that section. The General / Central Operations pool reflects overall institutional revenue.
      </div>

      <div class="cards">
        <div class="card green"><div class="lbl">Total Revenue</div><div class="amount">${currency}${fmt(overallSummary.totalRevenue)}</div></div>
        <div class="card blue"><div class="lbl">Term Fees Paid</div><div class="amount">${currency}${fmt(overallSummary.totalTermFeesPaid || 0)}</div></div>
        <div class="card amber"><div class="lbl">Arrears Recovered</div><div class="amount">${currency}${fmt(overallSummary.totalArrearsRecovered || 0)}</div></div>
        <div class="card purple"><div class="lbl">Other Fees Paid</div><div class="amount">${currency}${fmt(overallSummary.totalOtherFeesPaid || 0)}</div></div>
        <div class="card red"><div class="lbl">Total Expenses</div><div class="amount">${currency}${fmt(overallSummary.totalExpenses)}</div></div>
        <div class="card" style="background:${overallSummary.netProfit>=0?'#f0fdf4':'#fff1f2'};border:1px solid ${overallSummary.netProfit>=0?'#86efac':'#fca5a5'};color:${grandProfitColor}">
          <div class="lbl">Net Institutional Profit</div>
          <div class="amount">${currency}${fmt(overallSummary.netProfit)}</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Operating Section</th>
            <th>Section Revenue</th>
            <th>Direct Expenses</th>
            <th>Γàô Central Overhead</th>
            <th>Total Expenses</th>
            <th>Net Surplus / (Deficit)</th>
          </tr>
        </thead>
        <tbody>
          ${sectionRows}
          ${generalRow}
        </tbody>
        <tfoot>
          <tr class="foot-row">
            <td>INSTITUTIONAL TOTAL</td>
            <td style="text-align:right">${currency}${fmt(grandRevenue)}</td>
            <td style="text-align:right">${currency}${fmt(totalDirect)}</td>
            <td style="text-align:right">${currency}${fmt(totalOverhead)}</td>
            <td style="text-align:right">${currency}${fmt(grandExpenses)}</td>
            <td style="text-align:right">${currency}${fmt(grandProfit)}</td>
          </tr>
        </tfoot>
      </table>

      <div class="footer">
        <p>${config.motto ? `ΓÇ£${config.motto}ΓÇ¥ &nbsp;|&nbsp; ` : ''}${addr} &nbsp;|&nbsp; Admin Contact: ${config.contactPhone || '09053126809'}</p>
        <button onclick="window.print()" class="no-print" style="margin-top:10px;padding:8px 24px;background:#0080c8;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600">≡ƒû¿ Print Statement / PDF</button>
      </div>
    </div></body></html>`;
    printHtmlDocument(html, "Financial Overview Report");
  }

  // ΓöÇΓöÇ Per-Category Per-Class Report (CSV + Printable HTML) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  // ΓöÇΓöÇ Per-Category Per-Class Report (CSV + Printable HTML) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
        [`RICHVINE COLLEGE ΓÇö Category Bill Report per Class`],
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
      rows.push(['Receipt No', 'Date', 'Learner Name', 'Class', 'Category', 'Description / Items', 'Amount (Γéª)', 'Method', 'Recorded By', 'Term', 'Reference']);
      
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
            desc = p.items.map(it => `${it.categoryName}: Γéª${fmt(it.amount)}${it.description ? ' (' + it.description + ')' : ''}`).join('; ');
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
            return `<td style="text-align:right;color:${amt > 0 ? '#15803d' : '#94a3b8'};font-weight:${amt > 0 ? '700' : '400'}">Γéª${fmt(amt)}</td>`;
          }).join('');
          grandTotal += rowTotal;
          secTotal += rowTotal;
          if (rowTotal > 0 || (classFilter && classFilter !== 'All')) {
            secRows += `<tr><td style="font-weight:600;padding:7px 10px;color:#0f172a">${cls}</td>${cells}<td style="font-weight:800;color:#0080c8;text-align:right">Γéª${fmt(rowTotal)}</td></tr>`;
          }
        });

        if (secRows) {
          tableRows += `<tr style="background:#0f172a;color:#fff"><td colspan="${cats.length + 2}" style="padding:8px 10px;font-weight:700;font-size:12.5px;letter-spacing:0.5px"><i>${sec.name}</i></td></tr>` + secRows;
        }
      }

      const catTotalCells = cats.map(cat =>
        `<td style="text-align:right;font-weight:800;color:#15803d">Γéª${fmt(catTotals[cat.id] || 0)}</td>`
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
          const desc = matchingItem?.description || p.description || p.details?.description || 'ΓÇö';
          itemizedRows += `<tr>
            <td style="font-family:monospace;font-weight:700">${p.receiptNo}</td>
            <td>${p.date}</td>
            <td><b>${p.studentName}</b></td>
            <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600">${p.studentClass}</span></td>
            <td>${matchingItem?.categoryName || p.categoryName}</td>
            <td style="font-size:11.5px;color:#475569">${desc}</td>
            <td style="text-align:right;color:#15803d;font-weight:700">Γéª${fmt(amt)}</td>
            <td>${p.paymentMethod}</td>
            <td>${p.term || ''}</td>
          </tr>`;
        } else {
          matchedCount++;
          itemizedTotal += Number(p.amount) || 0;
          let catDisplay = p.categoryName;
          if (Array.isArray(p.items) && p.items.length > 1) {
            catDisplay = `<span title="${p.items.map(it=>it.categoryName+': Γéª'+fmt(it.amount)).join(', ')}" style="font-weight:600;color:#7c3aed">${p.categoryName} (${p.items.length} items)</span>`;
          }
          const desc = p.description || p.details?.description || (Array.isArray(p.items) ? p.items.map(it=>it.description).filter(Boolean).join('; ') : '') || 'ΓÇö';
          itemizedRows += `<tr>
            <td style="font-family:monospace;font-weight:700">${p.receiptNo}</td>
            <td>${p.date}</td>
            <td><b>${p.studentName}</b></td>
            <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600">${p.studentClass}</span></td>
            <td>${catDisplay}</td>
            <td style="font-size:11.5px;color:#475569">${desc}</td>
            <td style="text-align:right;color:#15803d;font-weight:700">Γéª${fmt(p.amount)}</td>
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
        <title>Category Fee Collection Report per Class ΓÇö ${school}</title>
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
            <h2>≡ƒôä Category Bills per Class Report Preview</h2>
            <button class="btn-print" onclick="window.print()">≡ƒû¿ Print / Save as PDF</button>
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
            <span style="font-size:12px;font-weight:600;color:#0080c8">Total: Γéª${fmt(grandTotal)}</span>
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
                  <td class="num">Γéª${fmt(grandTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="section-title">
            <span>2. Detailed Transaction Log (${matchedCount} Record${matchedCount !== 1 ? 's' : ''})</span>
            <span style="font-size:12px;font-weight:600;color:#15803d">Total: Γéª${fmt(itemizedTotal)}</span>
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
                  <th class="num">Amount (Γéª)</th>
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
                  <td class="num" style="color:#4ade80;font-weight:800;font-size:13px">Γéª${fmt(itemizedTotal)}</td>
                  <td colspan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="footer">
            <p>Official Bursary Financial Statement &bull; RichVine College Bursary Management System &bull; Generated on ${new Date().toLocaleString('en-GB')}</p>
            <button onclick="window.print()" class="btn-print no-print" style="margin-top:10px">≡ƒû¿ Print / Save as PDF</button>
          </div>
        </div>
      </body>
      </html>`;

      printHtmlDocument(html, 'Category Bills per Class');
    }
  }

  // ΓöÇΓöÇ Examination Clearance Passes (4 per A4 sheet) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printExamClearancePasses(students, options = {}) {
    if (!students || !students.length) {
      return alert("No eligible cleared learners selected for examination pass printing.");
    }

    const config = RichVineDB.getConfig();
    const term = options.term || config?.currentTerm || "1st Term";
    const session = options.session || config?.currentSession || "2026/2027";
    const issueDate = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

    // Sort learners by class order so same-class students stay together,
    // while filling each A4 sheet with up to 4 learners continuously (no paper waste)
    const sortedStudents = [...students].sort((a, b) => {
      const clsA = a.currentClass || "";
      const clsB = b.currentClass || "";
      if (clsA !== clsB) return clsA.localeCompare(clsB);
      return (a.lastName || "").localeCompare(b.lastName || "");
    });

    // Build pages: exactly 4 passes per A4 sheet, continuous across classes unless forceSeparateClassSheets is true
    let pages = [];
    if (options.forceSeparateClassSheets) {
      const byClass = {};
      sortedStudents.forEach(s => {
        const cls = s.currentClass || "Unassigned";
        if (!byClass[cls]) byClass[cls] = [];
        byClass[cls].push(s);
      });

      for (const [cls, list] of Object.entries(byClass)) {
        for (let i = 0; i < list.length; i += 4) {
          pages.push({
            className: cls,
            students: list.slice(i, i + 4)
          });
        }
      }
    } else {
      for (let i = 0; i < sortedStudents.length; i += 4) {
        const slice = sortedStudents.slice(i, i + 4);
        const uniqueClasses = Array.from(new Set(slice.map(s => s.currentClass || "Unassigned")));
        pages.push({
          className: uniqueClasses.join(", "),
          students: slice
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
                  <span class="info-val reg-val">${s.regNo || 'ΓÇö'}</span>
                </div>
                <div>
                  <span class="info-label">CLASS:</span>
                  <span class="info-val class-val">${s.currentClass || 'ΓÇö'}</span>
                </div>
              </div>
              <div class="info-grid-2">
                <div>
                  <span class="info-label">SECTION:</span>
                  <span class="info-val">${sec}</span>
                </div>
                <div>
                  <span class="info-label">GENDER:</span>
                  <span class="info-val">${s.gender || 'ΓÇö'}</span>
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
          <span style="font-size:11px;color:#64748b">RichVine College Clearance Passes &bull; 4 per A4</span>
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

        /* ΓöÇΓöÇ Individual Small Exam Pass (Exactly 4 fit generously on A4 sheet) ΓöÇΓöÇ */
        .exam-pass {
          height: 63.5mm;
          max-height: 64mm;
          border: 1.8px solid #0080c8;
          border-radius: 6px;
          padding: 3.2mm 4.5mm;
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
          font-size: 28pt;
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
          padding-bottom: 1.8mm;
          position: relative;
          z-index: 1;
        }
        .pass-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pass-logo {
          width: 26px;
          height: 26px;
          background: #0080c8;
          color: #fff;
          font-weight: 900;
          font-size: 13px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
        }
        .school-name {
          font-size: 13.5px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .school-motto {
          font-size: 8px;
          color: #64748b;
          line-height: 1.1;
        }
        .pass-title-box {
          text-align: right;
        }
        .pass-badge {
          background: #0080c8;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 4px;
          letter-spacing: 0.6px;
          display: inline-block;
        }
        .pass-term {
          font-size: 8.5px;
          font-weight: 700;
          color: #475569;
          margin-top: 1px;
        }

        /* Pass Body */
        .pass-body {
          display: grid;
          grid-template-columns: 1fr 26mm 36mm;
          gap: 8px;
          align-items: center;
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 2mm 0;
        }

        .pass-student-info {
          display: flex;
          flex-direction: column;
          gap: 2.5px;
        }
        .info-row {
          display: flex;
          align-items: baseline;
          gap: 5px;
        }
        .info-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          align-items: baseline;
        }
        .info-label {
          font-size: 8.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }
        .info-val {
          font-size: 10.5px;
          font-weight: 700;
          color: #0f172a;
        }
        .name-val {
          font-size: 13px;
          font-weight: 900;
          color: #0080c8;
          letter-spacing: 0.3px;
        }
        .reg-val {
          color: #0f172a;
          font-family: monospace;
          font-size: 11px;
        }
        .class-val {
          color: #0369a1;
          background: #e0f2fe;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
        }
        .status-cleared-tag {
          font-size: 9px;
          font-weight: 800;
          color: #15803d;
          background: #dcfce7;
          border: 1px solid #86efac;
          padding: 2px 7px;
          border-radius: 4px;
          letter-spacing: 0.3px;
        }

        /* Passport Photo Box */
        .pass-photo-box {
          width: 25mm;
          height: 30mm;
          border: 1.2px dashed #94a3b8;
          border-radius: 4px;
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
          font-size: 7.5px;
          font-weight: 700;
          color: #94a3b8;
          line-height: 1.25;
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
          border: 1.4px solid #16a34a;
          background: #f0fdf4;
          border-radius: 4px;
          padding: 2.5px 6px;
          width: 100%;
        }
        .seal-check {
          color: #15803d;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.3px;
        }
        .seal-sub {
          color: #166534;
          font-size: 7px;
          font-weight: 700;
        }
        .pass-serial {
          font-size: 7.5px;
          font-family: monospace;
          color: #64748b;
          font-weight: 700;
          margin: 1px 0;
        }
        .pass-signature-line {
          width: 100%;
        }
        .sig-line {
          border-bottom: 1px solid #475569;
          width: 85%;
          margin: 0 auto 2px;
        }
        .sig-title {
          font-size: 7.5px;
          color: #475569;
          font-weight: 700;
        }

        /* Micro footer */
        .pass-footer-micro {
          display: flex;
          justify-content: space-between;
          font-size: 7.5px;
          color: #94a3b8;
          border-top: 1px dotted #e2e8f0;
          padding-top: 1mm;
          position: relative;
          z-index: 1;
        }

        /* Scissor cut guide between passes */
        .cut-guide {
          height: 4mm;
          display: flex;
          align-items: center;
          position: relative;
          margin: 0.6mm 0;
        }
        .cut-line {
          flex: 1;
          border-top: 1px dashed #94a3b8;
        }
        .cut-scissors {
          font-size: 10px;
          color: #64748b;
          padding-right: 5px;
        }
        .cut-label {
          font-size: 7.5px;
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
            height: 284mm;
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
          <span>&#128424;</span> Print Passes (4 per A4)
        </button>
      </div>

      ${pagesHtml}
    </body>
    </html>`;

    printHtmlDocument(printDoc, "Examination Clearance Passes");
  }

  // ΓöÇΓöÇ School Fees Reminders (4 per A4 sheet with 1-Week Ultimatum) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printFeeReminders(students, options = {}) {
    if (!students || !students.length) {
      return alert("No learners selected for school fees reminder printing.");
    }

    const config = RichVineDB.getConfig();
    const term = options.term || config?.currentTerm || "1st Term";
    const session = options.session || config?.currentSession || "2026/2027";

    // 1-Week Ultimatum calculation
    const today = new Date();
    const ultimatumDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const issueDateStr = today.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
    const ultimatumDateStr = ultimatumDate.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "short", year: "numeric" });

    // Format numbers
    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Sort learners by class so same-class learners stay contiguous, while packing 4 per A4 sheet continuously
    const sortedStudents = [...students].sort((a, b) => {
      const clsA = a.currentClass || "";
      const clsB = b.currentClass || "";
      if (clsA !== clsB) return clsA.localeCompare(clsB);
      return (a.lastName || "").localeCompare(b.lastName || "");
    });

    let pages = [];
    if (options.forceSeparateClassSheets) {
      const byClass = {};
      sortedStudents.forEach(s => {
        const cls = s.currentClass || "Unassigned";
        if (!byClass[cls]) byClass[cls] = [];
        byClass[cls].push(s);
      });
      for (const [cls, list] of Object.entries(byClass)) {
        for (let i = 0; i < list.length; i += 4) {
          pages.push({
            className: cls,
            students: list.slice(i, i + 4)
          });
        }
      }
    } else {
      for (let i = 0; i < sortedStudents.length; i += 4) {
        const slice = sortedStudents.slice(i, i + 4);
        const uniqueClasses = Array.from(new Set(slice.map(s => s.currentClass || "Unassigned")));
        pages.push({
          className: uniqueClasses.join(", "),
          students: slice
        });
      }
    }

    const totalReminders = students.length;
    const totalPages = pages.length;

    let pagesHtml = "";
    pages.forEach((page, pIdx) => {
      let remindersHtml = "";
      page.students.forEach((s, sIdx) => {
        const sec = (window.getSectionByClass && window.getSectionByClass(s.currentClass)?.name) || "College";
        const bal = RichVineDB.getStudentBalance(s.id) || {
          termFeeExpected: Number(s.termFee || 0),
          termFeePaid: 0,
          termFeeBalance: Number(s.termFee || 0),
          arrearsBalance: Number(s.arrears || 0),
          totalOutstanding: Number(s.termFee || 0) + Number(s.arrears || 0)
        };
        const refSerial = `RVC-REM-26-${s.regNo ? s.regNo.replace(/[^a-zA-Z0-9]/g, "").slice(-4) : String(sIdx + 1).padStart(4, "0")}`;

        remindersHtml += `
        <div class="reminder-slip">
          <!-- Reminder Header -->
          <div class="slip-header">
            <div class="slip-brand">
              <div class="slip-logo">RV</div>
              <div>
                <div class="school-name">${school}</div>
                <div class="school-motto">${config.motto} &bull; ${addr}</div>
              </div>
            </div>
            <div class="slip-title-box">
              <div class="slip-badge">FEES REMINDER &bull; 1-WEEK ULTIMATUM</div>
              <div class="slip-term">${session} &bull; ${term}</div>
            </div>
          </div>

          <!-- Reminder Body -->
          <div class="slip-body">
            <!-- Student & Parent Information -->
            <div class="slip-student-info">
              <div class="info-row">
                <span class="info-label">LEARNER:</span>
                <span class="info-val name-val">${(s.firstName || '').toUpperCase()} ${(s.lastName || '').toUpperCase()}</span>
              </div>
              <div class="info-grid-2">
                <div>
                  <span class="info-label">REG NO:</span>
                  <span class="info-val reg-val">${s.regNo || 'ΓÇö'}</span>
                </div>
                <div>
                  <span class="info-label">CLASS:</span>
                  <span class="info-val class-val">${s.currentClass || 'ΓÇö'} (${sec})</span>
                </div>
              </div>
              <div class="info-grid-2">
                <div>
                  <span class="info-label">PARENT / GUARDIAN:</span>
                  <span class="info-val" style="font-size:9px">${s.parentName || 'Parent / Guardian'}</span>
                </div>
                <div>
                  <span class="info-label">PARENT PHONE:</span>
                  <span class="info-val" style="font-size:9px">${s.parentPhone || 'ΓÇö'}</span>
                </div>
              </div>
              <div class="notice-text">
                Dear Parent/Guardian, please be notified that your ward has a pending school fees balance. Full settlement is urgently required.
              </div>
            </div>

            <!-- Financial Breakdown Box -->
            <div class="slip-fees-box">
              <div class="fee-mini-row">
                <span>Term Expected:</span>
                <b>Γéª${fmt(bal.termFeeExpected)}</b>
              </div>
              <div class="fee-mini-row">
                <span>Total Paid to Date:</span>
                <span style="color:#15803d;font-weight:700">Γéª${fmt(bal.termFeePaid + (bal.arrearsPaid || 0))}</span>
              </div>
              ${bal.arrearsBalance > 0 ? `
              <div class="fee-mini-row" style="color:#b45309">
                <span>Past Arrears Balance:</span>
                <b>Γéª${fmt(bal.arrearsBalance)}</b>
              </div>` : ''}
              <div class="outstanding-badge">
                <div class="out-lbl">OUTSTANDING BALANCE DUE</div>
                <div class="out-amt">Γéª${fmt(bal.totalOutstanding)}</div>
              </div>
            </div>

            <!-- 1-Week Ultimatum & Authorization Box -->
            <div class="slip-ultimatum-box">
              <div class="ultimatum-badge">
                <div class="ult-title">&#9888; 1-WEEK ULTIMATUM</div>
                <div class="ult-deadline">Pay on or before:<br><b>${ultimatumDateStr}</b></div>
              </div>
              <div class="ult-warning">
                Settlement required within 7 days to avoid clearance restriction from classes and examinations.
              </div>
              <div class="slip-contact">
                Admin Hotline: <b>09053126809</b>
              </div>
              <div class="slip-signature-line">
                <div class="sig-line"></div>
                <div class="sig-title">Bursar / Accounts Seal</div>
              </div>
            </div>
          </div>

          <!-- Bottom Micro Bar -->
          <div class="slip-footer-micro">
            <span>Notice Date: ${issueDateStr}</span>
            <span>Ref: ${refSerial} &bull; Please disregard if payment was made in the last 24hrs</span>
            <span>RichVine Bursary &bull; 2026/2027</span>
          </div>
        </div>`;

        // Scissor cut guide between slips
        if (sIdx < page.students.length - 1) {
          remindersHtml += `
          <div class="cut-guide">
            <span class="cut-scissors">&#9986;</span>
            <span class="cut-line"></span>
            <span class="cut-label">CUT HERE FOR LEARNER REMINDER SLIP</span>
          </div>`;
        }
      });

      pagesHtml += `
      <div class="a4-sheet">
        <div class="sheet-watermark-header no-print">
          <span>Sheet ${pIdx + 1} of ${totalPages} &bull; Class: <b>${page.className}</b> (${page.students.length} Reminder${page.students.length > 1 ? 's' : ''})</span>
          <span style="font-size:11px;color:#dc2626;font-weight:700">RichVine College Fees Reminders &bull; 4 per A4</span>
        </div>
        <div class="passes-container">
          ${remindersHtml}
        </div>
      </div>`;
    });

    const printDoc = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>School Fees Reminders (1-Week Ultimatum) - ${school}</title>
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
          background: #dc2626;
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
        .btn-print:hover { background: #b91c1c; }

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

        /* ΓöÇΓöÇ Individual Reminder Slip (Exactly 4 fit generously on A4 sheet) ΓöÇΓöÇ */
        .reminder-slip {
          height: 63.5mm;
          max-height: 64mm;
          border: 1.8px solid #dc2626;
          border-radius: 6px;
          padding: 3.2mm 4.5mm;
          background: #ffffff;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .reminder-slip::before {
          content: "FEES REMINDER";
          position: absolute;
          top: 35%;
          left: 10%;
          font-size: 28pt;
          font-weight: 900;
          color: rgba(220, 38, 38, 0.04);
          transform: rotate(-10deg);
          pointer-events: none;
          z-index: 0;
          letter-spacing: 4px;
        }

        .slip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #fee2e2;
          padding-bottom: 1.8mm;
          position: relative;
          z-index: 1;
        }
        .slip-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .slip-logo {
          width: 26px;
          height: 26px;
          background: #dc2626;
          color: #fff;
          font-weight: 900;
          font-size: 13px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
        }
        .school-name {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .school-motto {
          font-size: 7.5px;
          color: #64748b;
          line-height: 1.1;
        }
        .slip-title-box {
          text-align: right;
        }
        .slip-badge {
          background: #dc2626;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          padding: 2.5px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          display: inline-block;
        }
        .slip-term {
          font-size: 8px;
          font-weight: 700;
          color: #475569;
          margin-top: 1px;
        }

        .slip-body {
          display: grid;
          grid-template-columns: 1.2fr 0.95fr 0.95fr;
          gap: 8px;
          align-items: stretch;
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 1.5mm 0;
        }

        .slip-student-info {
          display: flex;
          flex-direction: column;
          gap: 2.5px;
          justify-content: center;
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
          font-size: 9.5px;
          font-weight: 700;
          color: #0f172a;
        }
        .name-val {
          font-size: 12.5px;
          font-weight: 900;
          color: #b91c1c;
          letter-spacing: 0.3px;
        }
        .reg-val {
          color: #0f172a;
          font-family: monospace;
          font-size: 10px;
        }
        .class-val {
          color: #0369a1;
          background: #e0f2fe;
          padding: 1.5px 5px;
          border-radius: 3px;
          font-size: 9px;
        }
        .notice-text {
          font-size: 7.5px;
          color: #475569;
          line-height: 1.25;
          margin-top: 3px;
          font-style: italic;
        }

        /* Fees Box */
        .slip-fees-box {
          background: #fff5f5;
          border: 1px solid #fecaca;
          border-radius: 5px;
          padding: 2.5mm 3.5mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 8.5px;
        }
        .fee-mini-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1px 0;
        }
        .outstanding-badge {
          background: #dc2626;
          color: #fff;
          border-radius: 4px;
          padding: 3px 6px;
          text-align: center;
          margin-top: 3px;
        }
        .out-lbl {
          font-size: 7.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          opacity: 0.9;
        }
        .out-amt {
          font-size: 13.5px;
          font-weight: 900;
          letter-spacing: 0.3px;
        }

        /* Ultimatum Box */
        .slip-ultimatum-box {
          border: 1px solid #fcd34d;
          background: #fffbeb;
          border-radius: 5px;
          padding: 2.5mm 3.5mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
        }
        .ultimatum-badge {
          background: #b45309;
          color: #fff;
          border-radius: 4px;
          padding: 2px 5px;
        }
        .ult-title {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.4px;
        }
        .ult-deadline {
          font-size: 8.5px;
          line-height: 1.15;
          margin-top: 1px;
        }
        .ult-warning {
          font-size: 6.8px;
          color: #92400e;
          line-height: 1.15;
          font-weight: 600;
          margin: 2px 0;
        }
        .slip-contact {
          font-size: 7.5px;
          color: #0f172a;
        }
        .slip-signature-line {
          width: 100%;
          margin-top: 1px;
        }
        .sig-line {
          border-bottom: 1px solid #475569;
          width: 80%;
          margin: 0 auto 2px;
        }
        .sig-title {
          font-size: 7px;
          color: #475569;
          font-weight: 700;
        }

        .slip-footer-micro {
          display: flex;
          justify-content: space-between;
          font-size: 7.5px;
          color: #94a3b8;
          border-top: 1px dotted #fee2e2;
          padding-top: 1mm;
          position: relative;
          z-index: 1;
        }

        .cut-guide {
          height: 4mm;
          display: flex;
          align-items: center;
          position: relative;
          margin: 0.6mm 0;
        }
        .cut-line {
          flex: 1;
          border-top: 1px dashed #94a3b8;
        }
        .cut-scissors {
          font-size: 10px;
          color: #64748b;
          padding-right: 5px;
        }
        .cut-label {
          font-size: 7.5px;
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
            height: 284mm;
          }
        }
      </style>
    </head>
    <body>
      <div class="controls-bar">
        <h2>
          <span>&#9888;</span>
          <span>RichVine College &mdash; School Fees Reminders (${totalReminders} Debtor${totalReminders > 1 ? 's' : ''} &bull; ${totalPages} A4 Sheet${totalPages > 1 ? 's' : ''})</span>
        </h2>
        <button class="btn-print" onclick="window.print()">
          <span>&#128424;</span> Print Reminders (4 per A4)
        </button>
      </div>

      ${pagesHtml}
    </body>
    </html>`;

    printHtmlDocument(printDoc, "School Fees Reminders");
  }

  // ΓöÇΓöÇ Print / PDF Expenses Statement ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printExpensesStatement(timeframe, period, category, section) {
    // Flexible fallback to read from DOM if not passed
    timeframe = timeframe || document.getElementById('exp-report-timeframe')?.value || document.getElementById('exp-timeframe-filter')?.value || 'all';
    period    = period    || document.getElementById('exp-report-period')?.value    || document.getElementById('exp-period-filter')?.value    || 'All';
    category  = category  || document.getElementById('exp-category-filter')?.value  || 'All';
    section   = section   || document.getElementById('exp-report-section')?.value   || document.getElementById('exp-section-filter')?.value   || 'All';

    const { startDate, endDate, label } = getDateRange(timeframe);
    const config = RichVineDB.getConfig();
    // category may be 'All', a single string, or an array of strings (multi-select)
    const categoryList = Array.isArray(category)
      ? category
      : (category && category !== 'All' && category !== 'All Categories' ? [category] : []);
    const baseFilter = {
      ...(startDate ? { startDate, endDate } : {}),
      ...(period   && period   !== 'All' ? { period }   : {}),
      ...(section  && section  !== 'All' ? { section }  : {})
    };
    let expenses;
    if (categoryList.length === 0) {
      expenses = RichVineDB.getExpenses(baseFilter);
    } else if (categoryList.length === 1) {
      expenses = RichVineDB.getExpenses({ ...baseFilter, category: categoryList[0] });
    } else {
      expenses = RichVineDB.getExpenses(baseFilter).filter(e => categoryList.includes(e.category));
    }
    if (!expenses.length) return alert('No expense records found for the selected criteria.');

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const grandTotal = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);

    const periodLabel = (p) => {
      if (!p) return '';
      if (p === 'one_time' || p === 'onetime') return 'One-Time';
      return p.charAt(0).toUpperCase() + p.slice(1);
    };

    const accountLabel = (e) => e.accountName || (e.section ? (e.section.charAt(0).toUpperCase() + e.section.slice(1) + ' Account') : 'General / Central Account');

    const sectionLabel = section && section !== 'All' ? ` ┬╖ Account: ${accountLabel({section})}` : '';
    const periodTypeLabel = period && period !== 'All' ? ` ┬╖ Type: ${periodLabel(period)}` : '';
    const categoryLabel = categoryList.length > 0 ? ` ► Category: ${categoryList.join(', ')}` : '';

    const rows = expenses.map((e, i) => `
      <tr style="${i % 2 === 0 ? '' : 'background:#f7faff'}">
        <td style="color:#64748b;font-size:11px">${e.date || ''}</td>
        <td style="font-weight:600">${e.description || ''}</td>
        <td><span style="background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:12px;font-size:11px;white-space:nowrap">${e.category || ''}</span></td>
        <td style="font-size:11.5px;color:#475569">${accountLabel(e)}</td>
        <td><span style="background:#e0f2fe;color:#0369a1;padding:2px 7px;border-radius:10px;font-size:11px">${periodLabel(e.period)}</span></td>
        <td style="text-align:right;font-weight:700;color:#dc2626">Γéª${fmt(e.amount)}</td>
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
        <span style="font-weight:700;color:#dc2626">Γéª${fmt(amt)}</span>
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
        <span style="font-weight:700;color:#92400e">Γéª${fmt(amt)}</span>
      </div>`
    ).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Expense Statement ΓÇô ${label}</title>
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
    <h1><span style="font-size:16px">≡ƒôï</span> RICHVINE COLLEGE ΓÇö Expense Statement</h1>
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
        <th style="text-align:right">Amount (Γéª)</th>
        <th>Recorded By</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
    <tfoot>
      <tr class="total-row">
        <td colspan="5">GRAND TOTAL ΓÇö ${expenses.length} EXPENSE RECORD(S)</td>
        <td>Γéª${fmt(grandTotal)}</td>
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
    <div class="amount">Γéª${fmt(grandTotal)}</div>
    <div class="count">${expenses.length} record(s) ┬╖ ${label}</div>
  </div>

  <div class="footer">
    <p>${config?.address || '5-7 Olukayode Street, Imoro, Ogijo, Shagamu - Ikorodu Road, Shagamu, Ogun State'}</p>
    <p style="margin-top:4px">Generated on ${new Date().toLocaleString('en-GB')} by ${sessionStorage.getItem('richvine_admin_username') || 'Admin'}</p>
    <button class="print-btn no-print" onclick="window.print()">≡ƒû¿ Print / Save as PDF</button>
  </div>
</div>
</body>
</html>`;

    printHtmlDocument(html, `Expense Statement ΓÇô ${label}`);
  }

  // ΓöÇΓöÇ Print Class Records Sheet ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printClassRecords(className) {
    className = className || 'All';
    const config = RichVineDB.getConfig();
    const school = config?.schoolName || 'RICHVINE COLLEGE';
    const motto = config?.motto || 'Excellence and Integrity';
    const addr = config?.address || '';
    const phone = config?.phone || '';
    const term = config?.currentTerm || '1st Term';
    const session = config?.currentSession || '2026/2027';
    const printDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    let classesToPrint = [];
    if (!className || className === 'All' || className === 'All Classes') {
      classesToPrint = window.ALL_CLASSES || [];
    } else {
      classesToPrint = [className];
    }

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    let classSectionsHtml = '';
    let grandTotalLearners = 0;
    let grandExpected = 0;
    let grandPaid = 0;
    let grandOutstanding = 0;
    let grandCleared = 0;

    classesToPrint.forEach(cls => {
      const students = RichVineDB.getStudents({ class: cls });
      if (!students.length && classesToPrint.length > 1) return; // skip empty classes when printing all

      const section = window.getSectionByClass?.(cls)?.name || 'College';
      let clsExpected = 0;
      let clsPaid = 0;
      let clsArrears = 0;
      let clsTermBal = 0;
      let clsTotalOut = 0;
      let clsCleared = 0;

      const studentRows = students.map((s, idx) => {
        const bal = RichVineDB.getStudentBalance(s.id) || {
          termFeeExpected: Number(s.termFee || 0),
          termFeePaid: 0,
          termFeeBalance: Number(s.termFee || 0),
          arrearsBalance: Number(s.arrears || 0),
          totalOutstanding: (Number(s.termFee || 0) + Number(s.arrears || 0)),
          totalPaidAll: 0
        };

        const isCleared = bal.totalOutstanding <= 0;
        if (isCleared) clsCleared++;
        clsExpected += bal.termFeeExpected;
        clsPaid += bal.termFeePaid;
        clsArrears += bal.arrearsBalance;
        clsTermBal += bal.termFeeBalance;
        clsTotalOut += bal.totalOutstanding;

        return `
          <tr style="${idx % 2 === 1 ? 'background:#f8fafc;' : ''}">
            <td style="text-align:center;color:#64748b;font-weight:600;padding:6px">${idx + 1}</td>
            <td style="font-weight:700;color:#0f172a;padding:6px 8px">${s.regNo || 'ΓÇö'}</td>
            <td style="font-weight:600;padding:6px 8px">${s.firstName} ${s.lastName}</td>
            <td style="text-align:center;padding:6px">${s.gender || 'ΓÇö'}</td>
            <td style="text-align:right;padding:6px 8px">Γéª${fmt(bal.termFeeExpected)}</td>
            <td style="text-align:right;color:#059669;font-weight:700;padding:6px 8px">Γéª${fmt(bal.totalPaidAll)}</td>
            <td style="text-align:right;color:${bal.arrearsBalance > 0 ? '#b45309' : '#64748b'};font-weight:${bal.arrearsBalance > 0 ? '700' : '400'};padding:6px 8px">Γéª${fmt(bal.arrearsBalance)}</td>
            <td style="text-align:right;color:${bal.termFeeBalance > 0 ? '#dc2626' : '#64748b'};font-weight:${bal.termFeeBalance > 0 ? '700' : '400'};padding:6px 8px">Γéª${fmt(bal.termFeeBalance)}</td>
            <td style="text-align:right;font-weight:800;color:${bal.totalOutstanding > 0 ? '#b91c1c' : '#059669'};padding:6px 8px">Γéª${fmt(bal.totalOutstanding)}</td>
            <td style="text-align:center;padding:6px">
              <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;${isCleared ? 'background:#ecfdf5;color:#047857;border:1px solid #a7f3d0' : 'background:#fff1f2;color:#b91c1c;border:1px solid #fecdd3'}">
                ${isCleared ? 'Γ£ô Cleared' : 'Owing'}
              </span>
            </td>
            <td style="font-size:11.5px;color:#475569;padding:6px 8px">${s.parentPhone || s.parentName || 'ΓÇö'}</td>
          </tr>`;
      }).join('');

      grandTotalLearners += students.length;
      grandExpected += clsExpected;
      grandPaid += clsPaid;
      grandOutstanding += clsTotalOut;
      grandCleared += clsCleared;

      const rate = students.length > 0 ? Math.round((clsCleared / students.length) * 100) : 0;

      classSectionsHtml += `
        <div class="class-block" style="page-break-after:always;margin-bottom:32px">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:12px;border-bottom:2px solid #0284c7;padding-bottom:8px">
            <div>
              <h2 style="font-size:18px;font-weight:800;color:#0369a1;margin:0">Class: ${cls}</h2>
              <div style="font-size:12px;color:#64748b;margin-top:2px">Section: ${section} &bull; Academic Session: ${session} &bull; Term: ${term}</div>
            </div>
            <div style="display:flex;gap:12px;font-size:12px">
              <div style="background:#f0f9ff;border:1px solid #bae6fd;padding:6px 12px;border-radius:8px">
                <b>Enrolled:</b> ${students.length} Learners
              </div>
              <div style="background:#ecfdf5;border:1px solid #a7f3d0;padding:6px 12px;border-radius:8px">
                <b>Cleared:</b> <span style="color:#047857">${clsCleared} (${rate}%)</span>
              </div>
              <div style="background:#fff1f2;border:1px solid #fecdd3;padding:6px 12px;border-radius:8px">
                <b>Debtors:</b> <span style="color:#b91c1c">${students.length - clsCleared}</span>
              </div>
            </div>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:14px">
            <thead>
              <tr style="background:#0f172a;color:#fff">
                <th style="padding:7px 6px;text-align:center;width:30px">#</th>
                <th style="padding:7px 8px;text-align:left">Reg No</th>
                <th style="padding:7px 8px;text-align:left">Student Name</th>
                <th style="padding:7px 6px;text-align:center">Sex</th>
                <th style="padding:7px 8px;text-align:right">Term Fee</th>
                <th style="padding:7px 8px;text-align:right">Total Paid</th>
                <th style="padding:7px 8px;text-align:right">Arrears</th>
                <th style="padding:7px 8px;text-align:right">Term Bal</th>
                <th style="padding:7px 8px;text-align:right">Total Pending</th>
                <th style="padding:7px 8px;text-align:center">Status</th>
                <th style="padding:7px 8px;text-align:left">Parent Contact</th>
              </tr>
            </thead>
            <tbody>
              ${studentRows.length ? studentRows : '<tr><td colspan="11" style="text-align:center;padding:16px;color:#64748b">No enrolled learners in this class.</td></tr>'}
            </tbody>
            <tfoot>
              <tr style="background:#f1f5f9;font-weight:800;border-top:2px solid #cbd5e1">
                <td colspan="4" style="padding:8px 10px;text-align:right">CLASS TOTALS:</td>
                <td style="padding:8px;text-align:right">Γéª${fmt(clsExpected)}</td>
                <td style="padding:8px;text-align:right;color:#059669">Γéª${fmt(clsPaid)}</td>
                <td style="padding:8px;text-align:right;color:#b45309">Γéª${fmt(clsArrears)}</td>
                <td style="padding:8px;text-align:right;color:#dc2626">Γéª${fmt(clsTermBal)}</td>
                <td style="padding:8px;text-align:right;color:#b91c1c;font-size:13px">Γéª${fmt(clsTotalOut)}</td>
                <td colspan="2" style="padding:8px;text-align:center">${clsCleared}/${students.length} Cleared (${rate}%)</td>
              </tr>
            </tfoot>
          </table>

          <div style="display:flex;justify-content:space-between;margin-top:24px;padding-top:12px;font-size:12px;color:#475569">
            <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Class Teacher Signature</div>
            <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Principal / Bursar Signature</div>
            <div style="border-top:1px solid #94a3b8;width:160px;text-align:center;padding-top:4px">Official School Stamp</div>
          </div>
        </div>`;
    });

    if (!classSectionsHtml) {
      return alert("No learner records found for the selected class.");
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Class Records &amp; Fee Sheet - ${className}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI', Arial, sans-serif; background:#f4f7fb; color:#1e293b; }
    .sheet { max-width:1100px; margin:20px auto; background:#fff; padding:28px; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,.08); }
    @media print {
      body { background:#fff; }
      .sheet { margin:0; padding:12px; box-shadow:none; max-width:100%; border-radius:0; }
      .no-print { display:none !important; }
      .class-block { page-break-after:always; }
      .class-block:last-child { page-break-after:auto; }
    }
    th, td { border:1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="sheet">
    <div class="no-print" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;background:#f8fafc;padding:12px 18px;border-radius:8px;border:1px solid #e2e8f0">
      <div style="font-weight:700;font-size:14px;color:#0284c7">
        ≡ƒû¿∩╕Å Ready to Print / Save as PDF ΓÇö ${className}
      </div>
      <button onclick="window.print()" style="background:#0284c7;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:700;cursor:pointer">
        Print Sheet
      </button>
    </div>

    <!-- Main Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #0284c7;padding-bottom:12px;margin-bottom:18px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#0284c7,#0369a1);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px">RV</div>
        <div>
          <h1 style="font-size:22px;font-weight:900;color:#0c4a6e;letter-spacing:-.5px">${school}</h1>
          <div style="font-size:12px;color:#64748b">${motto} &bull; ${addr} &bull; Tel: ${phone}</div>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-size:15px;font-weight:800;color:#0284c7">OFFICIAL CLASS REGISTER &amp; FEE SHEET</div>
        <div style="font-size:12px;color:#64748b">Printed on ${printDate}</div>
      </div>
    </div>

    ${classSectionsHtml}
  </div>
</body>
</html>`;

    printHtmlDocument(html, `Class_Records_${className.replace(/\s+/g, '_')}`);
  }

  // ΓöÇΓöÇ Print Official Cleared Learners List (Exam Eligible) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printClearedStudentsList(classFilter, sectionFilter) {
    classFilter   = classFilter   || document.getElementById('clearance-class-filter')?.value   || document.getElementById('report-class-filter')?.value   || 'All';
    sectionFilter = sectionFilter || document.getElementById('clearance-section-filter')?.value || document.getElementById('report-section-filter')?.value || 'All';

    const config = RichVineDB.getConfig();
    const school = config?.schoolName || 'RICHVINE COLLEGE';
    const motto = config?.motto || 'Excellence and Integrity';
    const addr = config?.address || '';
    const phone = config?.phone || '';
    const term = config?.currentTerm || '1st Term';
    const session = config?.currentSession || '2026/2027';
    const printDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    let students = RichVineDB.getStudents() || [];

    if (sectionFilter && sectionFilter !== 'All') {
      students = students.filter(s => {
        const sec = window.getSectionByClass?.(s.currentClass);
        return s.section === sectionFilter || sec?.id === sectionFilter || sec?.name === sectionFilter;
      });
    }

    if (classFilter && classFilter !== 'All') {
      students = students.filter(s => s.currentClass === classFilter);
    }

    // Filter strictly for 100% cleared learners
    const clearedList = students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id) || { totalOutstanding: 0, totalPaidAll: 0, termFeeExpected: 0 };
      return { student: s, balance: bal };
    }).filter(item => item.balance.totalOutstanding <= 0);

    if (!clearedList.length) {
      return alert("No 100% cleared learners found for the selected criteria.");
    }

    // Sort by class, then name
    clearedList.sort((a, b) => {
      const c = (a.student.currentClass || '').localeCompare(b.student.currentClass || '');
      if (c !== 0) return c;
      return (a.student.lastName || '').localeCompare(b.student.lastName || '');
    });

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalCollectedFromCleared = clearedList.reduce((s, it) => s + (Number(it.balance.totalPaidAll) || 0), 0);

    const rows = clearedList.map((item, idx) => `
      <tr style="${idx % 2 === 1 ? 'background:#f8fafc;' : ''}">
        <td style="text-align:center;color:#64748b;font-weight:600;padding:6px">${idx + 1}</td>
        <td style="font-weight:700;color:#0f172a;padding:6px 8px">${item.student.regNo || 'ΓÇö'}</td>
        <td style="font-weight:600;padding:6px 8px">${item.student.firstName} ${item.student.lastName}</td>
        <td style="padding:6px 8px;color:#0369a1;font-weight:600">${item.student.currentClass}</td>
        <td style="text-align:center;padding:6px">${item.student.gender || 'ΓÇö'}</td>
        <td style="text-align:right;padding:6px 8px">Γéª${fmt(item.balance.termFeeExpected)}</td>
        <td style="text-align:right;color:#059669;font-weight:700;padding:6px 8px">Γéª${fmt(item.balance.totalPaidAll)}</td>
        <td style="text-align:right;color:#059669;font-weight:700;padding:6px 8px">Γéª0.00</td>
        <td style="text-align:center;padding:6px">
          <span style="background:#ecfdf5;color:#047857;border:1px solid #a7f3d0;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700">Γ£ô 100% CLEARED</span>
        </td>
      </tr>
    `).join('');

    const targetLabel = classFilter !== 'All' ? `Class: ${classFilter}` : (sectionFilter !== 'All' ? `Section: ${sectionFilter}` : 'All Classes ΓÇö Full School Roster');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cleared Learners Roster - ${targetLabel}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI', Arial, sans-serif; background:#f4f7fb; color:#1e293b; }
    .sheet { max-width:1050px; margin:20px auto; background:#fff; padding:30px; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,.08); }
    @media print {
      body { background:#fff; }
      .sheet { margin:0; padding:12px; box-shadow:none; max-width:100%; border-radius:0; }
      .no-print { display:none !important; }
    }
    th, td { border:1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="sheet">
    <div class="no-print" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;background:#ecfdf5;padding:12px 18px;border-radius:8px;border:1px solid #a7f3d0">
      <div style="font-weight:700;font-size:14px;color:#047857">
        Γ£ô Official 100% Cleared Learners Master List (${clearedList.length} Cleared)
      </div>
      <button onclick="window.print()" style="background:#059669;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:700;cursor:pointer">
        Print Cleared List
      </button>
    </div>

    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #059669;padding-bottom:12px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#059669,#047857);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px">RV</div>
        <div>
          <h1 style="font-size:22px;font-weight:900;color:#064e3b;letter-spacing:-.5px">${school}</h1>
          <div style="font-size:12px;color:#64748b">${motto} &bull; ${addr} &bull; Tel: ${phone}</div>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-size:14px;font-weight:800;color:#059669">OFFICIAL CLEARED LEARNERS LIST</div>
        <div style="font-size:12px;color:#64748b">Exam Clearance Eligible &bull; ${session} &bull; ${term}</div>
        <div style="font-size:11px;color:#64748b">Printed on ${printDate}</div>
      </div>
    </div>

    <!-- Meta summary cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:16px;font-size:12px">
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:10px 14px;border-radius:8px">
        <div style="color:#166534;font-size:11px;text-transform:uppercase;font-weight:700">Scope Filter</div>
        <div style="font-weight:800;font-size:14px;color:#14532d;margin-top:2px">${targetLabel}</div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:10px 14px;border-radius:8px">
        <div style="color:#166534;font-size:11px;text-transform:uppercase;font-weight:700">Total Cleared Learners</div>
        <div style="font-weight:800;font-size:14px;color:#047857;margin-top:2px">${clearedList.length} Learners (100% Paid)</div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:10px 14px;border-radius:8px">
        <div style="color:#166534;font-size:11px;text-transform:uppercase;font-weight:700">Total Revenue Collected</div>
        <div style="font-weight:800;font-size:14px;color:#047857;margin-top:2px">Γéª${fmt(totalCollectedFromCleared)}</div>
      </div>
    </div>

    <!-- Table -->
    <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:20px">
      <thead>
        <tr style="background:#064e3b;color:#fff">
          <th style="padding:7px 6px;text-align:center;width:30px">#</th>
          <th style="padding:7px 8px;text-align:left">Reg No</th>
          <th style="padding:7px 8px;text-align:left">Learner Name</th>
          <th style="padding:7px 8px;text-align:left">Class</th>
          <th style="padding:7px 6px;text-align:center">Sex</th>
          <th style="padding:7px 8px;text-align:right">Term Fee</th>
          <th style="padding:7px 8px;text-align:right">Total Paid</th>
          <th style="padding:7px 8px;text-align:right">Outstanding</th>
          <th style="padding:7px 8px;text-align:center">Status</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
      <tfoot>
        <tr style="background:#f0fdf4;font-weight:800;border-top:2px solid #86efac">
          <td colspan="6" style="padding:8px 10px;text-align:right">TOTAL REVENUE COLLECTED FROM CLEARED LEARNERS:</td>
          <td style="padding:8px;text-align:right;color:#047857;font-size:13px">Γéª${fmt(totalCollectedFromCleared)}</td>
          <td style="padding:8px;text-align:right;color:#047857">Γéª0.00</td>
          <td style="padding:8px;text-align:center;color:#047857">${clearedList.length} Cleared</td>
        </tr>
      </tfoot>
    </table>

    <div style="display:flex;justify-content:space-between;margin-top:30px;padding-top:14px;font-size:12px;color:#475569">
      <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Bursar / Accounts Officer</div>
      <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Principal / Administrator</div>
      <div style="border-top:1px solid #94a3b8;width:180px;text-align:center;padding-top:4px">Official School Seal &amp; Date</div>
    </div>
  </div>
</body>
</html>`;

    printHtmlDocument(html, `Cleared_Students_List_${classFilter.replace(/\s+/g, '_')}`);
  }

  // ΓöÇΓöÇ Print Official Arrears & Debtors List ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printDebtorsList(classFilter, sectionFilter) {
    classFilter   = classFilter   || document.getElementById('clearance-class-filter')?.value   || document.getElementById('report-class-filter')?.value   || 'All';
    sectionFilter = sectionFilter || document.getElementById('clearance-section-filter')?.value || document.getElementById('report-section-filter')?.value || 'All';

    const config = RichVineDB.getConfig();
    const school = config?.schoolName || 'RICHVINE COLLEGE';
    const motto = config?.motto || 'Excellence and Integrity';
    const addr = config?.address || '';
    const phone = config?.phone || '';
    const term = config?.currentTerm || '1st Term';
    const session = config?.currentSession || '2026/2027';
    const printDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    let students = RichVineDB.getStudents() || [];

    if (sectionFilter && sectionFilter !== 'All') {
      students = students.filter(s => {
        const sec = window.getSectionByClass?.(s.currentClass);
        return s.section === sectionFilter || sec?.id === sectionFilter || sec?.name === sectionFilter;
      });
    }

    if (classFilter && classFilter !== 'All') {
      students = students.filter(s => s.currentClass === classFilter);
    }

    // Filter strictly for learners with outstanding debt
    const debtorsList = students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id) || {
        termFeeExpected: Number(s.termFee || 0),
        termFeePaid: 0,
        termFeeBalance: Number(s.termFee || 0),
        arrearsBalance: Number(s.arrears || 0),
        totalOutstanding: (Number(s.termFee || 0) + Number(s.arrears || 0)),
        totalPaidAll: 0
      };
      return { student: s, balance: bal };
    }).filter(item => item.balance.totalOutstanding > 0);

    if (!debtorsList.length) {
      return alert("Great news! No learners with outstanding arrears found for the selected criteria.");
    }

    // Sort by total outstanding debt descending (highest debtors first)
    debtorsList.sort((a, b) => b.balance.totalOutstanding - a.balance.totalOutstanding);

    const fmt = n => Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalArrearsOwed = debtorsList.reduce((s, it) => s + (Number(it.balance.arrearsBalance) || 0), 0);
    const totalTermBalOwed = debtorsList.reduce((s, it) => s + (Number(it.balance.termFeeBalance) || 0), 0);
    const grandDebtTotal   = debtorsList.reduce((s, it) => s + (Number(it.balance.totalOutstanding) || 0), 0);

    const rows = debtorsList.map((item, idx) => `
      <tr style="${idx % 2 === 1 ? 'background:#fffbfb;' : ''}">
        <td style="text-align:center;color:#64748b;font-weight:600;padding:6px">${idx + 1}</td>
        <td style="font-weight:700;color:#0f172a;padding:6px 8px">${item.student.regNo || 'ΓÇö'}</td>
        <td style="font-weight:700;color:#1e293b;padding:6px 8px">${item.student.firstName} ${item.student.lastName}</td>
        <td style="padding:6px 8px;color:#0369a1;font-weight:600">${item.student.currentClass}</td>
        <td style="text-align:right;padding:6px 8px">Γéª${fmt(item.balance.termFeeExpected)}</td>
        <td style="text-align:right;color:#059669;font-weight:600;padding:6px 8px">Γéª${fmt(item.balance.totalPaidAll)}</td>
        <td style="text-align:right;color:${item.balance.arrearsBalance > 0 ? '#b45309' : '#64748b'};font-weight:${item.balance.arrearsBalance > 0 ? '700' : '400'};padding:6px 8px">
          Γéª${fmt(item.balance.arrearsBalance)}
        </td>
        <td style="text-align:right;color:${item.balance.termFeeBalance > 0 ? '#dc2626' : '#64748b'};font-weight:${item.balance.termFeeBalance > 0 ? '700' : '400'};padding:6px 8px">
          Γéª${fmt(item.balance.termFeeBalance)}
        </td>
        <td style="text-align:right;color:#b91c1c;font-weight:800;font-size:12.5px;padding:6px 8px">
          Γéª${fmt(item.balance.totalOutstanding)}
        </td>
        <td style="padding:6px 8px;font-size:11.5px;color:#334155">${item.student.parentName || 'ΓÇö'}</td>
        <td style="padding:6px 8px;font-weight:700;color:#0f172a;font-size:11.5px">${item.student.parentPhone || 'ΓÇö'}</td>
      </tr>
    `).join('');

    const targetLabel = classFilter !== 'All' ? `Class: ${classFilter}` : (sectionFilter !== 'All' ? `Section: ${sectionFilter}` : 'All Classes ΓÇö Master Debtors Roster');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Debtors &amp; Arrears List - ${targetLabel}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI', Arial, sans-serif; background:#f4f7fb; color:#1e293b; }
    .sheet { max-width:1100px; margin:20px auto; background:#fff; padding:30px; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,.08); }
    @media print {
      body { background:#fff; }
      .sheet { margin:0; padding:12px; box-shadow:none; max-width:100%; border-radius:0; }
      .no-print { display:none !important; }
    }
    th, td { border:1px solid #fed7aa; }
  </style>
</head>
<body>
  <div class="sheet">
    <div class="no-print" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;background:#fff1f2;padding:12px 18px;border-radius:8px;border:1px solid #fecdd3">
      <div style="font-weight:700;font-size:14px;color:#b91c1c">
        ΓÜá∩╕Å Official Debtors &amp; Outstanding Arrears Report (${debtorsList.length} Learners Owing)
      </div>
      <button onclick="window.print()" style="background:#b91c1c;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:700;cursor:pointer">
        Print Debtors List
      </button>
    </div>

    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #b91c1c;padding-bottom:12px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#dc2626,#991b1b);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px">RV</div>
        <div>
          <h1 style="font-size:22px;font-weight:900;color:#7f1d1d;letter-spacing:-.5px">${school}</h1>
          <div style="font-size:12px;color:#64748b">${motto} &bull; ${addr} &bull; Tel: ${phone}</div>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-size:14px;font-weight:800;color:#b91c1c">OFFICIAL SCHOOL FEES DEBTORS LIST</div>
        <div style="font-size:12px;color:#64748b">Outstanding Arrears &bull; ${session} &bull; ${term}</div>
        <div style="font-size:11px;color:#64748b">Printed on ${printDate}</div>
      </div>
    </div>

    <!-- Alert note -->
    <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:4px solid #ea580c;padding:10px 14px;border-radius:6px;margin-bottom:16px;font-size:12px;color:#9a3412">
      <strong>STRICT CONFIDENTIAL DEBT AUDIT:</strong> Settlement of all outstanding school fees is required within 7 days. Learners with unsettled arrears are subject to examination clearance restrictions.
    </div>

    <!-- Meta summary cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:16px;font-size:12px">
      <div style="background:#fff1f2;border:1px solid #fecdd3;padding:10px 14px;border-radius:8px">
        <div style="color:#9f1239;font-size:11px;text-transform:uppercase;font-weight:700">Filter Scope</div>
        <div style="font-weight:800;font-size:14px;color:#881337;margin-top:2px">${targetLabel}</div>
      </div>
      <div style="background:#fff1f2;border:1px solid #fecdd3;padding:10px 14px;border-radius:8px">
        <div style="color:#9f1239;font-size:11px;text-transform:uppercase;font-weight:700">Total Debtors</div>
        <div style="font-weight:800;font-size:14px;color:#b91c1c;margin-top:2px">${debtorsList.length} Learners Owing</div>
      </div>
      <div style="background:#fff1f2;border:1px solid #fecdd3;padding:10px 14px;border-radius:8px">
        <div style="color:#9f1239;font-size:11px;text-transform:uppercase;font-weight:700">Total Arrears Balance</div>
        <div style="font-weight:800;font-size:14px;color:#b45309;margin-top:2px">Γéª${fmt(totalArrearsOwed)}</div>
      </div>
      <div style="background:#fff1f2;border:1px solid #fecdd3;padding:10px 14px;border-radius:8px">
        <div style="color:#9f1239;font-size:11px;text-transform:uppercase;font-weight:700">TOTAL OUTSTANDING DEBT</div>
        <div style="font-weight:800;font-size:14px;color:#991b1b;margin-top:2px">Γéª${fmt(grandDebtTotal)}</div>
      </div>
    </div>

    <!-- Table -->
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;margin-bottom:20px">
      <thead>
        <tr style="background:#7f1d1d;color:#fff">
          <th style="padding:7px 5px;text-align:center;width:28px">#</th>
          <th style="padding:7px 7px;text-align:left">Reg No</th>
          <th style="padding:7px 8px;text-align:left">Learner Name</th>
          <th style="padding:7px 8px;text-align:left">Class</th>
          <th style="padding:7px 7px;text-align:right">Term Fee</th>
          <th style="padding:7px 7px;text-align:right">Paid</th>
          <th style="padding:7px 8px;text-align:right">Arrears</th>
          <th style="padding:7px 8px;text-align:right">Term Bal</th>
          <th style="padding:7px 8px;text-align:right">Total Debt</th>
          <th style="padding:7px 8px;text-align:left">Parent Name</th>
          <th style="padding:7px 8px;text-align:left">Phone</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
      <tfoot>
        <tr style="background:#ffe4e6;font-weight:800;border-top:2px solid #fda4af">
          <td colspan="6" style="padding:8px 10px;text-align:right">GRAND TOTALS OUTSTANDING:</td>
          <td style="padding:8px;text-align:right;color:#b45309">Γéª${fmt(totalArrearsOwed)}</td>
          <td style="padding:8px;text-align:right;color:#dc2626">Γéª${fmt(totalTermBalOwed)}</td>
          <td style="padding:8px;text-align:right;color:#991b1b;font-size:13px">Γéª${fmt(grandDebtTotal)}</td>
          <td colspan="2" style="padding:8px;text-align:center;color:#9f1239">${debtorsList.length} Debtors</td>
        </tr>
      </tfoot>
    </table>

    <div style="display:flex;justify-content:space-between;margin-top:30px;padding-top:14px;font-size:12px;color:#475569">
      <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Bursar / Recovery Officer</div>
      <div style="border-top:1px solid #94a3b8;width:200px;text-align:center;padding-top:4px">Principal / Administrator</div>
      <div style="border-top:1px solid #94a3b8;width:180px;text-align:center;padding-top:4px">Official School Seal &amp; Date</div>
    </div>
  </div>
</body>
</html>`;

    printHtmlDocument(html, `Debtors_List_${classFilter.replace(/\s+/g, '_')}`);
  }

  // ΓöÇΓöÇ CSV Downloads for Cleared and Debtors ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function downloadClearedStudentsCSV(classFilter = 'All', sectionFilter = 'All') {
    classFilter   = classFilter   || document.getElementById('clearance-class-filter')?.value   || document.getElementById('report-class-filter')?.value   || 'All';
    sectionFilter = sectionFilter || document.getElementById('clearance-section-filter')?.value || document.getElementById('report-section-filter')?.value || 'All';

    let students = RichVineDB.getStudents() || [];
    if (sectionFilter && sectionFilter !== 'All') {
      students = students.filter(s => {
        const sec = window.getSectionByClass?.(s.currentClass);
        return s.section === sectionFilter || sec?.id === sectionFilter || sec?.name === sectionFilter;
      });
    }
    if (classFilter && classFilter !== 'All') {
      students = students.filter(s => s.currentClass === classFilter);
    }

    const clearedList = students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id) || { totalOutstanding: 0, totalPaidAll: 0, termFeeExpected: 0 };
      return { student: s, balance: bal };
    }).filter(item => item.balance.totalOutstanding <= 0);

    if (!clearedList.length) return alert("No 100% cleared learners found for the selected criteria.");

    const rows = [["Reg No", "First Name", "Last Name", "Class", "Gender", "Term Fee Expected", "Total Paid", "Outstanding Balance", "Status"]];
    clearedList.forEach(it => {
      rows.push([it.student.regNo || "", it.student.firstName, it.student.lastName, it.student.currentClass, it.student.gender || "", it.balance.termFeeExpected, it.balance.totalPaidAll, 0, "100% Cleared"]);
    });

    const csv = rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    triggerDownload(csv, `RichVine_Cleared_Learners_${classFilter}_${new Date().toISOString().split("T")[0]}.csv`);
  }

  function downloadDebtorsCSV(classFilter = 'All', sectionFilter = 'All') {
    classFilter   = classFilter   || document.getElementById('clearance-class-filter')?.value   || document.getElementById('report-class-filter')?.value   || 'All';
    sectionFilter = sectionFilter || document.getElementById('clearance-section-filter')?.value || document.getElementById('report-section-filter')?.value || 'All';

    let students = RichVineDB.getStudents() || [];
    if (sectionFilter && sectionFilter !== 'All') {
      students = students.filter(s => {
        const sec = window.getSectionByClass?.(s.currentClass);
        return s.section === sectionFilter || sec?.id === sectionFilter || sec?.name === sectionFilter;
      });
    }
    if (classFilter && classFilter !== 'All') {
      students = students.filter(s => s.currentClass === classFilter);
    }

    const debtorsList = students.map(s => {
      const bal = RichVineDB.getStudentBalance(s.id) || {
        termFeeExpected: Number(s.termFee || 0),
        termFeePaid: 0,
        termFeeBalance: Number(s.termFee || 0),
        arrearsBalance: Number(s.arrears || 0),
        totalOutstanding: (Number(s.termFee || 0) + Number(s.arrears || 0)),
        totalPaidAll: 0
      };
      return { student: s, balance: bal };
    }).filter(item => item.balance.totalOutstanding > 0);

    if (!debtorsList.length) return alert("No debtors found for the selected criteria.");

    const rows = [["Reg No", "First Name", "Last Name", "Class", "Term Fee", "Total Paid", "Arrears Balance", "Term Fee Remaining", "Total Outstanding Debt", "Parent Name", "Parent Phone"]];
    debtorsList.forEach(it => {
      rows.push([it.student.regNo || "", it.student.firstName, it.student.lastName, it.student.currentClass, it.balance.termFeeExpected, it.balance.totalPaidAll, it.balance.arrearsBalance, it.balance.termFeeBalance, it.balance.totalOutstanding, it.student.parentName || "", it.student.parentPhone || ""]);
    });

    const csv = rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    triggerDownload(csv, `RichVine_Debtors_List_${classFilter}_${new Date().toISOString().split("T")[0]}.csv`);
  }

  // ΓöÇΓöÇ Salary / Payroll Statement (Excel Landscape Layout) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function printSalaryReport(filter = {}) {
    const db = RichVineDB.get();
    const targetYear = filter.year && filter.year !== "All" ? Number(filter.year) : (new Date().getFullYear());
    const targetSection = filter.section || "All";

    const allStaff = RichVineDB.getStaff(targetSection !== "All" ? { section: targetSection } : {});
    const allSalaries = RichVineDB.getSalaryPayments({ year: targetYear, section: targetSection !== "All" ? targetSection : "All" });

    const SECTION_LABELS = {
      primary: "Primary School (Deducted from Primary Revenue)",
      junior: "Junior College (Deducted from Junior Revenue)",
      senior: "Senior College (Deducted from Senior Revenue)",
      general: "General / Central Admin (Central Overhead)"
    };

    const SECTION_SHORT = {
      primary: "Primary School",
      junior: "Junior College",
      senior: "Senior College",
      general: "General / Admin"
    };

    const SECTION_COLORS = {
      primary: "#dcfce7",
      junior: "#e0f2fe",
      senior: "#f3e8ff",
      general: "#fef3c7"
    };

    const SECTION_TEXT_COLORS = {
      primary: "#14532d",
      junior: "#0c4a6e",
      senior: "#581c87",
      general: "#78350f"
    };

    // Combine staff from DB + any staff found in salary payments
    const staffMap = new Map();
    allStaff.forEach(s => {
      staffMap.set(s.id || s.name, {
        id: s.id,
        name: s.name,
        section: s.section || "general",
        role: s.role || "Staff Member",
        baseSalary: Number(s.baseSalary) || 0,
        bank: s.bank || "",
        accountNo: s.accountNo || "",
        months: Array(13).fill(0) // 1-indexed (1 to 12)
      });
    });

    allSalaries.forEach(p => {
      const key = p.staffId || p.staffName;
      if (!staffMap.has(key)) {
        staffMap.set(key, {
          id: p.staffId || key,
          name: p.staffName,
          section: p.section || "general",
          role: p.role || "Staff Member",
          baseSalary: 0,
          bank: "",
          accountNo: "",
          months: Array(13).fill(0)
        });
      }
      const entry = staffMap.get(key);
      const m = Number(p.month);
      if (m >= 1 && m <= 12) {
        entry.months[m] += Number(p.amount) || 0;
      }
    });

    const staffList = Array.from(staffMap.values());
    const sectionsToRender = targetSection === "All" ? ["primary", "junior", "senior", "general"] : [targetSection];

    // Calculate section totals & grand totals
    const MONTH_NAMES_SHORT = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const grandMonthTotals = Array(13).fill(0);
    let grandAnnualTotal = 0;

    const sectionSummaries = {};
    sectionsToRender.forEach(sec => {
      sectionSummaries[sec] = {
        total: 0,
        monthTotals: Array(13).fill(0),
        count: 0
      };
    });

    // Build Excel Table Rows
    let tableHtml = "";
    let globalIndex = 0;

    sectionsToRender.forEach(secKey => {
      const secStaff = staffList.filter(s => s.section === secKey).sort((a, b) => a.name.localeCompare(b.name));
      const summary = sectionSummaries[secKey];

      // Section Header Row
      tableHtml += `
        <tr class="sec-header">
          <td colspan="16">
            <span style="font-weight:900;letter-spacing:0.8px">&bull; ${SECTION_LABELS[secKey] || secKey.toUpperCase()}</span>
            <span style="font-weight:500;font-size:9px;opacity:0.9;margin-left:12px">(${secStaff.length} staff enrolled)</span>
          </td>
        </tr>
      `;

      if (secStaff.length === 0) {
        tableHtml += `
          <tr>
            <td colspan="16" style="text-align:center;padding:10px;color:#94a3b8;font-style:italic">
              No staff members recorded under ${SECTION_SHORT[secKey] || secKey}.
            </td>
          </tr>
        `;
      } else {
        secStaff.forEach(stf => {
          globalIndex++;
          summary.count++;
          let staffRowTotal = 0;

          let monthCells = "";
          for (let m = 1; m <= 12; m++) {
            const amt = stf.months[m];
            staffRowTotal += amt;
            summary.monthTotals[m] += amt;
            grandMonthTotals[m] += amt;

            if (amt > 0) {
              monthCells += `<td class="col-num paid-cell">&#8358;${amt.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</td>`;
            } else {
              monthCells += `<td class="col-num empty-month">&mdash;</td>`;
            }
          }

          summary.total += staffRowTotal;
          grandAnnualTotal += staffRowTotal;

          tableHtml += `
            <tr>
              <td class="col-sn">${globalIndex}</td>
              <td class="col-name" title="${stf.name}">${stf.name}</td>
              <td class="col-role" title="${stf.role}">${stf.role || "&mdash;"}</td>
              ${monthCells}
              <td class="col-num col-total">&#8358;${staffRowTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</td>
            </tr>
          `;
        });
      }

      // Section Subtotal Row
      let subtotalCells = "";
      for (let m = 1; m <= 12; m++) {
        const sAmt = summary.monthTotals[m];
        subtotalCells += `<td class="col-num" style="font-weight:800">${sAmt > 0 ? '&#8358;' + sAmt.toLocaleString("en-NG", { maximumFractionDigits: 0 }) : '&mdash;'}</td>`;
      }

      tableHtml += `
        <tr class="sec-subtotal subtotal-${secKey}">
          <td colspan="3" style="text-align:right;padding-right:10px;text-transform:uppercase;letter-spacing:0.5px">
            ${SECTION_SHORT[secKey] || secKey} Subtotal (Deducted):
          </td>
          ${subtotalCells}
          <td class="col-num" style="font-weight:900;font-size:10px;text-decoration:underline">
            &#8358;${summary.total.toLocaleString("en-NG", { maximumFractionDigits: 0 })}
          </td>
        </tr>
      `;
    });

    // Grand Total Row (across all sections)
    let grandCells = "";
    for (let m = 1; m <= 12; m++) {
      const gAmt = grandMonthTotals[m];
      grandCells += `<td class="col-num amount-cell" style="font-weight:900">${gAmt > 0 ? '&#8358;' + gAmt.toLocaleString("en-NG", { maximumFractionDigits: 0 }) : '&mdash;'}</td>`;
    }

    tableHtml += `
      <tr class="grand-total">
        <td colspan="3" style="text-align:right;padding-right:12px;font-weight:900;letter-spacing:0.8px;font-size:10.5px">
          GRAND TOTAL PAYROLL (ALL SECTIONS):
        </td>
        ${grandCells}
        <td class="col-num amount-cell" style="font-size:11.5px;font-weight:900;text-decoration:underline double">
          &#8358;${grandAnnualTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}
        </td>
      </tr>
    `;

    // High-level KPI Card calculations
    const primaryTotal = (sectionSummaries.primary?.total) || 0;
    const juniorTotal  = (sectionSummaries.junior?.total) || 0;
    const seniorTotal  = (sectionSummaries.senior?.total) || 0;
    const generalTotal = (sectionSummaries.general?.total) || 0;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RichVine College - Annual Staff Salary &amp; Payroll Schedule (${targetYear})</title>
  <style>
    @page {
      size: A4 landscape;
      margin: 8mm 7mm 8mm 7mm;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      font-size: 9.5px;
      color: #0f172a;
      background: #ffffff;
      padding: 0;
      line-height: 1.25;
    }
    .excel-container {
      width: 100%;
      margin: 0 auto;
    }
    /* Ribbon Banner */
    .excel-ribbon {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2.5px solid #107c41;
      padding-bottom: 8px;
      margin-bottom: 8px;
    }
    .excel-title h1 {
      font-size: 17px;
      font-weight: 900;
      color: #107c41;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .excel-title p {
      font-size: 11px;
      color: #1e293b;
      font-weight: 700;
      margin-top: 2px;
    }
    .excel-title .sub-note {
      font-size: 9.5px;
      color: #0369a1;
      font-weight: 600;
      margin-top: 2px;
    }
    .excel-meta {
      text-align: right;
      font-size: 9px;
      color: #475569;
      line-height: 1.35;
    }
    /* KPI Ribbon */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-bottom: 10px;
    }
    .kpi-card {
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding: 5px 8px;
      background: #f8fafc;
    }
    .kpi-card.kpi-highlight {
      background: #ecfdf5;
      border-color: #107c41;
      border-width: 1.5px;
    }
    .kpi-label {
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      color: #64748b;
    }
    .kpi-value {
      font-size: 12.5px;
      font-weight: 900;
      color: #0f172a;
      margin-top: 1px;
    }
    .kpi-sub {
      font-size: 8px;
      color: #059669;
      margin-top: 1px;
      font-weight: 600;
    }
    /* Spreadsheet Grid */
    table.excel-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      font-size: 9px;
    }
    table.excel-table th, table.excel-table td {
      border: 1px solid #94a3b8;
      padding: 3.5px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    table.excel-table th {
      background: #107c41;
      color: #ffffff;
      font-weight: 800;
      text-align: center;
      font-size: 8.5px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    table.excel-table th.col-left { text-align: left; }
    table.excel-table th.col-num { text-align: right; }

    /* Section Header Rows */
    tr.sec-header td {
      background: #1e293b;
      color: #f8fafc;
      font-weight: 800;
      font-size: 9.5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4.5px 6px;
    }
    /* Subtotal Rows */
    tr.sec-subtotal td {
      font-weight: 800;
      font-size: 9px;
      border-top: 1.5px solid #475569;
      border-bottom: 1.5px solid #475569;
    }
    tr.subtotal-primary td { background: #dcfce7; color: #14532d; }
    tr.subtotal-junior td  { background: #e0f2fe; color: #0c4a6e; }
    tr.subtotal-senior td  { background: #f3e8ff; color: #581c87; }
    tr.subtotal-general td { background: #fef3c7; color: #78350f; }

    /* Grand Total */
    tr.grand-total td {
      background: #0f172a;
      color: #f8fafc;
      font-weight: 900;
      font-size: 10px;
      border-top: 2px solid #000000;
      border-bottom: 3px double #000000;
      padding: 5px 4px;
    }
    tr.grand-total td.amount-cell {
      color: #86efac;
      text-align: right;
    }

    /* Column Widths & Alignments */
    td.col-sn { text-align: center; width: 26px; }
    td.col-name { font-weight: 600; width: 135px; }
    td.col-role { color: #475569; width: 105px; font-size: 8.5px; }
    td.col-num { text-align: right; font-variant-numeric: tabular-nums; }
    td.col-total { text-align: right; font-weight: 800; width: 70px; background-color: #f0fdf4; font-variant-numeric: tabular-nums; }
    
    tr:nth-child(even) td.col-num, 
    tr:nth-child(even) td.col-name, 
    tr:nth-child(even) td.col-role, 
    tr:nth-child(even) td.col-sn {
      background-color: #f8fafc;
    }
    td.paid-cell {
      font-weight: 600;
      color: #0f172a;
    }
    td.empty-month {
      color: #cbd5e1;
      text-align: center;
    }

    /* Footer & Print Controls */
    .excel-footer {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 8.5px;
      color: #64748b;
      border-top: 1px solid #cbd5e1;
      padding-top: 5px;
    }
    .print-controls {
      position: fixed;
      top: 12px;
      right: 12px;
      z-index: 9999;
      display: flex;
      gap: 8px;
    }
    .print-btn {
      background: #107c41;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 12px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .print-btn:hover {
      background: #0d6535;
    }
    @media print {
      .no-print { display: none !important; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div class="print-controls no-print">
    <button class="print-btn" onclick="window.print()">
      ≡ƒû¿ Print / Save as PDF (Landscape)
    </button>
  </div>

  <div class="excel-container">
    <!-- Ribbon Header -->
    <div class="excel-ribbon">
      <div class="excel-title">
        <h1>RICHVINE COLLEGE &mdash; BURSARY DEPARTMENT</h1>
        <p>STAFF SALARY &amp; PAYROLL SCHEDULE &mdash; ANNUAL DISBURSEMENT LEDGER (${targetYear})</p>
        <div class="sub-note">
          &bull; Accounting Rule: Section staff salaries are directly deducted from section revenue (Primary, Junior, Senior, General)
        </div>
      </div>
      <div class="excel-meta">
        <b>Academic Year:</b> ${targetYear}<br>
        <b>Section Scope:</b> ${targetSection === "All" ? "All School Sections" : (SECTION_SHORT[targetSection] || targetSection)}<br>
        <b>Generated:</b> ${new Date().toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })}<br>
        <b>Prepared by:</b> ${sessionStorage.getItem("richvine_admin_username") || "Super Admin"} (Bursar)
      </div>
    </div>

    <!-- KPI Summary Row -->
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-label">Primary School Payroll</div>
        <div class="kpi-value">&#8358;${primaryTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</div>
        <div class="kpi-sub">&darr; Deducted from Primary</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Junior College Payroll</div>
        <div class="kpi-value">&#8358;${juniorTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</div>
        <div class="kpi-sub">&darr; Deducted from Junior</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Senior College Payroll</div>
        <div class="kpi-value">&#8358;${seniorTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</div>
        <div class="kpi-sub">&darr; Deducted from Senior</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">General &amp; Admin Payroll</div>
        <div class="kpi-value">&#8358;${generalTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</div>
        <div class="kpi-sub">&darr; Central Operations</div>
      </div>
      <div class="kpi-card kpi-highlight">
        <div class="kpi-label" style="color:#065f46">OVERALL TOTAL PAYROLL</div>
        <div class="kpi-value" style="color:#107c41">&#8358;${grandAnnualTotal.toLocaleString("en-NG", { maximumFractionDigits: 0 })}</div>
        <div class="kpi-sub" style="color:#047857">&check; Reconciled Net Total</div>
      </div>
    </div>

    <!-- Excel Spreadsheet Matrix -->
    <table class="excel-table">
      <thead>
        <tr>
          <th style="width:26px">S/N</th>
          <th class="col-left" style="width:135px">Staff Member Name</th>
          <th class="col-left" style="width:105px">Role / Designation</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th class="col-num" style="width:70px">Total Paid</th>
        </tr>
      </thead>
      <tbody>
        ${tableHtml}
      </tbody>
    </table>

    <!-- Footer Certification -->
    <div class="excel-footer">
      <div>
        <b>Auditing &amp; Compliance:</b> All salary expenditures verified against bank transaction logs &amp; cash disbursement vouchers.<br>
        RichVine College &bull; 5-7 Olukayode Street, Imoro, Ogijo, Ogun State &bull; Contact: 09053126809
      </div>
      <div style="text-align:right">
        <b>Bursar Signature:</b> _________________________ &nbsp;&nbsp;&nbsp;
        <b>Director Signature:</b> _________________________
      </div>
    </div>
  </div>
</body>
</html>`;

    printHtmlDocument(html, `RichVine_College_Salary_Report_${targetYear}`);
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
    printFeeReminders,
    printLedgerStatement,
    printOverviewStatement,
    printStudentStatement,
    printSalaryReport,
    printClassRecords,
    printClearedStudentsList,
    printDebtorsList,
    downloadClearedStudentsCSV,
    downloadDebtorsCSV,
    getDateRange
  };
})();
