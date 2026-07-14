// Level 2 – Intermediate
// Array Destructuring
// WAP to extract the first element and store all remaining elements in another variable.
// WAP to assign default values while destructuring an array.
// WAP to destructure an array returned from a function.
// WAP to destructure a nested array.
let arr1 = [1,2,3,4,5,6,7,8];
let [a, ...rest] = arr1;

console.log(a,rest);

// WAP to assign default values while destructuring an array.
let arr2 = [10];
let [a2, b2=50] = arr2;
console.log(a2,b2);

// WAP to destructure an array returned from a function.
 function  getNumbers() {
    return [10,20,30];
}
let [r1,r2,r3] = getNumbers();
console.log(r1,r2,r3);

// WAP to destructure a nested array.
// let arr = [1, [2, 3], 4];
// let [a, [b, c], d] = arr;

// WAP to destructure a nested object.
let user = {
    name : "Shivam",
    age: 21,
    city : {
       name: "Dehradun",
       state: "Uttarakhand"
    }
};

let {name,age,city} = user;
console.log(name,age,city);


// Object Destructuring
// WAP to assign default values while destructuring an object.
// WAP to extract a nested object property.
// WAP to extract one property and collect the remaining properties into another object.
// WAP to destructure an object received as a function parameter.


// WAP to assign default values while destructuring an object.
let user2 = {
    name : "Rahul",
    age: 21,
}
let {city2 =  "Dehradun"} = user2;
console.log(city2);


// WAP to extract one property and collect the remaining properties into another object.
let user3= {
    name : "Rahul",
    age: 21,
    city: "Dehradun"
}
let {value1, ...rest_values} = user3;
 console.log(value1 , rest_values);