// Create a function for login validation using username and password.
let btn = document.getElementById("btn");
btn.addEventListener("click",login);

function login() {

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    let Real_user = "Shivam Maletha";
    let Real_password = "rd876";


    if(username == Real_user && password == Real_password) 
    {
        document.getElementById("result").innerText = "Login Successfull";
    }
    else {
        document.getElementById("result").innerText = "Login Failed";
    }
}