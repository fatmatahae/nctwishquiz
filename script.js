
const categories = [
    "social", "warmth", "playful", "observant",
    "drive", "emotional", "spontaneous", "group"
];

const questions = [
    {
        question: "You arrive somewhere and only know one person.",
        answers: [
            { text: "I stick with them until I feel comfortable enough to branch out.", scores: { warmth: 1, observant: 1, group: 1 } },
            { text: "I'll probably start talking to whoever seems approachable.", scores: { social: 2, warmth: 1, emotional: 1, group: 1 } },
            { text: "I'll observe the atmosphere first and figure out who's who.", scores: { observant: 2 } },
            { text: "I'll just throw myself into it. It'll probably be fun.", scores: { social: 2, playful: 2, spontaneous: 2, group: 1 } }
        ]
    },
    {
        question: "Your friend tells you they're having a really bad day.",
        answers: [
            { text: "I immediately ask what happened and see what I can do.", scores: { warmth: 2, observant: 1, drive: 1, group: 2 } },
            { text: "I'll stay with them and let them talk at their own pace.", scores: { warmth: 2, observant: 2, emotional: 1, group: 2 } },
            { text: "I'll try to make them laugh and distract them.", scores: { social: 1, warmth: 2, playful: 2, spontaneous: 1, group: 2 } },
            { text: "I'll give them some space, but make sure they know I'm there.", scores: { warmth: 2, observant: 2, group: 1 } }
        ]
    },
    {
        question: "You suddenly become interested in something new.",
        answers: [
            { text: "I'm researching EVERYTHING before I start.", scores: { observant: 2, drive: 1 } },
            { text: "I'm starting immediately. I'll figure it out as I go.", scores: { social: 1, playful: 1, drive: 2, emotional: 1, spontaneous: 2 } },
            { text: "I'll make a plan so I actually stick with it.", scores: { observant: 1, drive: 2, group: 1 } },
            { text: "I'll casually explore it until I decide whether I'm really into it.", scores: { playful: 1, observant: 1, spontaneous: 1 } }
        ]
    },
    {
        question: "You're hanging out with friends and nobody is talking.",
        answers: [
            { text: "I'll say something stupid to revive the conversation.", scores: { social: 1, playful: 2, emotional: 1, group: 2 } },
            { text: "I'll introduce a completely random topic.", scores: { social: 2, playful: 1, spontaneous: 2, group: 1 } },
            { text: "I'm perfectly happy sitting there quietly.", scores: { observant: 1, emotional: 1 } },
            { text: "I'll start talking to whoever's sitting beside me.", scores: { social: 1, warmth: 1, group: 1 } }
        ]
    },
    {
        question: "Someone gives you a compliment.",
        answers: [
            { text: "I immediately compliment them back.", scores: { social: 1, warmth: 2, emotional: 1 } },
            { text: "I get awkward and don't really know what to say.", scores: { observant: 1, emotional: 1 } },
            { text: "I make a joke about it.", scores: { social: 1, playful: 2, spontaneous: 1 } },
            { text: "I'll genuinely tell them how much it means to me.", scores: { warmth: 2, emotional: 2 } }
        ]
    },
    {
        question: "Your plans suddenly get cancelled.",
        answers: [
            { text: "I'm disappointed, but I'll find something else to do.", scores: { drive: 1, spontaneous: 1 } },
            { text: "Honestly? I'm kind of relieved.", scores: { social: 0, observant: 1 } },
            { text: "I'll immediately make a new plan.", scores: { drive: 2, observant: 1, group: 1 } },
            { text: "I'll probably end up doing something completely random instead.", scores: { playful: 1, spontaneous: 2 } }
        ]
    },
    {
        question: "You're doing a group project.",
        answers: [
            { text: "I'll naturally organise everyone.", scores: { observant: 1, drive: 2, group: 2 } },
            { text: "I'll make sure nobody gets left out.", scores: { warmth: 2, observant: 2, group: 2 } },
            { text: "I'll come up with the fun and creative ideas.", scores: { playful: 2, spontaneous: 1, group: 1 } },
            { text: "I'll quietly do my part really well.", scores: { observant: 1, drive: 2 } }
        ]
    },
    {
        question: "You have an entire free Saturday.",
        answers: [
            { text: "I'm making plans immediately.", scores: { social: 2, drive: 1, group: 1 } },
            { text: "I'm staying home and enjoying my own company.", scores: { social: 0, observant: 1 } },
            { text: "I'll see what happens and decide as the day goes.", scores: { spontaneous: 2, playful: 1 } },
            { text: "I'll pick one thing I really want to accomplish.", scores: { drive: 2, observant: 1 } }
        ]
    },
    {
        question: "Someone in your friend group is unusually quiet.",
        answers: [
            { text: "I notice almost immediately.", scores: { observant: 2, warmth: 1 } },
            { text: "I'll wait and see if they bring it up themselves.", scores: { observant: 1, warmth: 1 } },
            { text: "I'll try to cheer them up without making a big deal about it.", scores: { warmth: 2, playful: 1, group: 2 } },
            { text: "I'll directly ask if something's wrong.", scores: { warmth: 2, observant: 1, emotional: 1, group: 1 } }
        ]
    },
    {
        question: "You make a mistake in front of everyone.",
        answers: [
            { text: "I laugh at myself and move on.", scores: { social: 1, playful: 2, emotional: 1 } },
            { text: "I'm thinking about it for the next three business days.", scores: { observant: 1, emotional: 1 } },
            { text: "I'll pretend nothing happened.", scores: { emotional: 0, observant: 1 } },
            { text: "I'll probably turn it into a joke.", scores: { social: 1, playful: 2, spontaneous: 1 } }
        ]
    },
    {
        question: "You're learning something difficult.",
        answers: [
            { text: "I refuse to stop until I can do it.", scores: { drive: 2 } },
            { text: "I'll take breaks and come back to it.", scores: { drive: 1, observant: 1 } },
            { text: "I'll find the quickest way to understand it.", scores: { drive: 2, observant: 1 } },
            { text: "I'll ask someone else for help.", scores: { warmth: 1, group: 2 } }
        ]
    },
    {
        question: "Someone suggests doing something you've never tried.",
        answers: [
            { text: "Sure, why not?", scores: { social: 1, playful: 1, spontaneous: 2 } },
            { text: "What exactly are we doing?", scores: { observant: 2 } },
            { text: "I'm interested, but I'd rather plan it properly.", scores: { drive: 1, observant: 2 } },
            { text: "I'll probably agree if my friends are doing it.", scores: { social: 1, warmth: 1, group: 1 } }
        ]
    },
    {
        question: "You're choosing a restaurant with friends.",
        answers: [
            { text: "I'll happily let someone else decide.", scores: { warmth: 1, group: 1 } },
            { text: "I'll suggest somewhere I've been wanting to try.", scores: { drive: 1, spontaneous: 1, social: 1 } },
            { text: "I'll make sure everyone has something they like.", scores: { warmth: 2, observant: 1, group: 2 } },
            { text: "I'll pick somewhere completely random.", scores: { playful: 1, spontaneous: 2 } }
        ]
    },
    {
        question: "Your friend asks for advice.",
        answers: [
            { text: "I'll tell them exactly what I genuinely think.", scores: { warmth: 1, emotional: 2 } },
            { text: "I'll mostly listen. They probably just need someone there.", scores: { warmth: 2, observant: 2, group: 1 } },
            { text: "I'll help them work out a practical solution.", scores: { observant: 1, drive: 2, group: 1 } },
            { text: "I'll lighten the mood before giving advice.", scores: { playful: 2, warmth: 1, social: 1 } }
        ]
    },
    {
        question: "Which sounds most like you in a new friendship?",
        answers: [
            { text: "I'm comfortable pretty quickly.", scores: { social: 2, warmth: 1, emotional: 1 } },
            { text: "It takes me a while, but I'm very close once I trust someone.", scores: { warmth: 2, emotional: 1, observant: 1 } },
            { text: "I bond through joking around.", scores: { social: 1, playful: 2, spontaneous: 1 } },
            { text: "I prefer quietly getting to know someone over time.", scores: { observant: 2, warmth: 1 } }
        ]
    },
    {
        question: "You suddenly have an amazing idea at 11 PM.",
        answers: [
            { text: "I'm doing it RIGHT NOW.", scores: { drive: 1, spontaneous: 2, playful: 1 } },
            { text: "I'm writing it down and dealing with it tomorrow.", scores: { observant: 1, drive: 1 } },
            { text: "I'm immediately researching how to make it happen.", scores: { observant: 2, drive: 2 } },
            { text: "I'll tell my friends because they need to hear this.", scores: { social: 2, playful: 1, emotional: 1 } }
        ]
    },
    {
        question: "Someone you care about achieves something they've worked hard for.",
        answers: [
            { text: "I'm ridiculously proud of them.", scores: { warmth: 2, emotional: 2 } },
            { text: "I'll make sure they know how proud I am.", scores: { warmth: 2, emotional: 2, social: 1 } },
            { text: "I'll tease them a little, but I'm genuinely happy.", scores: { warmth: 1, playful: 2 } },
            { text: "I'll quietly do something nice for them.", scores: { warmth: 2, observant: 1, group: 1 } }
        ]
    },
    {
        question: "Your group is trying to decide what to do.",
        answers: [
            { text: "I'll probably take charge of organising it.", scores: { drive: 2, observant: 1, group: 2 } },
            { text: "I'll go along with whatever everyone wants.", scores: { warmth: 1, group: 1 } },
            { text: "I'll suggest something unexpected.", scores: { playful: 1, spontaneous: 2, social: 1 } },
            { text: "I'll make sure the quieter people get a say.", scores: { warmth: 2, observant: 2, group: 2 } }
        ]
    },
    {
        question: "You have a goal you REALLY care about.",
        answers: [
            { text: "I become extremely focused on it.", scores: { drive: 2, observant: 1 } },
            { text: "I'll work toward it steadily without obsessing over it.", scores: { drive: 2, observant: 1 } },
            { text: "I'll tell people about it because it motivates me.", scores: { drive: 1, social: 2, emotional: 1 } },
            { text: "I'll figure out the fastest route there.", scores: { drive: 2, observant: 2 } }
        ]
    },
    {
        question: "You're spending time with someone you're very comfortable with.",
        answers: [
            { text: "We can talk for hours.", scores: { social: 2, warmth: 1, emotional: 1 } },
            { text: "We can sit in silence and it's still comfortable.", scores: { warmth: 2, observant: 1 } },
            { text: "We're probably doing something ridiculous.", scores: { playful: 2, spontaneous: 2, social: 1 } },
            { text: "I'm constantly noticing little things about them.", scores: { observant: 2, warmth: 1 } }
        ]
    },
    {
        question: "Someone asks you to describe yourself.",
        answers: [
            { text: "I could give you a whole essay.", scores: { emotional: 2, observant: 1 } },
            { text: "I genuinely have no idea what to say.", scores: { emotional: 0, observant: 1 } },
            { text: "I'd probably make a joke instead.", scores: { playful: 2, social: 1 } },
            { text: "I'd describe what I do rather than who I am.", scores: { drive: 1, observant: 1 } }
        ]
    },
    {
        question: "You realise your friend has been doing something differently lately.",
        answers: [
            { text: "I noticed ages ago.", scores: { observant: 2 } },
            { text: "I ask them directly about it.", scores: { warmth: 1, observant: 1, emotional: 1 } },
            { text: "I wait until they mention it.", scores: { observant: 1, warmth: 1 } },
            { text: "I make a joke about it first.", scores: { playful: 2, social: 1 } }
        ]
    },
    {
        question: "Your friends would probably describe you as...",
        answers: [
            { text: "The responsible one.", scores: { drive: 1, observant: 1, group: 2 } },
            { text: "The funny one.", scores: { playful: 2, social: 1 } },
            { text: "The comforting one.", scores: { warmth: 2, group: 2 } },
            { text: "The unpredictable one.", scores: { playful: 1, spontaneous: 2 } }
        ]
    },
    {
        question: "Pick the situation that sounds most satisfying.",
        answers: [
            { text: "Accomplishing something I've been working toward for ages.", scores: { drive: 2 } },
            { text: "Having an amazing day with people I love.", scores: { warmth: 2, social: 1, group: 1 } },
            { text: "Making everyone laugh until nobody can breathe.", scores: { playful: 2, social: 1, group: 1 } },
            { text: "Having a quiet day where everything feels peaceful.", scores: { observant: 1 } }
        ]
    }
];

