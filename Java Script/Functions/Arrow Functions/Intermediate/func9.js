// Q9.Create an arrow function that returns true if a number is positive and false otherwise.

const true_value = (value)=>{

    if(value >=0) {
        return ` the value is positive and it is ${value}`;

    }
    else {
        return `the value is negative and it is ${value} `
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {

    let real_value = document.getElementById("input").value;

    let call_value = true_value(real_value);

    document.getElementById("msg").innerText = call_value;
})