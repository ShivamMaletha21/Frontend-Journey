//Function that prints “Good Morning” if time <12, “Good Afternoon” if 12–17, else “Good Evening” (pass hour as parameter).

function wish(time) {
    if(time < 12) {
        return "Good Morning";
    }
    else if (time >=12 && time <=17){
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}
document.getElementById("output").textContent = wish(17);