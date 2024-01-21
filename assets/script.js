let secondsLeft = 60;

// Page selectors
let welcomeScreen = document.querySelector("#enterScreen");
let questionScreen = document.querySelector("#questions");
let finishedScreen = document.querySelector("#finish");
let highScoreScreen = document.querySelector("#highScores");
let playAgainScreen = document.querySelector("#playAgain");

function closeScreens() {
    welcomeScreen.style.display = "none";
    questionScreen.style.display = "none";
    finishedScreen.style.display = "none";
    highScoreScreen.style.display = "none";
    playAgainScreen.style.display = "none";
}

function openWelcome() {
    closeScreens();
    welcomeScreen.style.display = "block";
}

function openQuestion() {
    closeScreens();
    questionScreen.style.display = "block";
}

function openFinished() {
    closeScreens();
    finishedScreen.style.display = "block";
}

function openHighScores() {
    closeScreens();
    highScoreScreen.style.display = "block";
}

function openPlayAgain() {
    closeScreens();
    playAgainScreen.style.display = "block";
}

// Makes the timer count down from 60
let timerEl = document.querySelector("#timeText");
function startTimer() {
    let countdownInt = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft == 0) {
        clearInterval(countdownInt);
        openFinished();
    }
}, 1000);
}

// Starts the timer and switches to questions when the 'Enter' button is clicked
let enterBtn = document.querySelector("#enterButton");
enterBtn.addEventListener("click", function() {
    startTimer();
    openQuestion();
});

// Switches to the High Scores screen when "View High Scores" is clicked
let viewHighScoreBtn = document.querySelector("#viewHighScores");
viewHighScoreBtn.addEventListener("click", function () {
    openHighScores();
});

let backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", function() {
    openWelcome();
});

let playAgainBtn = document.querySelector("#playagainBtn");
playAgainBtn.addEventListener("click", function() {
    openWelcome();
});