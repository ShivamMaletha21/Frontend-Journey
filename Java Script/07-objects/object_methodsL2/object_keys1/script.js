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

const keys = Object.keys(student);

for (let key of keys) {
  if (key.length > 5) {
    console.log(key);
  }
}