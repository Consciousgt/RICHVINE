/**
 * RichVine College - Authentication & Security Handler
 */

const AUTH_KEY = "richvine_admin_session";
const ADMIN_CREDENTIALS = [
  { username: "admin", password: "richvine2025", role: "Super Administrator", name: "Principal Administrator" },
  { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. O. Adeleke (Bursar)" },
  { username: "records", password: "recordpass", role: "Records Officer", name: "Mr. T. Okon (Academic Secretary)" }
];

class RichVineAuth {
  static checkAuth() {
    const session = sessionStorage.getItem(AUTH_KEY);
    if (!session) {
      const path = window.location.pathname;
      // If we are already on an admin login route, do not loop
      if (path.includes("admin") || path.endsWith("login.html") || path.endsWith("index.html") || path.endsWith("/") || path.endsWith("RichVine/")) {
        // do not bounce if on public or login
        if (path.endsWith("dashboard.html")) {
          window.location.href = "admin/index.html";
        }
      }
      return null;
    }
    try {
      return JSON.parse(session);
    } catch (e) {
      this.logout();
      return null;
    }
  }

  static login(username, password) {
    const user = ADMIN_CREDENTIALS.find(u => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password);
    if (user) {
      const sessionData = {
        username: user.username,
        role: user.role,
        name: user.name,
        loginTime: new Date().toISOString()
      };
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(sessionData));
      sessionStorage.setItem("richvine_admin_username", user.name);
      return { success: true, user: sessionData };
    }
    return { success: false, message: "Invalid administrator credentials. Please check your username and passcode." };
  }

  static logout() {
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem("richvine_admin_username");
    window.location.href = "admin/index.html";
  }

  static getCurrentUser() {
    const session = sessionStorage.getItem(AUTH_KEY);
    if (session) {
      try {
        return JSON.parse(session);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}
