//USER ACCOUNT SYSTEM

// Q1..Create object user:
// username
// email
// Print both.

let user = {
    username: "Shivam",
    email: "shiv32@gmail.com",

    login: function login() {
        console.log("User logged in");
    },
    isLoggedIn: true,
    
    log: function logout() {
        this.isLoggedIn = false;
    }


    
}
console.log(user);

// Q2..Add property password.

user.password = 4498752;
console.log(user);

//Q3..Add method login() that prints:
// "User logged in"
user.login();


//Q4..Add property isLoggedIn false
// Change to true
console.log("isLoggedIn" in user);

// Q5.. Add method logout()
// Set isLoggedIn false.
user.log();
console.log(user.isLoggedIn);  

// Q6..Delete password property.
delete user.password;
console.log(user);

// Q7..Print all keys using loop.
for (let key in user) {
    console.log(key + " " + user[key]);
}
// Q8..Print all values using loop.
for (let key in user) {

    if(typeof user[key]!== "function") {
        console.log(user[key]);

    }
}

//Q9..Print number of properties.
let count = 0;
for (let key in user)  {
    count++;
}
console.log(count);


// Q10..Access email dynamically.
let acc = "email";
console.log(user[acc]);