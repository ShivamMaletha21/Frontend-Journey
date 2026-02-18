// method -> function inside object

let account = {
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount; // this points to current object i.e account
    }
};
account.deposit(500);

console.log(account.balance);