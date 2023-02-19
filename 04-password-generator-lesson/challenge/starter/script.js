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

let userPreferences= [];
let passwordLength="";

// defining passwordlength global variable 
  let passswordLength= prompt(
    "how many characterz can you store in your head one time? between 10 & 64 plz.");
      if (passwordLength < 10 || passwordLength > 64){
         alert("not allowed, choose between 10 to 64 characters, mate");
          {let passwordLength= prompt("again, this time between 10 -64 characterz");}
      }
  //defining varibales to use in userPreferences if statement to get second global variable
  let preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
  let preferUpper= confirm("What character types do you prefer? (select atleast 1): uppercase");
  let preferNum= confirm("What character types do you prefer? (select atleast 1): numerical");
  let preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
    if (!preferLow && !preferUpper && !preferNum && !preferSpesh){
          alert("wELLLLLLL, you have to choose atLEAST 1 charactertype, let's go again");{
            preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
            preferUpper= confirm("What character types do you prefer?(select atleast 1): uppercase");
            preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
    }
   }
   //define userpreferences variable by combining all the preferences taken from confirm messages.
   function getOptions(){
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
    }
    //function to combine prefrences recorded, with passwordlength and create final array from iterating through userpreferences, constrained by passwordlegnth.
    let finalPassword=[]
    function generatePassword(){
      for (var i= 0; i < passwordLength; i++ ){
        let finalSelection= userPreferences(Math.floor(Math.random(userPreferences)));
        finalPassword.push(finalSelection)
      }
      return finalPassword.join("");

    }

// global varibales declared, so function has something to fill
// let passwordLength="";
// let userPreferences= [];
// // let passwordLength=""
// // let secretWord= userPreferences * passwordLength;

// // function generatePassword 
// // var topOfTopSecretWord= []
// // let passwordLength=parseInt(passwordLength)

// // Function to prompt user for password options
// // function getPreferences() {
//   //get length of password
//   let passwordLength= prompt(
//     "Choose between 10 - 64 characters for your secret word")
//       if (passwordLength < 10 || passwordLength > 64){
//       alert( "your secret word does not fit within our range, try again");
//         let passwordLength= prompt( "Choose between 10 - 64 characters for your secret word")
//       // generatePassword()
//     }
//     //represent characters as variables to get users preferences
//     let preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
//     let preferUpper= confirm("What character types do you prefer? (select atleast 1): uppercase");
//     let preferNum= confirm("What character types do you prefer? (select atleast 1): numerical");
//     let preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
//       if (!preferLow && !preferUpper && !preferNum && !preferSpesh){
//         alert("wELLLLLLL, you have to choose atLEAST 1 charactertype, let's go again");{
//           preferLow= confirm("What character types do you prefer? (select atleast 1): lowercase");
//           preferUpper= confirm("What character types do you prefer?(select atleast 1): uppercase");
//           preferSpesh= confirm("What character types do you prefer? (select atleast 1): 'special' characters");
//         }
//       //use confirmed user preferences to create concatenated array of characters to randomly iterate through. 
//       let userPreferences= [];
//       if (preferLow){
//         userPreferences= userPreferences.concat(lowerCasedCharacters);
//       }
//       if (preferUpper){
//         userPreferences= userPreferences.concat(upperCasedCharacters);
//       }
//       if (preferNum){
//         userPreferences= userPreferences.concat(numericCharacters);
//       }
//       if (preferSpesh){
//         userPreferences= userPreferences.concat(specialCharacters);
//       }
//     }
//     // console.log(userPreferences);
//   // }
//   // generatePassword();
//   // randomly iterate through concatenated array.
//   let topOfTopSecretWord = []
//   function generatePassword(){
//     for (var i=0; i< passwordLength; i++){
//       let finalCharacters= userPreferences[Math.floor(Math.random()* userPreferences.length)];
//         topOfTopSecretWord.push(finalCharacters);
//       }
//       return topOfTopSecretWord.join("");
//     }
// //        //string that joins elements in array into a single string without commas etc.
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)