// Assignment Code
// Variables for the user to input

var enter;
var confirmNumber = true;
var confirmCharacter = true;
var confirmUppercase = true;
var confirmLowercase = true;


//Character Options for the password results
var choices = {

character: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"],

number: [1, 2, 3, 4, 5, 6, 7, 8, 9],

lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

}

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
  enter = prompt("How many Characters would you like your password to contain?");
if (!enter) {
  alert("This needs a value");
} else if (enter < 8 || enter > 128) {
  enter = prompt( "you must choose between 8 and 128");
} else {
  confirmNumber = window.confirm("Will this contain numbers?");
  confirmCharacter = window.confirm ("Will this contain special characters?");
  confirmLowercase = window.confirm ("will this contain lowercase letters?");
  confirmUppercase = window.confirm ("Will this contain uppercase letters?");
 }; 
}

if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
  choices = alert("Please choose criteria");
}
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, upper);
}


