// Basic Questions


// Section 1: Creation and Access

// Q1.Create array of 5 student names.
let student = ["anuj","amit","raskolnikov","rohan","tanish"];
console.log(student);

// Q2.Print first student name.
console.log(student[0]);

// Q3. Print last student.. and supose you dont know the array no.
let student1 = student.at(-1);
console.log(student1);

// Q4. Create array of 5 numbers and print 3rd number.
let number1 = [1,2,3,4,5];
console.log(number1[2]);

// Q5. Change 2nd value in array.
number1[1]= 73;
console.log(number1);

// Q6. Print length of array.
console.log(number1.length);

// Q7. Create empty array and add 3 values manually.
let arr = [];
arr[0] = 0;
arr[1] = 1;
arr [2]= 2;
console.log(arr);
// or you can use push

// let student2 = [];
// student2.push(prompt("Enter name 1"));
// student2.push(prompt("Enter name 2"));
// student2.push(prompt("Enter name 3"));
// console.log(student2);

// Q8. Store favorite movies in array.
let movies = ["misson impossible","game of thrones","the dunk"];
console.log(movies);

// Q9.Check array length after adding new value.
movies.push("khiladi2");
console.log(movies);