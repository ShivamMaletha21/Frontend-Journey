// Function that prints multiplication table for a number passed as argument
function printTable(n) {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${n} × ${i} = ${n * i}<br>`;
    }

    document.getElementById("output").innerHTML = result;
}

printTable(5);
