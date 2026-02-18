// Function to display the sum of 3 numbers
function sum(a,b,c) {
   return a+b+c;
}
let result = sum(2,3,4);
document.getElementById("output").textContent = result; // textContent use is more safer rather than using innerHTML