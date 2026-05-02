let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", pyramidpattern);

function pyramidpattern() {
    let output = "";

    for (let i = 1; i <= 5; i++) {

        // spaces
        for (let s = 1; s <= 5 - i; s++) {
            output += " ";
        }

        // stars
        for (let k = 1; k <= i; k++) {
            output += "* ";
        }

        output += "\n";
    }

    document.getElementById("result3").innerText = output;
}