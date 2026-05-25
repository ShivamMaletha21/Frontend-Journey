//Create a function that accepts a person's name and displays a personalized greeting.


let btn = document.getElementById("btn");
btn.addEventListener("click", person);


function person() {
    let person1 = document.getElementById("name1").value;

    document.getElementById("result").innerText =
        "Hey " + person1 + ", you are learning JavaScript!";
}