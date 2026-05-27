// Q4 . Create a function that accepts two numbers and returns the smaller one

const small = () => {
    let num1 = Number(document.getElementById("num1").value);
     let num2 = Number(document.getElementById("num2").value);

    return  num1 < num2 ? num1:num2;

}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    let result = small();

    document.getElementById("result").innerText = result;
});