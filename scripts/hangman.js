var headline = "Hangman";
var lives = 8;
var wordList = ["TESTHANG", "TESTMAN", "HANGMAN", "SCHOOLISCOOL"];
var word;
var clue = [];
var guesses = [];


function game() {
  gameOn = true;
  interaction();
  newGame();
  print();
}

function interaction() {
  $(window).keydown(function(event) {
    if (gameOn) {
      var key = String.fromCharCode(event.which);
      key.toUpperCase();
      guess(key);
      if (!(word.includes(key))) {
        if (!(guesses.includes(" "+key))) {
          console.log(guesses)
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
  $("#hangman-word").text("");
  clue = [];
  for (var i = 0; i < word.length; i++) {
    clue += "_";
  }
  $("#hangman-word").text(clue);
  lives = 8;
  guesses = [];
  headline = "Hangman";
}

function print() {
  $("#hangman-status").text(headline);
  $("#hangman-guess").text(guesses);
  $("#hangman-lives").text('Lives left: ' + lives);
}

function guess(key) {
  for (i = 0; i < word.length; i++) {
    if (key == word.charAt(i)) {
      clue = clue.substr(0, i) + key + clue.substr(i+1);
      $("#hangman-word").text(clue);
    }
  }
}

function status() {
  switch (lives) {
    case 7:
      $('#hangman-picture').html(hangSeven);
      break;
    case 6:
      $('#hangman-picture').html(hangSix);
      break;
    case 5:
      $('#hangman-picture').html(hangFive);
      break;
    case 4:
      $('#hangman-picture').html(hangFour);
      break;
    case 3:
      $('#hangman-picture').html(hangThree);
      break;
    case 2:
      $('#hangman-picture').html(hangTwo);
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
  // else if (lives <= 0) {
  //   headline = "GAME OVER!";
  //   gameOn = false;
  //   print();
  //   $('.play-again').css('display', 'block');
  //   playAgain();
  // }
  if (clue == word) {
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
|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOED</br>
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
