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
        lives--;
        guesses.push(key)
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
  if (lives <= 0) {
    headline = "GAME OVER!";
    print();
  }
  if (clue == word) {
    headline = "WIN!";
    print();
  }
}
