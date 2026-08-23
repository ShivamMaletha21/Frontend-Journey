console.log("Start");

setTimeout(()=>{
    console.log("Hello");
},2000);
console.log("End");


// this is normal callback
function first (callback){
    console.log("Hello");
    callback();
}

function second() {
    console.log("Shivam");

}
//  here second is the callback function
 first(second);

// asynchronous callback
function first() {

    setTimeout(function () {
        console.log("Hello");
    }, 2000);

    console.log("this is shivam");
}
first();






// Level 1 — Basic Asynchronous JavaScript

// Q1. Delayed Message
// WAP to print "Hello JavaScript" after 2 seconds using an asynchronous JavaScript method.

function welcome() {
    setTimeout(()=>{

        console.log("Hello JS");

    },2000);
}
welcome();


// Q2. Delayed Number
// WAP to display the numbers 1, 2, 3 with a delay of 1 second between each number.

function delay(){

    setTimeout(()=>{
        console.log("1");

    },1000);
        setTimeout(()=>{
        console.log("2");

    },2000);
        setTimeout(()=>{
        console.log("3");

    },3000);
        setTimeout(()=>{
        console.log("4");

    },4000);
        setTimeout(()=>{
        console.log("5");

    },5000);
}
delay();


// Q3. Welcome Message
// WAP to display "Welcome" immediately and "Have a great day!" after 3 seconds.

console.log("Welcome");

function great(){
    setTimeout(()=>{
        console.log("Have a great day");
    },3000);
}
 great();

// Q4. Countdown
// WAP to create a countdown from 5 to 1 where each number is displayed after a 1-second delay. After the countdown, display "Time's Up!"

function countdown(){
    setTimeout(()=>{
        console.log(1);

    },5000);

        setTimeout(()=>{
        console.log(2);

    },4000);

        setTimeout(()=>{
        console.log(3);

    },3000);

        setTimeout(()=>{
        console.log(4);

    },2000);

        setTimeout(()=>{
        console.log(5);

    },1000);

     setTimeout(()=>{
        console.log("time's up");

    },6000);
}
countdown();




// Level 2 — Asynchronous Callbacks

// Q5. Delayed Greeting
// WAP to create a function that accepts a name and a callback. After a 2-second delay, display the greeting and then execute the callback.

function username(name,callback){
    setTimeout(()=>{
        console.log("Welocme");
        callback(name);
    },2000);
}

function usercall(a){
    console.log(a);

}
username("shivam",usercall);


// Q6. User Processing
// WAP to create a function that simulates processing a user for 3 seconds. After processing is completed, execute a callback that displays "User processed successfully".

function user(value,callback) {
setTimeout(()=>{
    callback(value);
},3000);
};

function process(a){
    console.log(a);
};

user("Shivam",process);


// Q7. Download Simulation
// WAP to simulate downloading a file. The download should take 3 seconds. After the download finishes, use a callback to display "Download completed".

function download(callback){
    setTimeout(()=>{
        callback();

    },3000);
}
    function downfinish(){
        console.log(`the download finishes`);
    };
download(downfinish);