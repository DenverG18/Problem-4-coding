let favoriteNumber = Math.floor(Math.random() * 24) + 6 

let guess;
while (guess !== favoriteNumber) {
    guess = parseInt(prompt("Guess the favorite number."));

    if (guess < favoriteNumber) {
        alert("Too low, try again.");
    } else if (guess > favoriteNumber){
        alert("Too high, try again.")
    } else {
        alert("Correct.");
        break;
    }
}