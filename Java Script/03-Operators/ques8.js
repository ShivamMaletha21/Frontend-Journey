let btn = document.getElementById("btn");
btn.addEventListener("click",checkPassword);

function checkPassword() {

    let password = document.getElementById("pswd").value;
    if (password.length >8) {

        document.getElementById("result").innerText = "Strong";

    }

    else {
        document.getElementById("result").innerText = "Weak";
    }
}
