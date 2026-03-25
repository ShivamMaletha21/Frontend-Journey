// Function that prints a multiplication table of 5.

// function multiply(n) {
//     document.getElementById("output").innerHTML = 5 * n;
// }
// multiply(3);

function multiply() {
    for (let i =1; i <=10; i++) {
        document.getElementById("output").innerHTML += "5 x " + i + " = " + (5 * i) + "<br>";
    }
}
multiply();