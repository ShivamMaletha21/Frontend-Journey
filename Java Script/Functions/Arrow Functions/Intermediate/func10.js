// Q10. Create a function that returns the reverse of a given string.


const reverseString = (str)=> {

    let reversed = "";
    for(let i = str.length-1;i>=0;i--){  // the last index is str.length - 1
        reversed +=str[i];
    }
    return reversed;
}


let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {

    let string_value = document.getElementById("input").value;

    let call_value = reverseString(string_value);

    document.getElementById("msg").innerText = call_value;
})