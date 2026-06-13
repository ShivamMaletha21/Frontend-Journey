// Q3 Create a function that accepts unlimited numbers and returns their average.

const average = (...num) => {

    let sum = 0;
    for(let i =0; i< num.length;i++){
        sum += num[i];
    }

    let avg = sum / num.length;
 return avg;
};

let btn  = document.getElementById("btn");
btn.addEventListener("click",()=>{ 
   
    let input = document.getElementById("input").value;
    

    // input.split(" ")..It breaks a string into an array using space.and .map(Number) .. convert everystring into a number
   
    // and this is Split by every space means you type 2 then space then 4 or any number and then it give average or answer
    // let numbers = input.split(" ").map(Number);

    // this is Split by every character("")
    let numbers = input.split("").map(Number);

    // spread operator covert array values into function values i.e average[1,2,3] becomes average(1,2,3); so then values pass as an argument
    let result = average(...numbers);
       document.getElementById("msg").innerText = result;
});




