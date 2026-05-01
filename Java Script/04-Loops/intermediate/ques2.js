let  btn = document.getElementById("btn");
btn.addEventListener("click",guess);

function guess() {

let number = Number(document.getElementById("num").value);

let real_number =7;

if(number === real_number) {
    document.getElementById("result").innerText = "You won";
}

else {

     document.getElementById("result").innerText = "Try one more time";
}

}