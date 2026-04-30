let btn = document.getElementById("btn");
btn.addEventListener("click",checkReverse);

function checkReverse() {

    let output = "";    
    for(let i =20; i>=1;i--) {
                output += i + "\n";
              }

     document.getElementById("num").innerText = output;
}
