console.log("Start");

setTimeout(()=>{
    console.log("Hello");
},2000);
console.log("End");


// this is normal callback
function first (callback){
    console.log("Hello");
    callback();
}

function second() {
    console.log("Shivam");

}
//  here second is the callback function
 first(second);

// asynchronous callback
function first() {

    setTimeout(function () {
        console.log("Hello");
    }, 2000);

    console.log("this is shivam");
}
first();