$( document ).ready(function() {

//Your jquery goes here
var player = $("#player");

$(document).keydown(function(e) {
  $(player).keydown;
  switch(e.which) {

//move up
  case 38:
    $(player).animate({top: "-=25px"}, 'fast');
    break;

    //move down
  case 40:
    $(player).animate({top: "+=25px"}, 'fast');
    break;
}; 

});
var health = 1;
 function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
   
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#arrow, #b2, #b'),  function() {
      if (collision($('#player'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
     $("#player, #arrow, #b, #b2").hide();
        

        //all the actions that happen during a collision go here

      }
    });
  }, 200); //this is how often it c

//#b blocks scrolling
var BackgroundScroll = function(params) {
  params = $.extend({
    scrollSpeed: 7.2,
    imageWidth: $('#b').width(),
    imageHeight: $('#b').height()
  }, params);
  
  var step = 1,
    current = 0,
    restartPosition = - (params.imageWidth - params.imageHeight);
  
  var scroll = function() {
    current -= step;
    if (current == restartPosition){
      current = 0;
    } 
    $('#b').css('backgroundPosition', current + 'px 0');
  
  };
  
  this.init = function() {
    setInterval(scroll, params.scrollSpeed);
  
  };
};


var scroll = new BackgroundScroll();
scroll.init();



//#b2 blocks scrolling
var BackgroundScroll = function(params) {
  params = $.extend({
    scrollSpeed: 7.2,
    imageWidth: $('#b2').width(),
    imageHeight: $('#b2').height()
  }, params);
  
  var step = 1,
    current = 0,
    restartPosition = - (params.imageWidth - params.imageHeight);
  
  var scroll = function() {
    current -= step;
    if (current == restartPosition){
      current = 0;
    } 
    $('#b2').css('backgroundPosition', current + 'px 0');
  
  };
  
  this.init = function() {
    setInterval(scroll, params.scrollSpeed);
  
  };
};


var scroll = new BackgroundScroll();
scroll.init();






//#arrow scrolling
var BackgroundScroll = function(params) {
  params = $.extend({
    scrollSpeed: 1,
    imageWidth: $('#arrow').width(),
    imageHeight: $('#arrow').height()
  }, params);
  
  var step = 1,
    current = 0,
    restartPosition = - (params.imageWidth - params.imageHeight);
  
  var scroll = function() {
    current -= step;
    if (current == restartPosition){
      current = 0;
    } 
    $('#arrow').css('backgroundPosition', current + 'px 0');
  
  };
  
  this.init = function() {
    setInterval(scroll, params.scrollSpeed);
  
  };
};


var scroll = new BackgroundScroll();
scroll.init();



    var $wrapper = $("#starfield"),
      width = $wrapper.width(),
      height = $wrapper.height(),
      $flames = $('#flames'),
      $rocketContainer = $('#rocket-container');

    var starNumber = 50;

    function getStarsTimeline() {
      var $starfield = $('#starfield');


        
        
          for (var i = 0; i < starNumber; i++) {
        var speed;

        function randomizer() {
          var y = Math.round(Math.random() * 2);
          switch (y) {
            case 0:
              speed = 2;
              break;
            case 1:
              speed = 4;
              break;
            case 2:
              speed = 6;
              break;
          }
        };

        function starline() {
          var element = $('<div class="star s' + speed + '"></div>').appendTo($starfield);
          var tl = new TimelineMax({
              repeat: -1
            }),
            x = Math.floor(Math.random() * width * 2) + 1,
            count = 0;

          tl.set(element, {
            y: -60,
            x: x
          }).to(element, speed, {
            y: height,
            x: x - width / 1.5,
            ease: Linear.easeNone
          }, Math.random() * 10);

        };

        randomizer();
        starline();
      }

    }




}); 




