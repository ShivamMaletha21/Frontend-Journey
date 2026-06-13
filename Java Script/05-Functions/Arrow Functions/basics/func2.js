// Q2 Create an arrow function that accepts a name and prints a greeting using that name.



const greet =()=>{
    let user = document.getElementById("name").value;

    document.getElementById("msg").innerText =  "wecome" + user;

}


let btn = document.getElementById("btn");
btn.addEventListener("click",greet);
