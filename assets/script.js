let secondsLeft = 60;
let score = 0;

// Page selectors
let welcomeScreen = document.querySelector("#enterScreen");
let finishedScreen = document.querySelector("#finish");
let highScoreScreen = document.querySelector("#highScores");
let playAgainScreen = document.querySelector("#playAgain");
let q1Screen = document.querySelector("#q1");
let q2Screen = document.querySelector("#q2");
let q3Screen = document.querySelector("#q3");
let q4Screen = document.querySelector("#q4");
let q5Screen = document.querySelector("#q5");
let q6Screen = document.querySelector("#q6");
let q7Screen = document.querySelector("#q7");

let alertEl = document.querySelector("#alert")

function closeScreens() {
    welcomeScreen.style.display = "none";
    finishedScreen.style.display = "none";
    highScoreScreen.style.display = "none";
    playAgainScreen.style.display = "none";
    q1Screen.style.display = "none";
    q2Screen.style.display = "none";
    q3Screen.style.display = "none";
    q4Screen.style.display = "none";
    q5Screen.style.display = "none";
    q6Screen.style.display = "none";
    q7Screen.style.display = "none";
}

function openWelcome() {
    closeScreens();
    welcomeScreen.style.display = "block";
}

function openFinished() {
    let finalScore = document.querySelector("#finalScore")
    closeScreens();
    isTimer = false;
    score += secondsLeft;
    alertEl.style.display = "none";
    finishedScreen.style.display = "block";
    finalScore.textContent = "Your Final Score is " + score;
}

function openHighScores() {
    closeScreens();
    alertEl.style.display = "none";
    highScoreScreen.style.display = "block";
    isTimer = false;
}

function openPlayAgain() {
    closeScreens();
    playAgainScreen.style.display = "block";
}

function openq1() {
    closeScreens();
    q1Screen.style.display = "block";
}

function openq2() {
    closeScreens();
    q2Screen.style.display = "block";
}

function openq3() {
    closeScreens();
    q3Screen.style.display = "block";
}

function openq4() {
    closeScreens();
    q4Screen.style.display = "block";
}

function openq5() {
    closeScreens();
    q5Screen.style.display = "block";
}

function openq6() {
    closeScreens();
    q6Screen.style.display = "block";
}

function openq7() {
    closeScreens();
    q7Screen.style.display = "block";
}

// Keeps the timer off by default
let isTimer = false;

// Makes the timer count down from 60
let timerEl = document.querySelector("#timeText");
function startTimer() {
    secondsLeft = 60;
    isTimer = true;
    let countdownInt = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft == 0) {
            clearInterval(countdownInt);
            openFinished();
        } else if(isTimer == false) {
            secondsLeft = 60;
            clearInterval(countdownInt);
        }
    }, 1000);
}

// Page Navigation
let enterBtn = document.querySelector("#enterButton");
enterBtn.addEventListener("click", function() {
    startTimer();
    openq1();
});

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

// Questions
let correctAnswer = document.querySelectorAll("#q1b, #q2a, #q3d, #q4d, #q5c, #q6a, #q7d");
let wrongAnswer = document.querySelectorAll("#q1a, #q1c, #q1d, #q2b, #q2c, #q2d, #q3a, #q3b, #q3c, #q4a, #q4b, #q4c, #q5a, #q5b, #q5d, #q6b, #q6c, #q6d, #q7a, #q7b, #q7c");
function nextQuestion() {
    if(q1Screen.style.display === "block") {
        openq2();
    } else if (q2Screen.style.display === "block") {
        openq3();
    } else if (q3Screen.style.display === "block") {
        openq4();
    } else if (q4Screen.style.display === "block") {
        openq5();
    } else if (q5Screen.style.display === "block") {
        openq6();
    } else if (q6Screen.style.display === "block") {
        openq7();
    } else if (q7Screen.style.display === "block") {
        openFinished();
    }
}

// Handles answers
let alertText = document.querySelector("#alertText");

for (let i=0; i < correctAnswer.length; i++) {
correctAnswer[i].addEventListener("click", function() {
    alertEl.style.display = "block";
    alertText.textContent = "Correct!";
    score+=15;
    console.log(score);
    nextQuestion();
});
}

for (let i=0; i < wrongAnswer.length; i++) {
wrongAnswer[i].addEventListener("click", function() {
    alertEl.style.display = "block";
    alertText.textContent = "Wrong!";
    secondsLeft-=10;
    nextQuestion();
});
}

// High Scores
let submitBtn = document.querySelector("#submitBtn");
let initials = document.querySelector("#initials");

submitBtn.addEventListener("click", function() {
let scoreObject = {
    player: initials.value,
    quizScore: score
};

localStorage.setItem("playerScore", JSON.stringify(scoreObject));
openHighScores();

});

function updateScore {
    if()
}