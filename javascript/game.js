var randomNumber, randomChosenColor, level = 0,
  started=false;
var gamePattern = [],
  userClickedPattern = [],
  buttonColours = ["red", "yellow", "blue", "green"];


  $(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});



// ALTERNATE_STUPID_LOGICS
// do{
//   $("body").on("keypress", function(event){
//     nextSequence();
//   });
//   doWhile++;
// }
// while(doWhile < 0);


// $("body").on("keypress", function(event) {
//   if (started===false) {
//     nextSequence();
//   }
//   else{
//     $("#level-title").text("Level "+ level);
//   }
//   $("body").toggle(started);
// });

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}






function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100)
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
