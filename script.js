/*=========================================
      TIC TAC TOE - SCRIPT
      PART 1
==========================================*/

// =============================
// Select Elements
// =============================
// console.log(clickSound);
// console.log(winSound);



const cells = document.querySelectorAll(".cell");

const statusText = document.getElementById("status");

const restartBtn = document.getElementById("restart");

const newGameBtn = document.getElementById("newGame");

const popup = document.getElementById("winnerPopup");

const winnerText = document.getElementById("winnerText");

const closePopup = document.getElementById("closePopup");

const xScoreText = document.getElementById("x-score");

const oScoreText = document.getElementById("o-score");

const drawScoreText = document.getElementById("draw-score");

// =============================
// Sounds
// =============================

const clickSound = document.getElementById("clickSound");

const winSound = document.getElementById("winSound");

const drawSound = document.getElementById("drawSound");

const restartSound = document.getElementById("restartSound");

// =============================
// Images
// =============================

const xImage = "images/x.png";

const oImage = "images/o.png";

// =============================
// Variables
// =============================

let board = ["","","","","","","","",""];

let currentPlayer = "X";

let gameRunning = true;

let xScore = 0;

let oScore = 0;

let drawScore = 0;

// =============================
// Winning Combinations
// =============================

const winningConditions = [

[0,1,2],

[3,4,5],

[6,7,8],

[0,3,6],

[1,4,7],

[2,5,8],

[0,4,8],

[2,4,6]

];

// =============================
// Start Game
// =============================

cells.forEach(cell=>{

cell.addEventListener("click",cellClicked);

});

// =============================
// Cell Click
// =============================

function cellClicked(){

const index=this.dataset.index;

if(board[index]!=="" || !gameRunning){

return;

}

// play sound

clickSound.currentTime=0;

clickSound.play();

// save move

board[index]=currentPlayer;

// image

const img=document.createElement("img");

img.src=currentPlayer==="X"

?xImage

:oImage;

cell=this;

cell.appendChild(img);

// check winner

checkWinner();

}

// =============================
// Change Turn
// =============================

function changePlayer(){

currentPlayer=currentPlayer==="X"

?"O"

:"X";

// update status

statusText.innerHTML=

currentPlayer==="X"

?'<img src="images/x.png" class="turn-icon"> Player X Turn'

:'<img src="images/o.png" class="turn-icon"> Player O Turn';

}

// =============================
// Check Winner
// =============================

function checkWinner(){

let roundWon=false;

let winPattern=[];

for(let i=0;i<winningConditions.length;i++){

const condition=winningConditions[i];

const a=board[condition[0]];

const b=board[condition[1]];

const c=board[condition[2]];

if(a===""

||b===""

||c===""){

continue;

}

if(a===b && b===c){

roundWon=true;

winPattern=condition;

break;

}

}

if(roundWon){

gameRunning=false;

// highlight

winPattern.forEach(index=>{

cells[index].classList.add("win");

});

// sound

winSound.play();

// update score

if(currentPlayer==="X"){

xScore++;

xScoreText.textContent=xScore;

}else{

oScore++;

oScoreText.textContent=oScore;

}

// popup

winnerText.innerHTML=

`🏆 Player ${currentPlayer} Wins!`;

popup.classList.add("active");

return;

}

// draw

if(!board.includes("")){

gameRunning=false;

drawScore++;

drawScoreText.textContent=drawScore;

drawSound.play();

winnerText.innerHTML="🤝 Match Draw!";

popup.classList.add("active");

return;

}

// next turn

changePlayer();

}

/*=========================================
      TIC TAC TOE - SCRIPT
      PART 2
==========================================*/

// ===============================
// Restart Current Match
// ===============================

restartBtn.addEventListener("click", restartGame);

function restartGame(){

    restartSound.currentTime = 0;
    restartSound.play();

    board = ["","","","","","","","",""];

    currentPlayer = "X";

    gameRunning = true;

    cells.forEach(cell=>{

        cell.innerHTML = "";

        cell.classList.remove("win");

    });

    statusText.innerHTML =
    '<img src="images/x.png" class="turn-icon"> Player X Turn';

    popup.classList.remove("active");

}

// ===============================
// New Game
// ===============================

newGameBtn.addEventListener("click", newGame);

function newGame(){

    restartGame();

    xScore = 0;
    oScore = 0;
    drawScore = 0;

    updateScoreBoard();

    saveScores();

}

// ===============================
// Close Winner Popup
// ===============================

closePopup.addEventListener("click",()=>{

    popup.classList.remove("active");

    restartGame();

});

// ===============================
// Update Scoreboard
// ===============================

function updateScoreBoard(){

    xScoreText.textContent = xScore;

    oScoreText.textContent = oScore;

    drawScoreText.textContent = drawScore;

}

// ===============================
// Local Storage
// ===============================

function saveScores(){

    localStorage.setItem("tic_x",xScore);

    localStorage.setItem("tic_o",oScore);

    localStorage.setItem("tic_draw",drawScore);

}

function loadScores(){

    xScore = Number(localStorage.getItem("tic_x")) || 0;

    oScore = Number(localStorage.getItem("tic_o")) || 0;

    drawScore = Number(localStorage.getItem("tic_draw")) || 0;

    updateScoreBoard();

}

loadScores();

// ===============================
// Save Score After Every Match
// ===============================

const oldWinner = checkWinner;

checkWinner = function(){

    oldWinner();

    saveScores();

}

// ===============================
// Keyboard Shortcut
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="r" || e.key==="R"){

        restartGame();

    }

});

// ===============================
// Small Welcome Message
// ===============================

console.log("%c🎮 Welcome to Tic Tac Toe",
"font-size:20px;color:#00e5ff;font-weight:bold;");

console.log("%cDeveloped by Harsh Chendake",
"font-size:16px;color:#FFD700;");

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `Developed with ❤️ by <strong>Harsh Chendake</strong> © ${new Date().getFullYear()}`;

}