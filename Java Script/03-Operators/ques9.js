

function checkSignal () {

    if(document.getElementById("red").checked) {
        document.getElementById("result").innerText = "Stop";
    }

        if(document.getElementById("green").checked) {
        document.getElementById("result").innerText = "Go";
    }


    
        if(document.getElementById("yellow").checked) {
        document.getElementById("result").innerText = "Wait";
    }
}