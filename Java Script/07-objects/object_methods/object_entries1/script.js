// Object.entries()
// Write a program to print every key along with its value.
// Write a program to display all key-value pairs of an object.
// Write a program to print each property in the format:
// key : value
// Write a program to count the total number of key-value pairs.
let student = {
    name: "Aman",
    age: 21,
    course: "BCA",
    marks : [80,90,40,100]
};
// Write a program to print every key along with its value.(show each pair one by one)
// using destructuring
Object.entries(student).forEach(([key,value])=>{
  document.getElementById("display1").innerHTML += `${key} : ${value}<br>`;
});

// Write a program to display all key-value pairs of an object.
document.getElementById("display2").innerHTML += `${Object.entries(student).join(" ")} <br>`;

// Write a program to count the total number of key-value pairs.
document.getElementById("display3").innerHTML += `${Object.entries(student).length}`;
