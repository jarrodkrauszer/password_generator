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
  var chars = '';
  var password = '';
  var validLength = false;

  var includeLower = confirm('Would you like to include lowercase letters?  Enter Y or N');
  var includeUpper = confirm('Would you like to include uppercase letters?  Enter Y or N');
  var includeNumbers = confirm('Would you like to include numbers?  Enter Y or N');
  var includeSymbols = confirm('Would you like to include special characters?  Enter Y or N');
  var passwordLength = prompt('Password Length? Please enter a length of at least 8 characters and no more than 128 characters');

  if (includeLower) {
    chars += lowercase;
  }

  if (includeUpper) {
    chars += lowercase.toUpperCase();
  }

  if (includeNumbers) {
    chars += numbers;
  }

  if (includeSymbols) {
    chars += includeSymbols;
  }

  passwordLength = parseInt(passwordLength);

  while (true) {
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a length of at least 8 characters and no more than 128 characters');
      passwordLength = prompt('Password Length? Please enter a length of at least 8 characters and no more than 128 characters');
    } else {
      break;
    }
  }
  
  if (chars.length > 0) {
    password  = generatePassword(chars, passwordLength);
  } else {
    password = 'You did not enter all the correct criteria!'
  }
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
