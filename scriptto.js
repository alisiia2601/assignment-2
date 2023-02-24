// Rules.
alert("Welcome to a game Hangman")
    
const words = ["World", "Hello", "Mystery", "Horse"];

// Choose word.
let word = words[Math.floor(Math.random() * words.length)].toLowerCase();
// Change array to  " _ "
let crossedOutLettersInAWord = [];
    for (let i = 0; i < word.length; i++) {
        crossedOutLettersInAWord[i] = " _ ";
    }

    

let longWord = word.length;

let wordGuessedLetters = crossedOutLettersInAWord;

let numberOfAttempts = 5;

alert("The word contains of" + "''" + longWord + "''" + " letters " + crossedOutLettersInAWord.join(" ") + " and you have " + numberOfAttempts + " chances!");


    while ((numberOfAttempts !== 0) && (longWord > 0)) {

        let guess = prompt("Guess one letter from a choosen word").toLowerCase();

         if (guess === null) {
            break;

         } else if (guess.length !== 1) {
            alert("Please type just one letter!");

         } else {
            for (let p = 0; p < word.length; p++) {

                if ( guess === wordGuessedLetters[p]) {
                    alert("You already guessed that letter, choose another one!!")
                    break;
                } 

                if ( guess === word[p]) {
                    wordGuessedLetters[p] = guess;
                    longWord--;
                    restOfLetter = longWord;
                }
            }

            for (let c = 0; c < 1; c++) {
                if (word.includes(guess)){
                    alert("You've got a right letter!!! " + wordGuessedLetters.join(" ") + " the number of your attempts = " + numberOfAttempts)
                    break;

                } else {
                    numberOfAttempts--;
                    alert("Unfortunately, that letter is not exist " + wordGuessedLetters.join(" ") + " no, your number of attempts = " + numberOfAttempts)
                    break;
                }
            }
        }               
    }

if (longWord == 0){
    alert("You guessed everything " + "''" + word.length + "''" + " letters in a word " + wordGuessedLetters.join(" ") + " and you have " + numberOfAttempts + " more attempts!");
    } 

    else {alert("You have run out of attempts and the word is not guessed, try again")}