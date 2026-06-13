// Q13 Create a function that accepts first name and last name and returns the full name.

const fullName = ()=> {
    let first_name = document.getElementById("first").value;
    let last_name = document.getElementById("last").value;

    return first_name + last_name;
}

let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    let result = fullName();
    document.getElementById("result").innerText = result;
});