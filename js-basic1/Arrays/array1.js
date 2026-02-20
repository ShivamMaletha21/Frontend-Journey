// Array Creation
// There are 2 main ways

// Method1: Using Square Bracket... ler arrayName = [value1,value2,value3];

let fruits = ["Apple", "Mango","Orange"];
console.log(fruits);


// Method2: Using Array Constructor ... let arrayName = new Array (value1,value2);.. mostly avoid this
let car = new Array("BMW","Jaguar");
console.log(car);

// Access values... arrayName[index]
console.log(fruits[1]);

// Change value
fruits[1] = "Grapes";
console.log(fruits);


// Array Methods.. function used to perform operation on arrays

// 1.. push() -> add elements at the end.. arrayName.push(value);
fruits.push("Banana");
console.log(fruits);

//2.. pop() -> remove elements from end.. arrayName.pop()
fruits.pop();
console.log(fruits);

// 3.. shift() -> remove elements from start
fruits.shift();
console.log(fruits);

// 4.. unshift() -> add element at start
fruits.unshift("Apple");
console.log(fruits);

// 5.. map() .. creates a new array by applying function to each element..
//  array.map(function(value1,index,array){
//code })

let number1 = [30,40,50];

let result1 = number1.map(function(num)  {
    return num*2;
});

console.log(result1);

//6.. filter() .. creates new array with only matching condition values
// .. array.filter(function(value){})
let number2 = [10,20,30,40,50,60,70,80,90,100];

let result2 = number2.filter(num => num >40);
console.log(result2);

//7.. reduce() .. reduces array into single value..  syntax -> array.reduce (function(accumulator,current) {},initialValue)

let number3 = [10,20,30];
let sum = number3.reduce((total,num) => total + num,0);
console.log(number3);
console.log(sum);

// use of initital value is imp here
let number4 = [1,2,4];
let result = number4.reduce(function(total,num) {
    return total + num;
},"");

console.log(result); // now it will be 124 not 7






