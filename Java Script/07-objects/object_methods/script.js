// Q1 Create an object car with:
// brand
// model
// a method start() that prints "Car started"

let car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022,
  start: function(){document.getElementById("display1").innerText = "Car started"},

};

car.start();

// Q2 Create an object student with:

// name
// a method study() that prints "Studying..."
let student = {
    name: "Rahul",
    study: function(){
        document.getElementById("display2").innerText = "Studying";
    }
};
student.study();

// Q3 this Keyword 
// Create an object user:
// name = "Aman"
// method showName() → prints name using this
let user = {
    name: "Aman",
    showName: function() {
        document.getElementById("display3").innerText = `the user name is ${this.name}` 

    }
};
user.showName();

//Q4: for...in Loop
// Use this:
// let person = {
//   name: "Aman",
//   age: 22,
//   city: "Dehradun"
// };

// Print all keys
// Print all values
// Print key + value together
// Count total properties in object
let person = {
    name: "Karan",
    age: 22,
    city: "Dehradun"
};

let output = "";
let count = 0;

for (let key in person) {
    output += `Key: ${key} <br>`;
    output += `Value: ${person[key]} <br>`;
    output += `Pair: ${key} - ${person[key]} <br><br>`;
    count++;
}

output += `Total properties: ${count}`;

document.getElementById("display4").innerHTML = output;