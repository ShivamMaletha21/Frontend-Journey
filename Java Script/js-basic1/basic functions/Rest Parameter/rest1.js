//Function sum(...numbers) → returns sum of N numbers.

function sum(...numbers) {
   let total = 0;
   
   for (let n of numbers) {
    total +=n;
   }
   return total;
}
document.getElementById("output").textContent = sum(1,2,3,4,5);