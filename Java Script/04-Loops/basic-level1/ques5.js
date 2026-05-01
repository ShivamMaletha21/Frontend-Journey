let btn = document.getElementById("btn");
btn.addEventListener("click",sum);

function sum() {
    let output = 0;
    
    for (let i =1;i<=100;i++) {
        output += i ;
    }
    document.getElementById("result").innerText = output;
}

// before we are using output = "" .. this is string and here the concatination happnes so the result becomes 1,2,3,4...
// but when we take number let output = 0
// then addition happnes