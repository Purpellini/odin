const spanPlayer = document.querySelector("#span-player");
const PlayerNick = document.querySelector("#nickname");
const Marker = document.querySelector("#marker");
const btnSubmit = document.querySelector("#save");
const Player1Place = document.querySelector(".player1");
const Player2Place = document.querySelector(".player2");
const Player1Marker = document.querySelector(".p1-marker");
const Player2Marker = document.querySelector(".p2-marker");
const score = document.querySelector(".score");
const resetGameBtn = document.querySelector("#resetGame");
const gameboard = document.querySelector('.gameboard-wrapper');
const whichRound = document.querySelector("#whichRound")
const whichPlayer = document.querySelector("#whichPlayer")


// Zmienne gry
let player1 = null;
let player2 = null;
let currentPlayer = 1;  // Gracz 1 zaczyna
let currentRound = 1; // Pierwsza runda
let gameBoard = new Array(9).fill(null); // Plansza gry (9 pól)
let currentMarker='X'



function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

btnSubmit.addEventListener("click", () => {
    const PlayerName = PlayerNick.value;
    const PlayerMarker = Marker.value;

    if (PlayerName && PlayerMarker) {
        if (currentPlayer === 1) {
            player1 = new Player(PlayerName, PlayerMarker);
            Player1Place.textContent = PlayerName;
            Player1Marker.textContent = PlayerMarker;
            currentPlayer = 2;
            spanPlayer.textContent = "gracz 2";
            Marker.disabled = true;
            PlayerNick.value = '';
            console.log(player1);
        } else {
            player2 = new Player(PlayerName, PlayerMarker);
            Player2Place.textContent = PlayerName;
            Player2Marker.textContent = (player1.marker === 'X' ? 'O' : 'X');
            player2.marker = (player1.marker === 'X' ? 'O' : 'X');
            console.log(player2);
            currentPlayer = 1;
            createGameCells();
            btnSubmit.disabled=true;
        }
    } else {
        console.log("Wpisz nick i znacznik!");
    }
});


// Funkcja tworząca komórki na planszy
function createGameCells() {
    gameboard.innerHTML = ''; // Wyczyść planszę przed dodaniem nowych komórek
    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.className = "game-cell";
        div.addEventListener("click", () => makeMove(i));
        gameboard.appendChild(div);
    }
}

function makeMove(index){
     if (gameBoard[index] !== null) return; 
    const cell = document.querySelectorAll('.game-cell')[index];
    if(currentMarker=='X' && currentPlayer==1){
        gameBoard[index]=currentMarker;
        cell.textContent=currentMarker;
        currentMarker='O';
        currentPlayer==2;
        whichPlayer.textContent="gracza 2"
    }else{
        gameBoard[index]=currentMarker;
        cell.textContent=currentMarker;
        currentMarker='X';
        currentPlayer==1;
        whichPlayer.textContent="gracza 1"
    }
    const winner=checkWinner();
    if (winner) {
        setTimeout(() => {
            alert(`Wygrał: ${winner}`);
            currentRound += 1;
            Round(currentRound);
            UpdateScore(winner);
            resetBoard();
        }, 100);
    }else if(gameBoard.every(cell=> cell!==null)){
        alert('remis');
        resetBoard();
    }
}

function checkWinner(){
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

for(let combination of winningCombinations){
    const [a,b,c]=combination;
    if(gameBoard[a] && gameBoard[a]==gameBoard[b] && gameBoard[a]==gameBoard[c]){
        return gameBoard[a]
    }

}
return null;
}


function Round(currentRound){
    let round =currentRound
    whichRound.textContent=round
}
Round(currentRound)

let scorePlayer1 = 0;
let scorePlayer2 = 0;

function UpdateScore(winner){
if(winner==='X'){
    scorePlayer1++;
}else if(winner==='O'){
    scorePlayer2++;
}
score.textContent=`${scorePlayer1}:${scorePlayer2}`
}

function resetBoard(){
    gameBoard.fill(null);
    document.querySelectorAll('.game-cell').forEach(c => c.textContent = '');
}

resetGameBtn.addEventListener("click", ()=>{
    location.reload();
})