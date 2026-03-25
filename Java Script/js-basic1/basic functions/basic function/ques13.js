// Function to print a triangle of asterisks (*) with N rows
function triangle(n) {
    let output = "";

    for (let j = 1; j <= n; j++) { // number of rows
        for (let k = 1; k <= j; k++) { // number of stars in the row.. for j = 1-> stars = 1, for j =2; stars =2 etc...
            output += "*";
        }
        output += "<br>"; // moves to next line after each row
    }

    document.getElementById("output").innerHTML = output;//The entire triangle pattern stored in output is displayed on the webpage.
}

triangle(4);
