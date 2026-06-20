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


// RENDER UI
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
            <div>${item.date}</div>
            <div>${icon} ${item.category}</div>
            <div>₹${item.amount}</div>
            <div>
                <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
            </div>
        </div>
        `;
    });

    updateStats();
}


// DELETE
function deleteExpense(index) {
    expense.splice(index, 1);
    renderUI();
}


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