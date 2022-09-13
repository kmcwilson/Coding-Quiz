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


//Setting the time interval when the start Quiz button is clicked

let timeInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft === 0) {
        endGame();
        clearInterval(timeInterval);
    }
    timeEl.textContent = "Time: " + secondsLeft;
}, 1000);


//Placing an if statement inside my displayQuestions function for when the questions have ended.

function displayQuestion() {
    if (currentQuestion == questions.length) {
        endGame();
    }
    //Creating a paragraph element called test questions and using it to display the current question text
    let testQuestions = document.createElement("p");
    if (currentQuestion <= 4) {
        testQuestions.textContent = questions[currentQuestion].text;
    }
    //Adding class list to the element entitled questions and getting the main element to append the child test questions within HTML
    testQuestions.classList.add("questions");
    mainEl.appendChild(testQuestions);
    //Creating  for loop to go through the questions
    for (let i = 0; i < 4; i++) {
        //Creating a choice button for answers in multiple choice by creating an element within the main element
        let choiceButton = document.createElement("button");
        //Adding  class to this choice button so that I am able to style it.
        choiceButton.classList.add("answer");
        if (currentQuestion <= 4) {
            //Choice button is now to display the choices located within the questions constant
            choiceButton.textContent = questions[currentQuestion].choices[i];
        }
        //Appending the child choice button to the main element

        mainEl.appendChild(choiceButton);
        //Adding an event listener to the choice button to ensure that it states correct when the choice reflects the answer within the current question and wrong with anything else.
        choiceButton.addEventListener("click", function () {
            if (i == questions[currentQuestion].answer) {
                footerEl.textContent = "Correct!";
            } else {
                //If a question is answer incorrectly it will display wrong and will take way 15 seconds.
                footerEl.textContent = "Wrong!";
                secondsLeft -= 15;
                if (secondsLeft <= 0) {
                    endGame();
                    return;
                }
            }
            //This ensures that the main element inner HTML is a blank string and then it will go through to the next question
            mainEl.innerHTML = "";
            currentQuestion++;
            displayQuestion();
        });
    }
}

//This takes the form that I have hidden and shows it once the game as ended and uses the display question function

function endGame() {
    highScoreForm.style.display = "";
    footerEl.textContent = "";
    clearInterval(timeInterval);
    document.querySelectorAll('.answer').style.display = 'none';
    displayScores();
}

//This function will take the scores listed in my global variable and will create an li element for each of the scores that are listed by the player

function displayScores() {
    const scores = loadHighScores();
    scoreList.innerHTML = '';
    highScores.textContent = scores.length;
    for (var i = 0; i < scores.length; i++) {
        let li = document.createElement('li');
        li.textContent = scores[i].name + '  ' + scores[i].score;
        scoreList.appendChild(li);

    }
}
// Loading the scores to the local storage function 
function loadHighScores() {
    return JSON.parse(localStorage.getItem('scores')) || [];
}

//This function takes the initials a player has placed and then attaches their score to what is left in the secondsLeft variable.This is then set into local stoarge.
function storeScore(initials) {
    const temp = loadHighScores();
    temp.push({ name: initials, score: secondsLeft });
    localStorage.setItem('scores', JSON.stringify(temp));
}
//Adding an event listerner function to my save button on my form and trimming the value of the text, if the value is nothing then it will return to original screen.
save.addEventListener('click', function (event) {

    let scoreText = scoreInput.value.trim();

    if (scoreText === '') {
        return;
    }
    scoreInput.value = '';
    storeScore(scoreText);
    displayScores();
});
//This is my questions constant that is holding my object of questions.

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
















