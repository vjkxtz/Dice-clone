
var randomnumber = Math.floor(Math.random()*6 + 1);
var randomnumber2 = Math.floor(Math.random()*6 + 1);

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+ randomnumber +".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+ randomnumber2 +".png");

if(randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML="<strong>Player 1 wins the game</strong>";
}else{
    document.querySelector("h1").innerHTML="<strong>Player 2 wins the game</strong>";
}