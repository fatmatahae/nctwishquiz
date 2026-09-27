const questions = [
    {
        question: "You arrive somewhere and only know one person.",
        answers: [
            "I stick with them until I feel comfortable enough to branch out.",
            "I'll probably start talking to whoever seems approachable.",
            "I'll observe the atmosphere first and figure out who's who.",
            "I'll just throw myself into it. It'll probably be fun."
        ]
    },

    {
        question: "Your friend tells you they're having a really bad day.",
        answers: [
            "I immediately ask what happened and see what I can do.",
            "I'll stay with them and let them talk at their own pace.",
            "I'll try to make them laugh and distract them.",
            "I'll give them some space, but make sure they know I'm there."
        ]
    },

    {
        question: "You suddenly become interested in something new.",
        answers: [
            "I'm researching EVERYTHING before I start.",
            "I'm starting immediately. I'll figure it out as I go.",
            "I'll make a plan so I actually stick with it.",
            "I'll casually explore it until I decide whether I'm really into it."
        ]
    }
];

let currentQuestion = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.question;

    answerButtons.innerHTML = "";

    question.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", () => {
            nextQuestion();
        });

        answerButtons.appendChild(button);
    });
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    document.getElementById("results").innerHTML = `
        <p>You finished the quiz!</p>
        <p>The actual NCT WISH personality results are coming next.</p>
    `;
}
