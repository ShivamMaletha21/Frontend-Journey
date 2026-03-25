//Function that prints a full address (city, state, country).

function address(city, state, country){
    return city + " "+ state  + " "+ country;
}
document.getElementById("output").textContent = address("Dehradun", "Uttarakhand","India");s