let btn = document.getElementById("btn");

btn.addEventListener("click", reverse);

function reverse() {
    let number = Number(document.getElementById("number").value);

    let output = 0;

    while (number > 0) {
        let digit = number % 10;        // get last digit
        output = output * 10 + digit;   // build reverse
        number = Math.floor(number / 10); // remove last digit
    }

    document.getElementById("result").innerText = output;
}