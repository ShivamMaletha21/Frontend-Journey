// Q4 Create an object for a bank account and print account information using this.

const bank = {
    name : "Shivam",
    accnt_num :1234567,
    bank_name :"chor-bazar",
    branch :"Delhi",
    balance :"$10000000000",

    info : function() {
        document.getElementById("msg").innerText = 

        `the accnt holder  name is ${this.name} and accnt num is ${this.accnt_num} and bank name  is ${this.bank_name} and balance is ${this.balance }`
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    bank.info();
});
