// Q3. Create an object for a student and create a method to display student details using this.

let student = {
    name : "Shivam",
    age: 21,
    course:"AI and DS",
    year: "3rd",
    city: "Delhi",

    details (){
        document.getElementById("name").innerText = this.name;
        document.getElementById("age").innerText = this.age;
        document.getElementById("course").innerText = this.course;
        document.getElementById("year").innerText = this.year;
        document.getElementById("city").innerText = this.city;         
    }

}

let btn = document.getElementById("btn");
btn.addEventListener("click",  ()=>{
    student.details();
})

