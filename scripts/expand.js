var expand = document.getElementsByClassName('expand');

for (var i = 0; i < expand.length; i++) {
  expand[i].addEventListener('click', swap);
}

function swap(){
  if (this.classList.contains("expand")) {

    this.previousSibling.classList.remove("hide");
    this.previousSibling.classList.add("main-content");
    this.className = "fa fa-chevron-up backdraft";
  } else {
    this.previousSibling.classList.add("hide");
    this.previousSibling.classList.remove("main-content");
    this.className = "fa fa-chevron-down expand";
  }
}
