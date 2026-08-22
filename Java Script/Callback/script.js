// function first(callback) {
//     console.log("First");
//     callback();
// }

// function second() {
//     console.log("Second");
// }

// first(second);

// Level 1 — Basic Callback

// Q1. Greet User
// WAP to create a function greetUser() that accepts a user's name and a callback function.
// The function should print a greeting message and then execute the callback


// function greetUser(username,callback) {

//     console.log("Hello" + " " +  username)
//     callback();

//     }  
//       function user_msg() {
//         console.log("hey this is shivam maletha");

// }
// greetUser("Shivam",user_msg);


// Q2. Welcome Message
// WAP to create a function that accepts a callback and prints:
// Welcome to JavaScript!
// After printing the message, execute the callback



// function js_msg(callback) {

//     console.log("Welcome to JS");
// }

// function execute_call() {
//     callback();
// }
// js_msg(execute_call);




// Q3. Addition with Callback
// WAP to create a function that accepts two numbers and a callback.
// The callback should perform addition and display the result.



// function addition(num1, num2, callback){

//    callback(num1, num2);

// }
// function execute_call2(a,b) {
//    console.log(`the addition of two  ${a} and ${b} numbers is ${a + b}`);
// }

// addition(30,20,execute_call2);




// Q4. Multiplication with Callback
// WAP to create a function that accepts two numbers and a callback.
// The callback should multiply the numbers and display the result.


// function multiply(num1, num2,callback) {
//     callback(num1,num2);
// }

// function execute_call(a,b) {
//     console.log(`the multiplication of two numbers ${a} and ${b} is ${a * b}`);
// }

// multiply(20,30,execute_call);


// Level 2 — Callback with Different Operations

// Q5. Calculator Using Callback
// WAP to create a calculator function that accepts two numbers and a callback.
// Create separate callback functions for:
// Addition
// Subtraction
// Multiplication
// Division
// The calculator should perform the operation provided through the callback.

// function calculator(num1,num2,callback){

//     // use them as callback
//     callback(num1,num2);

// }


// // addition
// function addition(a,b){

//     console.log(`the addition of number ${a} and ${b} is ${a + b}`);
// }

// calculator(10,20,addition);

// // Subtraction
// function Subtraction(a,b) {
    
//      console.log(`the Subtraction of number ${a} and ${b} is ${a - b}`);
// }
// calculator(30,20,Subtraction);


// // Multiplication
// function Multiplicaton(a,b) {
    
//      console.log(`the multiplication of number ${a} and ${b} is ${a * b}`);
// }
// calculator(30,20,Multiplicaton);


// // Division
// function Divison(a,b) {
    
//      console.log(`the divison of number ${a} and ${b} is ${a / b}`);
// }
// calculator(30,20,Divison);


// Q6. Even or Odd Using Callback
// WAP to create a function that accepts a number and a callback.
// The callback should determine whether the number is even or odd.

// function even_odd(num,callback) {

//     callback(num);

// }

// function even(a) {

//     if (a % 2 === 0 ) {
//         console.log(`the number is even ${a}`);
//     }

//     else {
//         console.log(`the number is odd ${a}`);
//     }
// }
// even_odd(3,even);


// Q7. Positive or Negative Using Callback
// WAP to create a function that accepts a number and a callback.
// The callback should check whether the number is:
// Positive
// Negative
// Zero

// function postive_negative(number,callback) {

//     callback(number);
// }
// function positive(a) {
//     if (a>0)
//     {
//         console.log(`the number ${a} is +ve`);
//     }

//     else if (a<0){
//          console.log(`the number ${a} is -ve`);
//     }
//      else  {

//          console.log(`the number ${a} is 0`);
//      }
// }
// postive_negative(-4,positive);



// Q13. User Registration
// WAP to create a function that accepts a username and a callback.
// The function should simulate registering the user and then execute the callback to display:
// User registered successfully.



// function user(name,callback) {
//     callback(name);
// }
// function register(a) {
//     console.log(`the username ${a} is registered successfully`);
// }
// user("Shivam",register);


// Q17. Student Processing System
// WAP to create a program where:
// Student information is received.
// A callback calculates the total marks.
// Another callback calculates the percentage.
.
// Use callback functions to perform each operation.

function student(marks1,marks2,marks3,marks4,marks5,callback){
    callback(marks1,marks2,marks3,marks4,marks5);

}

// Total marks
function marks(a,b,c,d,e){
    let marks = a +b+c+d+e;
    console.log(`total marks of studnet is ${marks}`);

}
//PERCENTAGE
function percentage(a,b,c,d,e){
    let perc = ((a + b+ c+d+e)/500) * 100;

    console.log(`the percentage of a student is  ${perc}`);
}

student(10,20,30,40,50,percentage);
student(10,20,30,40,50,marks);


// Q21. Array Processor 
// WAP to create a function that accepts an array and a callback.
// The callback should perform an operation on every element of the array.
// For example, you should be able to use your function to:
// Double every number
// Square every number
// Add 10 to every number
// Check whether each number is even