let btn = document.getElementById("btn");
btn.addEventListener("click",checkResult);

function checkResult () {
  

    // wht user type will stores here
    let marks = Number(document.getElementById("marks").value);

    if (marks >=40) {
        document.getElementById("result").innerText = "Pass";
    }

    else {
      document.getElementById("result").innerText = "Fail";
    }
}