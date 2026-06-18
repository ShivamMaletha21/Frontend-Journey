// Q4

// Write a program to display an array in reverse order.

// Example:

// ["Mon", "Tue", "Wed"]

// Output:

// ["Wed", "Tue", "Mon"]

// Uses: reverse()

let array = [];

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    let input  = document.getElementById("input").value ;
    array.push(input);
    document.getElementById("display").innerText = array;
    document.getElementById("input").value ="";
});


//convert
let bn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{

   let reversed =  array.reverse();
    document.getElementById("reverse").innerText = reversed;
});