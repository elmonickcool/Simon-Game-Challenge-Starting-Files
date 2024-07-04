var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    return gamePattern;
}

function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    return audio.play();
}