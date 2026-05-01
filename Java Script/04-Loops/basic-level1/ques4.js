let btn = document.getElementById("btn");
btn.addEventListener("click",print);

function print () {
    let output = "";
    let output2 = 5;

    for (let i = 1; i<=10;i++) {
        output += output2 * i + "\n";
    }

    document.getElementById("result").innerText = output;
}