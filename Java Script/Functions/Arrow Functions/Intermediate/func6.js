//  Q6 Create a function that accepts product names and returns total number of products received.

const product = (...product_names)=>{

     return product_names.length;

    
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{

    let prod_names = document.getElementById("name").value;
    let real_names = prod_names.split(" ");

    let prod_result = product(...real_names);

    document.getElementById("msg").innerText = prod_result;
})