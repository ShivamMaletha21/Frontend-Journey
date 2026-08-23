// // promises -> are cleaner way to write callbacks

// //Basics

let promise = new Promise (function(resolve,reject){

    // boolean value
    let success = true;

    if (success){
        resolve("data received");
    }
    else {
        reject("failed to get data");
    }
});


// this prints the resolve and reject
promise 
    .then(function(result){
        console.log(result);
    })

    .catch (function(result){
        console.log(result);
    });





///////////////////////////////////////////////////////////////////////////////////////////////////


// Level 1 — Promise Basics
// Q1. Create Your First Promise
// WAP to create a Promise that immediately resolves with the message "Success".


let promise1  = new Promise(function(resolve,reject){
    let message = true;

    if (message){
        resolve("Success");
    }
    else {
        reject("Unsuceess");
    }

});

promise1 
.then(function(result){
    console.log(result);
})
.catch (function(result){
    console.log(result);
});



///////////////////////////////////////////////////////////////////////////////////////////////////


// Q2. Promise Rejection
// WAP to create a Promise that immediately rejects with the message "Something went wrong".



let promise2 = new Promise(function(resolve,reject){
     let message = false;

     if (message) {
        resolve ("Get message successfully");
     }
     else {
        reject ("Something went wrong");
     }
});

promise2 
   .then (function(result) {
    console.log(result);

   })

   .catch (function(result){
    console.log(result);
   });



// Q3. Success or Failure
// WAP to create a Promise that checks a variable.
// If the value is true, resolve the Promise with "Operation successful".
// If the value is false, reject it with "Operation failed".


let promise3 =  new Promise (function(resolve,reject){

    let variable =  true;

    if (variable) {
        resolve ("operation successful");
    }
    else {
        reject ("operation failed");
    }

});

promise3 
   .then (function(result){
    console.log(result);
   })

   .catch (function(result){
    console.log(result);
   });





// Level 2 — resolve() and reject()

// Q6. Check Age
// WAP to create a Promise that checks a person's age.
// If age is 18 or above:
// Resolve with "Eligible"
// Otherwise:
// Reject with "Not eligible"
// Handle both cases using .then() and .catch().

// Q6. Check Age
// If age is 18 or above → resolve "Eligible"
// Otherwise → reject "Not eligible"

function checkage(age){
    let promise4 = new Promise (function(resolve,reject){

        if(age > 18 || age ===18){
            resolve("Eligible");
        }

        else {
            reject("Not eligible");
        }
    });

    return promise4;
};

checkage(49) 
   .then (function(result){
    console.log(result);
   })
   .catch(function(result){
    console.log(result);
   })


// Q7. Check Password
// WAP to create a Promise that checks whether a password matches a predefined password.
// Correct password → resolve.
// Incorrect password → reject.

function checkPassword(passw){

      let real_password = 12345;     
    let promise5 = new Promise((function(resolve,reject){

      
        if (passw === real_password) {
            resolve("Login successful");
        }

       else {
        reject ("Failed to login");
       }

    }));

    return promise5;
}

checkPassword(12345)
          .then(function(result){
            console.log(result);
          })
          .catch(function(result){
            console.log(result);
          });


//Q7. Login Verification
// WAP to create a Promise-based login system.
// After 2 seconds:
// Correct username and password → resolve "Login successful".
// Incorrect credentials → reject "Invalid credentials".
// Handle both cases.
// Concept: Real-world Promise usage.


function login(usern, passw) {


    setTimeout(()=>{
            })
    let username = "Shivam Maletha";
    let password = "123456";

   
    let promise = new Promise(function(resolve,reject){


        setTimeout(()=>{
        if (usern === username && passw === password) {
            resolve("Login Successful");
        }

        else {
            reject("Login Failed, Invalid credentials");
        }
        },2000)


    });
    return promise;


}

login("Shivam Maletha","123456")


     .then(function(result){
        console.log(result);
     })

     .catch(function(result){
        console.log(result);
     })



// Concept: Promise chaining
// Q12. User Processing Chain

// WAP to create a Promise chain that:
// Gets a username.
// Adds a user ID.
// Creates a user profile.
// Displays the final profile.
// Each .then() should return the value needed by the next .then().


// Promise chaining means -> the next .then() will receives the value returned by the previous .then()

    // my code
    function getUsername () {
        return new Promise(function(resolve,reject){
            resolve("Shivam");
        })
    }

    // then name will pass here
    getUsername()
       .then (function(username){
        console.log(username);

        // the return will pass to next then
        return {
            user_name:username,
            user_id:101,
        }
       })

       // this then will recevie user_name and user_id
       .then(function(user){
        console.log(user.user_id);

        // now this return goes to next then
        return {
         username:user.user_name,
            userid:user.user_id,
            profile:"Developer",
        }
         })

        // this then will recive username, userid and profile
        .then (function(profile){
            console.log("Final Profile");
            console.log(profile);
       
 })
        .catch(function(error){
            console.log(error);
       
       });

