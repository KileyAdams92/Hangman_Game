
var shipOptions = ["edmundfitzgerald", "johnbcowle", "steamervienna"];
var shipPictures = ["ef.jpg", "jbc.jpeg", "sv.jpeg"];

var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var points = 0;
var attemptsLeft = 20;
var lettersGuessed = [];

var randomWord;
var blankWord;
var blankArray;
var randomWordLength;

//created reset, reset document. to blank when game starts
function resetButton() {
    attemptsLeft = 20;
    lettersGuessed = [];
    document.querySelector("#lettersGuessed").innerHTML = "";
    document.querySelector("#results").innerHTML = "";
    document.getElementById("photos").innerHTML = "";
    startGame();
}
function startGame() {
    var randomNumber = Math.floor(Math.random() * 3);
    // making a random word from the random index of shipOptions
    randomWord = shipOptions[randomNumber];
    //number of letters inside of the random.word length
    randomWordLength = randomWord.length;
    blankArray = [];
    //set the variable at 0, keep running the loop as long as i < randomWord.length (one of the shipOptions), everytime you go through loop increase i + 1
    for (var i = 0; i < randomWord.length; i++) {
        blankArray[i] = "_";
    }
    // places spaces in between underscores
    blankWord = blankArray.join(" ");
    document.querySelector("#word").innerHTML = blankWord;
    document.getElementById("photos").innerHTML = '<img src="assets/images/glp.png' + '" />';
}


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    lettersGuessed.push(userGuess);
    var logLetters =
        "<p> Letters already chosen : " + lettersGuessed + "</p>";
    document.querySelector("#lettersGuessed").innerHTML = logLetters;

    if (validLetters.indexOf(userGuess) === -1) {
        alert("Please press a key between a-z");
    }
    else {
        attemptsLeft--;
        var logAttempts =
            "<p> Attempts remaining : " + attemptsLeft + "</p>";
        document.querySelector("#results").innerHTML = logAttempts;
        // if has to wrap the for loop because if the blank array has a letter we guessed already we don't need to run for loop
        //user can't guess the same letter twice
        if ((!blankArray.includes(userGuess))) {
            for (var i = 0; i < randomWord.length; i++) {
                //if userGuess === index of random word
                //replace "_" with userGuess
                if (randomWord[i] === userGuess) {
                    randomWordLength--;
                    blankWord[i] = userGuess;
                    blankArray.splice(i, 1, userGuess);
                    //tracking how many letters are left to guess
                    //if blankArray does not include userGUess then decrease randomWordLength
                    blankWord = blankArray.join(" ");
                    document.querySelector("#word").innerHTML = blankWord;

                }
            }
            //is the user guess inside of the blankArray

            if (randomWordLength === 0) {
                document.getElementById("photos").innerHTML = '<img src="assets/images/' + shipPictures[shipOptions.indexOf(randomWord)] + '" />';
                points++;
                var logPoints =
                "<p> Points : " + points + "</p>";
                document.querySelector("#pointsWon").innerHTML = logPoints;
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
//go get element with id reset, when clicked, run this function;
document.getElementById("reset").onclick = resetButton;
