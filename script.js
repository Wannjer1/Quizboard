
const quizData = [
    {
        question:"Which language runs in a web browser?",
        a:"Java",
        b:"Python",
        c:"C",
        d:"Javascript",
        correct:"d",
    },

    {
        question:"What year was Javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b",
    },
    
    {
        question:"Which of the folowing is not a data type?",
        a:"Booleans",
        b:"Numbers",
        c:"Variables",
        d:"Strigs",
        correct:"c",
    },

    {
        question:"Identify the logical operator in the list below?",
        a:"===",
        b:"<=",
        c:"&&",
        d:"+=",
        correct:"c",
    },

    {
        question:"Which of the following is not a promitive data type",
        a:"String",
        b:"Array",
        c:"Number",
        d:"Boolean",
        correct:"b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')

const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const submitButn=document.getElementById('submit')


let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData= quizData[currentQuiz]

    questionEl.innerText= currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}


function deselectAnswers() {
    answerEls.forEach(answerE1=>answerE1.checked=false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerE1 =>{
        if(answerE1.checked) {
            answer= answerE1.id
        }
    })

    return answer
}

submitButn.addEventListener('click', () => {
    const answer= getSelected()
    if (answer) {
        if(answer ===quizData[currentQuiz].correct)
            score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    } else {
        quiz.innerHTML=`
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()"> Reload</button>`
    
    }

}