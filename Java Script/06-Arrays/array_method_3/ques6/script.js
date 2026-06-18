// <!-- Q5 - reduce()
// Write a program to calculate the total bill amount.
// let bills = [200, 500, 100, 300]; -->

let bill = [];

//display bills
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    bill.push(Number(input));
    document.getElementById("display").innerText = bill;
    document.getElementById("input").value = "";

});

//total bull
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
     let input = document.getElementById("input").value;
   let total =   bill.reduce((acc,curr)=>{
        return acc + curr},0);

        document.getElementById("result").innerText = total;

});