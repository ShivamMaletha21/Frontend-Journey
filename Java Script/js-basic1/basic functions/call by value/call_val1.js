//Write a function that changes a number passed to it. Show that original remains unchanged.

let x = 20;

function change(a) {
    a = 30;
    return a; //return is used to pass a value from a function to the calling code.
}
document.getElementById("output").textContent = "change value: " + change(x) +  " "+ "original value: " + x;