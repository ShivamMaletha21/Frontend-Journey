let expense = [];

// ADD EXPENSE
let box2_btn = document.getElementById("box2_btn");

box2_btn.addEventListener("click", () => {

    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);
    let date = new Date().toLocaleDateString();

    if (amount <= 0 || isNaN(amount)) {
        alert("Enter correct Amount");
        return;
    }

    let expenseObj = {
        category,
        amount,
        date
    };

    expense.push(expenseObj);

    renderUI();
    document.getElementById("amount").value = "";
});


//  RENDER UI
function renderUI() {

    let expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expense.forEach((item, index) => {

        let icon = "";

        if (item.category === "Food") icon = "🍔";
        else if (item.category === "Travel") icon = "✈️";
        else if (item.category === "Shopping") icon = "🛍️";
        else if (item.category === "Bills") icon = "📄";

        expenseList.innerHTML += `
            <div class="expense-row">
                ${icon} ${item.category} | ${item.date} | ₹${item.amount}
                <button onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
    });

    updateStats();
}


//  DELETE EXPENSE 
function deleteExpense(index) {
    expense.splice(index, 1);
    renderUI();
}


//  UPDATE STATS 
function updateStats() {

    // Total spending
    let total = expense.reduce((acc, curr) => acc + curr.amount, 0);
    document.getElementById("total_spend").innerText =
        `Total Spending: ₹${total}`;

    // Biggest expense
    if (expense.length > 0) {
        let biggest = expense.reduce((max, curr) =>
            curr.amount > max.amount ? curr : max
        );

        document.getElementById("big_expense").innerText =
            `Biggest Expense: ₹${biggest.amount}`;
    } else {
        document.getElementById("big_expense").innerText =
            `Biggest Expense: ₹0`;
    }

    // Count of expenses
    document.getElementById("monthly_expense").innerText =
        `Expenses This Month: ${expense.length}`;
}