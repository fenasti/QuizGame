
const startBtn = document.getElementById("start-game");
const questionBox = document.getElementById("question-box");
const instructions = document.getElementById("instructions");
const nextBtn = document.getElementById("next");


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


startBtn.addEventListener("click", startGame);

//Replace the instruction box with the first element of questions
function startGame () {
    startBtn.classList.add("hiden");
    instructions.classList.add("hiden");
    questionBox.classList.remove("hiden");
    nextBtn.classList.remove("hiden");
    displayQuestion(currentQuestionIndex);
}

//Access to the questions and display them

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
        Swal.fire({
            title: "Good job!",
            text: `You've completed the quiz! Your score is ${score} of 6`,
            icon: "success"
          });
        nextBtn.classList.add("hiden");
        startBtn.classList.remove("hiden");
        startBtn.innerText = "Restart!";
        currentQuestionIndex = 0;
        resetGame();

    }
    resetBtn();
    incrementQuestionNmr();
    activeButton();
});


function checkAnswer(event) {
    let selectedAnswer = event.target.innerText;
    let correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    

    if (selectedAnswer === correctAnswer) {
        event.target.classList.remove("btn");
        event.target.classList.add("correct");
        incrementScore();
    } else {
        event.target.classList.remove("btn");
        event.target.classList.add("wrong");
    }
    disableButtons();
}

//function to diable buttons after answering

//https://www.qodo.co.uk/blog/javascript-enabling-and-disabling-form-field-elements/#:~:text=HTML%20form%20elements%20have%20an,property%20to%20true%20or%20false%20.

let buttons = document.getElementsByClassName("answer");

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function activeButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

//returns the buttons to their initial mode

function resetBtn() {
    document.querySelectorAll(".answer").forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.classList.add("btn");
    });
}

//Scores and reset numbers

let score = 0;

function incrementScore() {
    document.getElementById("score").innerText = ++score;
    return score;
}

let questionNmbr = 1;

function incrementQuestionNmr() {
    document.getElementById("question-nmbr").innerText = ++questionNmbr;
}

function resetGame() {
    questionNmbr = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("question-nmbr").innerText = questionNmbr;
}




