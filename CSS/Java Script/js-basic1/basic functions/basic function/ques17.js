// Function that prints “JavaScript is fun!” N times
function javaprint(n) {
    let alpha = "";

    for (let i = 1; i <= n; i++) {
        alpha += "JavaScript is fun!<br>";
    }

    document.getElementById("output").innerHTML = alpha;
}

javaprint(5);
