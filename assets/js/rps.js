let randomChoiceDisplay=document.getElementById("random-choice");
let userChoiceDisplay=document.getElementById("user-choice");
let resultDisplay=document.getElementById("result");
let possibleChoices=document.querySelectorAll("button");

let userChoice;
let randomChoice;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener("click", (e)=>
{userChoice=e.target.id;
userChoiceDisplay.innerHTML=userChoice;}
generateRandomChoice();
getResult();
))



function generateRandomChoice{
    let randomNuumber=Math.floor(Math.random()*3+1);
    if (randomNumber===1){
        randomChoice="rock";
    }

    if (randomNumber===2){
        randomChoice="scissors";
    }

    if (randomNumber===3){
        randomChoice="paper";
    }
    randomChoiceDisplay.innerHTML=randomChoice;
}

function getResult(){
    
    if (randomChoice===userChoice){
        result="its  draw!";
    }

    else if (randomChoice==="rock"&& userChoice==="paper"){
        result="you win!";
    }

    else if (randomChoice==="rock"&& userChoice==="scissors"){
        result="you lose!";
    }

    else if  (randomChoice==="paper"&& userChoice==="scissors"){
        result="you win!";
    }

    else if (randomChoice==="rock"&& userChoice==="scissors"){
        result="you lose!";
    }

    else if  (randomChoice==="paper"&& userChoice==="scissors"){
        result="you win!";
    }

    else if (randomChoice==="paper"&& userChoice==="rock"){
        result="you lose!";
    }

    else if (randomChoice==="scissors"&& userChoice==="rock"){
        result="you win!";
    }

    else (randomChoice==="scissors"&& userChoice==="paper"){
        result="you lose!";
    }

    resultDisplay.innerHTML=result;
}




