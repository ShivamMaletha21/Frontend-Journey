// ques 10..Function that returns the maximum of two numbers.

function max(a,b) {
    let first_num = a;
    let second_num = b;

    if (first_num > second_num) {
        return a + " " + "first number is max"
    }
    else {
        return b + " " + "second number is max"
    }
}
let result = max(9,24);
document.getElementById("output").textContent = result;