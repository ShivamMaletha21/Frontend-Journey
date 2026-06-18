let marks = [];

//display
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    marks.push(input);
    document.getElementById("display").innerText = marks;

    document.getElementById("input").value = "";

});

//descending
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    marks.sort((a,b)=>b-a);

     document.getElementById("desnd").innerText = marks;
});

//ascending
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",()=>{

    let input = document.getElementById("input").value;
    marks.sort((a,b)=>a-b);

     document.getElementById("asnd").innerText = marks;

});

//check marks exist
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click",()=>{

    let input = document.getElementById("input").value;

    if(marks.includes(input)) {
        document.getElementById("exist").innerText = `marks ${input} exist `;
    }
    else {
         document.getElementById("exist").innerText = "marks dont exist";

    }  

});