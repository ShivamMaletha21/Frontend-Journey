// Function that checks if a number is even (return true/false).

function even(n) {
    if (n % 2 == 0 || n == 1){
        return n +" " +"the number is even";
    }
    else {
        return  n +" " +"the number is odd";
    }
}
let result = even(9);
document.getElementById("output").textContent = result;