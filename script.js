
const questions = [
    {
        question: "You arrive somewhere and only know one person.",
        answers: [
            {
                text: "I stick with them until I feel comfortable enough to branch out.",
                scores: {
                    social: 1,
                    warmth: 1,
                    playful: 0,
                    observant: 1,
                    drive: 0,
                    emotional: 0,
                    spontaneous: 0,
                    group: 1
                }
            },
            {
                text: "I'll probably start talking to whoever seems approachable.",
                scores: {
                    social: 2,
                    warmth: 1,
                    playful: 1,
                    observant: 0,
                    drive: 0,
                    emotional: 1,
                    spontaneous: 1,
                    group: 1
                }
            },
            {
                text: "I'll observe the atmosphere first and figure out who's who.",
                scores: {
                    social: 0,
                    warmth: 0,
                    playful: 0,
                    observant: 2,
                    drive: 0,
                    emotional: 0,
                    spontaneous: 0,
                    group: 0
                }
            },
            {
                text: "I'll just throw myself into it. It'll probably be fun.",
                scores: {
                    social: 2,
                    warmth: 0,
                    playful: 2,
                    observant: 0,
                    drive: 0,
                    emotional: 1,
                    spontaneous: 2,
                    group: 1
                }
            }
        ]
    },

    {
        question: "Your friend tells you they're having a really bad day.",
        answers: [
            {
                text: "I immediately ask what happened and see what I can do.",
                scores: {
                    social: 1,
                    warmth: 2,
                    playful: 0,
                    observant: 1,
                    drive: 1,
                    emotional: 1,
                    spontaneous: 0,
                    group: 2
                }
            },
            {
                text: "I'll stay with them and let them talk at their own pace.",
                scores: {
                    social: 0,
                    warmth: 2,
                    playful: 0,
                    observant: 2,
                    drive: 0,
                    emotional: 1,
                    spontaneous: 0,
                    group: 2
                }
            },
            {
                text: "I'll try to make them laugh and distract them.",
                scores: {
                    social: 2,
                    warmth: 2,
                    playful: 2,
                    observant: 0,
                    drive: 0,
                    emotional: 1,
                    spontaneous: 1,
                    group: 2
                }
            },
            {
                text: "I'll give them some space, but make sure they know I'm there.",
                scores: {
                    social: 0,
                    warmth: 2,
                    playful: 0,
                    observant: 2,
                    drive: 0,
                    emotional: 0,
                    spontaneous: 0,
                    group: 1
                }
            }
        ]
    },

    {
        question: "You suddenly become interested in something new.",
        answers: [
            {
                text: "I'm researching EVERYTHING before I start.",
                scores: {
                    social: 0,
                    warmth: 0,
                    playful: 0,
                    observant: 2,
                    drive: 1,
                    emotional: 0,
                    spontaneous: 0,
                    group: 0
                }
            },
            {
                text: "I'm starting immediately. I'll figure it out as I go.",
                scores: {
                    social: 1,
                    warmth: 0,
                    playful: 1,
                    observant: 0,
                    drive: 2,
                    emotional: 1,
                    spontaneous: 2,
                    group: 0
                }
            },
            {
                text: "I'll make a plan so I actually stick with it.",
                scores: {
                    social: 0,
                    warmth: 0,
                    playful: 0,
                    observant: 1,
                    drive: 2,
                    emotional: 0,
                    spontaneous: 0,
                    group: 1
                }
            },
            {
                text: "I'll casually explore it until I decide whether I'm really into it.",
                scores: {
                    social: 0,
                    warmth: 0,
                    playful: 1,
                    observant: 1,
                    drive: 0,
                    emotional: 0,
                    spontaneous: 1,
                    group: 0
                }
            }
        ]
    }
];


// -----------------------------
// PERSONALITY SCORES
// -----------------------------

let personality = {
    social: 0,
    warmth: 0,
    playful: 0,
    observant: 0,
    drive: 0,
    emotional: 0,
    spontaneous: 0,
    group: 0
};


// -----------------------------
// QUIZ SETUP
// -----------------------------

let currentQuestion = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");


// -----------------------------
// START QUIZ
// -----------------------------

startButton.addEventListener("click", startQuiz);

function startQuiz() {

    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();
}


// -----------------------------
// SHOW QUESTION
// -----------------------------

function showQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.question;

    answerButtons.innerHTML = "";

    question.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.addEventListener("click", () => {

            addScore(answer.scores);
            nextQuestion();

        });

        answerButtons.appendChild(button);
    });
}


// -----------------------------
// ADD PERSONALITY SCORE
// -----------------------------

function addScore(scores) {

    personality.social += scores.social;
    personality.warmth += scores.warmth;
    personality.playful += scores.playful;
    personality.observant += scores.observant;
    personality.drive += scores.drive;
    personality.emotional += scores.emotional;
    personality.spontaneous += scores.spontaneous;
    personality.group += scores.group;
}


// -----------------------------
// NEXT QUESTION
// -----------------------------

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }
}


// -----------------------------
// FINISH QUIZ
// -----------------------------

function finishQuiz() {

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    document.getElementById("results").innerHTML = `
        <p>Quiz complete!</p>

        <p>Your personality scores:</p>

        <p>Social Energy: ${personality.social}</p>
        <p>Warmth: ${personality.warmth}</p>
        <p>Playfulness: ${personality.playful}</p>
        <p>Observance: ${personality.observant}</p>
        <p>Drive: ${personality.drive}</p>
        <p>Emotional Expression: ${personality.emotional}</p>
        <p>Spontaneity: ${personality.spontaneous}</p>
        <p>Group Role: ${personality.group}</p>
    `;
}
