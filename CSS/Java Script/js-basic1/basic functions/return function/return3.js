//Function that returns sum of two numbers.
//Function that returns the factorial of a number.

function sum (a,b) {
    let first_num = a;
    let second_num = b;
    return a + b;
}
let result = sum(3,4);
document.getElementById("output").textContent = result;

// can store result in another variable
let final_result = result + 200;
document.getElementById("output").textContent = final_result;
