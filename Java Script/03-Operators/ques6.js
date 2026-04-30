// adding function to button
let btn = document.getElementById("btn");
btn.addEventListener("click",checkLogin);

function checkLogin() {

    let userName = "Shivam Maletha";
    let passWord = "9875";

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if (username == userName && password == passWord ) {
        document.getElementById("result").innerText = "login successful";
    }

    else {
         document.getElementById("result").innerText ="login failed";
    }

}