const questions = [
  {
    id: 1,
    question: "איזה ויטמין יש בפירות?",
    answers: ["ויטמין C", "ויטמין A", "ויטמין B", "ויטמין E"],
    correctAnswer: 1,
  },

  {
    id: 2,
    question: "באיזה צבע המשמש?",
    answers: ["אדום", "צהוב", "חום אדמדם", "כתום"],
    correctAnswer: 4,
  },
  {
    id: 3,
    question: "כמה צבעים יש לקשת?",
    answers: ["8 ", " 6", "5", " 2"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "איזה ספר מופיע בתנך אחרי ספר ויקרא?",
    answers: ["במדבר", " בראשית", "שמות ", " דברים"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "איזה חיה מהבאות אינה יכולה לעוף?",
    answers: ["נשר", "יען", "נחליאלי", "באז"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "מהי בירת איטליה?",
    answers: ["מילאנו", " ונציה", "פירנצה ", " רומא"],
    correctAnswer: 4,
  },
  {
    id: 7,
    question: "באיזה צבעים הדגל של קנדה?",
    answers: ["אדום צהוב", " ירוק לבן", "אדום לבן ", " כחול אדום"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "מהי המדינה המאוכלסת ביותר בעולם?",
    answers: ["אינדונזיה", "  סין", " ארצות הברית", " הודו"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "מי היה המלך הראשון של ישראל?",
    answers: ["שאול ", " דוד ", " שלמה ", " אחאב"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "איזו ציורים הם היצירה המפורסמת ביותר של ליאונרדו דה וינצ'י?",
    answers: ["מונה ליזה", " האחרון סופר", " הסערה ", "הקרבה "],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: "מהו מה הנוסף של אסתר המלכה?",
    answers: ["יוכבד ", " הסתר", "ושתי", " הדסה"],
    correctAnswer: 4,
  },
  {
    id: 12,
    question: "איזה גז פולט האדם כאשר הוא נושף?",
    answers: ["פחמן דו חמצני ", " גז בישול", "חנקן", " חמצן"],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "מי בתנך היה כבד לשון?",
    answers: ["אהרון ", " שמואל", "משה", " יהושע"],
    correctAnswer: 3,
  },
  {
    id: 14,
    question: "מהו בג''ץ?",
    answers: ["הכשר מהדרין של הרבנות ", " בית משפט גבוה לצדק", "בוגר גימנסיה צבאית", " בית משפט שפועל לפי המשפט העברי"],
    correctAnswer: 2,
  },
  {
    id: 15,
    question: "או''ם=",
    answers: ["ארצות מפותחות ", " איחוד וממשלות", "ארצות ומדינות", " אומות מאוחדות"],
    correctAnswer: 4,
  },
  {
    id: 16,
    question: "איך נקרא בנו של החמור?",
    answers: ["גור ", "אתון", "עיר", " סייח"],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "איך נקרא נחל אשר זורמים בו מים לאורך כל השנה?",
    answers: ["נחל איתן ", " נחל עמוס", "נחל אכזב", " נחל מלא"],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "מהי בירת ארצות הברית?",
    answers: ["מיאמי ", " וושינגטון", "ניו יורק", " סן פנסיסקו"],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "מהי זווית ישרה?",
    answers: ["קטנה מ90 מעלות", "גדולה מ90 מעלות", "שווה ל180 מעלות", "שווה ל90 מעלות"],
    correctAnswer: 4,
  },
  {
    id: 20,
    question: "על כמה מדינות שלט המלך אחשוורוש?",
    answers: ["721", "172", "421", "127"],
    correctAnswer: 4,
  },
  {
    id: 21,
    question: "איזה פרי קוטפים במסיק?",
    answers: ["בננות", "ענבים", "זיתים", "תמרים"],
    correctAnswer: 3,
  },
  {
    id: 22,
    question: "מה פירוש המילה נוי?",
    answers: ["עצב", "יופי", "שמחה", "כעס"],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "איזו מהערים נמצאות באנגליה?",
    answers: ["מלבורן", "ליברפול", "אמסטרדם", "פריז"],
    correctAnswer: 2,
  },
  {
    id: 24,
    question: "מה המציא תומס אדיסון?",
    answers: ["זיקוקים", "פנס כיס", "נורת חשמל", "עששית"],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "מי הלך לחפש אתונות ומצא מלוכה?",
    answers: ["יוסף", "שלמה", "דוד", "שאול"],
    correctAnswer: 4,
  },


];
let currentQuestionIndex = 1; // Tracks current question number
let interval;
let time = 9; // Time per question (seconds)
let num_question = 0; // Current question index
let arr; // Available question indexes
let score = 0; // Player's score
let numbers = [1000000, 500000, 250000, 100000, 50000, 25000, 15000, 12500, 10000, 7500, 5000, 3000, 2000, 1000, 500]; // Prize amounts
let currentLevel;
let currentLevelId;
let currentLevelIndex;
let progressBar;
let highscore;
let gameActive = true; // Game state
let audio;
let answerIndexes;
let thisAns;
let answerElements;
let ans;
let canContinue = true; // Controls game continuation
let prevScore;

// Selects a random question and starts timer
function getRandomQuestion() {
  if (canContinue) {
    interval = setInterval(timer, 1000);
    document.getElementById("high_score").innerText = highscore;
    currentLevelIndex = 16 - currentQuestionIndex;
    currentLevelId = "level-" + currentLevelIndex;
    currentLevel = document.getElementById(currentLevelId);

    if (currentLevel) {
      currentLevel.style.backgroundColor = 'yellow'; // Highlights current level
    }

    gameActive = true;
    let index = 0;
    do {
      index = Math.floor(Math.random() * arr.length);
    } while (arr[index] === 0);

    num_question = index;
    arr[index] = 0;

    displayQuestion();
  }
}

// Displays question and shuffles answers
function displayQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = `<h1>${currentQuestionIndex}</h1><h1>${questions[num_question].question}</h1>`;

  const answerElements = document.querySelectorAll(".answer");
  const answerIndexes = [0, 1, 2, 3];

  for (let i = 0; i < answerElements.length; i++) {
    const randomIndex = Math.floor(Math.random() * answerIndexes.length);
    const answerIndex = answerIndexes[randomIndex];

    const answerText = questions[num_question].answers[answerIndex];
    answerElements[i].innerText = `${String.fromCharCode(1488 + i)}. ${answerText}`;

    answerIndexes.splice(randomIndex, 1);

    if (answerIndex === questions[num_question].correctAnswer - 1) {
      answerElements[i].classList.add("correct_answer"); // Marks correct answer
    } else {
      answerElements[i].classList.remove("correct_answer");
    }
  }
  void progressBar.offsetWidth;
  progressBar.style.animation = null;
}

// Manages countdown timer
function timer() {
  if (time > 0) {
    time--;
  } else {
    clearInterval(interval);
    if (gameActive) {
      audio = new Audio("../sound/fail.mp3");
      audio.play();
    }
    progressBar = document.querySelector('.color');
    progressBar.style.animation = 'none';
    progressBar.style.animationPlayState = 'paused';
    setTimeout(openPopup, 500);
    gameActive = false; // Ends game on timeout
  }
}

// Checks if answer is correct
function checkAnswer(answer) {
  if (!gameActive) return;

  progressBar = document.querySelector('.color');
  progressBar.style.animation = 'none';
  progressBar.style.animationPlayState = 'paused';
  clearInterval(interval);
  time = 9;

  gameActive = false;
  answerElements = document.querySelectorAll(".answer");

  if (answerElements[answer].classList.contains("correct_answer")) {
    audio = new Audio("../sound/correct.mp3");
    audio.play();

    greenColor(answer);
    score = numbers[15 - currentQuestionIndex]; // Sets score based on level
    updateScore(score);

    if (score == 5000 || score == 25000) {
      setTimeout(() => {
        audio = new Audio("../sound/Trumpet_sound_effect.mp3");
        audio.play();
      }, 500);
      canContinue = false;
      checkRetirementPoint(); // Shows retirement option
    }

    if (currentQuestionIndex == 15) {
      document.getElementById("score1").innerText = 1000000;
      openPopup_for_milion(); // Million win condition
      gameActive = false;
      return;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < 16) {
      setTimeout(() => { resetAnswerColors(answer); }, 2000);
      document.getElementById("score1").innerText = score;
      currentLevel.style.backgroundColor = 'rgb(156, 95, 156)';

      setTimeout(() => {
        getRandomQuestion();
      }, 2000);
    }
  } else {
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("high_score", JSON.stringify(highscore)); // Updates high score
    }
    score = 0;
    localStorage.setItem("score1", JSON.stringify(score));
    clearInterval(interval);
    const audio = new Audio("../sound/fail.mp3");
    audio.play();

    changeColorRed(answer);
    for (let index = 0; index < 4; index++) {
      if (answerElements[index].classList.contains("correct_answer")) {
        ans = index;
        break;
      }
    }
    setTimeout(() => {
      greenColor(ans);
      setTimeout(() => {
        openPopup_loss(); // Shows loss popup
      }, 2000);
    }, 1000);
  }
}

// Handles retirement decision
function checkRetirementPoint() {
  document.getElementById("popup_retirement").classList.add("open-popup");
  if (score == 5000) {
    document.getElementById("retirement-score").innerText = 5000;
  }
  if (score == 25000) {
    document.getElementById("retirement-score").innerText = 25000;
  }
  document.getElementById("retire-button").addEventListener("click", () => {
    localStorage.setItem("score1", JSON.stringify(score));
    window.location.href = "../html/page_1.html"; // Redirects to home page
  });
  document.getElementById("continue-button").addEventListener("click", () => {
    hidepopup();
    canContinue = true;
  });
}

function hidepopup() {
  document.getElementById("popup_retirement").classList.remove("open-popup");
  canContinue = true;
  getRandomQuestion();
}

// Updates score and high score
function updateScore(score) {
  score += score; // Note: This doubles the score (potential bug)
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("high_score", JSON.stringify(highscore));
    let up = document.getElementById("high_score");
    up.innerText = highscore;
  }
}

function resetAnswerColors(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'rgb(156, 95, 156)';
}

function changeColorRed(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'red';
}

function greenColor(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'green';
}

function openPopup_loss() {
  document.getElementById("popup_loss").classList.add("open-popup_loss");
}

function openPopup() {
  document.getElementById("popup").classList.add("open-popup");
}

function openPopup_for_milion() {
  document.getElementById("popup_for_milion").classList.add("open-popup_for_milion");
  document.getElementById("name").innerText = username;
  document.getElementById("scor").innerText = score;
}

// Starts the game
function start() {
  prevScore = JSON.parse(localStorage.getItem("score1")) || 0; // Loads previous score
  highscore = JSON.parse(localStorage.getItem("high_score"));
  document.getElementById("high_score").innerText = highscore;
  arr = Array.from({ length: questions.length }, (_, i) => i + 1); // Initializes question array
  getRandomQuestion();
  document.querySelector('.progress').classList.add('active');
}