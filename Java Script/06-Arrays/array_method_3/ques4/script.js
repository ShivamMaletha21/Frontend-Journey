// <!-- Q3 - filter()
// Write a program to create a new array containing only students who scored more than 60 marks.
// let marks = [45, 78, 90, 55, 62];
// Expected:

let marks = [];

//display marks
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    marks.push(input);
    document.getElementById("display").innerText = marks;
    document.getElementById("input").value = "";

});

//filter
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    let result = marks.filter((num)=>{
        return num > 60;
    });
    document.getElementById("result").innerText = result;

});