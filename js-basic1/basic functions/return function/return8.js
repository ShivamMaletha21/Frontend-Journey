// Function that returns absolute value of a number


//If the number is positive, absolute value is the same number.
// If the number is negative, absolute value is the positive form of that number.
// Zero’s absolute value is zero.

// Absolute value of 5 → 5
// Absolute value of -5 → 5

function absolute(n){
    if (n < 0) {
        return -n;
    }
    return n;
}
document.getElementById("output").textContent = absolute(-9);