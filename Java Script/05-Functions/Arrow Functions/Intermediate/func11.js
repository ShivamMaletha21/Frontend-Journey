// Q11. Create a function that accepts a sentence and returns total number of words.
let sent = (...words)=> {

    let count = 0;
    for (let i = 0 ; i < words.length; i++) {
         count ++;
    }
    return count;
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=> {

    let sentence = document.getElementById("input").value;
    let real_words = sentence.split(" ");

    let real_sent = sent(...real_words);
    document.getElementById("msg").innerText = real_sent;

})


// another way to do this ... here we dont need to use loop
// let sent = (...words) => {
//     return words.length;
// }