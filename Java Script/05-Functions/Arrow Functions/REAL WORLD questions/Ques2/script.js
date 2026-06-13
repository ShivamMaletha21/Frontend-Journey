// Create a food ordering function that accepts customer name and ordered items.

let food_order = (custmName,...fItems)=> {

    return document.getElementById("result").innerText = `Thank you, ${custmName}😊
Your orders ${fItems} has been placed successfully.🙏 `
};


let orderBtn = document.getElementById("orderBtn");
orderBtn.addEventListener("click", ()=>{

    let user = document.getElementById("customerName").value ;
    let items = document.getElementById("foodItems").value ;

    let foodItems = items.split(",");

    food_order(user,...foodItems);
});