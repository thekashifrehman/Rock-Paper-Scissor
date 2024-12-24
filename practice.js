let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");
const resetButton = document.querySelector("#reset");

// Function to Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

// Function to Handle Results
const handleResult = (userChoice, compChoice) => {
    if (userChoice === compChoice) return "draw";
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "user";
    }
    return "comp";
};

// Function to Update Scores and Message
const updateScoreAndMessage = (result, userChoice, compChoice) => {
    if (result === "draw") {
        msg.innerText = `It's a draw! Both chose ${userChoice}`;
        msg.style.backgroundColor = "#081b31";
    } else if (result === "user") {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Function to Play the Game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    const result = handleResult(userChoice, compChoice);
    updateScoreAndMessage(result, userChoice, compChoice);
};

// Add Event Listeners for Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id").toLowerCase();
        playGame(userChoice);
    });
});

// Reset Functionality
resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Make Your Move!";
    msg.style.backgroundColor = "#0d1b2a";
});
