var keywordAdmin = "ADMIN";
var keywordHangman = "HANGMAN";
var input = "";
var position = 0;
var gameOn = false;
console.log(gameOn);

$(document).ready(function() {
  $(window).keyup(function(e) {
    if (gameOn === false) {
      var key = String.fromCharCode(e.which);
      key.toUpperCase();

      if (key == keywordAdmin.charAt(position)) {
        input += key;
        position++;
      } else if (key == keywordHangman.charAt(position)) {
        input += key;
        position++;
      } else {
        input = "";
        position = 0;
      }
      keyWord();
    }
  });
});

function keyWord() {
  if (input == keywordAdmin) {
    input = "";
    position = 0;
    admin();
  } else if (input == keywordHangman) {
    input = "";
    position = 0;
    showGameBoard();
  }
}

function admin() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

function showGameBoard() {
  var hangman = document.getElementById('hangman');
  hangman.style.display='block';
  game();
  window.onclick = function(event) {
    if (event.target == hangman) {
        hangman.style.display = 'none';
        gameOn = false;
    }
  }
}
