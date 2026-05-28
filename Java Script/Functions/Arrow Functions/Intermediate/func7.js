//Q5 Create a function that accepts a user profile and returns important information.


const profile = (user) => {
            document.getElementById("msg").innerText = `User name is ${user.name} and age is ${user.age} and country is ${user.country}`
    };

const userData = {
        name:"Shivam",
        age:"21",
        country:"India"
    };



 let btn = document.getElementById("btn");
 btn.addEventListener("click",()=> {
 profile(userData);
 });

 