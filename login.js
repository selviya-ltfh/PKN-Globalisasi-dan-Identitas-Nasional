// login.js

// Mengambil elemen-elemen dari form
const loginForm = document.getElementById("login-form");
const nimInput = document.getElementById("nim");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Menangani pengiriman form login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Mendapatkan nilai NIM dan password dari input
  const nim = nimInput.value;
  const password = passwordInput.value;

  // Menyimpan NIM dan password di localStorage
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userNIM", nim); // Menyimpan NIM yang dimasukkan

  // Jika valid, lanjutkan ke halaman utama (materi dan kuis)
  window.location.href = "index.html"; // Arahkan ke halaman utama (index.html)
});

