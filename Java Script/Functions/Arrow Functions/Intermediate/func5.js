// Q5 Create a function that accepts a user's name and unlimited hobbies.

const Realname = (userName, ...hobbies) => {

    let result = document.getElementById("msg").innerText = `The user name is ${userName} and its hobbies are ${hobbies}`
    return result;
}

let btn = document.getElementById("btn");
btn.addEventListener("click",() => {

    let name = document.getElementById("name").value;

    let hobbies = document.getElementById("hobbies").value;
      let realhobbies = hobbies.split(" ");

    let RealResult = Realname(name,...realhobbies);

})