
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
    accommodation,
    transportation,
}

  // Show success message

  if  (destination === "" ||traveler === "" || startDate === "" || endDate ===  "" ||  budget === "" ||  people === "" ) {
    submitResult.innerText = "Please fill all fields.";

  }
  else {

    submitResult.innerText = "Values saved successfully ✅";
  }

})




// Accomodation and Transportation

//accomodation
const accbutton = document.getElementById("add-btn");
accbutton.addEventListener("click", function(){

    const accommodation = {
        hotelName: document.getElementById("hotel-input").value,
        pricePerNight: Number(document.getElementById("price-input").value),
        nights: Number(document.getElementById("nights-input").value)
    };

    accommodation.totalCost = 
    accommodation.pricePerNight * accommodation.nights;



    document.getElementById("hotel-name").innerText =
    accommodation.hotelName;

    document.getElementById("hotel-details").innerText =
    `$${accommodation.pricePerNight} per night • ${accommodation.nights} Nights`;

    document.getElementById("hotel-total").innerText =
    `$${accommodation.totalCost}`;

});

// transportation
const transbutton = document.getElementById("add-transport-btn");
transbutton.addEventListener("click",()=>{

  const transportation = {
    type : document.getElementById("transport-input").value,
    description : document.getElementById("description-input").value,
    cost: document.getElementById("cost-input").value
  };

  document.getElementById("transport-type").innerText = transportation.type;
  document.getElementById("transport-description").innerText = transportation.description;
  document.getElementById("transport-cost").innerText = transportation.cost;

});

















