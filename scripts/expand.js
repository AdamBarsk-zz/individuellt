// var expand = document.getElementsByClassName('expand');
//
// for (var i = 0; i < expand.length; i++) {
//   expand[i].addEventListener('click', swap);
// }
//
// function swap(){
//   if (this.classList.contains('expand')) {
//     this.previousSibling.classList.remove('hide');
//     this.className = 'fa fa-chevron-up backdraft';
//   } else {
//     this.previousSibling.classList.add('hide');
//     this.className = 'fa fa-chevron-down expand';
//   }
// }

$('.expand').click(function(){
  if($(event.target).hasClass('expand')){
    $(event.target).prev().removeClass('hide');
    $(event.target).removeClass('fa fa-chevron-down expand').addClass('fa fa-chevron-up backdraft');
  } else {
    $(event.target).prev().addClass('hide');
    $(event.target).removeClass('fa fa-chevron-up backdraft').addClass('fa fa-chevron-down expand');
  }
});
