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

// function game(){
//   resetTheGame();
//   gameOn = true;
//
//
//   var headline = "Hangman";
//   var lives = 8;
//   var wordList = ["TESTHANG", "TESTMAN", "HANGMAN", "SCHOOLISCOOL"];
//   var theWord = wordList[Math.floor(Math.random() * wordList.length)];
//   var theClue = underScore(theWord);
//   var theGuesses = "";
//
//
//   $("#hangman-status").text(headline);
//   $("#hangman-guess").text(theGuesses);
//   $("#hangman-lives").text('Lives left: ' + lives);
//
//   function underScore(theWord) {
//     theClue = "";
//     for (var i = 0; i < theWord.length; i++) {
//       theClue += "_";
//     }
//     $("#hangman-word").text(theClue);
//     return theClue;
//   }
//
//   $(window).keydown(function(event) {
//     if (gameOn) {
//       var key = String.fromCharCode(event.which);
//       key.toUpperCase();
//       guess(key);
//     }
//   })
//
//   function guess(key) {
//     for (i = 0; i < theWord.length; i++) {
//       if (key == theWord.charAt(i)) {
//         theClue = theClue.substr(0, i) + key + theClue.substr(i+1);
//         $("#hangman-word").text(theClue);
//       }
//     }
//
//     if (!(theWord.includes(key))) {
//       lives = lives - 1;
//       $("#hangman-lives").text('Lives left: ' + lives);
//
//       theGuesses += key;
//       $("#hangman-guess").text(theGuesses);
//     }
//
//     if (theWord === theClue) {
//       headline = "YOU WON!";
//       $("#hangman-status").text(headline);
//     }
//
//     if (lives <= 0) {
//       headline = "GAME OVER!";
//       $("#hangman-status").text(headline);
//     }
//   }
//
//   function resetTheGame() {
//     theWord = "";
//     theGuesses = "";
//     lives = 8;
//   }
// };
