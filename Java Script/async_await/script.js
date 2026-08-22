async function first() {
    return "Hello";
}

// this will not give output, as due to async the first become a asynchronous function which always returns a promise
// so here, return "hello" becomes -> return Promise.resolve("hello");

// let result = first(); , 
// console.log(result);

first().then(function(result){
    console.log(result);
})
