// all input values (access)
const destinationInput = document.getElementById("destination");
const travelerInput = document.getElementById("traveler");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const budgetInput = document.getElementById("budget");
const peopleInput = document.getElementById("people");
const submitResult = document.getElementById("submit-result");

// storing accommodation and transportation
let accommodation = {};
let transportation = {};


// Global Total Cost Function
function updateTotalCost() {

    let accommodationCost = accommodation.totalCost || 0;
    let transportationCost = transportation.cost || 0;
    let activityCost = 0;

    for (let i = 0; i < activities.length; i++) {
        activityCost += activities[i].cost;
    }

    let total = accommodationCost + transportationCost + activityCost;

    document.getElementById("total-trip-cost").innerText =
        "$" + total;
}


// form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

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
        destination,
        traveler,
        startDate,
        endDate,
        budget,
        people,
        accommodation,
        transportation,
    };


    // Show success message
    if (
        destination === "" ||
        traveler === "" ||
        startDate === "" ||
        endDate === "" ||
        budget === "" ||
        people === ""
    ) {

        submitResult.innerText = "Please fill all fields.";

    } else {

        submitResult.innerText = "Values saved successfully ✅";

        console.log(trip);

    }

});


// Accomodation and Transportation


// accomodation
const accbutton = document.getElementById("add-btn");

accbutton.type = "button";

accbutton.addEventListener("click", function () {

    accommodation = {
        hotelName: document.getElementById("hotel-input").value,

        pricePerNight: Number(
            document.getElementById("price-input").value
        ),

        nights: Number(
            document.getElementById("nights-input").value
        )
    };


    accommodation.totalCost =
        accommodation.pricePerNight * accommodation.nights;


    document.getElementById("hotel-name").innerText =
        accommodation.hotelName;


    document.getElementById("hotel-details").innerText =
        `$${accommodation.pricePerNight} per night • ${accommodation.nights} Nights`;


    document.getElementById("hotel-total").innerText =
        `$${accommodation.totalCost}`;


    // last html lines
    document.getElementById("accommodation-cost").innerText =
        `$${accommodation.totalCost}`;


    // Update total cost
    updateTotalCost();

});


// transportation
const transbutton = document.getElementById("add-transport-btn");

transbutton.type = "button";

transbutton.addEventListener("click", () => {

    transportation = {

        type: document.getElementById("transport-input").value,

        description: document.getElementById("description-input").value,

        cost: Number(
            document.getElementById("cost-input").value
        )
    };


    document.getElementById("transport-type").innerText =
        transportation.type;


    document.getElementById("transport-description").innerText =
        transportation.description;


    document.getElementById("transport-cost").innerText =
        transportation.cost;


    // last html lines
    document.getElementById("transportation-cost").innerText =
        transportation.cost;


    // Update total cost
    updateTotalCost();

});


// transportation and acc ends here



// storing all activities
const activities = [];


// Create a variable to remember which activity is being edited
let editIndex = -1;


// Access elements
const addActivityBtn = document.getElementById("add-activity-btn");

const activitiesList = document.getElementById("activities-list");

const totalActivities = document.getElementById("total-activities");

const activitiesCost = document.getElementById("activities-cost");


// Add Activity

addActivityBtn.type = "button";


addActivityBtn.addEventListener("click", () => {

    // Read input values
    const activity = {

        activity: document.getElementById("activity-name").value.trim(),

        location: document.getElementById("activity-location").value.trim(),

        cost: Number(
            document.getElementById("activity-cost").value
        )
    };


    // Validation
    if (
        activity.activity === "" ||
        activity.location === "" ||
        isNaN(activity.cost)
    ) {

        alert("Please fill all fields.");

        return;
    }


    // Store object
    if (editIndex === -1) {

        // New activity
        activities.push(activity);

    } else {

        // Existing activity
        activities[editIndex] = activity;

        editIndex = -1;

        addActivityBtn.innerText = "+ Add Activity";

    }


    renderActivities();


    // Clear inputs
    document.getElementById("activity-name").value = "";

    document.getElementById("activity-location").value = "";

    document.getElementById("activity-cost").value = "";


    console.log(activities);

});


// Render Activities Function

function renderActivities() {

    activitiesList.innerHTML = "";


    activities.forEach((activity, index) => {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${activity.activity}</td>

            <td>${activity.location}</td>

            <td>$${activity.cost}</td>

            <td>

                <button class="icon-btn edit-btn">✏</button>

                <button class="icon-btn delete-btn">🗑</button>

            </td>

        `;


        activitiesList.appendChild(row);


        // Get edit button from row
        const editBtn = row.querySelector(".edit-btn");


        editBtn.addEventListener("click", () => {

            editIndex = index;


            document.getElementById("activity-name").value =
                activity.activity;


            document.getElementById("activity-location").value =
                activity.location;


            document.getElementById("activity-cost").value =
                activity.cost;


            addActivityBtn.innerText =
                "Update Activity";

        });



        // Delete button
        const deleteBtn = row.querySelector(".delete-btn");


        deleteBtn.addEventListener("click", () => {

            activities.splice(index, 1);


            if (editIndex === index) {

                editIndex = -1;

                addActivityBtn.innerText =
                    "+ Add Activity";

            }


            renderActivities();

        });

    });



    // Update total activities
    totalActivities.innerText =
        activities.length;



    // Calculate activity cost
    let totalCost = 0;


    for (let i = 0; i < activities.length; i++) {

        totalCost += activities[i].cost;

    }


    activitiesCost.innerText =
        "$" + totalCost;


    // last html line
    document.getElementById("activities-total-cost").innerText =
        "$" + totalCost;


    // Update final total
    updateTotalCost();

}