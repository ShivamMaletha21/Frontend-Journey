// Create a function that takes a birth year and calculates age.




let btn = document.getElementById("btn");
btn.addEventListener("click",birth);

function birth() { 
   
    let birth_year = Number(document.getElementById("birth_year").value);
     let current_year = Number(document.getElementById("current_year").value);


    let result = age(birth_year,current_year); // arguments
    document.getElementById("result").innerText = result;
}


function age (birth_year,current_year) { // Parameters
    
     let real_age = current_year - birth_year;

     return real_age;
}

