// Q4 Create a function that accepts unlimited numbers and returns the largest value.

const Numbers = (...num) => {

    let max = num[0];
    for(let i=1; i <num.length;i++){
        if(num[i] > max) {
            max = num[i];
        }
    };
    return max;
};
 
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>
{

    let inputvalue = document.getElementById("input").value ;

    // split by space
    let realvalue = inputvalue.split(" ").map(Number);

    let result = Numbers(...realvalue);

    document.getElementById("msg").innerText = result;
});