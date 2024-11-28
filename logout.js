// script.js

// Fungsi logout
function logout() {
  // Hapus status login dari localStorage
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userNIM"); // Hapus NIM yang disimpan

  // Arahkan ke halaman login setelah logout
  window.location.href = "login.html";
}
