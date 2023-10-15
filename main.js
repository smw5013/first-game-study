let UserGo = document.getElementById("User-go");
let UserReset = document.getElementById("User-reset");
let ResultArea = document.getElementById("Result-area");
let ChancesArea = document.getElementById("Chances-area");
let UserInput = document.getElementById("User-input");
let ChancesNub = document.getElementById("Chances-area");
let Chances = 5;
let GameOver = false;
let ComputerNum = 0;
let History = [];

ChancesArea.textContent = `Chances: ${Chances}`;
UserGo.addEventListener("click", Go);
UserReset.addEventListener("click", Reset);
UserInput.addEventListener("focus", function(){
    UserInput.value = "";
});

function RandomNum(){
    ComputerNum = Math.floor(Math.random()*100)+1;
    console.log("Correct Answer is", ComputerNum);
}

RandomNum();

function Go(){
    let RealInput = UserInput.value;
     
    if(RealInput<1 || RealInput>100){
        ResultArea.textContent = "Please write number between 1 to 100";
        return;
    }
    if(History.includes(RealInput)){
        ResultArea.textContent = "It's already used, please write another number";
        return;
    }
    Chances --;
    ChancesArea.textContent = `Chances: ${Chances}`;
    History.push(RealInput);
 
    if(RealInput<ComputerNum){
        ResultArea.textContent = "Up!!";
    }
    if(RealInput>ComputerNum){
        ResultArea.textContent = "Down!!";
    }
    if(RealInput==ComputerNum){
        ResultArea.textContent = "That's right!!";
        GameOver = true;   
    }
    if(Chances<1){
        GameOver = true;
    }
    if(GameOver == true){
        UserGo.disabled = true;
    }
}

function Reset(){
UserInput.value = "";
RandomNum();
Chances = 5;
ChancesArea.textContent = `Chances: ${Chances}`;
History = [];
ResultArea.textContent = "Result is gonna be appeared in here";
UserGo.disabled = false;
GameOver = false;
}