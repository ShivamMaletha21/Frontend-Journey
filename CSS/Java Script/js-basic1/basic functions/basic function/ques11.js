// Function to print first N natural numbers.

function natural(n){
    for(i=1;i<=n;i++) {
        document.getElementById("output").innerHTML += i + "<br>";
    }
    
}
natural(20);