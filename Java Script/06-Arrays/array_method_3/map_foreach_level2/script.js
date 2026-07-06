



// WAP to remove duplicate values from an array
let num = [10,20,30,10,40,50,20,30,10];
let remove = num.reduce((acc,curr)=>{

    if (!acc.includes(curr)){ // means that if array dont inculdes current value then only push that value ..
        acc.push(curr);
    }
    // returning the whole array
    return acc;

},[]);
document.getElementById("display1").innerHTML = JSON.stringify(remove);

// WAP to count how many times each word appears.
let words = ["cat","dog","cat","bird","dog","cat","fish","bird","dog","cat"];
let count = words.reduce((acc,curr)=>{
    if(acc[curr] === undefined) {
        acc[curr] = 1;
    }
    else {
        acc[curr] += 1;
    }
    return acc;


},{});
document.getElementById("display2").innerHTML = JSON.stringify(count);


// WAP to create initials from full names.
let names = ["aman","rohan","sohan","karan"]
let full_name = names.map((value)=>{
    return "Mr./Ms" + value;

});
document.getElementById("display3").innerHTML = full_name;

// WAP to return only active users.
let users = [
    { id: 1, name: "Shivam", active: true },
    { id: 2, name: "Rahul", active: false },
    { id: 3, name: "Priya", active: true },
    { id: 4, name: "Aman", active: false },
    { id: 5, name: "Neha", active: true }
];
// filter() does not return true or false. It returns the original array elements whose callback returns true.
let user_active = users.filter((value)=>{
       return value.active;
});
document.getElementById("display4").innerHTML = JSON.stringify(user_active);

// WAP to find the employee with the highest salary.
let employees =  [
    { id: 1, name:"Shivam",salary:4500},
    { id: 2, name: "Rahul", salary: 62000 },
    { id: 3, name: "Priya", salary: 58000 },
    { id: 4, name: "Aman", salary: 75000 },
    { id: 5, name: "Neha", salary: 68000 },
    { id: 6, name: "Rohit", salary: 54000 },
    { id: 7, name: "Anjali", salary: 82000 },
    { id: 8, name: "Karan", salary: 47000 }
];

let emp_sal = employees.reduce((acc,curr)=>{
  if (curr.salary > acc.salary) {

    return curr;
  }
  else {
    return acc;
  }

});
document.getElementById("display5").innerHTML = JSON.stringify(emp_sal);

// WAP to calculate the age of users from their birth year.

const users3 = [
  { id: 1, name: "Shivam", birthYear: 2003 },
  { id: 2, name: "Aarav", birthYear: 1998 },
  { id: 3, name: "Priya", birthYear: 2001 },
  { id: 4, name: "Rohan", birthYear: 1995 },
  { id: 5, name: "Ananya", birthYear: 2004 },
  { id: 6, name: "Vikram", birthYear: 1990 },
  { id: 7, name: "Neha", birthYear: 1997 },
  { id: 8, name: "Karan", birthYear: 2000 },
  { id: 9, name: "Sneha", birthYear: 2002 },
  { id: 10, name: "Rahul", birthYear: 1993 }
];
let current_year = 2026;
let user_age = users3.map((value)=>{
    return value.name + (current_year - value.birthYear);
});
document.getElementById("display6").innerHTML = JSON.stringify(user_age);



// WAP to sort students by their marks in descending order.
const students = [
  { id: 1, name: "Shivam", marks: 78 },
  { id: 2, name: "Aarav", marks: 92 },
  { id: 3, name: "Priya", marks: 65 },
  { id: 4, name: "Rohan", marks: 85 }
];

const sortedStudents = students.sort((a, b) => b.marks - a.marks);

console.log(sortedStudents);

// WAP to group products by their category.
const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "Shirt", category: "Clothing" },
  { id: 4, name: "Jeans", category: "Clothing" },
  { id: 5, name: "Rice", category: "Grocery" }
];

const groupedProducts = products.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }

  acc[curr.category].push(curr);

  return acc;
}, {});

console.log(groupedProducts);