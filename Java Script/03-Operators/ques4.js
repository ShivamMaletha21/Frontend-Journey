// Q4: Temperature Check

// Temperature = 30

//  Check:

// If temp > 25 → print "Hot"
// else → print "Normal" 

// let Temperature = prompt("Enter Temperature");


// go to button and run this function checkTemperature when click
document.getElementById("btn").addEventListener("click",checkTemperature)

function checkTemperature () {

    let Temperature  = Number(document.getElementById("temperature").value);
if (Temperature >25) {
    document.getElementById("print").innerText = "Hot";
}

else {
    document.getElementById("print").innerText = "Cold";
}
}