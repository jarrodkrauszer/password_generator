// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var symbols = ' !"#$%&\'()*+,-./:;=<>?[\\]^_{}|~';

function generatePassword(characters, passwordLength) {
  var newPassword = "";

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
  var includeLower = prompt('Would you like to include lowercase letters?  Enter Y or N');
  var includeUpper = prompt('Would you like to include uppercase letters?  Enter Y or N');
  var includeNumbers = prompt('Would you like to include numbers?  Enter Y or N');
  var includeSymbols = prompt('Would you like to include special characters?  Enter Y or N');

  if (includeLower[0].toUpperCase === 'Y') {
    chars = lowercase;
  }

  if (includeUpper[0].toUpperCase === 'Y') {
    chars = lowercase.toUpperCase();
  }

  if (includeNumbers[0].toUpperCase === 'Y') {
    chars = numbers;
  }

  if (includeSymbols[0].toUpperCase === 'Y') {
    chars = includeSymbols;
  }

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
