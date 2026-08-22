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
function multiply(num1, num2,callback) {
    callback(num1,num2);
}

function execute_call(a,b) {
    console.log(`the multiplication of two numbers ${a} and ${b} is ${a * b}`);
}

multiply(20,30,execute_call);


// Level 2 — Callback with Different Operations