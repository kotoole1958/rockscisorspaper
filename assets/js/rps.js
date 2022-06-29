let randomchoicedisplay=document.getElementById("random-choice");
let userchoicedisplay=document.getElementById("user-choice");
let resultdisplay=document.getElementById("result");

let possiblechoices=document.querySelectorAll("button");
let userchoice;

possiblechoices.forEach(possiblechoice=>possiblechoice.addEventListener("click", (e)=>
{userchoice=e.target.id
userchoicedisplay.innerHTML=userchoice;}
))



