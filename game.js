const board =document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameActive = true;
let boardState= ["","", "", "", "", "", "", "", "" ]

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleCellClick(event){
    const cell = event.target;
    const cellIndex = cell.getAttribute("data-index");
    if(boardState[cellIndex]=="" && gameActive){
        boardState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner(){
    for(let combo of winning){
        const [a,b,c] = combo;
        if(boardState[a] && boardState[a] === boardState[b] && boardState[b] === boardState[c] && boardState[c]){
            gameActive = false;
            alert("Player " + boardState[a] + " wins!");
            return;
        }
    }
    if(!boardState.includes("")){
        gameActive = false;
        alert("It's a draw!");
    }
}

function resetGame(){
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
}
cells.forEach(cell => cell.addEventListener("click",handleCellClick));