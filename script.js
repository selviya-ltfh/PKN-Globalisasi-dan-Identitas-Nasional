// script.js
const quizQuestions = {
    easy: [
      {
        question: "Apa yang dimaksud dengan globalisasi?",
        options: [
          "Proses mendunia yang melibatkan interaksi antarnegara",
          "Isolasi budaya antarnegara",
          "Penurunan teknologi dalam skala global",
        ],
        correct: 0,
      },
      {
        question: "Apa dasar negara Indonesia?",
        options: ["Pancasila", "UUD 1945", "Bhinneka Tunggal Ika"],
        correct: 0,
      },
    ],
    medium: [
      {
        question: "Apa yang menjadi tantangan utama globalisasi?",
        options: [
          "Menurunkan budaya lokal",
          "Mempertahankan identitas nasional",
          "Meningkatkan ekonomi internasional",
        ],
        correct: 1,
      },
      {
        question: "Apa strategi utama menghadapi globalisasi?",
        options: [
          "Menghapuskan budaya tradisional",
          "Memperkuat pendidikan karakter",
          "Mengadopsi semua budaya asing",
        ],
        correct: 1,
      },
    ],
    hard: [
      {
        question: "Apa peran Pancasila dalam menghadapi globalisasi?",
        options: [
          "Sebagai dasar negara yang memberikan pedoman moral",
          "Sebagai alat untuk mengisolasi diri dari dunia",
          "Sebagai sumber budaya asing",
        ],
        correct: 0,
      },
      {
        question: "Apa arti penting pendidikan karakter?",
        options: [
          "Meningkatkan kemampuan akademis",
          "Memperkuat jati diri bangsa",
          "Menghapus pengaruh budaya lokal",
        ],
        correct: 1,
      },
    ],
  };
  
  let currentScore = 0;
  let currentQuestionIndex = 0;
  let totalQuestions = 0;
  let currentDifficulty = "";
  
  function startQuiz(difficulty) {
    // Reset skor dan indeks pertanyaan
    currentScore = 0;
    currentQuestionIndex = 0;
    currentDifficulty = difficulty;
    totalQuestions = quizQuestions[difficulty].length;
  
    // Sembunyikan pilihan tingkat kesulitan
    document.getElementById("quiz-options").style.display = "none";
  
    // Muat pertanyaan pertama
    loadQuestion();
  }
  
  function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const questions = quizQuestions[currentDifficulty];
  
    // Jika masih ada pertanyaan yang tersisa
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
  
      quizContainer.innerHTML = `
        <div class="question">
          <p><strong>Pertanyaan ${currentQuestionIndex + 1}:</strong> ${
        question.question
      }</p>
          ${question.options
            .map(
              (option, index) =>
                `<button onclick="checkAnswer(${index})">${option}</button>`
            )
            .join("")}
        </div>
      `;
    } else {
      // Jika semua pertanyaan selesai, tampilkan skor akhir
      showFinalScore();
    }
  }
  
  function checkAnswer(selectedOption) {
    const question = quizQuestions[currentDifficulty][currentQuestionIndex];
    const result = document.getElementById("result");
  
    // Periksa jawaban
    if (selectedOption === question.correct) {
      currentScore++;
      result.textContent = "Jawaban benar!";
      result.style.color = "green";
    } else {
      result.textContent = `Jawaban salah! Jawaban yang benar adalah: "${
        question.options[question.correct]
      }".`;
      result.style.color = "red";
    }
  
    // Lanjutkan ke pertanyaan berikutnya
    currentQuestionIndex++;
    setTimeout(() => {
      result.textContent = "";
      loadQuestion();
    }, 1500);
  }
  
  function showFinalScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h3>Hasil Kuis</h3>
      <p>Skor akhir Anda: ${currentScore} dari ${totalQuestions}</p>
      <button onclick="restartQuiz()">Ulangi Kuis</button>
      <button onclick="backToMenu()">Kembali ke Menu</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    loadQuestion();
  }
  
  function backToMenu() {
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("result").textContent = "";
    document.getElementById("quiz-options").style.display = "block";
  }
  
  // Fungsi logout
function logout() {
    // Hapus status login dari localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userNIM"); // Hapus NIM yang disimpan
  
    // Arahkan ke halaman login setelah logout
    window.location.href = "login.html";
  }

  // script.js

// Fungsi logout
function logout() {
    // Hapus status login dari localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userNIM"); // Hapus NIM yang disimpan
  
    // Arahkan ke halaman login setelah logout
    window.location.href = "login.html";
  }