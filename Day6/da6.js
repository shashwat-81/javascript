let randomNumber = Math.floor(Math.random() * 10) + 1;

function guess() {
    let userEnteredNumber = Number(document.getElementById("guessInput").value);

    if (userEnteredNumber < randomNumber) {
        alert("Your guess is too low. Try again!");
    } else if (userEnteredNumber > randomNumber) {
        alert("Your guess is too high. Try again!");
    } else if (userEnteredNumber === randomNumber) {
        document.getElementById("result").innerHTML =
            `<span class="celebrate-message">🎉 Congratulations! You guessed the number: ${randomNumber} 🎉</span>`;
        
    } else {
        alert("Please enter a valid number.");
    }
}