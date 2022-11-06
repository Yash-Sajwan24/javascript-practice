for(var i = 0; i < document.querySelectorAll(".button").length ; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
    var number = this.innerHTML;
    animation(this);
    var audio = new Audio("./sound/beep"+number+".mp3");
    audio.play();
    });
}

document.addEventListener("keypress", function(event){
    var number = event.key;
    if(number >=1 && number<=6){
        var audio = new Audio("./sound/beep"+number+".mp3");
        audio.play();
        var key=document.querySelectorAll(".button")[number-1];
        animation(key);
    }
});

function animation(currentkey){
    currentkey.classList.add("pressed");
    setTimeout(function(){
        currentkey.classList.remove("pressed");
    }, 100); 
}
