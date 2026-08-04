
// all input values (access)
const destinationInput = document.getElementById("destination");
const travelerInput = document.getElementById("traveler");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const budgetInput = document.getElementById("budget");
const peopleInput = document.getElementById("people");
const submitResult = document.getElementById("submit-result");



// form
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();


    // read input values 
    const destination = destinationInput.value;
    const traveler = travelerInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const budget = budgetInput.value;
    const people = peopleInput.value;


    // creating object called -> trip
// Rule of ES6 Object Property Shorthand
// If:
// Property name = Variable name
// Then you can write only one name.
    const trip = {
    destination ,
     traveler,
     startDate ,
     endDate,
     budget,
    people,
}

  // Show success message

  if  (destination === "" ||traveler === "" || startDate === "" || endDate ===  "" ||  budget === "" ||  people === "" ) {
    submitResult.innerText = "Please fill all fields.";

  }
  else {

    submitResult.innerText = "Values saved successfully ✅";
  }


})








