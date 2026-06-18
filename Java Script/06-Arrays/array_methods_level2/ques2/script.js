// Q2
// Write a program to check whether "JavaScript" exists in an array of skills.
// Uses: includes() 

let program = [];

// display array
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    program.push(input);
    document.getElementById("display").innerText = program;
    document.getElementById("input").value = "";

});

// check js exist
let btn2 = document.getElementById("check");
btn2.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    if(program.includes("JavaScript")){
        document.getElementById("display_check").innerText = "JS Found";
    }
    else{
         document.getElementById("display_check").innerText = "JS not exist";

    }
      document.getElementById("input").value = "";

});