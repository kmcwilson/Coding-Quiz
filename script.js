let startQuizButton = document.querySelector("#start-quiz");
let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let footerEl = document.getElementById("footer-message");
let secondsLeft = 80;
let highScoreForm = document.getElementById("highscore-form");
let currentQuestion = 0;
let highScores = document.getElementById("high-score");
let scoreList = document.getElementById('score-list');
let scoreInput = document.getElementById('your-score');
let saveButton = document.getElementById('save');

// This is setting the initial form to display as none so it will not show up on the main page
highScoreForm.style.display = "none";

// This is adding a click function to the Start quiz button
startQuizButton.addEventListener("click", function () {
    document.querySelector(".Slide-deck-1").style.display = "none";
    displayQuestion();
});


// Setting the time interval when the start Quiz button is clicked
let timeInterval = setInterval(function () {
    secondsLeft--; 
    if(secondsLeft===0){
        endGame();
    }
    timeEl.textContent = "Time: " + secondsLeft;
}, 1000);

function displayQuestion() {
    if (currentQuestion == questions.length) {
        endGame();
    }
    let testQuestions = document.createElement("p");
    if (currentQuestion <= 4) {
        testQuestions.textContent = questions[currentQuestion].text;
    }

    testQuestions.classList.add("questions");
    mainEl.appendChild(testQuestions);
    for (let i = 0; i < 4; i++) {
        let choiceButton = document.createElement("button");
        choiceButton.classList.add("answer");
        if (currentQuestion <= 4) {
            choiceButton.textContent = questions[currentQuestion].choices[i];
        }

        mainEl.appendChild(choiceButton);
        choiceButton.addEventListener("click", function () {
            if (i == questions[currentQuestion].answer) {
                footerEl.textContent = "Correct!";
            } else {
                footerEl.textContent = "Wrong!";
                secondsLeft -= 15; 
                if(secondsLeft<=0){
                    endGame();
                    console.log('hello');
                    return;
                }
            }

            mainEl.innerHTML = "";
            currentQuestion++;
            displayQuestion();
        });
    }
}

function endGame() {
    highScoreForm.style.display = "";
    footerEl.textContent = "";

    clearInterval(timeInterval);
    displayScores();
}


function displayScores() {
    const scores= loadHighScores();
    scoreList.innerHTML = '';
    highScores.textContent = scores.length;
    for (var i = 0; i < scores.length; i++) {
        let li = document.createElement('li');
        li.textContent = scores[i].name+'  '+scores[i].score;
        scoreList.appendChild(li);

    }
}

function loadHighScores(){
    return JSON.parse(localStorage.getItem('scores')) || [];
}

function storeScore(initials) {
    const temp= loadHighScores();
    temp.push({name:initials, score:secondsLeft});
    localStorage.setItem('scores', JSON.stringify(temp));
}

save.addEventListener('click', function (event) {

    let scoreText = scoreInput.value.trim();

    if (scoreText === '') {
        return;
    }
    scoreInput.value = '';
    storeScore(scoreText);
    displayScores();
});


const questions = [
    {
        text: " What is the name of the element where you place your Javascript code on an HTML document??",
        choices: [
            "Inside the body element",
            "Inside the head element",
            "Inside the main element",
            "Inside the script element",
        ],
        answer: 3,
    },
    {
        text: "How do we declare a conditional element in Javascript?",
        choices: ["For loop", "While loop", "if... else statement", "A boolean"],
        answer: 2,
    },
    {
        text: " What are two types of scope that JavaScript uses??",
        choices: [
            "Global and Local",
            "Global and linear",
            "Inside and outside",
            "Abroad and inner",
        ],
        answer: 0,
    },
    {
        text: "A very important tool used for debugging is...?",
        choices: [
            "for loop",
            "an if/else conditional statement",
            "console log",
            "An event listener",
        ],
        answer: 2,
    },
    {
        text: "When we store groups of data inside a variable it is called a what?",
        choices: ["A string", "A number", "An Array", "A list"],
        answer: 2,
    },
];
// init();
// storeScores();
// displayScores();















