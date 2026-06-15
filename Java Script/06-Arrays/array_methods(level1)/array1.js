// Level 1 (Beginner)

//Q1 Write a program to add "Mango" at the end of an array containing fruits.
let fruits = ["apple","grapes","banana"];
console.log(fruits);
fruits.push("mango");
console.log(fruits);

//Q2 Write a program to remove the last element from an array.
fruits.pop();
console.log(fruits);

//Q3 Write a program to add "India" at the beginning of an array of countries.
let countries = ["America","Japan","Italy","Myanmar","Nepal"];
console.log(countries);
countries.unshift("India");
console.log(countries);

//Q4 Write a program to remove the first element from an array
fruits.shift();
console.log(fruits);

//Q5 Write a program to create a new array containing only the first 3 elements of an existing array.
let students1 = ["Rahul", "Amit", "Priya", "Neha", "Rohan","mohit","kashyap"];
console.log(students1);
let new_students1 = students1.slice(0,2);
console.log(new_students1);

//Q6 Write a program to create a new array containing elements from index 2 to index 5.
let new_students2 = students1.slice(2,5);
console.log(new_students2);

//Q7 Write a program to add a new student "Rahul" to the class list.
let students2 = ["Amit", "Priya", "Neha"];
students2.push("rahul");
console.log(students2);

//Q8 Write a program to remove the most recently added notification from a notifications array.
let notifications = [
  "New message from Rahul",
  "Your order has been shipped",
  "Password changed successfully",
  "New friend request"
]
console.log(notifications);
notifications.pop();
console.log(notifications);

//Q9 Write a program to display only the first 5 products from a product array.
let products = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Smartwatch",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Printer"
];
console.log(products);
let new_products = products.slice(0,5);
console.log(new_products);

//Q10 Write a program to remove the first customer from a waiting queue.
let customers = [
  "Rahul",
  "Priya",
  "Amit",
  "Neha",
  "Rohan"
];
customers.shift();
console.log(customers);

//Q11 Write a program to insert "Mathematics" between "Science" and "English" in a subjects array.
let subjects = [
  "Science",
  "English",
  "History",
  "Computer"
];
console.log(subjects);
//used to check removed element
let new_sub = subjects.splice(1,0,"Mathematics");
console.log(subjects);

//Q12 Write a program to replace "Samsung" with "iPhone" in a mobile brands array.
let mobiles = [
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Realme",
  "Vivo"
];
console.log(mobiles);
mobiles.splice(0,1,"iPhone");
console.log(mobiles);

// Q13 Write a program to remove 3 elements starting from index 2.
let mobiles2 = [
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Realme",
  "Vivo"
];
//remove 3 elements 
mobiles2.splice(2,3);
console.log(mobiles2);

// Q14 Write a program to insert "Red", "Blue" and "Green" at index 1.
let colors1 = ["orange","white","silver"];
console.log(colors1);
colors1.splice(1,0,"Red","Blue","Green");
console.log(colors1);

//Q15 Write a program to replace two elements starting from index 3 with "JavaScript" and "Python".
let languages = ["React", "c", "Java", "C++", "Go"];
console.log(languages);
languages.splice(3,2,"JavaScript","Python");
console.log(languages);

//Q16 Write a program to create a copy of an array without modifying the original array.
let months = ["January", "February", "March", "April", "May"];
console.log(months);
let new_months = months.slice(1,4);
console.log(new_months);

//Q17 Write a program to create a new array containing the last 4 elements of an array.
let new_months2 = months.slice(1);
console.log(new_months2);

//Q18Write a program to remove the first 2 elements of an array.
let animals = ["Lion", "Tiger", "Elephant", "Horse", "Zebra"];
console.log(animals);
animals.splice(0,2);
console.log(animals);

//Q19 Shopping Cart
// Write a program that:
// Adds "Laptop"
// Adds "Mouse"
// Adds "Keyboard"
// Removes the last item
// Print the final cart.
let cart = ["Mobile Phone", "Charger", "Power Bank", "Earbuds", "Smartwatch"];
console.log(cart);
//adding all 3 items
cart.push("laptop","Mouse","Keyboard");
console.log(cart);
//Removes the last item
cart.pop();
console.log(cart);

// Q20 — Movie Watchlist
// Write a program that:
// Stores 5 movies in an array
// Removes the second movie
// Adds a new movie at the same position
// Print the updated watchlist.
let movies = ["Mission Impossible","Bhaag Milkha Bhaag","Tarzan","Harry Potter","Breaking Bad"];
console.log(movies);
//Removes the second movie and adds a new movie at the same position
 movies.splice(1,1,"Lakshya");
console.log(movies);

// Q21 — Food Delivery App
// Write a program that:
// Stores 4 orders in an array
// Adds a new order
// Delivers the first order
// Prints remaining orders
let orders = ["Burger", "Pizza", "Pasta", "Sandwich", "Fries"];
console.log(orders);
orders.push("Tea");
console.log(orders);
console.log(orders[0]);
console.log(orders);

//Q23 — Music Playlist
// Write a program that:
// Creates a playlist with 5 songs
// Removes the first song
// Adds a new song at the beginning
// Prints the updated playlist
let playlist = ["Shape of You", "Blinding Lights", "Perfect", "Believer", "Senorita"];
console.log(playlist);
playlist.shift();
console.log(playlist);
playlist.unshift("Levitating");
console.log(playlist);


