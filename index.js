const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
            {text: "Australia", correct: false},
            {text: "Asia", correct: false},
            {text: "Arctic", correct: false},
            {text: "Oceania", correct: true},
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            {text: "Sahara", correct: false},
            {text: "Kalahari", correct: false},
            {text: "Antarctica", correct: true},
            {text: "Gobi", correct: false},
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "Who was the 2nd vice president of Independence India?",
        answers: [
            {text: "Gopal Swarup Pathak", correct: false},
            {text: "Dr. Zakir Hussain", correct: true},
            {text: "Varahagiri Giri", correct: false},
            {text: "Dr. Sarvepalli Radhakrishnan", correct: false},
        ]
    },

];

const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestionIndex = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach( button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = 'true'
    });
    nextButton.style.display = 'block'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
