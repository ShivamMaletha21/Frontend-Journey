//Arrow function to check even number.

const even = (a) => {
    if(a % 2 == 0) {
        return a;
    }
};
document.getElementById("output").textContent = even(4);