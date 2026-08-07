
//  V2 adds 5 things:
// Maximum attempts
// Remaining attempts
// Guess history
// Input validation
// Prevent duplicate guesses 
// values 


// V3 adds:

// Difficulty levels
// Different number ranges
// Different attempt limits
// Hint system
// Best score

let computer_num;
let maxNumber;
let maxAttempts;
let Attempts = 0;

let selectedLevel = "easy";

// We want to remember what the player has guessed.
let guessHistory = [];

const button = document.getElementById("check");
const gameLevels = document.getElementById("game_levels");

// Set game difficulty
gameLevels.addEventListener("change", () => {

    selectedLevel = gameLevels.value;

    if (selectedLevel === "easy") {
        maxNumber = 50;
        maxAttempts = 10;
    }

    if (selectedLevel === "medium") {
        maxNumber = 100;
        maxAttempts = 8;
    }

    if (selectedLevel === "diff") {
        maxNumber = 500;
        maxAttempts = 7;
    }

    // Generate a new number for the selected difficulty
    computer_num = Math.floor(Math.random() * maxNumber) + 1;

    // Reset attempts and history (if we chnage medium)
    Attempts = 0;
    guessHistory = [];

    document.getElementById("show_level").innerText =
        `You selected: ${selectedLevel}`;

    document.getElementById("show_attempts").innerText =
        `Remaining attempts are: ${maxAttempts}`;

    document.getElementById("show_input").innerText = "";

    document.getElementById("hint").innerText = "";

    document.getElementById("guess").innerText = "";

    document.getElementById("best_score").innerText = "";

    document.getElementById("num").value = "";
});


// Check button
button.addEventListener("click", () => {

    let num = Number(document.getElementById("num").value);

    // Validate input
    if (num < 1 || num > maxNumber || Number.isNaN(num)) {
        document.getElementById("show_input").innerText =
            `Enter a valid number between 1 and ${maxNumber}`;
        return;
    }

    // Check duplicate guess
    if (guessHistory.includes(num)) {
        document.getElementById("show_input").innerText =
            `The value ${num} already exists. Guess a different number!`;
        return;
    }

    // Check attempts
    if (Attempts >= maxAttempts) {
        document.getElementById("show_input").innerText =
            "Game Over!";
        return;
    }

    Attempts++;

    // Check guess
    if (num > computer_num) {

        document.getElementById("show_input").innerText =
            "Your guess is higher";

        document.getElementById("hint").innerText =
            `Hint: Try a number between 1 and ${num - 1}`;
    }

    else if (num < computer_num) {

        document.getElementById("show_input").innerText =
            "Your guess is lower";

        document.getElementById("hint").innerText =
            `Hint: Try a number between ${num + 1} and ${maxNumber}`;
    }

    else {

        document.getElementById("show_input").innerText =
            `Your guess is correct ${computer_num}`;

        document.getElementById("hint").innerText =
            "You found the number!";

        document.getElementById("best_score").innerText =
            `Best Score: Correct in ${Attempts} attempts`;
    }

    // Save guess
    guessHistory.push(num);

    document.getElementById("guess").innerText =
        `Guess history: ${guessHistory}`;

    // Show remaining attempts
    let RemainingAttempts = maxAttempts - Attempts;

    document.getElementById("show_attempts").innerText =
        `Remaining attempts are: ${RemainingAttempts}`;

    // Check if attempts are finished
    if (Attempts >= maxAttempts && num !== computer_num) {

        document.getElementById("show_input").innerText =
            `Game Over! The number was ${computer_num}`;

        document.getElementById("hint").innerText =
            "Better luck next time!";
    }

    // Clear input
    document.getElementById("num").value = "";
});


// Start game with Easy difficulty
maxNumber = 50;
maxAttempts = 10;

computer_num = Math.floor(Math.random() * maxNumber) + 1;

document.getElementById("show_level").innerText =
    "You selected: easy";

document.getElementById("show_attempts").innerText =
    `Remaining attempts are: ${maxAttempts}`;