// creating empty array
let expense = [];

let box2_btn = document.getElementById("box2_btn");
box2_btn.addEventListener("click",()=>{

    // accessing values
    let category = document.getElementById("category").value;
    let amount =Number( document.getElementById("amount").value);
    let date = new Date().toLocaleDateString();

        if (amount <= 0 || isNaN(amount)) {
        alert("Enter correct Amount");
        return;
    }

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



// renderUI function
//  It does.. Clears old HTML
// Rebuilds UI from updated array
const renderUI = ()=>{

    // Clear old HTMLThis wipes the entire list from the screen.
// Screen becomes empty
// But data still exists in array
let expenseList = document.getElementById("expenseList");
expenseList.innerHTML = "";



  expense.forEach((item,index)=>{

    let icon = "";
    if (item.category === "Food")
         {
            icon = "🍔";
         }
        else if (item.category === "Travel")
            { 
                icon = "✈️";
            }
        else if (item.category === "Shopping")
            {
             icon = "🛍️";
            }
        else if (item.category === "Bills") 
            {
                icon = "📄";
            }

            expenseList.innerHTML += `
            <div class="expense-row">
              <div>${item.date}</div>
              <div>${icon}${item.category}</div>
              <div> ${item.amount}</div>
              <div>
              <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
              </div>
              </div>
              `;


  });

    updateStats();

   };

// DELETE
function deleteExpense(index) {
// it removes data from array only, but data is still shown in screen
expense.splice(index,1);
//therefore we use renderUI(), it updates
renderUI(); 
};

// STATS
function updateStats() {

    let total = expense.reduce((acc, curr) => acc + curr.amount, 0);
    document.getElementById("total_spend").innerText = `₹${total}`;

    if (expense.length > 0) {
        let biggest = expense.reduce((max, curr) =>
            curr.amount > max.amount ? curr : max
        );

        document.getElementById("big_expense").innerText =
            `₹${biggest.amount}`;
    } else {
        document.getElementById("big_expense").innerText = `₹0`;
    }

    document.getElementById("monthly_expense").innerText =
        expense.length;
}
