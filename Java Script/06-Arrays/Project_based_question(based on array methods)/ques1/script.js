// Write a program to simulate a queue system where:
// New customers join at the end.
// Served customers leave from the front.
// Print the final queue


let queue = ["Rahul", "Aman", "Priya"];


queue.push("Neha");
queue.push("Rohit");

console.log("Queue after new customers:", queue);

queue.shift();
queue.shift();

console.log("Final Queue:", queue);

let ticketQueue = ["Customer1", "Customer2", "Customer3"];

ticketQueue.push("Customer4");
ticketQueue.push("Customer5");

console.log("Current Queue:", ticketQueue);

ticketQueue.shift();
ticketQueue.shift();

console.log("Queue After Serving:", ticketQueue);