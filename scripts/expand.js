$('.expand').click(function(){
  if($(event.target).hasClass('expand')){
    $(event.target).prev().removeClass('hide');
    $(event.target).removeClass('fa fa-chevron-down expand').addClass('fa fa-chevron-up backdraft');
  } else {
    $(event.target).prev().addClass('hide');
    $(event.target).removeClass('fa fa-chevron-up backdraft').addClass('fa fa-chevron-down expand');
  }
});
