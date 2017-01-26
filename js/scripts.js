//business logic
var activePlayer1 = 1;
var activePlayer2 = 0;

function Player(playerName, playerNumber, playerSymbol) {
  this.playerName = playerName;
  this.playerNumber = playerNumber;
  this.playerSymbol = playerSymbol;
}
var player1 = new Player("Brandon", 1, "X");
var player2 = new Player("Marc", 2, "O");

var position = [0,0,0,0,0,0,0,0,0]

if (Player.playerNumber === 1) {
  Player.playerSymbol = "X";
} else {
  Player.playerSymbol = "O";
}

// function Position(position) {
//   this.position = position;
// }

function switchPlayer() {
  if (activePlayer1 === 1) {
    activePlayer1 = 0;
    activePlayer2 = 1;
  } else {
    activePlayer1 = 1;
  }
};

var one = position[0];
var two = position[1];
var three = position[2];
var four = position[3];
var five = position[4];
var six = position[5];
var seven = position[6];
var eight = position[7];
var nine = position[8];



//user logic
$(function() {
  $(".clickbox").click(function() {
    if (activePlayer1 === 1) {
      $(this).children("span").text("X");
    } else {
      $(this).children("span").text("O");
    }
    switchPlayer();
  })
});
