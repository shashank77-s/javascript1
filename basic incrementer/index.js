
const decrease=document.getElementById("decrebtn");
const increase=document.getElementById("increbtn");
const reset=document.getElementById("reset");
const countLabel=document.getElementById("labelCount");
let count=0;

increase.onclick=function(){
    count++;
    countLabel.textContent=count;
}


decrease.onclick=function(){
    count--;
    countLabel.textContent=count;
}

reset.onclick=function(){
    count=0;
    countLabel.textContent=count;
}