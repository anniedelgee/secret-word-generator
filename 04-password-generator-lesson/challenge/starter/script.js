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


var length;
var lowercase;
var uppercase;
var special;
var numeric;
//global variables
let userPreferences= [];
// let passwordLength="";
let password;
  let passwordLength = prompt("how many characterz can you store in your head one time? between 10 & 64 plz.");
      if (passwordLength < 10 || passwordLength > 64)
      {
         alert("not allowed, choose between 10 to 64 characters, mate");
        let passwordLength = prompt("again, this time between 10 -64 characterz");
      }
  let preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
  let preferUpper= confirm("What character types do you prefer? (select atleast 1): uppercase");
  let preferNum= confirm("What character types do you prefer? (select atleast 1): numerical");
  let preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
  if (!preferLow && !preferUpper && !preferNum && !preferSpesh)
  {
    alert("wELLLLLLL, you have to choose atLEAST 1 charactertype, let's go again");
    preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
    preferUpper= confirm("What character types do you prefer?(select atleast 1): uppercase");
    preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
   }
function getOptions()
{
    if (preferLow){
      userPreferences = userPreferences.concat(lowerCasedCharacters);
    }
     if (preferUpper){
      userPreferences = userPreferences.concat(upperCasedCharacters);
    }
     if (preferNum){
      userPreferences = userPreferences.concat(numericCharacters);
    }
    if (preferSpesh){
      userPreferences = userPreferences.concat(specialCharacters);
    }
 }
  //function for  looping through array to form final randomly generated password to display on screen
  function getRandom(arr)
  {
    num = userPreferences[Math.floor(Math.random()*arr.length)]
    return num
  }
function generatePassword(){
  getOptions()
    for (var i= 0; i < passwordLength; i++ ){
      let randomSelection = getRandom(userPreferences);
      password += randomSelection;
    }
    return password;
}
writePassword()
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// // Write password to the #password input
function writePassword() {
  password = "";
  generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  console.log(password)
}
// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
