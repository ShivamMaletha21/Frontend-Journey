// Create a function that calculates percentage from obtained and total marks.

let btn = document.getElementById("btn");
btn.addEventListener("click",percentage);

function percentage() {
    let math = Number(document.getElementById("math").value);
    let physics = Number(document.getElementById("phys").value);
    let chem = Number(document.getElementById("chems").value);
    let eng = Number(document.getElementById("eng").value);
    let physical = Number(document.getElementById("physical").value);
    let total_max = Number(document.getElementById("total_max").value);


    let result = total(math,physics,chem,eng,physical,total_max);
    document.getElementById("result").innerText = "total percentage is" + result;
}


function total(math,physics,chem,eng,physical,total_max) {

    let obtained_marks = math + physics + chem + eng + physical
    let percentage = (obtained_marks / total_max) * 100;
    return percentage;
}