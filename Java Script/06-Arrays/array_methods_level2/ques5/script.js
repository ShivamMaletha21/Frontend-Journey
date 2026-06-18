let products = [];

//display
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let input = document.getElementById("input").value ;
    products.push(input);
    document.getElementById("display").innerText = products;

    document.getElementById("input").value ="";

});

//Search
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
     let input = document.getElementById("input").value;
  
    let position = products.indexOf(input);
    
    if(products.includes(input)){
        document.getElementById("prd_exist").innerText = position;
    }
    else{
         document.getElementById("prd_exist").innerText = "laptop not exist";

    }
      document.getElementById("input").value = "";

});