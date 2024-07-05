//Start the game hidden the instruction box and displaying the questions

const startBtn = document.getElementById("start-game");
const questionBox = document.getElementById("question-box");
const instructions = document.getElementById("instructions")
const nextBtn = document.getElementById("next")

startBtn.addEventListener("click", startGame,)

function startGame () {
    startBtn.classList.add("hiden");
    instructions.classList.add("hiden");
    questionBox.classList.remove("hiden");
    nextBtn.classList.remove("hiden");
    displayQuestion(0)
}



function displayQuestion(i) {
    let question = quizQuestions[i].country;
    let answers = quizQuestions[i].options;

    document.getElementById("question").innerText = question;
    document.getElementById("answer1").innerText = answers[0];
    document.getElementById("answer2").innerText = answers[1];
    document.getElementById("answer3").innerText = answers[2];
    document.getElementById("answer4").innerText = answers[3];
}

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

