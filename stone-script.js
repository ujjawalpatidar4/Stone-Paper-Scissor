// Neutral coices

let computerscore = 0;
let playerscore = 0;

const result = document.querySelector('.result');
const score = document.querySelector('.score');
const restart = document.getElementById('restart');



// Computer Choice

function getcomputerchoice() {
    var randomnumber = Math.floor(Math.random() * 3) + 1;
    if (randomnumber == 1) {
        return "stone";
    }
    else if (randomnumber == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}



// Player Choice

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    game("stone");
    // console.log("Stone");
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    game("paper");
    // console.log("Paper");
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
    game("scissor");
    // console.log("Scissor");
});



// Game

function playround(playerselection, computerselection) {
    if (playerselection === "stone" && computerselection === "stone") {
        result.textContent = "It's a tie!";
        scr();
    }
    else if (playerselection === "stone" && computerselection === "paper") {
        ++computerscore;
        result.textContent = `You LOSE! ${computerselection} beats ${playerselection}`;
        scr();
    }
    else if (playerselection === "stone" && computerselection === "scissor") {
        ++playerscore;
        result.textContent = `You WON! ${playerselection} beats ${computerselection}`;
        scr();
    }


    else if (playerselection === "paper" && computerselection === "paper") {
        result.textContent = "It's a tie!";
        scr();
    }
    else if (playerselection === "paper" && computerselection === "scissor") {
        ++computerscore;
        result.textContent = `You LOSE! ${computerselection} beats ${playerselection}`;
        scr();  
    }
    else if (playerselection === "paper" && computerselection === "stone") {
        ++playerscore;
        result.textContent = `You WON! ${playerselection} beats ${computerselection}`;
        scr();
    }


    else if (playerselection === "scissor" && computerselection === "scissor") {
        result.textContent = "It's a tie!";
        scr();
    }
    else if (playerselection === "scissor" && computerselection === "stone") {
        ++computerscore;
        result.textContent = `You LOSE! ${computerselection} beats ${playerselection}`;
        scr();
    }
    else if (playerselection === "scissor" && computerselection === "paper") {
        ++playerscore;
        scr();
        result.textContent = `You WON! ${playerselection} beats ${computerselection}`;
    }
}



// GAME END

function gameEnd(){
    document.querySelector('#btn1').disabled = true;
    document.querySelector('#btn2').disabled = true;
    document.querySelector('#btn3').disabled = true;
}



// GAME START

restart.addEventListener('click', function () {
    gameStart();
});

function gameStart(){
    computerscore = 0;
    playerscore = 0;
    result.textContent = "";
    score.textContent = `${playerscore} - ${computerscore}`;
    document.querySelector('#btn2').disabled = false;
    document.querySelector('#btn3').disabled = false;
    document.querySelector('#btn1').disabled = false;
}



// SCORE

function scr(){
    if (playerscore == 5){
        score.textContent = "YOU WON THE GAME!!";
        gameEnd();
    }
    else if(computerscore == 5){
        score.textContent = "YOU LOSE THE GAME!!";
        gameEnd();
    }
    else score.textContent = `${playerscore} - ${computerscore}`;
}



// Let's ROCK!

function game(playerinput) {
    var playerselection = playerinput;
    var computerselection = getcomputerchoice();
    console.log(playround(playerselection, computerselection));
}
