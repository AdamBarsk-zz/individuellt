var keyword = "ADMIN";
var keyword2 = "HANGMAN";
var input = "";
var pos = 0;

$(document).ready(function() {
  $(window).keyup(function(e){
    var key = String.fromCharCode(e.which);
    key.toUpperCase();

    if (key == keyword.charAt(pos)) {
      input += key;
      pos++;
    } else if (key == keyword2.charAt(pos)) {
      input += key;
      pos++;
    } else {
      input = "";
      pos = 0;
    }
    keyWord();
  });
});

function keyWord() {
  if (input == keyword) {
    input = "";
    pos = 0;
    admin();
  } else if (input == keyword2) {
    input = "";
    pos = 0;
    game();
  }
}

function admin(){
  alert('hej admin');
}

function game(){
  alert('hej hangman');
}
