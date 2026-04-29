// Q1: Shopping Total
// You bought:
// Pen = ₹10
// Notebook = ₹50
// Store values and calculate total

let pen = 10;
let notebook = 50;

let total = pen + notebook;
console.log("$" + total);

// Q2: Split Bill
// Total bill = ₹500
// People = 4
//  How much each person pays?

let totalbill = 500;
let people = 4;

let eachpay = totalbill / people;

console.log(`each person pays $${eachpay} `);


// Q3: Even or Odd (Real Use)
// User enters a number
// Check if number is even or odd (use %)

let num = Number(prompt("Enter a number: "));

if 
    (num % 2 == 0) {
        console.log("the number is even");
    }

    else {
        console.log("the number is odd")
    }
