var randomNumber, randomChosenColor, level = 0,
  started;
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







function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed")
  }, 100)
}
