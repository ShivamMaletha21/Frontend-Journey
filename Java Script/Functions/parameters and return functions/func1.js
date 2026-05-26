// Level 2 — Parameters & Return Values

// Create a function that accepts two numbers and returns the larger one.

let btn = document.getElementById("btn");
btn.addEventListener("click",largest);


function large(num1,num2) {

    if(num1>num2) {
        return num1;
    }
      else{ 
            return num2;
        }

}

function largest() {


    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = large(num1,num2);

    document.getElementById("result").innerText = result;

}