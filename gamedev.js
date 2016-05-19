$( document ).ready(function() {

//Your jquery goes here
var player = $("#player");

$(document).keydown(function(e) {
  $(player).keydown;
  switch(e.which) {

//move up
  case 38:
    $(player).animate({top: "-=40px"}, 'fast');
    break;

    //move down
  case 40:
    $(player).animate({top: "+=40px"}, 'fast');
    break;
}; 

});

});