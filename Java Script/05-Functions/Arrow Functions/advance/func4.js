// Create an object for a bank account and print account information using this.

let bankAccount = {
    accountHolderName: "Amit Verma",
    accountNumber: "1234567890",
    bankName: "State Bank of India",


    // using arrow function
    details() {

      let  value =  () => {

        document.getElementById("accntname").innerText = this.accountHolderName;
        document.getElementById("accntnumb").innerText = this.accountNumber;
         document.getElementById("bnkname").innerText = this.bankName;

        };
        value();
    }

};

let btn = document.getElementById("btn");
btn.addEventListener("click",  ()=>{
    bankAccount.details();
})
