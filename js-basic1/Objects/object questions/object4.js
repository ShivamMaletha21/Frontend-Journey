// BANK SYSTEM

// Q1..Create object account:
// holderName
// balance

let account = {
    username: "Rohan",
    balance: 89844,

    deposit : function deposit(amount){
        this.balance = this.balance + amount;
    },

    withdraw: function withdraw(amount) {
        this.balance -= amount;

    }


}
// Q2..Add deposit(amount) method
// Add money
account.deposit(12000);
console.log(account.balance);

// Q3.. Add withdraw(amount)

account.withdraw(8000);
console.log(account.balance);

// Add accountNumber
account.accountNumber = 4897;
console.log(account.accountNumber);
console.log(account);

//Delete accountNumber
delete  account.accountNumber ;
console.log(account.accountNumber);
console.log(account);

//Check property exists
console.log("username" in account);
console.log("balance"in account);

//Loop properties
for (let key in account) {

    if (typeof account[key] !== "function")
    {
    console.log(key + " " +account[key] );
}
};