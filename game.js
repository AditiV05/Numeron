// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var number1=Math.round(Math.random()*100)
const number1Box=document.getElementById("number1");
number1Box.innerText=number1;

var number2=Math.round(Math.random()*100)
const number2Box=document.getElementById("number2");
number2Box.innerText=number2;


// Iteration 3: Creating variables required to make the game functional

const plusBtn=document.getElementById("plus");
const minusBtn=document.getElementById("minus");
const mulBtn=document.getElementById("mul");
const divideBtn=document.getElementById("divide");;
const modulusBtn=document.getElementById("modulus");
var score=0;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var number3;
var number3Box=document.getElementById("number3");


// Iteration 5: Creating a randomise function to make the game functional

function randomise(){

    number1=Math.round(Math.random()*100)
    number2=Math.round(Math.random()*100)
    if(number1<number2){
        var temp=number1;
        number1=number2;
        number2=temp;
    }

    number1Box.innerText=number1;
    number2Box.innerText=number2;

    let OperatorArr=["+","-","*","/","%"];

    let randomIndex=Math.floor(Math.random()*OperatorArr.length);

   

    switch(OperatorArr[randomIndex]){

        case "+":
            number3=number1+number2;
            break;
        case "-":
            number3=number1-number2;
            break;
        case "*":
            number3=number1*number2;
            break;
        case "/":
            number3=Math.floor(number1/number2);
            break;
        case "%":
            number3=number1%number2;
            break;
        default:
            randomise();
            
    }

    number3Box.innerText=number3;

}

randomise();


// Iteration 6: Making the Operators (button) functional

plusBtn.onclick=()=>{
    if (number1+number2===number3){
        score++;
        randomise();
        resetTime();
    }else{
        location.href = "gameover.html?score=" + score;
    }
}

minusBtn.onclick=()=>{
    if (number1-number2==number3){
        score++;
        randomise();
        resetTime();
    }else{
        location.href = "gameover.html?score=" + score;
    }
}

mulBtn.onclick=()=>{
    if (number1*number2==number3){
        score++;
        randomise()
        resetTime();
    }else{
        location.href = "gameover.html?score=" + score;
    }
}

divideBtn.onclick=()=>{
    if (number1/number2==number3){
        score++;
        randomise();
        resetTime();
    }else{
        location.href = "gameover.html?score=" + score;
    }
}

modulusBtn.onclick=()=>{
    if (number1%number2==number3){
        score++;
        randomise();
        resetTime();
    }else{
        location.href = "gameover.html?score=" + score;
    }
}

// Iteration 7: Making Timer functional
var time=20;
let timer=document.getElementById("timer");

function startTimer(){
    time = 20;
    timer.innerText = time;

    var intervalidId = setInterval(function (){
        time--;

        if(time == 0){
            clearInterval(intervalidId);
            timer.innerText = time;
            location.href = "gameover.html?score="
        }else{
            timer.innerText = time;
        }
    },1000);
}
startTimer();


function resetTime(){
    clearInterval();
    startTimer();
}

