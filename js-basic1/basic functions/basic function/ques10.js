// Function that prints all odd numbers from 1 to 20.

function odd(){

    for(i=0; i<=20;i++) {
        if(i % 2 != 0){
            document.getElementById("output").innerHTML += i + "<br>";
        }
    }
}
odd()