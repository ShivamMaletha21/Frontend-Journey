
     // creating array
    let fruits = [];
    // Add fruits
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",()=>{
    //getting input
    let input = document.getElementById("input").value ;
    fruits.push(input);
    document.getElementById("display").innerText = fruits;
    // clearing the input field
     document.getElementById("input").value = "";
    });


    //Click to check Position
        let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",()=>{

    let input = document.getElementById("input").value ;
    let position = fruits.indexOf(input);
    document.getElementById("position").innerText = position;
     document.getElementById("input").value = "";
    });