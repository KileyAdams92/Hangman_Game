
var shipOptions = ["edmundfitzgerald", "johnbcowle", "steamervienna"]
    


var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var points = 0;
var attemptsLeft = 20;
var lettersGuessed = [];

var randomWord;
var blankWord;
var blankArray;
function startGame() {
    var randomNumber = Math.floor(Math.random() * 3);   
    randomWord = shipOptions[randomNumber];
    console.log(randomWord);
    blankArray = [];
    for (var i = 0; i < randomWord.length; i++) {
        blankArray[i] = "_";
    } 
    blankWord = blankArray.join(" ");
    document.querySelector("#word").innerHTML = blankWord;
}
 

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    lettersGuessed.push(userGuess);
    var logLetters =
    "<p> Letters already chosen : " + lettersGuessed + "</p>";
    document.querySelector("#lettersGuessed").innerHTML = logLetters;
    
    console.log(randomWord.indexOf(userGuess));
    if(validLetters.indexOf(userGuess) === -1) {
        alert("Please press a key between a-z");
    }
    else {
        console.log("positive key press");
        attemptsLeft--;
        var logAttempts =
        "<p> Attempts remaining : " + attemptsLeft + "</p>";
        document.querySelector("#results").innerHTML = logAttempts;
        for (var i = 0; i < randomWord.length; i++) {
            //if userGuess === index of random word
            //replace "_" with userGuess
            if(randomWord[i] === userGuess) {
                // randomWord[i] = blankWord[i];
                blankWord[i] = userGuess;
                blankArray.splice(i, 1, userGuess);
                console.log(blankWord);
                blankWord = blankArray.join(" ");
                document.querySelector("#word").innerHTML = blankWord;
            } 
            //if user guesses all letters of one word {
            //show a picture of corresponding ship
            //automatically show new word
            //}
            if (attemptsLeft === 0) {
        alert("GAME OVER - NICE TRY!");
    }
        }













        // END positive condition
    }
    
    // anything here will be executed on EVERY onkeyup

}
startGame();
