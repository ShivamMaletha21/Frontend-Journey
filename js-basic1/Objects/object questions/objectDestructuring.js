// Destructuring -> shortcut to extract properties from an object into variables

let user = {
    username: "Shivam",
    email: "shiv32@gmail.com",
    balance: 50000
};

let {username, email, balance} = user;
console.log(username, email, balance);
