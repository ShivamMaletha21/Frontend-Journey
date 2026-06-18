
// Q1 - forEach()
// Write a program to display all student names one by one.
// let students = ["Rahul", "Amit", "Priya"];

let student  = ["Rahul", "Amit", "Priya"];


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    student.forEach(
         document.getElementById("display").innerText = student
    );   
   
});



// for each use to increase salary .. used for each individual
let salaries = [10000, 20000, 30000];

salaries.forEach((salary, index) => {
    salaries[index] = salary + 5000;
});

