const num1 = Math.ceil(Math.random()*20);

const num2 = Math.ceil(Math.random()*20);

const questions = document.getElementById("question");



let score = 50;

questions.innerText = `What is ${num1} multiplied by ${num2}?`

const input = document.getElementById("input");

const form = document.getElementById("form");

const correctAnswer = num1 * num2;

form.addEventListener("submit", ()=>{
    userAnswer = +input.value;
    if(userAnswer === correctAnswer){
        score ++;
    }
    else{
        score --;
    }
})