const intro = document.getElementById("quiz-intro");
const quizContainer = document.getElementById("quiz");
const startBtn = document.getElementById("start-quiz");

startBtn.addEventListener("click", () => {
  intro.style.display = "none";
  quizContainer.style.display = "block";
});

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const progressEl = document.getElementById("quiz-progress");

let currentQuiz = 0;
let score = 0;
let hasAnsweredCorrectly = false;
let firstAttempt = true;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  resetStyles();
  enableAnswers();
  hasAnsweredCorrectly = false;
  firstAttempt = true;

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  submitBtn.innerText = "Submit";

  updateProgress();
}

function getSelected() {
  let answer;
  answerEls.forEach((el) => {
    if (el.checked) answer = el.id;
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((el) => {
    el.checked = false;
  });
}

function resetStyles() {
  document.querySelectorAll("label").forEach((label) => {
    label.style.backgroundColor = "";
    label.style.color = "";
  });
}

function disableAnswers() {
  answerEls.forEach((el) => (el.disabled = true));
}

function enableAnswers() {
  answerEls.forEach((el) => (el.disabled = false));
}

let tryAgainMode = false;

submitBtn.addEventListener("click", () => {
  if (tryAgainMode) {
    // Reset questions on button click
    resetStyles();
    deselectAnswers();
    enableAnswers();
    removeFeedback();
    submitBtn.innerText = "Submit";
    tryAgainMode = false;
    return;
  }

  const answer = getSelected();
  if (!hasAnsweredCorrectly && answer) {
    const currentData = quizData[currentQuiz];
    const correct = currentData.correct;
    const explanation = currentData.explanation;
    const wrongExplanation = currentData.wrongExplanations[answer];

    if (answer === correct) {
      document.getElementById(`${answer}_text`).style.backgroundColor =
        "#4CAF50";
      showFeedback(`Correct! ${explanation}`, "green");
      hasAnsweredCorrectly = true;

      if (firstAttempt) score++;

      submitBtn.innerText =
        currentQuiz < quizData.length - 1 ? "Next Question" : "Show Score";
      disableAnswers();
    } else {
      document.getElementById(`${answer}_text`).style.backgroundColor =
        "#F44336";
      showFeedback(`Incorrect! ${wrongExplanation}`, "red");
      firstAttempt = false;
      disableAnswers();

      submitBtn.innerText = "Try Again";
      tryAgainMode = true;
    }
  } else if (hasAnsweredCorrectly) {
    // Move to next question
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showFinalScore();
    }
  }
});
function showFeedback(text, color) {
  removeFeedback();
  const feedback = document.createElement("p");
  feedback.className = "h5 h4-md mt-2";
  feedback.style.color = color;
  feedback.id = "feedback-msg";
  feedback.innerText = text;
  questionEl.appendChild(feedback);
}

function removeFeedback() {
  const existing = document.getElementById("feedback-msg");
  if (existing) existing.remove();
}

function updateProgress() {
  progressEl.textContent = `Question ${currentQuiz + 1} / ${quizData.length}`;
}

function showFinalScore() {
  const percent = (score / quizData.length) * 100;

  quiz.innerHTML = `
    <h2>You got ${score} out of ${quizData.length} correct (${percent}%).</h2>
    <div id="quiz-feedback" class="quiz-feedback"></div>
    <button class="quiz-retry" onclick="location.reload()">Try Again</button>
  `;

  // show feedback based on score
  const feedbackEl = document.getElementById("quiz-feedback");

  if (score === quizData.length) {
    feedbackEl.textContent = `${perfectFeedback}`;
    feedbackEl.className = "quiz-feedback perfect-score";
  } else {
    feedbackEl.textContent = `${notPerfectFeedback}`;
    feedbackEl.className = "quiz-feedback review-needed";
  }
}
