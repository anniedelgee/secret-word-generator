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

// Function to prompt user for password options
//

let password=[];



// function getPasswordOptions() {
  //get length of password
  let passwordLength= prompt(
    "Choose between 10 -64 characters for your secret word")
      if (passwordLength < 10 || passwordLength > 64){
      alert( "your secret word does not fit within our range, try again");{
        let passwordLength= prompt(
          "Choose between 10 -64 characters for your secret word")
      }
    }
    //represent characters as variables to get users preferences
    let preferLow= confirm("What character types do you prefer (select atleast 1)?: lowercase");
    let preferUpper= confirm("What character types do you prefer (select atleast 1)?: uppercase");
    let preferNum= confirm("What character types do you prefer (select atleast 1)?: numerical");
    let preferSpesh= confirm("What character types do you prefer (select atleast 1)?: 'special' characters");
      if (!preferLow && !preferUpper && !preferNum && !preferSpesh){
        alert("wELLLLLLL, you have to choose atLEAST 1 charactertype, try another time");{
          preferLow= confirm("What character types do you prefer (select atleast 1)?: lowercase");
          preferUpper= confirm("What character types do you prefer (select atleast 1)?: uppercase");
          preferSpesh= confirm("What character types do you prefer (select atleast 1)?: 'special' characters");
        }
      }
      //use confirmed user preferences to create concatenated array of characters to randomly iterate through. 
      let userPreferences= [];
      if (preferLow){
        userPreferences= userPreferences.concat(lowerCasedCharacters);
      }
      if (preferUpper){
        userPreferences= userPreferences.concat(upperCasedCharacters);
      }
      if (preferNum){
        userPreferences= userPreferences.concat(numericCharacters);
      }
      if (preferSpesh){
        userPreferences= userPreferences.concat(specialCharacters);
      }
      console.log(userPreferences);

// Function for getting a random element from an array
function getRandom(arr) {

}
//get random element from arrays selected in prompts?


// Function to generate password with user input
function generatePassword() {

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

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }
// Function for getting a random element from an array
  //make new variable to hold all characters
  //concatenate all arrays for use in password
// var allCharacters= specialCharacters + numericCharacters + upperCasedCharacters + lowerCasedCharacters;
// console.log(allCharacters);

  //get random elements so password is between 10<64 elements long. atleast one charater type will be selected from looping through array however many times is necessary
// function getRandom(allCharacters) {
//   let secretWord= Math.random(allCharacters.length);
// }// secret word variable gives input parameters for followng function, can be any characters of correct length, fro any character type so making an array combines all data efficiently)

// function generatePassword() {
//   let userInput= prompt ('how many characters do you want your secret word to be? select between 10 & 64'); 
//     prompt ('secret word must have uppercase characters');
//     prompt ('secret word must have lowercase characters');
//     prompt ('secret word must have numerical characters');
//     prompt ('secret word must have special characters');
//   } 
//   generatePassword(userInput);{
//     if(i<=10 && i > 64){
//       console.log(userInput);

//     }
//   }

  //get length of password. take input from user response
  
  // return secretWord;
  // console.log('button has been CLICKED');
  // function getPasswordOptions(){
  // }  

  // 2. Validate input
  // 3. generate password based on critera
  // 4. Display password on page





// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Add event listener to generate button.. done already?
// generateBtn.addEventListener('click', writePassword);


