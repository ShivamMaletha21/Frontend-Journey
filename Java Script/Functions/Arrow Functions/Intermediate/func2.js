// Q2 Create a function with a default price value if the user does not provide one.

const real_price = (price="400$") => {
    document.getElementById("msg").innerText = price;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let new_price = document.getElementById("price").value;

    real_price(new_price || undefined)
})