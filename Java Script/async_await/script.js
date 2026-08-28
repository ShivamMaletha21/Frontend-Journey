async function first() {
    return "Hello";
}

// this will not give output, as due to async the first become a async function 
// (note this is not asynchrnous function, it is asyn) which always returns a promise
// so here, return "hello" becomes -> return Promise.resolve("hello");

 let result = first(); , 
 console.log(result);

first().then(function(result){
    console.log(result);
})



//////////////////////////////////////////////////////////////////////////////////////////////

// full eg of async/ await
function getData(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
           resolve("Hello");
        },2000);
    });
}

async function showData(){
    console.log("Start");

    // here we are calling getdata();
        const result = await getData();

    console.log(result);

    console.log("End");
}

showData();


// error in await, that's why to handle error we will use try and catch
function getData() {
    return Promise.reject("Something went wrong");
}

async function showData() {
    const result = await getData();

    console.log(result);
}

showData();


function getData() {
    return Promise.reject("Something went wrong");
}

async function showData() {
    try {
        const result = await getData();

        console.log(result);
    }
     catch (error) {
        console.log(error);
    }
}

showData();