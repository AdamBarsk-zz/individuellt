function game(){
  gameBoard();
  var hangman = document.getElementById('hangman');
  hangman.style.display='block';
  window.onclick = function(event) {
    if (event.target == hangman) {
        hangman.style.display = 'none';
    }
  }
}

function gameBoard(){
  html =
          '<div id="hangman" class="modal">' +
            '<div class="modal-hangman">' +
              '<div>1</div>' +
              '<div>2</div>' +
              '<div>3</div>' +
            '</div>' +
          '</div>';

  $(document.body).append(html);
}