const members = {
    SION: {
        social: 55,
        warmth: 85,
        playful: 65,
        observant: 90,
        drive: 90,
        emotional: 65,
        spontaneous: 40,
        group: 95
    },

    RIKU: {
        social: 75,
        warmth: 80,
        playful: 90,
        observant: 65,
        drive: 75,
        emotional: 70,
        spontaneous: 85,
        group: 80
    },

    YUSHI: {
        social: 40,
        warmth: 85,
        playful: 60,
        observant: 95,
        drive: 90,
        emotional: 65,
        spontaneous: 35,
        group: 70
    },

    JAEHEE: {
        social: 60,
        warmth: 95,
        playful: 55,
        observant: 90,
        drive: 95,
        emotional: 75,
        spontaneous: 35,
        group: 95
    },

    RYO: {
        social: 75,
        warmth: 90,
        playful: 75,
        observant: 65,
        drive: 90,
        emotional: 70,
        spontaneous: 70,
        group: 85
    },

    SAKUYA: {
        social: 85,
        warmth: 75,
        playful: 100,
        observant: 50,
        drive: 65,
        emotional: 80,
        spontaneous: 100,
        group: 80
    }
};

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
    currentQuestion = 0;

    categories.forEach(category => {
        personality[category] = 0;
    });

    welcomeScreen.style.display = "none";
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;

        button.addEventListener("click", () => {
            addScore(answer.scores);
            nextQuestion();
        });

        answerButtons.appendChild(button);
    });
}

function addScore(scores) {
    categories.forEach(category => {
        personality[category] += scores[category] || 0;
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

    const labels = {
        social: "Social Energy",
        warmth: "Warmth",
        playful: "Playfulness",
        observant: "Observance",
        drive: "Drive",
        emotional: "Emotional Expression",
        spontaneous: "Spontaneity",
        group: "Group Role"
    };

    let resultHTML = "<h3>Your personality scores:</h3>";

    categories.forEach(category => {
        resultHTML += `
            <p>${labels[category]}: ${personality[category]}</p>
        `;
    });

    document.getElementById("results").innerHTML = `
        <p>You've completed all ${questions.length} questions!</p>
        ${resultHTML}
    `;
}

document.getElementById("restart-button").addEventListener("click", () => {
    resultScreen.style.display = "none";
    welcomeScreen.style.display = "block";
});
