// Assignment Code
// Variables for the user to input

var enter = 0;
var confirmNumber = true;
var confirmCharacter = true;
var confirmUppercase = true;
var confirmLowercase = true;


//Character Options for the password results

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices = [];


//Code to link the generate button to javascript
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //User input prompts
  enter = parseInt(prompt("How many Characters would you like your password to contain?"));
if (!enter) {
  alert("This needs a value");

} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt( "you must choose between 8 and 128"));

} else {
  confirmNumber = window.confirm("Will this contain numbers?");
  confirmCharacter = window.confirm ("Will this contain special characters?");
  confirmLowercase = window.confirm ("will this contain lowercase letters?");
  confirmUppercase = window.confirm ("Will this contain uppercase letters?");
 };
 //conditional statments for each choice of what your password will contain 
 
if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
  alert("Please choose criteria");
}
else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
choices = character.concat(number, lower,upper);
console.log(choices);

} 
else if (confirmCharacter && confirmNumber && confirmUppercase) {
choices = character.concat(number, upper);  

} 
else if (confirmCharacter && confirmNumber && confirmLowercase) {
choices = character.concat(number, lower);  

}
else if (confirmNumber && confirmUppercase && confirmLowercase) {
choices = number.concat(upper, lower);  

}
else if (confirmCharacter && confirmUppercase) {
choices = character.concat (upper);  

}
else if (confirmCharacter && confirmLowercase) {
choices = character.concat (lower);  

}
else if (confirmCharacter && confirmNumber) {
choices = character.concat(number);  

}
else if (confirmCharacter) {
choices = character;  

}
else if (confirmUppercase) {
choices = upper;  

}
else if (confirmLowercase) {
choices = lower;  

}
else if (confirmNumber) {
choices = number;  

}

var password = [];

// Random selection for variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
// coverts password to a string
        var pw = password.join("");
    UserInput(pw);
    return pw;
  }

  function UserInput(pw) {
    document.getElementById("password").textContent = pw;

}





