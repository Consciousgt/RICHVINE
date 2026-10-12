# 🏛️ RICHVINE COLLEGE — Automated Administrative Records & Bursary Ecosystem

A modern, responsive, automated record-keeping and bursary management web platform built specifically for the administrative operations of **RICHVINE COLLEGE**, Lekki, Lagos State, Nigeria.

---

## 🎨 Official Brand Identity
- **Primary Color:** Sky Blue (`#0284C7`, `#0EA5E9`, `#38BDF8`, `#E0F2FE`)
- **Secondary Tone:** Pure White (`#FFFFFF`)
- **Neutral Accent:** Modern Slate Gray (`#F8FAFC`, `#E2E8F0`, `#64748B`, `#1E293B`)
- **Current Academic Session:** **2026/2027**
- **Motto:** *"Excellence, Character & Wisdom"*

---

## 🚀 Key Modules & Capabilities

### 1. 🔥 Firebase Cloud Backend Integration
Integrated Google Firebase SDK v13 with Firestore & Analytics:
- **Project ID:** `richvine-4696c`
- **Real-Time Synchronization:** Whenever an administrator adds a learner, logs an expense, or records a payment, the data is saved locally and instantly persisted to Firebase Firestore collections (`students`, `payments`, `expenses`, `auditLogs`).
- **Offline / Cross-Platform Fallback:** Automatically caches and synchronizes to ensure continuous functionality across all mobile devices, laptops, tablets, and desktop browsers.

### 2. 🔐 Discrete Administrative Access Route (`/admin`)
- Per administrative security standards, the public landing page (`index.html`) is **exclusively a public school showcase** with zero administrator buttons or login links.
- The administrative portal is accessed securely via **`/admin`** (or `admin/index.html`).

### 3. 🏫 3-Section School Structure & Automated Class Records
Classes are organized into **3 distinct sections**:
1. **Primary School:** Day Care, Creche, Kindergarten, Nursery 1, Nursery 2, Primary 1, Primary 2, Primary 3, Primary 4, Primary 5, Primary 6
2. **Junior College:** JSS 1A, JSS 1B, JSS 2A, JSS 2B, JSS 3A, JSS 3B
3. **Senior College:** SSS 1 Science/Art/Commercial, SSS 2 Science/Art/Commercial, SSS 3 Science/Art/Commercial

### 4. ⚖️ Learner Term School Fee & Arrears Priority Deduction
- **Enrollment Input:** Admin enters the learner's **Term School Fee** and any **Opening Arrears**.
- **Automatic Priority Clearance:** When school fees are logged, **arrears are paid first before term tuition**.
- **Complete Visibility:** Real-time visibility into **Arrears Balance**, **Term Fee Remaining**, and **Total Outstanding Amount**.

### 5. 💰 Flexible Currency & Kobo Precision
- Accepts amounts with comma separation (e.g. `150,000` or `2,500,000`).
- Supports exact decimal kobo precision (e.g. `₦150,000.50`).
- No restriction on digits or increments.

### 6. 📉 School Expenses Ledger & P&L Overview
- Dedicated **Expenses Ledger** allowing free logging of school expenses across periods: **Daily, Weekly, Monthly, Termly, or Per Session**.
- **P&L Financial Overview** detailing:
  - **Total Revenue**
  - **Total Expenses**
  - **Net Profit / Loss**
  - Section-by-section breakdown (Primary vs Junior College vs Senior College).

### 7. 📊 Multi-Period Audit Reports & Official Receipts
- **Periods:** Daily, Weekly, Monthly, Termly, Session (2026/2027), and All-Time.
- **Export Formats:** One-click CSV spreadsheets & formal printable bursary receipts with stamp and balance breakdown.

---

## 🔐 Administrative Login Credentials

To log into the administration portal, navigate to `/admin` (or `admin/index.html`):

| Role | Username | Password |
|---|---|---|
| **Principal Administrator** | `admin` | `richvine2025` |
| **Bursary Officer** | `bursar` | `bursar123` |
| **Academic Records Officer** | `records` | `recordpass` |

*(Quick-login buttons are also available on the login screen for 1-click administrative testing)*

---

## 📂 Project Structure

```
RichVine/
├── index.html            # Public College Gateway (Admissions, Campus Showcase — NO Admin links)
├── dashboard.html        # Administrative Operations Hub (Synced with Firebase)
├── firestore.rules       # Complete Cloud Firestore Security Rules (v3)
├── firebase.json         # Firebase project configuration
├── README.md             # Complete documentation & usage manual
├── admin/
│   └── index.html        # Administrative Login Gateway (/admin)
├── css/
│   └── custom.css        # RichVine design system (White, Sky Blue, Gray palette)
├── js/
│   ├── firebase-config.js# Firebase SDK v13 configuration & Firestore engine
│   ├── data.js           # 2026/2027 clean schema, arithmetic, LocalStorage & Firestore sync
│   ├── auth.js           # Role session manager & /admin route protection
│   ├── app.js            # App controller, comma/kobo currency formatters, modal handlers
│   └── reports.js        # CSV exporter, receipt generator & statement printer
└── assets/
    └── images/           # Campus media assets
```

---

## 🌐 GitHub Pages Deployment Guide

1. Open PowerShell or Terminal in `C:\Users\USER\Desktop\RichVine`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: RichVine College 2026/2027 Automated Bursary System"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, set source to **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
3. **Live URLs:**
   - **Public Website:** `https://<your-username>.github.io/<repo-name>/`
   - **Administrative Portal:** `https://<your-username>.github.io/<repo-name>/admin/`
