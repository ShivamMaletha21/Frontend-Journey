// Write a program to create a new array where every product price has 18% GST added.

// let prices = [100, 200, 300]; -->


let prices = [100, 200, 300];
// Calculate once
let gst_price = prices.map((num) => {
    return num * (18 / 100);
});

// Calculate final prices once
let final_price = prices.map((num) => {
    return num + (num * 18 / 100);
});


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    document.getElementById("result").innerText =
        `Current prices: ${prices}`;
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    document.getElementById("result").innerText =
        `GST amounts: ${gst_price}`;
});

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    document.getElementById("result").innerText =
        `Final prices: ${final_price}`;
});



