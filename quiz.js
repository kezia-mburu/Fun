// === Audio ===
const beep = new Audio("https://www.soundjay.com/button/beep-07.mp3");
const correctSound = new Audio("https://www.soundjay.com/button/button-4.mp3");
const wrongSound = new Audio("https://www.soundjay.com/button/button-10.mp3");

// === Quiz Data (embedded) ===
const quizData = {
  tech: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
    { question: "What language is used for styling web pages?", options: ["HTML", "CSS", "Python"], answer: "CSS" },
    { question: "Which is a JavaScript framework?", options: ["Django", "Laravel", "React"], answer: "React" },
    { question: "What does API stand for?", options: ["App Programming Interface", "Application Programming Interface"], answer: "Application Programming Interface" },
    { question: "Which one is NOT a programming language?", options: ["HTML", "Python", "Java"], answer: "HTML" },
    { question: "Which company developed the Chrome browser?", options: ["Google", "Microsoft", "Apple"], answer: "Google" },
    { question: "Which language is used for backend?", options: ["JavaScript", "PHP", "Both"], answer: "Both" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language"], answer: "Structured Query Language" },
    { question: "What is Git used for?", options: ["Version control", "Designing", "Email"], answer: "Version control" },
    { question: "Which is a database?", options: ["MongoDB", "Excel", "Python"], answer: "MongoDB" }
  ],
  science: [
    { question: "What planet is known as the Red Planet?", options: ["Mars", "Venus"], answer: "Mars" },
    { question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide"], answer: "Carbon Dioxide" },
    { question: "What’s the chemical symbol for water?", options: ["H2O", "CO2"], answer: "H2O" },
    { question: "Which organ pumps blood?", options: ["Lungs", "Heart"], answer: "Heart" },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic acid", "Dynamic Nerve Access"], answer: "Deoxyribonucleic acid" },
    { question: "What’s the powerhouse of the cell?", options: ["Mitochondria", "Nucleus"], answer: "Mitochondria" },
    { question: "What gas do humans breathe in?", options: ["Oxygen", "Hydrogen"], answer: "Oxygen" },
    { question: "Which is NOT a state of matter?", options: ["Solid", "Gas", "Cold"], answer: "Cold" },
    { question: "Which planet has rings?", options: ["Saturn", "Earth"], answer: "Saturn" },
    { question: "What is the boiling point of water?", options: ["100°C", "50°C"], answer: "100°C" }
  ],
  math: [
    { question: "What is 7 x 8?", options: ["56", "64"], answer: "56" },
    { question: "Square root of 81?", options: ["9", "8"], answer: "9" },
    { question: "10 + 15 =", options: ["25", "30"], answer: "25" },
    { question: "100 ÷ 4 =", options: ["25", "20"], answer: "25" },
    { question: "What is 12% of 100?", options: ["12", "120"], answer: "12" },
    { question: "9 + 10 =", options: ["19", "21"], answer: "19" },
    { question: "What is 3 squared?", options: ["9", "6"], answer: "9" },
    { question: "What comes after 999?", options: ["1000", "9999"], answer: "1000" },
    { question: "What’s ½ + ½?", options: ["1", "2"], answer: "1" },
    { question: "Which is larger: 0.5 or ¼?", options: ["0.5", "¼"], answer: "0.5" }
  ],
  education: [
    { question: "Which is a school subject?", options: ["Biology", "Blogging"], answer: "Biology" },
    { question: "What tool is used to measure angles?", options: ["Protractor", "Ruler"], answer: "Protractor" },
    { question: "What degree comes after undergraduate?", options: ["Masters", "Diploma"], answer: "Masters" },
    { question: "Which is a learning style?", options: ["Visual", "Digital"], answer: "Visual" },
    { question: "What does GPA stand for?", options: ["Grade Point Average", "Global Performance App"], answer: "Grade Point Average" },
    { question: "Which is a Kenyan university?", options: ["Meru University", "Harvard"], answer: "Meru University" },
    { question: "Which is NOT a learning platform?", options: ["YouTube", "Facebook"], answer: "Facebook" },
    { question: "What is a synonym for 'Education'?", options: ["Learning", "Traveling"], answer: "Learning" },
    { question: "What does ICT stand for?", options: ["Information & Communication Technology", "Internet Communication Training"], answer: "Information & Communication Technology" },
    { question: "What is taught in CRE?", options: ["Christian Religious Education", "Computer Resource Education"], answer: "Christian Religious Education" }
  ],
  business: [
    { question: "What does CEO mean?", options: ["Chief Executive Officer", "Corporate Expert Organizer"], answer: "Chief Executive Officer" },
    { question: "What is a budget?", options: ["Spending plan", "Shopping list"], answer: "Spending plan" },
    { question: "Which is a business model?", options: ["B2B", "CPU"], answer: "B2B" },
    { question: "Where do you keep business money?", options: ["Bank", "Backpack"], answer: "Bank" },
    { question: "What is marketing?", options: ["Promoting products", "Making movies"], answer: "Promoting products" },
    { question: "What is profit?", options: ["Income - expenses", "Only revenue"], answer: "Income - expenses" },
    { question: "What’s the opposite of profit?", options: ["Loss", "Growth"], answer: "Loss" },
    { question: "Who is a supplier?", options: ["Gives goods", "Buys goods"], answer: "Gives goods" },
    { question: "Which is NOT a business?", options: ["Barber shop", "Library"], answer: "Library" },
    { question: "Which is a common Kenyan biz?", options: ["M-Pesa", "Microsoft"], answer: "M-Pesa" }
  ],
  psychology: [
    { question: "What does IQ stand for?", options: ["Intelligence Quotient", "Intellectual Queue"], answer: "Intelligence Quotient" },
    { question: "Which emotion is positive?", options: ["Joy", "Fear"], answer: "Joy" },
    { question: "Who studies behavior?", options: ["Psychologist", "Technician"], answer: "Psychologist" },
    { question: "What’s anxiety?", options: ["Worry/fear", "Happiness"], answer: "Worry/fear" },
    { question: "What is self-esteem?", options: ["Self-worth", "Self-hate"], answer: "Self-worth" },
    { question: "What is therapy?", options: ["Talking cure", "Music performance"], answer: "Talking cure" },
    { question: "What is motivation?", options: ["Reason to act", "Reason to sleep"], answer: "Reason to act" },
    { question: "What does stress affect?", options: ["Mind & body", "Clothes"], answer: "Mind & body" },
    { question: "Who created hierarchy of needs?", options: ["Maslow", "Einstein"], answer: "Maslow" },
    { question: "What’s a phobia?", options: ["Extreme fear", "Excitement"], answer: "Extreme fear" }
  ],
  life: [
    { question: "What should you do every day?", options: ["Eat, sleep, think", "Fly"], answer: "Eat, sleep, think" },
    { question: "Who are siblings?", options: ["Brothers/Sisters", "Cousins"], answer: "Brothers/Sisters" },
    { question: "Why drink water?", options: ["Stay hydrated", "Gain weight"], answer: "Stay hydrated" },
    { question: "What is friendship?", options: ["A bond", "A war"], answer: "A bond" },
    { question: "What is a goal?", options: ["Something to achieve", "TV show"], answer: "Something to achieve" },
    { question: "What is honesty?", options: ["Telling truth", "Telling lies"], answer: "Telling truth" },
    { question: "What is responsibility?", options: ["Being accountable", "Being lazy"], answer: "Being accountable" },
    { question: "How do you show kindness?", options: ["Helping others", "Being rude"], answer: "Helping others" },
    { question: "Why rest is important?", options: ["To recharge", "To delay work"], answer: "To recharge" },
    { question: "What is patience?", options: ["Waiting calmly", "Complaining"], answer: "Waiting calmly" }
  ]
};



// === Variables ===
let currentCategory = "";
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// === Elements ===
const categorySelect = document.getElementById("category-select");
const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const timerEl = document.getElementById("quiz-timer");
const feedbackEl = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("next-question");

// === Populate category dropdown ===
window.addEventListener("DOMContentLoaded", () => {
  for (const category in quizData) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  }
});

categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  nextBtn.disabled = true;
  loadQuestion();
});

function loadQuestion() {
  clearInterval(timer);

  const q = quizData[currentCategory][currentIndex];
  questionEl.textContent = `Q${currentIndex + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.disabled = true;

  // Add options
  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.style.cursor = "pointer";
    li.onclick = () => selectAnswer(li, option);
    optionsEl.appendChild(li);
  });

  // Start timer
  timeLeft = 10;
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerEl.textContent = "0";
      feedbackEl.textContent = "⏰ Time's up!";
      Array.from(optionsEl.children).forEach(opt => opt.style.pointerEvents = "none");
      nextBtn.disabled = false;
      return;
    }

    timeLeft--;
    timerEl.textContent = timeLeft;
    beep.play();
  }, 1000);
}

function selectAnswer(el, selected) {
  clearInterval(timer);
  const correct = quizData[currentCategory][currentIndex].answer;

  Array.from(optionsEl.children).forEach(opt => opt.style.pointerEvents = "none");

  if (selected === correct) {
    el.style.background = "#c8f7c5";
    feedbackEl.textContent = "✅ Correct!";
    correctSound.play();
    score++;
  } else {
    el.style.background = "#f7c5c5";
    feedbackEl.textContent = `❌ Wrong. Answer: ${correct}`;
    wrongSound.play();
  }

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < quizData[currentCategory].length) {
    loadQuestion();
  } else {
    showScore();
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.disabled = true;
  }
};

function showScore() {
  const total = quizData[currentCategory].length;
  let message = `🎉 Quiz complete! Your score: ${score}/${total} `;

  if (score === total) message += "🏆 Perfect!";
  else if (score >= total * 0.8) message += "🎯 Great job!";
  else if (score >= total * 0.5) message += "👍 Not bad!";
  else message += "😅 Keep practicing!";

  questionEl.textContent = message;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "🔁 Try Again or Choose Another";
  restartBtn.style.marginTop = "20px";
  restartBtn.style.padding = "10px 16px";
  restartBtn.style.background = "#007BFF";
  restartBtn.style.color = "#fff";
  restartBtn.style.border = "none";
  restartBtn.style.borderRadius = "6px";
  restartBtn.style.cursor = "pointer";

  restartBtn.onclick = () => {
    categorySelect.selectedIndex = 0;
    categorySelect.disabled = false;
    questionEl.textContent = "Select a category to begin.";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
  };

  optionsEl.appendChild(restartBtn);
}
