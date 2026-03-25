//Function to print a square of N × N # symbols.
function square(n) {
    let output = "";

    for(let j = 1; j <=n; j++) {
        for(let k=1; k<=n;k++) 
        {
            output +="*";
        }
    
    output += "<br>";
}
document.getElementById("output").innerHTML = output;
}
square(5);
