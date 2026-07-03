// forEach()
// WAP to print all elements of an array using forEach().
// WAP to print the square of every number in an array.
// WAP to print only the indexes and values of an array.
// WAP to calculate the sum of all elements using forEach().
let marks = [90,80,50,30];
 marks.forEach((value)=>{
document.getElementById("display1").innerHTML += `${value}  `;
});

// WAP to print the square of every number in an array.
let num = [2,4,6];
 num.forEach((value)=>{

document.getElementById("display2").innerHTML +=`${value * value }  `
});

// WAP to print only the indexes and values of an array.
let num2 = [10,20,30];
 num2.forEach((value,index)=>{

document.getElementById("display3").innerHTML +=`${value} ${index} <br>  `
});

// WAP to calculate the sum of all elements using forEach().
let sum = 0;
let num3 = [10,20,30];
 num3.forEach((value)=>{
sum +=value;
});
document.getElementById("display4").innerHTML =`${sum}`


// map()
// WAP to convert all strings in an array to uppercase.
// WAP to add 10 to every number and return a new array.
// WAP to convert an array of names into an array of objects.
// WAP to extract only the names from an array of objects.
// WAP to create an array containing the lengths of all words.
// WAP to format employee names by adding "Mr./Ms." before each name.
let name = ["aman", "karan", "anuj"];
let upper_name = name.map((value)=>{
   return  value.toUpperCase();

});
document.getElementById("display5").innerHTML =`${upper_name}`;

// WAP to add 10 to every number and return a new array.
let num4 = [10,20,30,40,50];
let num_add = num4.map((value)=>{
    return value + 10;

});
document.getElementById("display6").innerHTML =`${num_add}`;

// WAP to convert an array of names into an array of objects
let name2 = ["aman","karan","rahul"];
let name2_obj = name2.map((value)=>{
    return {
        name:value
    };

});
document.getElementById("display7").innerHTML =
    JSON.stringify(name2_obj);

// WAP to extract only the names from an array of objects.
let students = [
    { name: "Aman", age: 20 },
    { name: "Karan", age: 21 },
    { name: "Rahul", age: 22 }

]
let stud_names = students.map ((value)=>{
    return value.name;
    //here value becomes object inside students (which is an array)

});
document.getElementById("display8").innerHTML = JSON.stringify(stud_names);

// WAP to create an array containing the lengths of all words.
let words = ["apple", "banana", "cat", "dog"];
let words_length = words.map((value)=>{
 return value.length;
});
document.getElementById("display9").innerHTML = words_length;

// WAP to format employee names by adding "Mr./Ms." before each name.
let employees = ["Aman", "Karan", "Rahul", "Priya", "Neha", "Anuj"];
let full_names  = employees.map((value)=>{
    return "Mr./Ms." + value;

});
document.getElementById("display10").innerHTML =  ` ${full_names} `;