function handleClick(){

    var numberOne = Math.floor(Math.random()*6)+1;
    var numberTwo = Math.floor(Math.random()*6)+1;

    var randomDiceImage1 = "./dices/dice" + numberOne + ".png";
    var randomDiceImage2 = "./dices/dice" + numberTwo + ".png";

    document.querySelector(".dice1 img").setAttribute("src", randomDiceImage1);
    document.querySelector(".dice2 img").setAttribute("src", randomDiceImage2);

    var audio = new Audio("./sound/dj.mp3");
    audio.play();

    if( numberOne > numberTwo ){
        document.querySelector(".title").innerHTML = "🚩Player 1 is the Winner!";
    }
    else if( numberOne < numberTwo){
        document.querySelector(".title").innerHTML = "🚩Player 2 is the Winner!";
    }
    else{
        document.querySelector(".title").innerHTML = "🚩It's a Draw! ";
    }   
}


document.querySelector(".button").addEventListener("click", handleClick);
