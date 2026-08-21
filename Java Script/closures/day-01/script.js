function outer() {
    let count = 0;
   
    function inner() {
         count ++;
         console.log(count);
        


    }
    return inner;
}

const counter = outer();

// calling counter
counter();
counter();

// // Closures Practice — Level Wise
// // 1. WAP to create a function inside another function and access a variable of the outer function from the inner function.
// // 2. WAP to create a function that stores a person's name and returns a function that displays the stored name.
// // 3. WAP to create a function that stores a message and returns a function that displays the message whenever it is called.

function a() {
    let counta = 20;

    function b () {
        counta++;
        console.log("ques2");
        console.log(counta);
    }
    return b;

}
const counterA = a();

counterA();

// // ques2
function name () {
    let person_name = "Arjun";

    function retname() {
        console.log(person_name);
    }
    return retname;
}
const person = name();
person();

// // ques3
function mess() {
    let mesg1 = "today's wheater will be turblulent";

    function retmessg() {
        console.log(mesg1);
    }
    return retmessg;
}

const message = mess();
message();




// // Strong Closure Practice
// // 1. WAP to create a counter where the count cannot be directly accessed from outside the function but can be increased and displayed through the returned function.

// // 2. WAP to create two independent counters and demonstrate that changing one counter does not affect the other counter.

// // 3. WAP to create a function that accepts a number and returns another function that adds the stored number to a new number whenever the returned function is called.

// // 4. WAP to create a function that accepts a person's name and returns another function that displays a personalized greeting using that name.

// // 5. WAP to create a function that stores a balance and returns a function that adds a given amount to the stored balance each time it is called.


// // ques1
function counter2 () {
    let count2 = 0;

    function newcounter2() {
        count2 = count2+10;
        console.log(count2);
    }

    return newcounter2;
}

const counter2mess = counter2();
counter2mess();
counter2mess();
counter2mess();
counter2mess();
counter2mess();


// // 2. WAP to create two independent counters and demonstrate that changing one counter does not affect the other counter
function counter3() {
    let count5 = 0;
  

    function  newcounter3() {
        count5++;
        console.log(count5);
    }
    return newcounter3;

}
const counter3msg = counter3();
counter3msg();



// function counter4 () {
      let count4 = 100;


    function newcounter4 () {
        count4++;
        console.log(count4);
    }

    return newcounter4;
}

const counter4msg = counter4();
counter4msg();



// 3. WAP to create a function that accepts a number and returns another function that adds the stored number to a new number whenever the returned function is called.

// let btn1 = document.getElementById("button1");
btn1.addEventListener("click",()=>{

    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    function one(numb1) {

    function anothernum(numb2) {
        return  numb1 + numb2;
        
    }
    return anothernum;
}
const original_num = one(number1); // accessing another num, passing number1 in another num 
const result = original_num(number2);

    document.getElementById("output").innerText = result;



})


// 4. WAP to create a function that accepts a person's name and returns another function that displays a personalized greeting using that name.

let btn1 = document.getElementById("button1");
btn1.addEventListener("click",()=>{

        let user_name = document.getElementById("user1").value;

    function one(user1) {
    function greet(msg) {

        let message = "hey you are a good coder";
        return  user1 + " " +  message;
        
    }
    return greet;
}
const original_user = one(user_name); // accessing another num, passing number1 in another num 
const result = original_user();

    document.getElementById("output").innerText = result;
})

// 5. WAP to create a function that stores a balance and returns a function that adds a given amount to the stored balance each time it is called.

let btn1 = document.getElementById("button1");
btn1.addEventListener("click",()=>{

        let balance = Number(document.getElementById("balance1").value);

    function balance_amt(blc) {

    function extra_amt(ext_amt) {

        return balance + ext_amt;
        
    }
    return extra_amt;
}
const original_balance = balance_amt(balance); // accessing another num, passing number1 in another num 
const result = original_balance(300);

    document.getElementById("output").innerText = result;
})

// 6. WAP to create a function that maintains a private password and returns a function that checks whether a given password matches the stored password.
function private_password() {
    let real_password = "kt9@73098";

    function check_pass(userPass) {

        if (real_password === userPass) {
            return "login successful";
        } else {
            return "wrong password";
        }
    }

    return check_pass;
}

let passw = private_password();

let result = passw("kt9@73098");

console.log(result);




