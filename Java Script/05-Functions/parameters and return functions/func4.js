// Create a function that converts temperature from Celsius to Fahrenheit.

let btn = document.getElementById("btn");
btn.addEventListener("click",tempCheck);

function tempCheck() {

    let Celsius = Number(document.getElementById("cels").value);
    let result = temp(Celsius); // arguments

    document.getElementById("result").innerText =  Celsius + "°C = " +  result + "°F";
}

function temp(C) { // parameter

    let farenehit = 9/5 * C + 32;

    return farenehit;
}