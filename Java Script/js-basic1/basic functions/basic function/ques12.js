// Function to print first N Fibonacci numbers.

function fibonacci(n) {
    let a = 0, b = 1;

    for(let i = 1; i <= n; i++) {
        document.getElementById("output").innerHTML += a + "<br>";
        let next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(20);


// Function to print a triangle of asterisks (*) with N rows.
