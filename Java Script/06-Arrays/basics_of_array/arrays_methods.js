// Basic methoods -> push(), pop(), unshift(), shift(), slice() and splice()

// 1. push () -> used to insert element from end
let fruit = ["apple","banana","mango"];
console.log(fruit);
fruit.push("guava");
console.log(fruit);

//2. pop() -> used to remove element from end and also return that removed element
let colors = ["Red", "Blue", "Green", "Yellow"];
let removed_colors = colors.pop();
console.log(colors);
console.log(removed_colors);

//3. unshift() -> used to insert element at start
let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
console.log(cities);
cities.unshift("Bangalore");
console.log(cities);

//4. shift() -> used to remove element from start and also return that remove element
let countries = [ "America","Japan","India" ,"Canada", "Australia"];
let removed_countries = countries.shift();
console.log(countries);
console.log(removed_countries);


//5. slice() -> creates copy of part of an array, the original array remains unchanged.. 
// syntax -> array.slice(start,end); the element at the end is not included
 let languages = ["JavaScript", "Python", "Java", "C++"];
console.log(languages);
let result = languages.slice(0,3);
console.log(result);


//6. splice() -> add, remove or replace element at any position ,
//  the original array changes, syntax ->array.splice(start,deleteCount,items);
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//1. add
days.splice(0,0,"Sunday");
console.log(days);

//2. remove
days.splice(1,1);
console.log(days);

// 3. replace
days.splice(2,0,"Monday");
console.log(days);


// arrays also used for looping
let fruits1 = ["Apple","Banana","Mango"];
for(let i = 0; i<fruits1.length;i++){
   console.log( fruits1[i]);
}

// used for.. of
for (let fruit of fruits1) {
    console.log(fruit);
}

let numbers = [100, 20, 5, 80];

numbers.sort();

console.log(numbers);

let numbers2 = [3, 25, 100];

numbers2.sort();

console.log(numbers2);


// methood level 2

//7.indexOf() -> use to find the position of an element
let cities2 = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
console.log(cities2.indexOf("Delhi"));

//8. includes() -> check wheather an element exist in an array. Returns true or false
console.log(cities2.includes("Delhi"));
console.log(cities2.includes("UK"));

//9. join() -> it converts all array elements into a single string
console.log(cities2);
console.log(cities2.join());
console.log(cities2.join("-"));
console.log(cities2.join("        "));

//10. reverse() -> it reverse the order of elements in an array.. 
// the reverse changes the original array
console.log(cities2.reverse());

//11. sort() -> it sort elements in an array
console.log(cities2.sort());

// sort numbers
let numbers3 = [10, 100, 80, 90 , 50 ,30, 40];
// ascending order
numbers3.sort((a,b)=>a-b);
console.log(numbers3);
// descending order
numbers3.sort((a,b)=>b-a);
console.log(numbers3);


//method level3... forEach(),map(),filter(),find(),reduce()

//1. forEach() -> loop through every element of an array
let fruits3 = ["Apple","Banana","Mango"];
fruits3.forEach(function(fruit){
    console.log(fruit);
})

//2. map() -> creates new array from old(previous)
let numbers4 = [1,2,3];
let doubled = numbers4.map(function(num){
    return num * 2;
});
console.log(doubled);

//3. filter -> creates a new array, contains only element that pass a condition.
let numbers5 = [10,20,30,40,50];
let result5 = numbers5.filter((num)=>{
    return num>25;
});
console.log(result5);

//4. find -> returns the first element that matches a condition.
let numbers6 = [10,20,30,40,50];
let result6 = numbers6.find((num)=>{
    return num > 10;
});
console.log(result6);

//5. reduce -> it reduces the entire array into a single value
// combines everything into one final result
let numbers7 = [10,20,30];
let result7 = numbers7.reduce((acc,curr)=>{
    return acc + curr;
},0);
console.log(result7);