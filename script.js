var yeah = "/YEEEEAAAAAAAAHH.mp3";
var audioElement = null;
$(function(){
    audioElement = new Audio();
    audioElement.src = yeah;
    $("#yeah").click(function(){
        start();
    });
    
});
$(window).keydown(function(e){
    if(e.keyCode == 13){
        start();   
    }
});
var existingTimeout = null;

var yeahWords = "YEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
var letter = 0;

function yeahh(){
    existingTimeout = setTimeout(function(){
        $("#content").text($("#content").text() + yeahWords[letter]);
        letter++;
        if(letter < yeahWords.length){
            yeahh();
        }
    }, 20);
}

function start(){
    letter = 0;
    clearTimeout(existingTimeout);
    $("#content").text("");
    yeahh();
    play();
}

function play(){
    audioElement.pause();
    audioElement.currentTime = 0.3;
    audioElement.play();
}