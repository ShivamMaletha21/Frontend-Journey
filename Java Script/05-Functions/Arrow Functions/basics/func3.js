// Q3. Create an arrow function that accepts two numbers and returns their sum.

const sum = () =>{
    let num1 = Number(document.getElementById("num1").value) ;
    let num2 = Number(document.getElementById("num2").value) ;

      return num1 + num2;

}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
    let result = sum();
    document.getElementById("result").innerText = result;
});
