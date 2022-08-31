
// DICE 1
var randomNumber1=Math.floor(Math.random()*6);
L=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
document.querySelector(".img1").setAttribute("src",L[randomNumber1]);

//DICE 2
var randomNumber2=Math.floor(Math.random()*6);
document.querySelector(".img2").setAttribute("src",L[randomNumber2]);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
