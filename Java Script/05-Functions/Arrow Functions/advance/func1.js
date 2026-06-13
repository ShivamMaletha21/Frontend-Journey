// Focus: this, return behavior, and function thinking.

// Q1 Create an object with name and age and create a method that prints both values using this.

let person = {

    name: "Shivam",
    age:22,

    // we dont write..  function choice(){} bcz object -> key value pair .. it automaticaly does choice : function(){...}
    choice() {
     let value = () => {

        document.getElementById("name").innerText = this.name;
          document.getElementById("age").innerText= this.age;
    }
    value();
}
};

let btn = document.getElementById("btn");
btn.addEventListener("click",  ()=>{
    person.choice();
})