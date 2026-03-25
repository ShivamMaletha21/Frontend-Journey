// there are 4 ways to create object 

// method 1 -> object literal

let car = {
    brand : "BMW",
    color: "Black"
};

console.log(car);
console.log(car.brand);
console.log(car.color);


// method 2 -> uisng new object ()

let sim = new Object();
sim.brand = "Airtel";
sim.color = "Red";

console.log(sim);
console.log(sim.brand);
console.log(sim.color);


//method 3 -> using constructor function  

function Person(name,age) { // here Person is constructor P capital.. as for constructor we use capital
    this.name = name;
    this.age = age;
}
let p1 = new Person("Shivam", 21);

console.log(p1);
console.log(p1.name);
console.log(p1.age);

//method 4 : Class   

class Person1 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
let a1 = new Person1("Rohan",32);

console.log(a1);
console.log(a1.name);
console.log(a1.age);