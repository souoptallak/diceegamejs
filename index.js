var randonNumber1 =Math.floor(Math.random()*6)+1; //1-6

var randonDiceImage="Dice" + randonNumber1 + ".png"; //Dice1.png-Dice6.png

var randonImageSource="images/" + randonDiceImage; //images/Dice1.png-images/Dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randonImageSource); 

var randonNumber2= Math.floor(Math.random()*6)+1;

var randonImageSource2="images/Dice" + randonNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randonImageSource2);

if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!!";
}
else if(randonNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!!";
}
else{
   document.querySelector("h1").innerHTML="Draw!!!!!!!"; 
}