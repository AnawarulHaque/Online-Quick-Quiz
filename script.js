const quizData = [
    {
        question: "Q1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Q2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Q3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Q4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Q5. What does SQL stand for?",
        a: "Strong Question Language",
        b: "Structured Question Language",
        c: "Structured Query Language",
        d: "All",
        correct: "c",
    },
    {
        question: "Q6. What does PHP stand for?",
        a: "Personal Hypertext Processor",
        b: "Private Home Page",
        c: "Hypertext Preprocessor",
        d: "Pretext Hypertext Preprocessor",
        correct: "c",
    },
    {
        question: "Q7. Who is known as the father of PHP?",
        a: "Drek Kolkevi",
        b: "List Barely",
        c: "Rasmus Lerdrof",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Q8. Which of the following is the default file extension of PHP?",
        a: ".php",
        b: ".hphp",
        c: ".html",
        d: ".xml",
        correct: "a",
    },
    {
        question: "Q9.  _____ is used to find and fix bugs in the Java programs",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        correct: "d",
    },
    {
        question: "Q10. Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2> You scored ${score}/${quizData.length} ✌️</h2>
           <button onclick="location.reload()">Play Again</button>
           `
       }
    }
})

   