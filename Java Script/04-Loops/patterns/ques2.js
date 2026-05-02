let btn2 = document.getElementById("btn2");
btn2.addEventListener("click" , reversepattern);

function reversepattern() {
    let output = "";

    for (let i =1;i<=5;i++) {
        for(let k = 5; k>=i;k--) {

            output +="*";
        }

        output += "\n";
    }

    document.getElementById("result2").innerText = output;
}