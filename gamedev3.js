

    
//Your jquery goes here
// Variables needed for game
var LEFT = 65,  UP = 87,  RIGHT = 68; // WASD
var velocity = 0; // Player speed; +ve is down -ve is up
var gravity = 1; // Gravity amount
var playerMaxTop; // The top pixel when player hits ground
var timer; // The timer that controls the animation
var leftPressed = false, rightPressed = false, jumpPressed = false; // keys pressed down
var speed = 5; // left/right speed
var onPlatform = true;

// This function runs when the page is loaded
$(document).ready(function(e) {
  // Put the player in the top/middle of the screen
  $("#player").css("top", "15px").css("left", "387.5px");
  // Calculate the player's "ground" position, which is the 
  // height of the stage minus the height of the player
  playerMaxTop = $("#stage3").height() - $("#player").height();
  // Start the timer
  timer = setInterval(update, 25);
  // Listen for keypresses
  $(document).keydown(function(e) {
    // If the spacebar is pressed, jump!
    if (e.which === UP) {
      jumpPressed = true;
    } else if (e.which === RIGHT) {
      rightPressed = true;
    } else if (e.which === LEFT) {
      leftPressed = true;
    }
  });
  $(document).keyup(function(e) {
    if (e.which === UP) {
      jumpPressed = false;
    } else if (e.which === RIGHT) {
      rightPressed = false;
    } else if (e.which === LEFT) {
      leftPressed = false;
    }
  });
});

// Make the player jump (or not if they shouldn't)
function jump() {
  // If the player is on the ground, allow jumping
  if (onPlatform) {
    // Set the strength of the jump; -ve values mean up
    velocity = -15;
    onPlatform = false;
  }
};

// This function controls the animation
function update() {
  var p = $("#player"); // store player jQuery object in a variable for convenience
  // JUMP HANDLING
  if (!onPlatform) {
    // Update velocity if the player is in the air
    velocity += gravity;
    // Move player according to the new velocity
    var newPos = p.position().top + velocity + "px";
    p.css("top", newPos);
  }
  if (velocity >= 0) { // only detect platforms when falling
    onPlatform = false;
    $(".platform3").each(function(index) {
      if (collisionBetween($(this), p) && p.position().top <= $(this).position().top) {
        p.css('top', $(this).position().top - p.height() + "px");
        onPlatform = true; // set player on a platform so that he can jump
        velocity = 0;
      }
    });
  }
  // GETTING THE GOAL





    if (collisionBetween(p, $("#goal3"))) {
    clearInterval(timer);
    alert("You win this level! Go to this url for the next one: file:///Users/s210634/Desktop/Game/explore4.html");


}


  

  if (collisionBetween(p, $("#lava3"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3a"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3b"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3c"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3d"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3e"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3f"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3g"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3h"))) {
    clearInterval(timer);
    alert("You lose!");
  }

if (collisionBetween(p, $("#lavablocks3i"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3j"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3k"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3l"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3m"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3n"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3o"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3p"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3q"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3r"))) {
    clearInterval(timer);
    alert("You lose!");
  }

  if (collisionBetween(p, $("#lavablocks3s"))) {
    clearInterval(timer);
    alert("You lose!");
  }





  // MOVEMENT HANDLING
  if (jumpPressed) {
    jump();
  }
  // If the player goes left and is not on the left border allow moving
  if (leftPressed) {
    p.css("left", Math.max(0, p.position().left - speed) + "px");
  }
  // If the player goes right and is not on the right border allow moving
  if (rightPressed) {
    p.css("left", Math.min(p.position().left + speed, $("#stage3").width() - p.width()) + "px");
  }

};

function collisionBetween(a, b) {
  var pos1 = $(a).position();
  var pos2 = $(b).position();
  return !(pos1.left > pos2.left + $(b).width() || pos2.left > pos1.left + $(a).width() || pos1.top > pos2.top + $(b).height() || pos2.top > pos1.top + $(a).height());
}
























