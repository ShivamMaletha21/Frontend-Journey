// SECTION 2: STUDENT SYSTEM

//Student has multiple data → object groups them

// Q1.. Create object student:
// name: "Shivam"
// marks: 80
// Print both.


let student = {
    name : "Shivam",
    marks: 80,
    subject: "Physics",

    result:function showResult () {
        if (this.marks >40){
            console.log("Pass");
        }
        else {
            console.log("Fail");
        }

    },

    bonus : function addBonusMarks() {
        this.marks = this.marks + 5;
    },
    intro: function introduce() {
        console.log("My name is Shivam");
    }

};


console.log(student);

//Add property grade: "A"
student.grade = "A";
console.log(student);

//Update marks to 90
student.marks = 90;
console.log(student);

student.result();

student.bonus();
console.log(student);

// Q.. Add method showResult() that prints:
// "Pass" if marks > 40
// else "Fail"

// Q..Add method addBonusMarks() that adds 5 marks.Print updated marks.

// Q.. Delete grade property

delete student.grade;
console.log(student);

// Loop and print all student properties.

for (let key in student) {
    console.log(key + " " + student[key]);
}

//Q..Check if "name" exists.
console.log("name" in student);

student.intro();




