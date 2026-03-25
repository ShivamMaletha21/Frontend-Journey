// Function that prints your age and birth year.
function age (a,b){
    let age = a;
    let birth_year = b;
    let result = age + " " + birth_year;

    document.getElementById("output").textContent = result;
}
age ("age - 22", " & DOB- 2-august-2004");
