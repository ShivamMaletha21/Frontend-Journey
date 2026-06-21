// creating empty array
let expense = [];

let box2_btn = document.getElementById("box2_btn");
box2_btn.addEventListener("click",()=>{

    // accessing values
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;
    let date = new Date().toLocaleDateString();

    // creating object
    let expenseObj = {
        category,
        amount,
        date,
    }
    //pushing the object in the array
    expense.push(expenseObj);

    // creating a different function bcz we need it at many places.. 
    // so instead of writing repetedly we write it at one place and then
    // we call it
        renderUI();
    
    // The input box becomes empty and ready for the next expense.
    document.getElementById("amount").value = "";
  
});
