//business logic
var activePlayer1 = 1;
var activePlayer2 = 0;

function switchPlayer() {
  if (activePlayer1 === 1) {
    activePlayer1 = 0;
    activePlayer2 = 1;
  } else {
    activePlayer1 = 1;
  }
};

//user logic
$(function() {
  $(".clickbox").click(function() {
    if (activePlayer1 === 1) {
      $(this).addClass("filled");
      $(this).children("span").text("X");

    } else {
      $(this).addClass("filled");
      $(this).children("span").text("O")
    }
    switchPlayer();
  })
});
