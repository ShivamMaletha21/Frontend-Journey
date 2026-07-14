// Level 1 – Basics
// Array Destructuring
// WAP to extract the first and second elements from an array into separate variables.
// WAP to extract all three elements of an array and print each variable.
// WAP to extract only the first element from an array.
// WAP to extract the first and third elements while skipping the second element.
// WAP to swap the values of two variables using array destructuring.

let arr1 = [10,20,30,40,50];
let [a1,b1] = arr1;
console.log(a1,b1);

let [a11,b11,c11] = arr1;
console.log(a11,b11,c11);

// WAP to extract the first and third elements while skipping the second element.
let arr2 = [1,2,3,4,5];
let [a, , c] = arr2;
console.log(a,c);

// WAP to swap the values of two variables using array destructuring.
let s1 = 10;
let h1 = 20;
[s2,h2] = [h1,s1];
console.log(s2,h2);



// Object Destructuring
// WAP to extract the name and age properties from an object.
// WAP to extract only the city property from an object.
// WAP to extract three properties from an object and print them.
// WAP to rename a destructured property while extracting it.
// WAP to extract a property that doesn't exist and observe the output.

let person1 = {
    name :"Shivam",
    age: 21,
    city: "Dehradun"
}

let {name,age} = person1;
console.log(name,age);

let {city} = person1;
console.log(city);


// WAP to rename a destructured property while extracting it.
let {name: username} = person1;
console.log(person1);

// WAP to extract a property that doesn't exist and observe the output.
let {country} = person1;
console.log(country);
