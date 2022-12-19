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

    for (let g = 0; g < word.length; g++){
        eval("let id_"+g+"="+g);
        id_0 = word[0];
        id_1 = word[1];
        id_2 = word[2];
        id_3 = word[3];
        id_4 = word[4];
        id_5 = word[5];
        id_6 = word[6];
        id_7 = word[7];
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
                 if (id_0 === guess || id_1 === guess || id_2 === guess || id_3 === guess || id_4 === guess || id_5 === guess || id_6 === guess || id_7 === guess){
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