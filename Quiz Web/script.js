const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quiz-box');
const resultbox = document.querySelector('.result-box');
const main = document.querySelector('.main');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    quizbox.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    showQuestions(0);
    questioncounter(1);
    headScore();
}

tryAgainBtn.onclick = () => {
    quizbox.classList.add('active');
    nextBtn.classList.remove('active');
    resultbox.classList.remove('active');

    questionCount = 0;
    questionNumber = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCount(questionNumber);

    headScore();
}
goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultbox.classList.remove('active');

    questionCount = 0;
    questionNumber = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCount(questionNumber);


}

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount <= questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumber++;
        questioncounter(questionNumber);
        nextBtn.classList.remove('active');
    }
    else showResultBox();
}

const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}}`
    let optionTag =
        `
    <div class="option"><span>${questions[index].Option[0]}</span></div>
    <div class="option"><span>${questions[index].Option[1]}</span></div>
    <div class="option"><span>${questions[index].Option[2]}</span></div>
    <div class="option"><span>${questions[index].Option[3]}</span></div>
    `;
    optionList.innerHTML = optionTag
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correntAnswer = questions[questionCount].answer;

    let allOptions = optionList.children.length;
    if (userAnswer == correntAnswer) {
        answer.classList.add('correct');
        userScore++;
        headScore();
    }
    else {
        answer.classList.add('incorrect');
        //if select the wrong answer than auto show the correct ans
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correntAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //if user selects any option then all option will be disabled

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled')
    }
    nextBtn.classList.add('active');
}
function questioncounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headScore() {
    const headScoreText = document.querySelector('.head-score');
    headScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizbox.classList.remove('active');
    resultbox.classList.add('active');
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        circularProgress.style.background = `conic-gradient(#00c4c4 ${progressStartValue * 3.6}deg,rgba(255,255,255,.1) 0deg)`;
        progressValue.textContent = `${progressStartValue}%`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}
