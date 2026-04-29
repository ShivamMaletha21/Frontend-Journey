



// let num = Number(prompt("Enter a number: "));

// if 
//     (num % 2 == 0) {
//         console.log("the number is even");
//     }

//     else {
//         console.log("the number is odd")
// 


 document.getElementById("btn").addEventListener("click",checkNumber);



function checkNumber() {
    let num = Number(document.getElementById("numInput").value);

    if (num % 2 == 0) {

        document.getElementById("result").innerText = "the number is even";
    }

        else {
            document.getElementById("result").innerText = "the number is odd";
        }

    }

    
