var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '+', '-', '?',];

function getPasswordOptions() {


var length = parseInt (
prompt('How many characters do you want in your password?'),
10
);

if (length < 8) {
  alert('Password is too short.');
  return null;
}

if (length > 128) {
  alert('Password is too long.');
  return null;
}

var hasSpecialCharacters = confirm(
  'Do you want special characters?'
);


var hasNumericCharacters = confirm(
  'Do you want numeric characters?'
);


var hasLowerCasedCharacters = confirm(
  'Do you want lowercase letters?'
);


var hasUpperCasedCharacters = confirm(
  'Do you want uppercase characters?'
);

if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
) {
  alert('You must select at least one character type');
  return null;
}

var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
};
return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
    if (options.hasNumericCharacters) {
      possibleCharacter = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
      if (options.hasNumericCharacters) {
        possibleCharacter = possibleCharacter.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
      }
        if (options.hasUpperCasedCharacters) {
          possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
          guaranteedCharacters.push(getRandom(upperCasedCharacters));
        }

for (var i = 0; i < options.length; i++) {
var possibleCharacter = getRandom(possibleCharacter);
result.push(possibleCharacter);
 }

for (var i = 0; i < guaranteedCharacters.length; i++) {
result[i] = guaranteedCharacters[i];
}

return result.join('');
}

var generateBtn = document.querySelector('#generate');
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

