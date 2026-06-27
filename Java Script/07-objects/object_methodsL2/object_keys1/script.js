// <!-- Level 2 — Logic Building -->
// <!-- Object.keys()
// Write a program to print only those keys whose length is greater than 5 characters.
// Write a program to print all keys in uppercase.
// Write a program to find the longest key in an object.
// Write a program to find the shortest key in an object. -->

const student = {
  name: "Shivam",
  age: 21,
  college: "Graphic Era University",
  branch: "BCA",
  city: "Dehradun"
};

// Write a program to print only those keys whose length is greater than 5 characters.
let result = "";

Object.keys(student).forEach((key) => {
  if (key.length > 5) {
    result += key + "<br>";
  }
});
document.getElementById("display1").innerHTML = result;

// Write a program to print all keys in uppercase.
let result2 = "";
Object.keys(student).forEach((keys)=>{
 result2 += keys.toUpperCase() + "<br>";
});
document.getElementById("display2").innerHTML = result2;

// Write a program to find the longest key in an object.
let result3 = "";

Object.keys(student).forEach((key) => {
  if (key.length >  result3.length) {
    result3 = key;
  }
});
document.getElementById("display3").innerHTML = result3;

// Write a program to find the shortest key in an object.
let result4 = Object.keys(student)[0];
Object.keys(student).forEach((key) => {
  if (key.length <  result4.length) {
    result4 = key;
  }
});
document.getElementById("display4").innerHTML = result4;