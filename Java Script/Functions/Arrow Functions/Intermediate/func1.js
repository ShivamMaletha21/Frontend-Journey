// Q1. Create a function with a default parameter that greets a user. If no name is passed, use Guest.

const greet = (name = "Guest") => {
    document.getElementById("msg").innerText = name;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let user = document.getElementById("name").value;

    // If value is undefined → use default..If value exists → use that value

    greet(user || undefined);
}); 

