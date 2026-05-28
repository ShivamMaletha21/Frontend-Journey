// Q5 Create a function that accepts a number and returns whether it is even or odd.
const small = () => {
    let num = Number(document.getElementById("num").value);
   

    if (num % 2 == 0) {
        return "This is even number";
    }
    else {
        return "this number is odd";
    }

}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    let result = small();

    document.getElementById("result").innerText =  result ;
});