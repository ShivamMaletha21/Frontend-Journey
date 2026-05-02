// Star Pattern 

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",starpattern);

function starpattern() {
    let output = "";

    for(let i=1;i<=5;i++) {
        for (let k=1;k<=i;k++) {

            output += "*" ;
           
        }
        output += "\n";
    }
     document.getElementById("result1").innerText = output;
}