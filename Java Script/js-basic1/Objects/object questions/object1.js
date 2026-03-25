// SECTION 1: CAR SYSTEM


// Q1. Create an object car with properties:
// brand: "BMW"
// color: "Black"
// price: 5000000
// Print:
// brand using dot notation
// color using bracket notation 

let car = {
    brand: "BMW",
    color: "Black",
    price: 5000000,

    detail: function showDetails() { // creating method
        console.log(this.brand + " cost " +  this.price); // instead of writng BMW cost 4500000 we use this
    },

    discount: function applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }
};

console.log(car.brand);
console.log(car["color"]);
console.log(car.price);

// bracket notation is used to acess properties dynamically

// let profile = {
//     email : "shiv123@gmail.com",
//     city : "Delhi"
// };

// let choice = prompt ("Enter city or email");
// console.log(profile[choice]);

// Q2 .. Update the price of car to 4500000 and print updated Object
car.price = 4500000;
console.log(car.price); 

//Q3.. Add new property mileage: 15 to the car object and print it.

car.mileage = 15;
console.log(car);

// Q4..Delete the color property and print object.

delete car.color;

console.log(car);


// Q5.. Check if property "price" exists using "price" in car and print result.
console.log("price" in car); // gives true
console.log("email" in car); // gives false

// Add method showDetails() that prints: "BMW costs 4500000" Call the method.

car.detail(); // calling method

// Q7.. Add method applyDiscount() that reduces price by 10%.
car.discount(); // it'll update the price

car.detail(); // this will tell the updated price


// Q8.. Create empty object car2 and add properties.. brand, price,color

let car2 = {
    brand: "Jaguar",
    price: 600000,
    color: "Red",
    mileage: 12
};
console.log(car2);

for (let key in car2) { // let key.. holds property.. key is like temporary storage box
    console.log(key + " " + car2[key]);
}

// Q10.. access property dynamically
let prp = "mileage";
console.log(car2[prp]);