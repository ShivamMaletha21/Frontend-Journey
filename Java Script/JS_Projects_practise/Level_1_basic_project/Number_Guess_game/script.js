
// values 

let computer_num = Math.floor(Math.random() * 100 ) + 1;

// button
const button = document.getElementById("check");
button.addEventListener("click",()=>{

    let num = document.getElementById("num").value;
  
    if (num > computer_num) {
        document.getElementById("show_input").innerText  = " your guess is higher";   
     }

     else if (num < computer_num) {
        document.getElementById("show_input").innerText  = " your guess is lower";

     }
     else {
        document.getElementById("show_input").innerText  = `your guess is correct ${computer_num}`;
     }

});



