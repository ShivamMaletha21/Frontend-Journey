document.getElementById("btn").addEventListener("click",checkAge);

function checkAge () {
    
    let age = Number(document.getElementById("age").value);

    if (age >=18) {
        document.getElementById("result").innerText = "You can vote";
    }

    else {
        document.getElementById("result").innerText = "You cannot vote";
    }
}