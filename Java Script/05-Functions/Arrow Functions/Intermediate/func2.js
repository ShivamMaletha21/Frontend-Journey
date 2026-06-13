// Q2 Create a function with a default price value if the user does not provide one.

const defaultPrice = (userprice = "500")=> {

    document.getElementById("msg").innerText = `Hey the actual price is $${userprice}`
};

let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {
    let realprice = Number(document.getElementById("input").value.trim());

    defaultPrice(realprice || undefined);
});


