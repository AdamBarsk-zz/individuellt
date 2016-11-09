var expand = document.getElementsByTagName('i');
var hiding = document.getElementsByClass('hide');

for (var i = 0; i < expand.length; i++) {
  expand[i].addEventListener('click', swap);
}
for (var i = 0; i < hiding.length; i++) {
  hiding[i].style.display = "none";
}

function swap(){
  document.getElementById('1').style.display = "block";
}
