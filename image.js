var randomNumber=Math.floor(Math.random()*100)+1;
var attempt=0;

document.getElementById('btn').addEventListener('click',function(){

var guess=parseInt(document.getElementById('guessInput').value);
attempt++;

if(guess===randomNumber){
    displayMessage("Congratulations! You gueesed the Number in "+attempt+" attempts");
    document.getElementById('btn').disabled=true;
}
else if (guess<randomNumber){
    displayMessage("Too low! Please try a higher number.")
}
else{
    displayMessage("Too High! Please try a lower number.")
}





});

function displayMessage(msg){
    document.getElementById('msg').textContent=msg;
}