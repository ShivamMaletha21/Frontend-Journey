// Q1.Create an object with name and age and create a method that prints both values using this.



// eg.. of how to create object
// const user = {
//     name: "Shivam",
//     age: 21
// };

// document.getElementById("msg").innerText = user.name;

const user = {
    name: "Shivam",
    age:21,

    greet: function() {
        document.getElementById("msg").innerText = `User name is ${this.name} and User age is ${this.age}`
    }
};

let btn = document.getElementById("btn");
btn.addEventListener("click",
    ()=>{
        user.greet();
    });


 