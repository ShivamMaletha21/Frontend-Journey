//Create a function that takes two numbers and returns their sum.
//Create a function that takes two numbers and returns their difference.
// Create a function that takes two numbers and returns their product.
// Create a function that takes two numbers and returns their quotient.
// Create a function that takes one number and returns its square.
// Create a function that takes one number and returns its cube.

let add1 = document.getElementById("add1");
add1.addEventListener("click",add);


//addition
function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number( document.getElementById("num2").value);

     let result1 = num1 + num2;

     document.getElementById("result").innerText = result1;
}


//subtract
let sub1 = document.getElementById("sub1");
sub1.addEventListener("click",sub);

function sub() {
    let num3 = Number(document.getElementById("num1").value);
    let num4 = Number(document.getElementById("num2").value);

    let result2 = num3 - num4;

    document.getElementById("result").innerText = result2;
}

//multiply 
let mult1 = document.getElementById("mult1");
mult1.addEventListener("click",mult);

function mult () {

        let num5 = Number(document.getElementById("num1").value);
    let num6 = Number(document.getElementById("num2").value);

    let result3 = num5 * num6;
    document.getElementById("result").innerText = result3;
}

//divide
let div1 = document.getElementById("div1");
div1.addEventListener("click",div);

function div () {

        let num7 = Number(document.getElementById("num1").value);
    let num8 = Number(document.getElementById("num2").value);

    let result4 = num7 / num8;
    document.getElementById("result").innerText = result4;
}

// square
let square1 = document.getElementById("square1");
square1.addEventListener("click",square);

function square() {

       
    let num9 = Number(document.getElementById("num1").value);

    let result5 = num9 * num9;
    document.getElementById("result").innerText = result5;
}

// cube
let cube1 = document.getElementById("cube1");
cube1.addEventListener("click",cube);

function cube() {

       
    let num10 = Number(document.getElementById("num1").value);

    let result6 = num10 * num10 * num10;
    document.getElementById("result").innerText = result6;
}
