// Q4 - find()
// Write a program to find the first employee whose salary is greater than 50,000.
// let salaries = [30000, 45000, 55000, 70000];
let salary = [];

//display marks
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    salary.push(input);
    document.getElementById("display").innerText = salary;
    document.getElementById("input").value = "";

});

//filter
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    let result = salary.find((num)=>{
        return num > 50000;
    });
    document.getElementById("result").innerText = result;

});