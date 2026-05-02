let addBtn = document.getElementById("add");
addBtn.addEventListener("click",addNumbers);

// let sub = document.getElementById("sub");
// sub.addEventListener("click",sub);


// let mul = document.getElementById("mul");
// mul.addEventListener("click",mul);


// let exit = document.getElementById("add");
// exit.addEventListener("click",exit);




let sum = 0;
function addNumbers () {
    
let number = Number(document.getElementById("input").value);

sum = sum + number;

document.getElementById("result").innerText =  sum;

document.getElementById("input").value = "";
}
