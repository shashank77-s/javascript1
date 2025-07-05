const checkbox = document.getElementById("checkbtn");
const submit = document.getElementById("submitbtn");
const result = document.getElementById("pid");
const visa=document.getElementById("visa");

submit.onclick = function() {
    if (checkbox.checked) {
        result.textContent = "you are subscribed";
    } else {
        result.textContent = "you are not subscribed";
    }

    if(visa.checked){
        document.getElementById("result1").textContent="you ARe paysing with visa";
    }
    else{
        document.getElementById("result1").textContent="you ARe paysing with mastercard";
    }
}
console.log("ssd");