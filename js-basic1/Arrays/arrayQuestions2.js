// Section 1: map()

//Q1..Create salary array
// Increase all by 1000
let salary = [5000,6000,7000,8000,9000];
console.log(salary);

let increase1 = salary.map(function(num){
return num + 1000;
});
console.log(increase1);


// Multiply numbers by 2
let increase2 = salary.map((num) =>{
    return num * 2;
} );
console.log(increase2);

// Convert names to uppercase
let name1 = ["rohan","sohan","mohit","rahul"];

console.log(name1);
let upper = name1.map((num)=>
{
    return num.toUpperCase();
});
console.log(name1);
console.log(upper);


// Section 2: filter()