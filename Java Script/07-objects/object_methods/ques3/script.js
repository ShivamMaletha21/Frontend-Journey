//  Object Methods.. Object.keys(), Object.values(),Object.keys()

// Level 1 — Basic Understanding 
//  Object.keys()
// Write a program to print all property names of a student object.
// Write a program to count how many properties exist in an object.
// Write a program to display all keys of a car object one by one.
// Write a program to check whether an object contains more than 5 properties. 
let student1 = {
    name:"Karan",
    age:21,
    subject: ["maths","history","physics"],
    
}
// Write a program to print all property names of a student object.
document.getElementById("display1").innerHTML += `${ Object.keys(student1).join(", ")} `; 

// Write a program to count how many properties exist in an object.
document.getElementById("display2").innerHTML += `${ Object.keys(student1).length} `;

// Write a program to display all keys of a car object one by one
let car1 = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022
}
  Object.keys(car1).forEach((value)=>{
document.getElementById("display3").innerHTML +=  value + "<br>";
  });

// Write a program to check whether an object contains more than 5 properties. 
if (Object.keys(student1).length > 5) {
    document.getElementById("display4").innerHTML += "yes the student contain values more than 5";

}
else {
 document.getElementById("display4").innerHTML += "no the student does not contain values more than 5";

};


// Object.values()
// Write a program to print all values of an employee object.
// Write a program to count the total number of values in an object.
// Write a program to display each value on a new line.
// Write a program to store all values of an object in a separate array and print it.
let employee = {
    name: "Aman Sharma",
    age: 28,
    id: 1024,
    department: "IT",
    designation: "Software Developer",
    salary: 60000,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India"
    },
    isActive: true,
};
// Write a program to print all values of an employee object.

// document.getElementById("display5").innerHTML += 
// Object.values(employee).join(" ") + "<br>"; ... as this is giving output as [object object]
// document.getElementById("display5").innerHTML += 
// Object.values(employee.address).join(" ") + "<br>";
 document.getElementById("display5").innerHTML += `${Object.values(employee).slice(0,7).join(" ")} <br>`;
 document.getElementById("display5").innerHTML += `${Object.values(employee.address).join(" ")} <br>`;

// Write a program to count the total number of values in an object
document.getElementById("display5").innerHTML += `total number of values in an object are: ${Object.values(employee).length} <br>`;

// Write a program to display each value on a new line.
Object.values(employee).splice(0,7).forEach((key)=>{
    document.getElementById("display6").innerHTML += `${key} <br>`;
});
Object.values(employee.address).forEach((key)=>{
    document.getElementById("display6").innerHTML += `${key} <br>`;
});

// Write a program to store all values of an object in a separate array and print it.
let array1 = Object.values(employee).slice(0,7).join(" ");
let array2 = Object.values(employee.address).join(" ");
document.getElementById("display7").innerHTML = array1 + array2;
