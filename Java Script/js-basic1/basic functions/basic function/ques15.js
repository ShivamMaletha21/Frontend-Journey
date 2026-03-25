// Function to print your full name using first and last name variables inside function.

function name(a,b){
    let first_name = a;
    let last_name = b;
    let result = first_name + " "+ last_name;

    document.getElementById("output").textContent = result;
}
name("Shivam","Maletha");