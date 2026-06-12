// Create a function that accepts a user profile and returns important information.
let information = {
    user_id: "U1001",
    name: "Rahul Sharma",
    user_name: "Rahul_codes",
    email: "rahul.sharma@gmail.com",
    phone_number: 9876543278,
    gender: "male",

    details () {

        let value = ()=> {
            document.getElementById("user_id").innerText = this.user_id;
            document.getElementById("name").innerText = this.name;
            document.getElementById("user_name").innerText = this.user_name;
            document.getElementById("email").innerText = this.email;
            document.getElementById("phone_number").innerText = this.phone_number;
            document.getElementById("gend").innerText = this.gender;

        };
        value();
    }
};

let btn = document.getElementById("btn");
btn.addEventListener("click",  ()=>{
 
    let user = document.getElementById("input").value;
    let password = document.getElementById("passw").value;

    let Real_username = "shiv";
    let Real_password = "ark123";

    if(user === Real_username && password === Real_password) {
        information.details();
        msg.innerText = "";  // Clear previous error
    }

    else {
        document.getElementById("msg").innerText = "the username and password is incorrect";

    document.getElementById("user_id").innerText = "";
    document.getElementById("name").innerText = "";
    document.getElementById("user_name").innerText = "";
    document.getElementById("email").innerText = "";
    document.getElementById("phone_number").innerText = "";
    document.getElementById("gend").innerText = "";
    }

})