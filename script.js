// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var symbols = ' !"#$%&\'()*+,-./:;=<>?[\\]^_{}|~';

function generatePassword(characters, passwordLength) {
  let newPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    newPassword += characters.substring(randomNumber, randomNumber +1);
   }

   return newPassword;
}

// Write password to the #password input
function writePassword() {
  // var chars = '';
  var chars = numbers + lowercase + lowercase.toUpperCase() + symbols;
  var passwordLength = prompt('Password Length? Please choose between 8 and 128 characters');

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Please only choose between 8 and 128 characters');
  }

  var password  = generatePassword(chars, passwordLength);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
