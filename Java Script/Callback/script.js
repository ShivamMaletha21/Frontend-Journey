function first(callback) {
    console.log("First");
    callback();
}

function second() {
    console.log("Second");
}

first(second);
