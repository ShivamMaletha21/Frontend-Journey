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


// reduce()
// WAP to calculate the sum of all numbers.
// WAP to calculate the product of all numbers.
// WAP to find the maximum number.
// WAP to calculate the average of all numbers.
// WAP to count the frequency of each element..

// WAP to calculate the sum of all numbers.
let num5 = [10,20,30];
let sum5 = num5.reduce((acc,curr)=>{
 return acc + curr;
},0);
document.getElementById("display11").innerHTML = `${sum5}`;


// HOW IT WORKS INTERNALLY:

// Initial value passed to reduce()
// let acc = 0;   

// This is the callback function we passed to reduce()
// function callback(acc, curr) {
//     return acc + curr;
// }
// for (let i = 0; i < num5.length; i++) {

//     acc = callback(acc, num5[i]);
// }
// let sum5 = acc;



// WAP to calculate the product of all numbers.
let prod5 = num5.reduce((acc,curr)=>{
    return acc * curr;
},1);

document.getElementById("display12").innerHTML = `${prod5}`;

// WAP to find the maximum number.
let max5 = num5.reduce((acc,curr)=>{
    if (acc>curr){
        return acc;
    }
    else {
        return curr;
    }
},-Infinity);

document.getElementById("display13").innerHTML = `${max5}`;

// WAP to calculate the average of all numbers.
let avg5 = num5.reduce((acc,curr)=> {
    return acc + curr ;

},0)/ num5.length;
document.getElementById("display14").innerHTML = `${avg5}`;

// WAP to count the frequency of each element.
let countries3 = [ "India", "USA", "Canada", "India", "Germany", "USA", "France", "India", "Japan", "Canada"];
let freq = countries3.reduce((acc,curr)=>{

    if (acc[curr]===undefined){
        acc[curr] = 1;
    }
    else {
        acc[curr] += 1;
    }
    return acc;
    
},{});
document.getElementById("display15").innerHTML = JSON.stringify(freq);