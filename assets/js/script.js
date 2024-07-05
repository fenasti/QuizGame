//Start the game hidden the instruction box and displaying the questions

const startBtn = document.getElementById("start-game");
const questionBox = document.getElementById("question-box");
const instructions = document.getElementById("instructions")
const nextBtn = document.getElementById("next")


//Questions Array
const quizQuestions = [
    {
        country: "France",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        country: "Japan",
        options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        country: "Brazil",
        options: ["Lima", "Brasilia", "Buenos Aires", "Santiago"],
        correctAnswer: "Brasilia"
    },
    {
        country: "Australia",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        country: "Canada",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        country: "South Africa",
        options: ["Pretoria", "Johannesburg", "Cape Town", "Durban"],
        correctAnswer: "Pretoria"
    }
];


startBtn.addEventListener("click", startGame)

//Replace the instruction box with the first element of questions
function startGame () {
    startBtn.classList.add("hiden");
    instructions.classList.add("hiden");
    questionBox.classList.remove("hiden");
    nextBtn.classList.remove("hiden");
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(i) {
    let question = quizQuestions[i].country;
    let answers = quizQuestions[i].options;

    document.getElementById("question").innerText = question;
    document.getElementById("answer1").innerText = answers[0];
    document.getElementById("answer2").innerText = answers[1];
    document.getElementById("answer3").innerText = answers[2];
    document.getElementById("answer4").innerText = answers[3];

    // Clear existing event listeners before adding a new ones
    document.querySelectorAll(".answer").forEach(btn => {
        let newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });

    document.querySelectorAll(".answer").forEach(function(btn) {
        btn.addEventListener("click", checkAnswer);
    });
}



//iterate thru all the questions element

let currentQuestionIndex = 0;

nextBtn.addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        alert("You've completed the quiz!");
    };
    resetBtn();
});


function checkAnswer(event) {
    let selectedAnswer = event.target.innerText;
    let correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        event.target.classList.remove("btn");
        event.target.classList.add("correct");
    } else {
        event.target.classList.remove("btn");
        event.target.classList.add("wrong");
    };
}

function resetBtn() {
    document.querySelectorAll(".answer").forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.classList.add("btn");
    });
}



