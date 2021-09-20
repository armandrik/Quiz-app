let questions = [{
    question: "which language runs in web browser ?",
    a: "java",
    b: "c",
    c: "python",
    d: "javascript",
    currect: "d",
}, {
    question: "what does css stand for ?",
    a: "cnetral style sheet",
    b: "cascading style sheet",
    c: "cascading simple sheet",
    d: "cars suvs sailboats",
    currect: "b",
}, {
    question: "what does html stand for ?",
    a: "hypertext markup language",
    b: "hypertext markdown language",
    c: "hypertext machine language",
    d: "helicopters terminals motorboats",
    currect: "a",
}, {
    question: "what year was javascript ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    currect: "b",
}];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextQuiz = document.getElementById("submit");
const timer1 = document.getElementById("seconds");

let currentquiz = 0;
let score = 0;

quizApp();

function quizApp() {
    deselectanswers();
    const currentQuizdata = questions[currentquiz];
    questionEl.innerHTML = currentQuizdata.question;
    a_text.innerHTML = currentQuizdata.a;
    b_text.innerHTML = currentQuizdata.b;
    c_text.innerHTML = currentQuizdata.c;
    d_text.innerHTML = currentQuizdata.d;
}

function deselectanswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getselected() {
    let answer;
    answerEls.forEach(asnwerEl => {
        if (asnwerEl.checked) {
            answer = asnwerEl.id;
        }
    })
    return answer;
}

function endGame() {
    quiz.innerHTML = "";
    let resault_cont = document.createElement("div");
    let pionts = document.createElement("h2");
    let resault = document.createElement("h2");
    let reset_btn = document.createElement("button");
    resault_cont.classList.add("resault-container");
    pionts.classList.add("pionts");
    pionts.innerHTML = "your score is : " + score * 100;
    resault.classList.add("resault");
    resault.innerHTML = "you answerd " + score + " / " + currentquiz + " question currectly";
    reset_btn.classList.add("reset-button");
    reset_btn.innerHTML = "RESET";
    quiz.appendChild(resault_cont);
    resault_cont.appendChild(pionts);
    resault_cont.appendChild(resault);
    resault_cont.appendChild(reset_btn);
    reset_btn.addEventListener("click", () => {
        window.location.reload();
    })
}

nextQuiz.addEventListener("click", () => {
    const answer = getselected();
    if (answer) {
        if (answer === questions[currentquiz].currect) {
            score++
        }

        currentquiz++;

        if (currentquiz < questions.length) {
            quizApp();
        } else {
            return endGame();
        }
    }
})


function timer(x, elem) {
    var DOMelem = document.getElementById(elem);
    DOMelem.innerHTML = x;
    if (x > 0) {
        setTimeout(function() {
            timer(x - 1, elem)
        }, 1000);
    }
    if (x === 0) {
        return endGame();
    }
}

timer(60, "seconds");