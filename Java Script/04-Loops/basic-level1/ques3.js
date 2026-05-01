let btn = document.getElementById("btn");
btn.addEventListener("click",checkEven);

function checkEven() {

    let output = "";

    for(let i =1; i<=50;i++) {
        if(i %2 == 0) {
            output += i + "\n";
        }

    }
    document.getElementById("num").innerText = output;
}