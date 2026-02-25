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
// Q1..Filter numbers > 50

let number1 = [1,2,3,4,5,6,7,8,9,10,20,40,50,60,70,80,90];
console.log(number1);

let filter1 = number1.filter((num) => {
    return num > 50;
});
console.log(filter1);

//Filter even numbers
let filter2 = number1.filter((num) =>
{
    if(num % 2 == 0)
    return num;
});
console.log(filter2);

//Filter odd numbers
let filter3 = number1.filter(num => {
    if (num % 2 !==0)
        return num;

});
console.log(filter3);

//Filter salary > 30000
let salary1 = [10000,15000,20000,30000,40000,50000,60000,70000];

let filtersal = salary1.filter(num => {
    if(num > 30000)
        return num;
});
console.log(filtersal);

// Filter passing marks (>40)
let marks = [10,20,30,40,50,60,70,80,90];
console.log(marks);
let pass = marks.filter(val=>val>40);
console.log(pass);


// Section 3: reduce()

// Q1..Find sum
let numbers1 = [10,20,30,40];
let sum1 = numbers1.reduce((acc,curr)=>{
    return acc + curr;
},0);
console.log(numbers1);
console.log(sum1);

//Find total salary
let salary2 = [10000,20000,30000,40000,50000];
let total_sal = salary2.reduce((acc,curr) =>{
    return acc + curr;
});
console.log(total_sal);

//Find max number
let numbers2 = [1,2,3,4,5];
let max_num = numbers2.reduce((acc,curr)=> {
    if(curr > acc) {
        return curr;
    }
    else {
        return acc;
    }

},0);
console.log(max_num);

//Find in number
let numbers3 = [1,2,3,4,5];
let min_num = numbers2.reduce((acc,curr)=> {
    if(curr < acc) {
        return curr;
    }
    else {
        return acc;
    }

},0);
console.log(min_num);

//Section 4: Objects in Array
//Create users array

let users = [
    {
        name:"Shivam",
        age: 21,
        email: "shivam@gmail.com"
    },

    {
        name: "Rohit",
        age: 22,
        email: "rohit@gmail.com"
    },
    {
        name: "Aman",
        age: 28,
        email: "aman@gmail.com"
    }
];
console.log(users);
console.log(users[0]);
console.log(users[1]);

//Print all ages
console.log(users[0].age);

//or
users.forEach(value =>{
console.log(value.age);
});

//Add new user

  users.push(
    {name:"karan",
        age:23,
        email: "karan@gmail.com"
    });
console.log(users);

//Remove user
users.pop();
console.log(users);

//Find user age > 25
let age_filter = users.filter((val )=> {return val.age>25;
});
console.log(age_filter);

//Increase age
let inc_age = users.map((val)=>{
    return {
        name: val.name,
        age: val.age + 30,
        email: val.email,

    };
});
console.log(inc_age);
console.log(users);

//Total ages
let totalAge = users.reduce((acc,curr)=>
{
    return acc + curr.age;

},0);
console.log(totalAge);

//Section 5: Destructuring

let numbers4 = [1,2,3,4,5];
let [a,b,c,d,e] = numbers4;
console.log(a,b,c,d,e);

//Skip value
let[x, , y] = numbers4;
console.log(x,y);

//Default value
let [f,g = "6"]= numbers4;
console.log(f,g);

// swapping 
let h = 10;
let i = 20;
[h,i] = [i,h];
console.log(h,i);

//old way .. using temp variable
let j = 30;
let k = 40;
let temp = j;
j = k;
k = temp;
console.log(j,k);

let a3 = 5;
console.log(a3);
let a4 = 54;
console.log(a4);
let a8 = "hey this is shivam";
console.log(a8);
let a9 = 84;
console.log(a9);