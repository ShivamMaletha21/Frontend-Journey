
// 10. Looping Through Objects... questions based on for loop 

// Q1 Just Print Keys
// let student = {
//   name: "Aman",
//   age: 21,
//   course: "BCA"
// };
let student2 = {
    name: "Aman",

    age: 21,
    course: "BCA"
};
for (key in student2) {
   document.getElementById("display1").innerHTML += `${student2[key]} <br>`;
}

// Q2 let car = {
//   brand: "Toyota",
//   model: "Fortuner",
//   year: 2022
// };
// Print only the property names.

let car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022
};
for (let prop in car) {
     document.getElementById("display1").innerHTML += prop + " ";
}


// Q3 Print Values
// let phone = {
//   brand: "Samsung",
//   price: 25000,
//   color: "Black"
// };
let phone = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
};
for (val in phone){
    document.getElementById("display1").innerHTML +=  `${val}:  ${phone[val]}<br>`
}


// Q4 let user = {
//   username: "aman123",
//   email: "aman@gmail.com",
//   city: "Delhi",
//   age: 22
// };
// Count how many properties are present.
let user = {
    username: "aman123",
    email:"aman@gmail.com",
    city:"Delhi",
    age:22
}
let count = 0;
for (key in user){
    count ++;

}
document.getElementById("display1").innerHTML = count;


// Q9 Conditional Logic
// let marks = {
//   maths: 90,
//   science: 80,
//   english: 75,
//   history: 60
// };

// Print only subjects having marks greater than 75
let marks = {
    maths:90,
    science:80,
    english: 75,
    history:60
};
for (value in marks){
    if (marks[value] >= 75){
    document.getElementById("display2").innerHTML += `the marks above 75 subjects are ${value}: ${marks[value]} <br>`;
    }

    
};