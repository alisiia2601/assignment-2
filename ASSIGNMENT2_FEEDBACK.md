Hi Alissia!  Updated 21-12-2022

Nice! The only thing I'm concerned with is the use of the eval() function as I discussed in the previous feedback -

"The eval() function runs the string that is passed to it, and in the case where the string is user entered data it is a security risk. As a result it is strongly recommended to NEVER use eval. In this case there's no security risk, but there is a better way to do what you are trying to do.

  Arrays and string have an "includes" function - https://www.w3schools.com/jsref/jsref_includes_array.asp - that returns a boolean. So you should delete the for loop from line 15, then at line 62 change the if:

  if (word.includes(guess))

  You could also change line 49 - if ( guess === wordGuessedLetters[p]) to use an include and move it to outside the loop.

  Using includes means you could restructure the entire while loop from line 47 - ie. first check if the user has already guessed the word else check if word includes guess"


*************************************

Hi Alissia!

Nice work! The game works very well and as you will see in the comments below you have nearly ticked off all requirements. There are a few things I would like you to do.

JS should always be in a separate file. In the assignment specs I mention this: "The game only needs to run via prompts and alerts - an external JS file loaded in the head section of an HTML page is all that is required."

So could you please move all your code into a separate JS file and link to it in the head section of the page.

The only other major thing is using "eval()". I've detailed why below and suggested a better way to do the logic.

Because the game works well, and your logic is fine, you have a Godkänt grade already, congratulations! However, if you move the code to an external file and remove the eval and use includes you'll have achieved a VG grade.

It's your choice - if you are happy with th G grade you can leave it as it is. If you want the VG grade please fix these tings and re-submit.

Could you please let me know what you would like to do?

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅
Line 57 restOfLetter isn't used anywhere.

Array: ✅

Random selection from array: ✅

Loops:
  For: ✅ ❌
  The eval() functions runs the string that is passed to it, and in the case where the string is user entered data it is a security risk. As a result it is strongly recommended to NEVER use eval. In this case there's no security risk, but there is a better way to do what you are trying to do.

  Arrays and string have an "includes" function - https://www.w3schools.com/jsref/jsref_includes_array.asp - that returns a boolean. So you should delete the for loop from line 15, then at line 62 change the if:

  if (word.includes(guess))

  You could also change line 49 - if ( guess === wordGuessedLetters[p]) to use an include and move it to outside the loop.

  Using includes means you could restructure the entire while loop from line 47 - ie. first check if the user has already guessed the word else check if word includes guess

  Line 61 - for (let c = 0; c < 1; c++) 
  That will only run once so doesn't need to be loop and doesnt need the breaks.

  While: ✅
  In a while It's best practice to avoid using breaks if you can. Rearranging the logic of the ifs/else should mean you don't need breaks.

Comparison with user entered data: ✅

Final message: ✅
  You should show the word when the user does not guess it corrretly

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ✅

Nested logic: ✅

Input validation: ✅ ❌
User can enter numbers

Cancel button handling: ✅

Semantic variable naming: ✅
Usually iterators in loops start at "i" then go "j", "k" etc but there's nothing wrong with using other letters or names.

Code style: ✅ 
Nice and easy to read. A few odd indentations and empty lines. eg the if at 75