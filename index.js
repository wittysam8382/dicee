var randomNum1= Math.floor(Math.random()*6+1);
var randomImg = "dicee" + randomNum1 + ".jpeg" ;
document.querySelectorAll("img")[0].setAttribute("src","images/"+randomImg);

var randomNum2= Math.floor(Math.random()*6+1);
var randomImg = "dicee" + randomNum2 + ".jpeg" ;
document.querySelectorAll("img")[1].setAttribute("src","images/"+randomImg);
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🏆Player 1 won";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "🏆Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "💁‍♀️ Draw";
}