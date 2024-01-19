let secondsLeft = 60;

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

startTimer();