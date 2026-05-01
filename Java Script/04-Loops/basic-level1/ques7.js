let btn = document.getElementById("btn");
btn.addEventListener("click",EvenOdd);

function EvenOdd() {
    
    let evenOutput = "";
    let oddOutput = "";

    for(let i = 1; i<=50;i++) {

        if(i % 2 == 0) {
             evenOutput += i + "\n";
        }

        else {
          oddOutput += i + "\n";
        }
         
    }
        document.getElementById("even").innerText = "Even Numbers:\n" + evenOutput;
    document.getElementById("odd").innerText = "Odd Numbers:\n" + oddOutput;
}