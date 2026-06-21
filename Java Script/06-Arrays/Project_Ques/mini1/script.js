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
        renderAnalytics(expense); 
    
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
renderAnalytics(expense);   
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




// chart code


const categoryColors = {
    food: "#ff6b6b",      // red
    travel: "#4dabf7",    // blue
    shopping: "#51cf66",  // green
    bills: "#ffd43b"      // yellow
};


div.className = "progress-item";


function renderAnalytics(data) {
    const box = document.getElementById("analyticsBox");
    box.innerHTML = "";

    if (!data || data.length === 0) {
        box.innerHTML = "<p>No data available</p>";
        return;
    }

    let totals = {};

    data.forEach(item => {
        if (!totals[item.category]) {
            totals[item.category] = 0;
        }
        totals[item.category] += item.amount;
    });

    let max = Math.max(...Object.values(totals));

    Object.keys(totals).forEach(cat => {

        let percent = max === 0 ? 0 : (totals[cat] / max) * 100;

        //  GET COLOR FOR CATEGORY
        let color = categoryColors[cat.toLowerCase()] || "#4dabf7";

        let div = document.createElement("div");
        div.className = "progress-item";

        div.innerHTML = `
            <div class="progress-label">
                <span>${cat.toUpperCase()}</span>
                <span>₹${totals[cat]}</span>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" 
                     style="width:${percent}%; background:${color}">
                </div>
            </div>
        `;

        box.appendChild(div);
    });
}
 renderAnalytics(expense);