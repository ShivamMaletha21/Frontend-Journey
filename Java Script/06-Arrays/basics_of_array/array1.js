// checking type of array .. and we got that array is an object.. a special type of object
let fruits = ["Apple","Banana"];
console.log(typeof fruits);

// How to create an Array?

//Method 1 -> Array Literal (Literal means when you write an array directly using square brackets[])
let car = ["audi","jaguar","bmw","tata","baleno","swift"];
console.log(car);

// Method 2 -> Empty Array 
let car1 = [];
car1.push("swift");
console.log(car1);

// Method 3 -> Array Constructor
let fruits2 = new Array("Apple","Banana");
console.log(fruits2);

// length property.. length = highest index + 1;
console.log("the length of fruits2 is " + fruits2.length);

//modifying
let car2 = ["audi","jaguar","bmw","tata","baleno","swift"];
car2[1] = "nano";
console.log(car2);
