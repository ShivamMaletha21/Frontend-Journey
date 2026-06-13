// Q2..Create an object for a car with brand and model and print details using this.

let car = {
    brand: "Toyota",
    model: "Camry",

    details () {
        document.getElementById("brand").innerText = this.brand;
        document.getElementById("model").innerText = this.model;

    },

};

let btn = document.getElementById("btn");
btn.addEventListener("click",  ()=>{
    car.details();
})
