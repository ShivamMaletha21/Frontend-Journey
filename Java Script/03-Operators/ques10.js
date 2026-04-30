let btn = document.getElementById("btn");
btn.addEventListener("click",checkEligibility);

function checkEligibility() {

    let attendance = Number(document.getElementById("attendance").value);

    let fees = document.getElementById("fees").checked;

    if (attendance >=75 && fees == true) {

        document.getElementById("result").innerText = "allowed";
    }
    else {

        document.getElementById("result").innerText = "now allowed";

    }
}