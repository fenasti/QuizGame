const startBtn = document.getElementById("start-game");
const questionBox = document.getElementById("question-box");
const instructions = document.getElementById("instructions")
const nextBtn = document.getElementById("next")

startBtn.addEventListener("click", startGame)

function startGame () {
    startBtn.classList.add("hiden");
    instructions.classList.add("hiden");
    questionBox.classList.remove("hiden");
    nextBtn.classList.remove("hiden");
}
   