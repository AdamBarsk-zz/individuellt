var expand = document.getElementsByTagName('i');

for (var i = 0; i < expand.length; i++) {
  expand[i].addEventListener('click', swap);
}

function swap(){
  if (this.classList.contains("expand")) {

    this.previousSibling.classList.remove("hide");
    this.innerHTML = "expand_less";
    this.className = "material-icons backdraft";
  } else {
    this.previousSibling.classList.add("hide");
    this.innerHTML = "expand_more";
    this.className = "material-icons expand";
  }
}
