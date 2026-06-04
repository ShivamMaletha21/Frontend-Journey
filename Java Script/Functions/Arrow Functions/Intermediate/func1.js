// Q1 Create a function with a default parameter that greets a user. If no name is passed, use Guest.


// Passed value > Default value... here default value which is guest is reaplce by the value that we pass
const greetUser = (username = "Guest") => {
        document.getElementById("msg").innerText = 
        `Hey this is ${username}`;
    };

    
let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    let inputValue = document.getElementById("input").value.trim();

    greetUser(inputValue || undefined);
});

