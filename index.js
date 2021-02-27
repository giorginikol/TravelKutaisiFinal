

document.querySelector(".sun-image").addEventListener("click", function() {

  var audio = new Audio("sounds/birds-sounds.mp3");
      audio.play();

});





$(".title-image").on ("mouseover", function (){
$(".sun-image").animate({opacity:0.6});
});

$(".title-image").on ("mouseout", function (){
$(".sun-image").animate({opacity:0.2});
});
