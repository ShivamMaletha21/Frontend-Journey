// Q12.Create a function that accepts a name and returns only the first character.

const accept_name = (...names) => {
    return names[0];

}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
    let real_name = document.getElementById("input").value;

    let name_split = real_name.split(" ");

    let call_value  = accept_name(...name_split);
    document.getElementById("msg").innerText = call_value;
})