// Create an array of questions and save them to a variable 
var questions = [{
    question: "What purpose does Javascript solve?",
    answers: ["It helps to develop a responsive website", "It serves as the basis for a website", "It solely adjusts the colors of the website",
     "Javascript is not necessary"],
    correct: "It helps to develop a responsive website"
},
{
    question: "What purpose does CSS solve?",
    answers: ["It enables the ability to place text on a webpage", "It makes a website pretty",
     "It creates the ability to generate prompts on a webpage", "It only you to only change colors"],
    correct: "It makes a website pretty", 
},
{
    question: "What is html?", 
    answers:["Nothing important","A place just to generate words on a webpage",
    "It serves as the basis for every webpage created", "A javascript element"], 
    correct: "It serves as the basis for every webpage created",
},   
{
    question:"Where do you link the css file(s) in an html?",
    answers:["At the end of the body", "At the end of the head", "Inside a div",
    "Anywhere within the body"],
    correct:"At the end of the head",
},
] 
var questionIndex = 0 
// Put timer in function below at line 30
document.getElementById("begin-btn").addEventListener('click', function (){ 
    var startingMinutes = 1; 
    let time = startingMinutes * 60; 
    
    var timerEl = document.getElementById('timer'); 

    setInterval(updateCountdown,1000);

    function updateCountdown(){
        var minutes = Math.floor(time/60) 
        let seconds = time % 60; 

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerEl.innerHTML = `${minutes}:${seconds}`; 
        time--; 
        time = time < 0 ? 0:time;
    }
    getQuestion() 
}) 
function getQuestion() {
    var currentQuestion = questions[questionIndex] 
    document.getElementById('question').textContent = currentQuestion.question 
    var answer1 = document.getElementById('answer1'); 
    var answer2 = document.getElementById('answer2'); 
    var answer3 = document.getElementById('answer3'); 
    var answer4 = document.getElementById('answer4');
    answer1.textContent = currentQuestion.answers[0] 
    answer2.textContent = currentQuestion.answers[1]
    answer3.textContent = currentQuestion.answers[2] 
    answer4.textContent = currentQuestion.answers[3]
}
document.getElementById('answer1').addEventListener('click', function() {
    var currentQuestion = questions[questionIndex].correct 
    console.log(this.textContent); 
    if (this.textContent==currentQuestion) {
        console.log('correct') 
    } else {
        console.log('wrong')
    }

}) 
document.getElementById('answer2').addEventListener('click', function() {
    var currentQuestion = questions[questionIndex].correct 
    console.log(this.textContent); 
    if (this.textContent==currentQuestion) {
        console.log('correct') 
    } else {
        console.log('wrong')
    }

}) 
document.getElementById('answer3').addEventListener('click', function() {
    var currentQuestion = questions[questionIndex].correct 
    console.log(this.textContent); 
    if (this.textContent==currentQuestion) {
        console.log('correct') 
    } else {
        console.log('wrong')
    }

}) 
document.getElementById('answer4').addEventListener('click', function() {
    var currentQuestion = questions[questionIndex].correct 
    console.log(this.textContent); 
    if (this.textContent==currentQuestion) {
        console.log('correct') 
    } else {
        console.log('wrong')
    }

}) 
document.getElementById('next-btn').addEventListener('click', function() {
    questionIndex++; 
    getQuestion(); 
}) 
// create a check function below; check to see if the game is done 1st. If it is done save the initials and score to local storage
function lastQuestionDetector() {
    
        
    }

