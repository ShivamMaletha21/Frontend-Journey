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

// Q4 Create an object student with:
// name
// age
// marks array
// address object
// method getInfo() that prints name and city
let student3 = {
    name: "Aman",
    age: 21,
    course: "BCA",
    marks:[80,90,78],
    address: {
        city:"Delhi",
        state: "Delhi",
        pincode: 110001,   
    },
    getInfo: function() {
        document.getElementById("display4").innerText = `the name of student is ${this.name} and the city he lives in ${this.address.city}`
    }
};
student3.getInfo();