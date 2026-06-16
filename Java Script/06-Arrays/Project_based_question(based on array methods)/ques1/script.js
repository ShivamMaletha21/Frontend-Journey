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