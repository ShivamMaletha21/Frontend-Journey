// Q1.Create an object named book with:
// title = "JavaScript Basics"
// author = "John"
// pages = 200

let book = {
    title: "JavaScript Basics",
    author: "John",
    page: 200,
}

document.getElementById("display").innerText = JSON.stringify(book,null,2);

// Q2 Create an object phone using object literal with:
// brand
// model
// price
let car = {
    brand: "Maruti Suzuki",
    model : "Swift (Hatchback)",
    price: "₹6 lakh – ₹9 lakh"
}
document.getElementById("display2").innerText = JSON.stringify(car,null,2);

// Q3 Create an object student using new Object() and add:
// name
// age
// course


function student(name,age,course){
    this.name = name;
    this.age = age;
    this.course = course;
}

let student1 = new student("Shivam",21,"Bca (Ai and Ds)");
document.getElementById("display3").innerText = JSON.stringify(student1,null,2);


// Q4
// Print the model using bracket notation
// Store the year in a variable and print it
let car2 = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022
};
// Print the brand using dot notation
document.getElementById("display4").innerText = car2.brand;
// Print the model using bracket notation
document.getElementById("display4.1").innerText = car2["model"];

// 5. Add / Update Properties

//  Use this object:
// let student = {
//   name: "Aman",
//   age: 20
// };
// Add a new property city = "Dehradun"
// Update age to 25
// Add a new property marks = 85
// Print final object
let student2 = {
  name: "Aman",
  age: 20
};
student2.city = "Dehradun";
student2.age = 25;
document.getElementById("display5").innerText = JSON.stringify(student2,null,2);


// 6. Deleting Properties
// Use this object:
// let laptop = {
//   brand: "Dell",
//   ram: "8GB",
//   price: 50000
// };
// Delete ram property
// Print object after deletion

let laptop = {
  brand: "Dell",
  ram: "8GB",
  price: 50000
};
delete laptop.ram;
document.getElementById("display5").innerText = JSON.stringify(laptop,null,2);


