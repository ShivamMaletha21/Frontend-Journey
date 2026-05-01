let btn = document.getElementById("btn");
btn.addEventListener("click",factorial);

function factorial () {

    let output = 1;


    for(let i =5; i>=1;i--) {

        output *= i;
    }
    document.getElementById("result").innerText = output;
}