// Question 1: Classroom Attendance Manager
// Create:
// An input field
// "Add Student" button
// "Remove Last Student" button
// Display all students on screen

// Requirements:
// When user enters a name and clicks Add Student, add it to the attendance list.
// When Remove Last Student is clicked, remove the most recently added student.
// Update the UI after every action.

     // creating array
    let students = [];

    // Add Student
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",()=>{
    //getting input
    let input = document.getElementById("input").value ;
    students.push(input);
    document.getElementById("display").innerText = students;
    // clearing the input field
     document.getElementById("input").value = "";
    });

    //Remove Last Student

    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",()=>{
        students.pop();
     document.getElementById("display").innerText = students;

    });