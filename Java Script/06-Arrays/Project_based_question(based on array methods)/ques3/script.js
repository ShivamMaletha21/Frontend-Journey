//  Question 3: Netflix Watchlist Manager
// Initial array:
// [
//   "Money Heist",
//   "Dark",
//   "Stranger Things",
//   "Wednesday",
//   "Breaking Bad"
// ]
// Create buttons:
// Show Top 3
// Display only the first 3 shows.

// Replace Show
// Replace "Dark" with "Peaky Blinders".

// Remove Show
// Remove "Wednesday" from the list.

// Requirements:
// Update UI after every operation.
// This question covers:
// slice() 
// splice()



let movies = [  "Money Heist",
  "Dark",
  "Stranger Things",
  "Wednesday",
  "Breaking Bad"];


  // Display all movies 
    let btn4 = document.getElementById("btn4");
  btn4.addEventListener("click",()=> {
    
    document.getElementById("display_all").innerText = `All movies are:${movies}`;
    document.getElementById("input").value = "";
  });



  // Display only the first 3 shows.
  let btn1 = document.getElementById("btn1");
  btn1.addEventListener("click",()=> {
    let top3 = movies.slice(0,3);
    document.getElementById("display").innerText = `Top 3 movies are:   ${top3}`;
    document.getElementById("input").value = "";
  });

  // [
//   "Money Heist",
//   "Dark",
//   "Stranger Things",
//   "Wednesday",
//   "Breaking Bad"
// ]
// Replace "Dark" with "Peaky Blinders".
  let btn2 = document.getElementById("btn2");
  btn2.addEventListener("click",()=> {
    movies.splice(1,1,"Peaky Blinder");
    document.getElementById("replace").innerText = `Replace "Dark" with "Peaky Blinders:  ${movies}`;
    document.getElementById("input").value = "";
  });

  // Remove "Wednesday" from the list.
  let btn3= document.getElementById("btn3");
  btn3.addEventListener("click",()=> {
    movies.splice(3,1);
    document.getElementById("remove").innerText = `Remove "Wednesday" from the list:  ${movies}`;
    document.getElementById("input").value = "";
  });




   