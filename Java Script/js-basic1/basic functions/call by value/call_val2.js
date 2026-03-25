//Write a function that doubles a number and prints it inside the function.

let x = 40;

function double(a){
    return 2 * a;
}

document.getElementById("output").textContent = "New Value: " + double(x) + " and original value: " + x;