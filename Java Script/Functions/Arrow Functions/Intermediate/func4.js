// Q2 Create an object for a car with brand and model and print details using this.

let car = {
    brand:"Toyota",
    model:"Toyota Corolla",
    name: "Sedan",


    // arrow function dont work ... this
    details: function()  {
        document.getElementById("msg").innerText = `the car brand name is ${this.brand} and model is ${this.model} and name is ${this.name}`
    }

};

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    car.details();
});