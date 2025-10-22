
// === TO-DO FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-task");
  const list = document.getElementById("todo-list");

  // Load saved tasks
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => renderTask(task.text, task.completed));

  // Add task
  addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text !== "") {
      renderTask(text);
      saveTask(text);
      input.value = "";
    }
  });

  // Add task on Enter
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") addBtn.click();
  });

  function renderTask(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;
    if (completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      updateTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.color = "red";
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", () => {
      li.remove();
      updateTasks();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }

  function saveTask(text) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTasks() {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
      const text = li.firstChild.textContent;
      const completed = li.classList.contains("completed");
      tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

// === QUIZ FUNCTIONALITY ===
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Management Language", "HighText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "React", "Django", "Flask"],
    answer: "React"
  },
  {
    question: "What is CSS used for?",
    options: ["Adding interactivity", "Structuring content", "Styling web pages", "Storing data"],
    answer: "Styling web pages"
  }
];

let currentQuestion = 0;
let score = 0;
let quizTimer;
let timeLeft = 10;

const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizTimerDisplay = document.getElementById("quiz-timer");
const quizFeedback = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("next-question");

function loadQuestion() {
  clearInterval(quizTimer);
  timeLeft = 10;

  const q = quizData[currentQuestion];
  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.style.cursor = "pointer";
    li.style.padding = "0.5rem";
    li.style.border = "1px solid #ccc";
    li.style.marginBottom = "8px";
    li.style.borderRadius = "4px";
    li.addEventListener("click", () => selectAnswer(li, option));
    quizOptions.appendChild(li);
  });

  quizTimerDisplay.textContent = timeLeft;
  quizTimer = setInterval(() => {
    timeLeft--;
    quizTimerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
      quizFeedback.textContent = "⏰ Time's up!";
      nextBtn.disabled = false;
    }
  }, 1000);
}

function selectAnswer(li, selected) {
  const correct = quizData[currentQuestion].answer;
  clearInterval(quizTimer);

  if (selected === correct) {
    li.style.backgroundColor = "#d4edda";
    quizFeedback.textContent = "✅ Correct!";
    score++;
  } else {
    li.style.backgroundColor = "#f8d7da";
    quizFeedback.textContent = `❌ Wrong! Correct: ${correct}`;
  }

  Array.from(quizOptions.children).forEach(opt => opt.style.pointerEvents = "none");
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizQuestion.textContent = `🎉 Quiz complete! Your score: ${score}/${quizData.length}`;
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "";
    nextBtn.style.display = "none";

    // Save high score
    const prevHigh = localStorage.getItem("highScore") || 0;
    if (score > prevHigh) {
      localStorage.setItem("highScore", score);
      quizFeedback.textContent = "🏆 New High Score!";
    } else {
      quizFeedback.textContent += ` | High Score: ${prevHigh}`;
    }
  }
});

document.addEventListener("DOMContentLoaded", loadQuestion);
// === CLOCK & COUNTDOWN TIMER ===
document.addEventListener("DOMContentLoaded", function () {
  // Live Clock
  const timeEl = document.getElementById("current-time");
  function updateClock() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Countdown Timer
  const countdownInput = document.getElementById("countdown-input");
  const countdownDisplay = document.getElementById("countdown-display");
  const countdownBtn = document.getElementById("start-countdown");
  let countdownInterval;

  countdownBtn.addEventListener("click", function () {
    let timeLeft = parseInt(countdownInput.value);
    if (isNaN(timeLeft) || timeLeft <= 0) {
      countdownDisplay.textContent = "Invalid input!";
      return;
    }

    countdownDisplay.textContent = timeLeft + "s";
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
      timeLeft--;
      countdownDisplay.textContent = timeLeft + "s";

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = "⏰ Time's up!";
        alert("⏰ Countdown complete!");
      }
    }, 1000);
  });
});

// === Back to Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
