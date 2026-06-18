// Q3
// Write a program to convert an array of words into a sentence.
// Example:
// ["I", "love", "JavaScript"]
// Output:
// I love JavaScript
// Uses: join()

let array = ["I", "love", "JavaScript"];

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    document.getElementById("display").innerText = array;
});


//convert
let bn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{

   let converted =  array.join(" ");
    document.getElementById("convert").innerText = converted;
});