// Q1.Create a shopping cart function that accepts unlimited item prices and returns the total bill.

let cart = (...prices)=> {
    let count = 0;
    for(let i =0;i< prices.length;i++) {
        count += Number(prices[i]);
    }
    return count;

};

let btn = document.getElementById("totalBtn");
btn.addEventListener("click", ()=> {

    let items  = document.getElementById("price").value;
    let item_split = items.split(",").map(Number);     // split where there is a comma
    let real_items = cart(...item_split);

    document.getElementById("result").innerText =  `Total Bill: ₹${real_items}`;

})
