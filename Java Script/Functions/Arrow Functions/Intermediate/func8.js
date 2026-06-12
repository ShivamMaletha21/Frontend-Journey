// Q8.Create a function that accepts multiple ages and returns the youngest age.

const age = (...mult_ages)=> {

    let young = mult_ages[0];
    for(let i =0;i < mult_ages.length; i++) {
        if(mult_ages[i] < young) {
            young = mult_ages[i];
        }
    }
 return young;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {

    let ages = document.getElementById("input").value ;
    let real_ages = ages.split(" ");

    let multiple_age = age(...real_ages);
    document.getElementById("msg").innerText = `The yougest age is  ${multiple_age}`
})
