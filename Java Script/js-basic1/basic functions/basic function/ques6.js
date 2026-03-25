// Function that prints “Hello World” 10 times.

function hello() {
    for(i=1; i<=10; i++) {
        document.getElementById("output").innerHTML += "Hello World" + "<br>" ;
    }
}
hello();