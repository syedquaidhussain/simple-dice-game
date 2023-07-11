var randomNumber1= Math.random();
randomNumber1 =    Math.floor(randomNumber1*6)+1;
var a=randomNumber1;
document.querySelector("img.img1").setAttribute("src", './images/dice'+ a +'.png');

// randomNumber1 =    Math.floor(randomNumber1*6)+1;
//  a = randomNumber1;
var randomNumber2=Math.random();
var b = Math.floor(randomNumber2*6)+1;
document.querySelector("img.img2").setAttribute("src", './images/dice'+b+'.png');
if(a==b)
{
    document.querySelector("h1").innerHTML="Draw !";

}
else if(a>b)
{                                        
    //  red flag emoji h 
    document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins🚩 ";
}