const questions = [
  {
    id: 1,
    question: "איך קוראים לאצבע האמצעית?",
    answers: ["אמה", "קמיצה", "אצבע", "אגודל"],
    correctAnswer: 1,
  },

  {
    id: 2,
    question: "כיצד נקראית הנקודה השחורה בעין?",
    answers: ["רישתית", "עדשה", "עפעף", "אישון"],
    correctAnswer: 4,
  },
  {
    id: 3,
    question: "איך נקרא איבר הנשימה של הדגים?",
    answers: ["ריאות", "זנבנב", "קשקשים", "זימים"],
    correctAnswer: 4,
  },
  {
    id: 4,
    question: "...המקום הנמוך ביותר בעולם הוא?",
    answers: ["הודו", "ים המלח", "קנדה", "אנטרטיקה"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "מהי שנת אור?",
    answers: ["תקופת היום הארוך ביותר\n בקוטב", "תרדמת החורף של הדובים", "המרחק שהאור עובר\n במשך שנה", "שארית האור הנותרת\n לאחר תקופה של שנה"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "איזו מדינה בעלת השטח הגדול ביותר?",
    answers: ["רוסיה", "קנדה", "סין", "ארצות הברית"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "באיזה כלי אפשר לשוט בים?",
    answers: ["ברווז צעצוע", "קורקינט", "מטוס", "סירה"],
    correctAnswer: 4,
  },
  {
    id: 8,
    question: "מהו המרכיב העיקרי בטחינה?",
    answers: ["חצילים מיובשים", "עליטחינה מיובשים", "שומשום", "חומוס"],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "מה פירוש המילה קץ?",
    answers: ["עונה בשנה", "התחלה", "סוף", "קוץ"],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "איזה תו בא אחרי רה?",
    answers: ["פה", "מי", "סול", "דו"],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "מי מהבאים אינו סוג של סופת רוח?",
    answers: ["ציקלון", "ציאניד", "הוריקן", "טייפון"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "מה מהבאים לא המצאה ישראלית?",
    answers: ["וויז", "עגבניות שרי", "טפטפות", "דיסק און קי", "אימוג'י"],
    correctAnswer: 4,
  },
  {
    id: 13,
    question: "מה אינו סוג של דג?",
    answers: ["קרפיון", "שפיפון", "סלמון", "זהבון"],
    correctAnswer: 4,
  },
  {
    id: 14,
    question: "...זחלי משי אוכלים עלים מעץ?",
    answers: ["תות", "רימון", "גויאבה", "תאנה"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "באיזה עיר קיים מצפה תת ימי?",
    answers: ["באשדוד", "באילת", "בחיפה", "בנהריה"],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "מהי נאס\"א?",
    answers: ["סוכנות החלל של ארצות \n הברית", "בסיס ריגול אמריקני\n באוקיינוס האטלנטי", "ארגון הבנק העולמי", "ארגון בקרה של האו\"ם"],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "מה מודדים בדציבלים?",
    answers: ["טמפרטורה", "לחות", "תזוזת קרקע", "רעש"],
    correctAnswer: 4,
  },
  {
    id: 18,
    question: "...בגתן היה שומר המלך?",
    answers: ["לואי ה16", "אחשוורוש", "עבדאללה", "שלמה"],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "כמה ספרות יש בבסיס בינארי?",
    answers: ["10", "8", "2", "3"],
    correctAnswer: 3,
  },
  {
    id: 20,
    question: "מהי אנטיביוטיקה?",
    answers: ["תחום ברפואה\nאלטרנטיבית", "חיסון מונע נגד מחלות\nשונות", "חומר שמשמש כתרופה\nיעילה נגד חיידקים", "מרכיב בתרופה נגד וירוסים"],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: "...לבנם של האריה והלביאה קוראים?",
    answers: ["זיזי", "אריה קטן", "אריה 2", "כפיר"],
    correctAnswer: 4,
  },
  {
    id: 22,
    question: "באיזו שנה פרצה המהפכה הצרפתית?",
    answers: ["1848", "1914", "1789", "1666"],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "מה זה זעפרן?",
    answers: ["תבלין", "נוזל", "בד", "סם"],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "לפי השיר, לאיזה דוד היתה חווה?",
    answers: ["משה", "אהרון", "שמחה", "יואב"],
    correctAnswer: 1,
  },
  {
    id: 25,
    question: "מה שם במטבע של אנגליה?",
    answers: ["דולר", "קורנה", "אירו", "לירה שטרלינג"],
    correctAnswer: 4,
  },

];
let currentQuestionIndex = 1;
let interval;
let time = 9;
let num_question = 0;
let arr;
let color = 0;
let score = 0;
let numbers = [1000000, 500000, 250000, 100000, 50000, 25000, 15000, 12500, 10000, 7500, 5000, 3000, 2000, 1000, 500];
let currentLevel;
let currentLevelId;
let currentLevelIndex;
let progressBar;
let highscore;
let gameActive = true;
let audio;
let answerIndexes;
let thisAns;//משנה את התשובה הנכונה
let answerElements;
let ans;
let canContinue = true;
let prevScore;

// פונקצייה המרנדמת מספר לשאלה
function getRandomQuestion() {
  if (canContinue) {
    interval = setInterval(timer, 1000);
    document.getElementById("high_score").innerText = highscore;
    currentLevelIndex = 16 - currentQuestionIndex;
    currentLevelId = "level-" + currentLevelIndex;
    currentLevel = document.getElementById(currentLevelId);

    // בודק אם המצויין נמצא ואם כן משנה את צבעו לצהוב
    if (currentLevel) {
      currentLevel.style.backgroundColor = 'yellow';
    }

    gameActive = true;//המשחק פעיל
    let index = 0;
    do {
      index = Math.floor(Math.random() * arr.length);
    } while (arr[index] === 0);

    num_question = index;
    arr[index] = 0;

    // קריאת לפונקציה שמציגה את השאלה 
    displayQuestion();
  }
}

function displayQuestion() {
  // מכניס לי לתוך דיב של השאלה את המספר שאלה ואת השאלה עצמה
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = `<h1>${currentQuestionIndex}</h1><h1>${questions[num_question].question}</h1>`;
  // מכניס לתוך הדיב המתאים את התשובה 
  const answerElements = document.querySelectorAll(".answer");
  const answerIndexes = [0, 1, 2, 3]; // מערך שמכיל את המיקומים של התשובות במערך

  for (let i = 0; i < answerElements.length; i++) {
    const randomIndex = Math.floor(Math.random() * answerIndexes.length); // בחירת אינדקס אקראי מתוך המערך
    const answerIndex = answerIndexes[randomIndex]; // המיקום האקראי שנבחר

    const answerText = questions[num_question].answers[answerIndex];
    answerElements[i].innerText = `${String.fromCharCode(1488 + answerIndex)}. ${answerText}`;

    // הסרת האינדקס הנבחר מהמערך כדי לוודא שלא נכניס אותו שוב
    answerIndexes.splice(randomIndex, 1);

    // הוספת קלאס תואם לתשובה הנכונה או הלא נכונה
    if (answerIndex === questions[num_question].correctAnswer - 1) {
      answerElements[i].classList.add("correct_answer");
    } else {
      answerElements[i].classList.remove("correct_answer");
    }
  }
  void progressBar.offsetWidth;
  progressBar.style.animation = null;
}

function timer() {
  // בדיקה האם הזמן הוא גדול מ-0
  if (time > 0) {
    // הפחתת הזמן
    time--;
  } else {
    // במידה והזמן הגיע לאפס, הפסקת הטיימר
    clearInterval(interval);
    audio = new Audio("../sound/fail.mp3");
    audio.play();
    progressBar = document.querySelector('.color');

    // השמת האלמנט במצב עצירה ואז בחזרה לתחילת האנימציה
    progressBar.style.animation = 'none';
    // עצירת האנימציה
    progressBar.style.animationPlayState = 'paused';
    setTimeout(openPopup, 500);
    gameActive = false;
  }
}

// פונקצייה לבדיקת נכונות התשובה
function checkAnswer(answer) {
  if (!gameActive) {
    return;
  }

  progressBar = document.querySelector('.color');
  // השמת האלמנט במצב עצירה ואז בחזרה לתחילת האנימציה
  progressBar.style.animation = 'none';
  // עצירת האנימציה
  progressBar.style.animationPlayState = 'paused';
  clearInterval(interval);
  time = 9;

  gameActive = false;
  answerElements = document.querySelectorAll(".answer"); // כאן אני מקבל מחדש את אלמנטי התשובות
  // בדיקה האם התשובה שנלחצה ע"י המשתמש היא התשובה הנכונה
  if (answerElements[answer].classList.contains("correct_answer")) {
    audio = new Audio("../sound/correct.mp3");
    audio.play();

    greenColor(answer);
    score = numbers[15 - currentQuestionIndex];
    updateScore(score);

    if (score == 5000 || score == 25000) {
      setTimeout(() => {
        audio = new Audio("../sound/Trumpet_sound_effect.mp3");
        audio.play();
      }, 500);
      canContinue = false;
      checkRetirementPoint();
    }
    // הוספת התנאים הבאים לסיום המשחק במקרה של הגעה למיליון
    if (currentQuestionIndex == 15 && answer === questions[num_question].correctAnswer) {
      document.getElementById("score1").innerText = 1000000;
      openPopup_for_milion()
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
      localStorage.setItem("high_score", JSON.stringify(highscore));
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
        openPopup_loss();
      }, 2000);
    }, 1000);
  }
}
//פונקצייה לבדיקת לחיצה נקודות הפרישה
function checkRetirementPoint() {
  // הצגת חלון קופץ עם אפשרויות פרישה והמשך
  document.getElementById("popup_retirement").classList.add("open-popup");
  document.getElementById("retirement-popup");
  popup.classList.add("open-popup-retirement");
  if (score == 5000) {
    document.getElementById("retirement-score").innerText = 5000;
  }
  if (score == 25000) {
    document.getElementById("retirement-score").innerText = 25000;
  }
  document.getElementById("retire-button").addEventListener("click", () => {
    // שמירת ניקוד
    localStorage.setItem("score1", JSON.stringify(score));

    // הפנייה לדף הבית או התחלת משחק חדש
    window.location.href = "../html/page_1.html";
  });
  document.getElementById("continue-button").addEventListener("click", () => {
    hidepopup();
    canContinue = true;
  })
}

function hidepopup() {
  document.getElementById("popup_retirement").classList.remove("open-popup");
  canContinue = true;
  getRandomQuestion();
}
// הוספת מאזין אירוע בתוך פונקציה נפרדת
function initRetirementPopup() {
  document.getElementById("continue-button").addEventListener("click", () => {
    hidepopup();
    canContinue = true;
  })
}
// פונקציה לעדכון הניקוד
function updateScore(score) {
  score += score;
  if (score > highscore) {
    highscore = score;
    // עדכון ה-localStorage
    localStorage.setItem("high_score", JSON.stringify(highscore));
    // עדכון התצוגה
    let up = document.getElementById("high_score");
    up.innerText = highscore
  }
}

//פונקצייה לאיפוס הצבע
function resetAnswerColors(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'rgb(156, 95, 156)'; // שינוי הצבע לירוק  
}
//פונקצייה לשינוי הצבע לאדום
function changeColorRed(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'red'; // שינוי הצבע לאדום  
}
//פונקצייה לשינוי הצבע לירוק
function greenColor(answerIndex) {
  const answerElement = document.getElementById(`answer-${answerIndex + 1}`);
  answerElement.style.backgroundColor = 'green'; // שינוי הצבע לירוק  
}
function openPopup_loss() {

  // הוספת ה-class "open-popup" לאלמנט המתאים
  document.getElementById("popup_loss").classList.add("open-popup_loss");
}
function openPopup() {
  // הוספת ה-class "open-popup" לאלמנט המתאים
  document.getElementById("popup").classList.add("open-popup");
}
function openPopup_for_milion() {
  // הוספת ה-class "open-popup" לאלמנט המתאים
  document.getElementById("popup_for_milion").classList.add("open-popup_for_milion");

}
function openPopup_for_milion() {
  // הוספת ה-class "open-popup" לאלמנט המתאים
  document.getElementById("popup_for_milion").classList.add("open-popup_for_milion");
}

//פונקצייה להתחלת משחק
function start() {
  prevScore = JSON.parse(localStorage.getItem("score1"));
  if (prevScore === null || prevScore === undefined) {
    prevScore = 0;
  }
  highscore = JSON.parse(localStorage.getItem("high_score"));
  document.getElementById("high_score").innerText = highscore;
  arr = Array.from({ length: questions.length }, (_, i) => i + 1);
  getRandomQuestion();
  document.querySelector('.progress').classList.add('active'); // הוספת ה-Class "active" כאשר המשחק מתחיל
}

