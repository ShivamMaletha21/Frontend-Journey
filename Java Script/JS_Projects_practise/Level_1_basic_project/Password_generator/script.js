
// definiing characters that will used in password
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// working of button
const button1 = document.getElementById("passw");
button1.addEventListener("click",()=>{

    let password = "";
    // const randomChar = characters[randomIndex];
    for (let i = 0; i <= 12; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
       password += characters[randomIndex];
    }

    document.getElementById("show_password").innerText = `The Password is:  ${password}` ;

    
});
