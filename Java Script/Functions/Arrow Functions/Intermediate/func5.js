// Q3. Create an object for a student and create a method to display student details using this.

const student  = {
    name: "Shivam",
    age: 21,
    rollNo: 101,
    class: "BCA 3rd Year",

    details: function() {
        document.getElementById("msg").innerText = `the student name is ${this.name} and age is ${this.age} and roll no is ${this.rollNo} and class ${this.class}`
    }
};

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    student.details();
});
