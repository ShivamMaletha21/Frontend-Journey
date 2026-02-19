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



