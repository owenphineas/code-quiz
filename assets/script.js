let secondsLeft = 60;

// Page selectors
let welcomeScreen = document.querySelector("#enterScreen");
let questionScreen = document.querySelector("#questions");
let finishedScreen = document.querySelector("#finish");
let highScoreScreen = document.querySelector("#highScores");
let playAgainScreen = document.querySelector("#playAgain");

// Makes the timer count down from 60
function startTimer() {
    let timerEl = document.querySelector("#timeText");
    let countdown = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft == 0) {
        clearInterval(countdown);
        // TO DO: Call the function that takes you to Finished Screen
    }
}, 1000);
}

// Starts the timer and switches to questions when the 'Enter' button is clicked
let enterBtn = document.querySelector("#enterButton");
enterBtn.addEventListener("click", function() {
    startTimer();
    welcomeScreen.style.display = "none";
    questionScreen.style.display = "block";
});