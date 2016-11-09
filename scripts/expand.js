var expand = document.getElementsByTagName('i');

for (var i = 0; i < expand.length; i++) {
  expand[i].addEventListener('click', swap);
}

function swap(){
  this.previousSibling.classList.remove("hide");
  this.className = "hide";
}
