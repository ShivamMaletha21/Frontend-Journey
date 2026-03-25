// Function that prints all even numbers from 1 to 20.
function even() {
    for(i=1; i <= 20;i++ ) {
        if (i % 2 == 0) {
            document.getElementById("output").innerHTML +=  i + "<br>" ;
        }
    }
}
even();