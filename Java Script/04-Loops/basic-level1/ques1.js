
let btn = document.getElementById("print");
btn.addEventListener("click",checkPrint);


function checkPrint () 
{
    let output = "";
    
for(let i = 1; i<=20;i++) {
    output += i + "\n ";
}

document.getElementById("num").innerText = output;

}