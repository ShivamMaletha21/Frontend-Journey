
// check balance
let balancebtn = document.getElementById("balance");
balancebtn.addEventListener("click",checkBalance);

let balance = 1000;

function checkBalance() {
  document.getElementById("result").innerText = " Balance is " + balance;
}

// deposit
let deposbtn = document.getElementById("deposit");
deposbtn.addEventListener("click",checkDeposit);


function checkDeposit() {

    let deposit_amount = Number(document.getElementById("input").value);
  
    document.getElementById("result").innerText = "Deposit amount is " + deposit_amount;

    balance = balance + deposit_amount;
    
}


// withdraw...
//  New Balance=Current Balance−Withdraw Amount

let withdrwbtn = document.getElementById("withdraw");
withdrwbtn.addEventListener("click",withdraw_amount);

function withdraw_amount() {
    let withdraw = Number(document.getElementById("input").value);


    if(withdraw <= balance ) {

        balance = balance - withdraw;

        document.getElementById("result").innerText = "Remaining Balance " + balance;
    } else {
             document.getElementById("result").innerText =
            "Insufficient Balance";

    }
}


// exit btn
let exitbtn = document.getElementById("exit");

exitbtn.addEventListener("click", exit_amount);

function exit_amount() {
    document.getElementById("result").innerText = "Transaction completed. Please collect your card";
}

