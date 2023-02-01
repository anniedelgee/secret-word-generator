// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//given that i need a new password
//when i click generate password
//then a prompt tells me about password length
//when i click ok another prompt appears
//then the prompt tells me about charcaters
//when i click ok 
//then the gnerator produces a password



// * Present a series of prompts for password criteria
//    * Length of password
//      * At least 10 characters but no more than 64.
//    * Character types
//      * Lowercase
//      * Uppercase
//      * Numeric
//      * Special characters ($@%&*, etc)





// Function for getting a random element from an array
  //make new variable to hold all characters
  //concatenate all arrays for use in password
var allCharacters= specialCharacters + numericCharacters + upperCasedCharacters + lowerCasedCharacters;
console.log(allCharacters);

  //get random elements so password is between 10<64 elements long.
function getRandom(allCharacters) {
  let secretWord= Math.random(allCharacters.length);
}// secret word variable gives input parameters for followng function, can be any characters of correct length, fro any character type so making an array combines all data efficiently)

// Function to generate password with user input.. user input?
 // Function to prompt user for password options
function generatePassword() {
  prompt ('are you ready to make a secret word?');
  prompt ('secret word must have between 10 & 64 characters');
  prompt ('secret word must have upper & lower case, numerical and special values');
  // console.log('button has been CLICKED');
  return 'secret word will magically appear here';
  // 1. prompt user for password critera
  function getPasswordOptions(){
  }  //  a password length 10 <64
  //  b lowercse, uppercase, numeric, special characters
  // 2. Validate input
  // 3. generate password based on critera
  // 4. Display password on page

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//* Generate a password when the button is clicked
//  * Present a series of prompts for password criteria
//    * Length of password
//      * At least 10 characters but no more than 64.
//    * Character types
//      * Lowercase
//      * Uppercase
//      * Numeric
//      * Special characters ($@%&*, etc)
//  * Code should validate for each input and at least one character type should be selected
//  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

