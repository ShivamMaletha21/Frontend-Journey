let btn = document.getElementById("btn");
btn.addEventListener("click",password);


// here we have used state tracking
let attempts = 3; // global

function password() {


      event.preventDefault(); // stop form reload


    let password = document.getElementById("pass").value;

    let real_password = "shiv9876";

    if(attempts > 0) {
        if (password === real_password) {
            document.getElementById("result").innerText = "Login Success";

        }

        else {
            attempts--;

            if(attempts >0) {
                document.getElementById("result").innerText = "Wrong Password. Attempts left: " + attempts;
            }

            else {
                document.getElementById("result").innerText = "Account Locked";
            }
        }
    }
}