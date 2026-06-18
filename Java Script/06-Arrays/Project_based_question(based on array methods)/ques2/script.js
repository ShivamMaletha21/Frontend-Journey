let patients = [];

//Normal Patient
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    patients.push(input);
    document.getElementById("display").innerText = patients;
    
    document.getElementById("input").value = "";
});

//Emergency patient
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    patients.unshift(input);
      document.getElementById("display").innerText = patients;
       document.getElementById("input").value = "";
});

//Treat Patient
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    patients.shift(input);
      document.getElementById("display").innerText = patients;
});

//Display the current queue on screen.
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click",()=>{
   document.getElementById("display_current").innerText = `the current patients are : ${patients}`;
});
