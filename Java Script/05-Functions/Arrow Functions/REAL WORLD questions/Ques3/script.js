// Create a login function that uses a default role if no role is provided.
let greetuser = (username ="Guest")=> {
 document.getElementById("msg").innerText =  `${username} you are login successfully `;

}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {
    let user = document.getElementById("user").value.trim();

    greetuser(user || undefined)
})

// Most developers would remove the return because the function's job is updating the page, not returning data.
// here using of return is not necessary

// let greetuser = (username ="Guest")=> {
//   return document.getElementById("msg").innerText =  `${username} you are login successfully `;

// }