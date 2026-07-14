// // array destrcuting
// let arr = ["Shivam", 20, "India"];

// let [name, age, country] = arr;

// console.log(name);    // Shivam
// console.log(age);     // 20
// console.log(country); // India



// // object destructuing
// let person = {
//     name: "Shivam",
//     age: 20,
//     city: "Dehradun"
// };

// let { name, age, city } = person;


// console.log(name); // Shivam
// console.log(age);  // 20
// console.log(city); // Dehradun

// eg of array destructuring
// 1. skip values
let arr2 = [10,20,30];
let [a, , c] = arr2;
console.log(a,c);

//2. default avlue
let arr3 = [10];
let [d,e = 50] = arr3;
console.log(d,e);

//3. rest operator
let arr4 = [1,2,3,4,5,6,7];
let [f, ...rest] = arr4;

// 4. swap 
let g= 10;
let h = 20;
[g,h] = [h,g];
console.log(g,h);



