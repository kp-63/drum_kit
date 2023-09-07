var l = document.querySelectorAll(".drum").length;
for (var i = 0; i < l ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerhtml = this.innerHTML;
       makeSound(buttonInnerhtml);
       buttonAnimation(buttonInnerhtml);
    });
}
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})   
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
          
        var a = new Audio("sounds/tom-2.mp3");
            a.play();
        break;
        case "s":
            var b = new Audio("sounds/tom-3.mp3");
            b.play();
        break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
        break;
        case "j":
            var j = new Audio("sounds/crash.mp3");
            j.play();
        break;
        case "k":
            var k = new Audio("sounds/kick-bass.mp3");
            k.play();
        break;
        case "l":
            var l = new Audio("sounds/snare.mp3");
            l.play();
        break;
       }
}

function buttonAnimation(currentButton){
    var currenKey = document.querySelector("." + currentButton);
    currenKey.classList.add("pressed");
    setTimeout(function(){
        currenKey.classList.remove("pressed");
    }, 100)
}