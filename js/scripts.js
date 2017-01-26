//business logic
function Player(playerName, playerNumber, playerSymbol) {
  this.playerName = playerName;
  this.playerNumber = playerNumber;
  this.playerSymbol = playerSymbol;
}
var player1 = new Player("Brandon", 1, "X");
var player2 = new Player("Marc", 2, "O");

var position = [0,0,0,0,0,0,0,0,0]

if (player.number === 1) {
  player.symbol = "X";
} else {
  player.symbol = "O";
}

function Position(position) {
  this.position = position;
}

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
    if (player === 1) {
      $(this).children("span").text("X");
    } else {
      $(this).children("span").text("O");
    }
  })
});
