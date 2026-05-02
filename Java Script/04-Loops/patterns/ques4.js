let btn = document.getElementById("btn");

btn.addEventListener("click", largestnumber);

let count = 0;
let largest = null;

function largestnumber() {

    let num = Number(document.getElementById("numb").value);

    if (num === "") return; // safety check

    if (count === 0) {
        largest = num;
    } else {
        if (num > largest) {
            largest = num;
        }
    }

    count++;

    document.getElementById("numb").value = "";

    if (count === 5) {
        document.getElementById("result").innerText =
            "The largest number is: " + largest;

        count = 0;
        largest = null;
    } else {
        document.getElementById("result").innerText =
            "Enter " + (5 - count) + " more numbers";
    }
}