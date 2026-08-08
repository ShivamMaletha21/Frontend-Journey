// data which will be used in quiz
const questions = [
    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],

        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style a webpage?",

        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],

        answer: "CSS"
    },

    {
        question: "Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",

        options: [
            "var",
            "let",
            "const",
            "static"
        ],

        answer: "const"
    },

    {
        question: "Which method is used to add an element to the end of an array?",

        options: [
            "pop()",
            "push()",
            "shift()",
            "add()"
        ],

        answer: "push()"
    },

    {
        question: "What does === check in JavaScript?",

        options: [
            "Only value",
            "Only type",
            "Value and type",
            "Variable name"
        ],

        answer: "Value and type"
    },

    {
        question: "Which method is used to select an HTML element by its ID?",

        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],

        answer: "getElementById()"
    }
];


let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreContainer = document.getElementById("score");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");


// SHOW QUESTION
function showQuestion() {

    // remove previous options
    optionsContainer.innerHTML = "";

    // show current question
    questionContainer.innerText =
        questions[currentQuestion].question;

    // show current options
    questions[currentQuestion].options.forEach((option) => {

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "answer";
        input.value = option;

        const label = document.createElement("label");

        label.innerText = option;

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(label);
    });
}


// START QUIZ
button1.addEventListener("click", () => {

    showQuestion();

});


// NEXT BUTTON
button2.addEventListener("click", () => {

    // get selected answer
    const selectedAnswer =
        document.querySelector('input[name="answer"]:checked');

    // if user selected an answer
    if (selectedAnswer) {

        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }

    }

    // move to next question
    currentQuestion++;

    // check if quiz is finished
    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionContainer.innerText = "Quiz Completed!";
        optionsContainer.innerHTML = "";

        scoreContainer.innerText =
            `Your Score: ${score} / ${questions.length}`;

        button2.style.display = "none";
    }
});