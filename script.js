let startQuiz= document.querySelector('#start-quiz');
let timeEl= document.querySelector('.time');
let mainEl=document.getElementById("main");
let footerEl=document.getElementById('footer-message');
let secondsLeft= 80;
let reveal= document.getElementById('highscore-form')


//let score= timeLeft

startQuiz.addEventListener("click", function() {
    document.querySelector('.Slide-deck-1').style.display= "none";
})

/*function setTime(){
    let timerInterval= setInterval(function() {
        secondsLeft--;
        timeEl.textContent= 'Time: '+ secondsLeft;

        if (response!== answer){ 
            secondsLeft -15;

        } else {
            secondsLeft--;
        }
    if (secondsLeft >= 0) {
        reveal.removeAttribute("hidden")
        
    }
    } , 1000 );
}

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


for (let i=0; i < questions.length; i++) {
    mainEl.textContent= questions[i];
    if (response == answer) {
        footerEl.textContent= 'Correct!';
} else { footerEl.textContent='Wrong!'};



} */
        


