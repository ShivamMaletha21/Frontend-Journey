//Q7 Create a function that accepts multiple expenses and returns total spending.

const expense = (...total_expenses)=> {

    let count = 0;

    for(let i=0;i< total_expenses.length;i++){

   count += Number(total_expenses[i]);

    }
       return count;
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {
    let real_value = document.getElementById("input").value;

    let total_value = real_value.split(" ");

    let expense_value = expense(...total_value);
    document.getElementById("msg").innerText = expense_value;


})