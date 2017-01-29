var headline = "Hangman";
var lives = 8;
var wordList = ["TESTHANG", "TESTMAN", "HANGMAN", "SCHOOLISCOOL"];
var word = [];
var clue = [];
var guesses = [];


function game() {
  gameOn = true;
  interaction();
  newGame();
  print();
  status();
}

function interaction() {
  $(window).keydown(function(event) {
    if (gameOn) {
      var key = String.fromCharCode(event.which);
      key.toUpperCase();
      guess(key);
      $("#hangman-word").html(clue.join(""));
      if (!(word.includes(key))) {
        if (!(guesses.includes(" "+key))) {
          guesses.push(" "+key);
          lives = lives - 1;
        }
      }
    }
    print();
    status();
  })
}

function newGame() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  word = Array.from(word)
  $("#hangman-word").html("");
  clue = [];
  clue = word.map(x => "_")
  $("#hangman-word").html(clue.join(""));
  $('.hangman-lives').css('color', '#262626')
  lives = 8;
  guesses = [];
  headline = "Hangman";
}

function print() {
  $("#hangman-status").html(headline);
  $("#hangman-guess").html(guesses.join(""));
  $("#hangman-lives").html('Lives left: ' + lives);
}

function guess(key) {
  if (word.includes(key)) {
    clueRemake = word.map(function(x, i) {
       if (x == key) {
         return clue.splice(i, 1, key)
       }
    })
  }
}

function status() {
  switch (lives) {
    case 7:
      $('#hangman-picture').html(hangSeven);
      break;
    case 6:
      $('#hangman-picture').html(hangSix);
      $('.hangman-lives').css('color', '#FFFF00')
      break;
    case 5:
      $('#hangman-picture').html(hangFive);
      break;
    case 4:
      $('#hangman-picture').html(hangFour);
      $('.hangman-lives').css('color', '#FF8000')
      break;
    case 3:
      $('#hangman-picture').html(hangThree);
      break;
    case 2:
      $('#hangman-picture').html(hangTwo);
      $('.hangman-lives').css('color', '#FF0000')
      break;
    case 1:
      $('#hangman-picture').html(hangOne);
      break;
    case 0:
      $('#hangman-picture').html(hangZero);
      headline = "GAME OVER!";
      gameOn = false;
      print();
      $('.play-again').css('display', 'block');
      playAgain();
      break;
    default:
      $('#hangman-picture').html(' ');
  }
  if (clue.toString() === word.toString()) {
    headline = "YOU WON!";
    gameOn = false;
    print();
    $('.play-again').css('display', 'block');
    playAgain();
  }
}

function playAgain() {
  $('#hangman-button').on("click", function() {
    game();
    $('.play-again').css('display', 'none');
  });

}


var hangZero = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0O</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/|\\</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/ \\</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DED!</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangOne = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0O</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/|\\</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangTwo = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0O</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/|\\</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangThree = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0O</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangFour = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0O</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 </br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 </br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangFive = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangSix = `
_______</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`

var hangSeven = `
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</br>
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
