let startQuizButton= document.querySelector('#start-quiz');
let timeEl= document.querySelector('.time');
let mainEl=document.getElementById("main");
let footerEl=document.getElementById('footer-message');
let secondsLeft= 80;
let reveal= document.getElementById('highscore-form');
let currentQuestion= 0;
let highScore= document.getElementById('highscore');
let scores = [];

reveal.style.display="none";

startQuizButton.addEventListener("click", function() {
    document.querySelector('.Slide-deck-1').style.display= "none";
    displayQuestion();
    startQuiz();
})

function revealForm(){
 reveal.style.display='';
 footerEl.textContent='';
//  for (var i=0; i < scores.length; i++){
//      let score = scores[i];

//     let li= document.createElement('li');
//     li.textContent= score;
//      li.setAttribute('data-index', i);

//     highScore.appendChild(li);

//  }
 }

function startQuiz() {
    
let timeInterval= setInterval(function() {
 secondsLeft--;
 timeEl.textContent= 'Time: '+ secondsLeft;
 if(currentQuestion==questions.length){
    highScore.innerHTML=secondsLeft;
    timeInterval.clearInterval();

 }
//  if (secondsLeft >= questions.length){
//    highScore.textContent= secondsLeft;
//    timeInterval.clearInterval();
  //highScore.InnerHTML = secondsLeft; 
} , 1000 );
}

function displayQuestion(){
    if (currentQuestion == questions.length){
        revealForm();
    }
let testQuestions= document.createElement ('p');
testQuestions.textContent=questions[currentQuestion].text;
testQuestions.classList.add('questions');
mainEl.appendChild(testQuestions);
for (let i=0; i<4; i++){
    let choiceButton= document.createElement ('button');
    choiceButton.classList.add ('answer');
    choiceButton.textContent=questions[currentQuestion].choices[i];
    mainEl.appendChild(choiceButton);
    choiceButton.addEventListener("click", function(){
        if (i == questions[currentQuestion].answer){
             footerEl.textContent= 'Correct!';
} else { 
    footerEl.textContent='Wrong!';
    secondsLeft -=15;
    }
mainEl.innerHTML=''; 
currentQuestion++;
displayQuestion();
})
}}






const questions = [ 
 {text: ' What is the name of the element where you place your Javascript code on an HTML document??',
choices: [ 'Inside the body element', 'Inside the head element', 'Inside the main element', 'Inside the script element'],
answer: 3 },
{text: 'How do we declare a conditional element in Javascript?',
choices: [ 'For loop', 'While loop', 'if... else statement', 'A boolean'],
answer: 2 },
{text: ' What are two types of scope that JavaScript uses??',
choices: [ 'Global and Local', 'Global and linear', 'Inside and outside', 'Abroad and inner'],
answer: 0 },
{text: 'A very important tool used for debugging is...?',
choices: [ 'for loop', 'an if/else conditional statement', 'console log', 'An event listener'],
answer: 2 },
{text: 'When we store groups of data inside a variable it is called a what?',
choices: [ 'A string', 'A number', 'An Array', 'A list'],
answer: 2 }, ] 



