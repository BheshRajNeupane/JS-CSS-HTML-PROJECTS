//1st
const quizData = [
  {
    question: "1.Who is the first CA of Nepal?",
    a: "Mahesh Manander",
    b: "Kuber P. Sharma", // object =quizdata
    c: "Harihar Parajuli", // proberty : quns,a,b,
    d: "Ram Kuwar Shrestha", // value a:"value"
    correct: "b",
  },
  {
    question: "2.Where does dhakal chowk located?",
    a: "ktm-dhakal mrg",
    b: "damak-dahkal marg",
    c: "butwal-dhakal marg",
    d: "kawasoti-dhakal marg",
    correct: "d",
  },
  {
    question:
      "3.Who is the founder of popular Youtube channel named (Gaurav YT)?",
    a: "Gaurav Shingkhada",
    b: "Gaurav Prasar",
    c: "Gaurav Rijal",
    d: "Gaurav Thapa",
    correct: "d",
  },
  {
    question: "4.Name the most dyanamic Hacker of Nepal?",
    a: "Hacker Kiran",
    b: "Hacker Diwas",
    c: "Hacker Nicohlas",
    d: "Hacker Chulbul Padey",
    correct: "c",
  },
];

const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const optionEL1 = document.querySelector("#a_text");
const optionEL2 = document.querySelector("#b_text");
const optionEL3 = document.querySelector("#c_text");
const optionEL4 = document.querySelector("#d_text");
const answerEl = document.querySelectorAll(".answer");

const nextBtn = document.querySelector("#nextbtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deSelectAns();
  let currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  optionEL1.innerHTML = currentQuizData.a;
  optionEL2.innerHTML = currentQuizData.b;
  optionEL3.innerHTML = currentQuizData.c;
  optionEL4.innerHTML = currentQuizData.d;
  //  currentQuiz++;
}
// }

function getSelected() {
  
  let answer = undefined;
  answerEl.forEach((el) => {
    // elements--a b  c ..
    if (el.checked) {
      //answer.checked if any value clicked  True,
      answer = el.id;
    }
  });
  return answer;
}

function deSelectAns() {
  answerEl.forEach((el) => {
    el.checked = false;
  });
}

// loadQuiz();

nextBtn.addEventListener("click", () => {
  // currentQuiz +=1;
  // if(currentQuiz< quizData.length){ loadQuiz();}
  // else{alert("FInished!");}

  const answer = getSelected(); //function return ans

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz += 1;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
    //else{alert("FInished!");}
    else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()">Reload</button>`;

      //   const nextBTnHide= document.querySelector('#hide');
      //  nextBTnHide = display.none;
    }
  }
});
