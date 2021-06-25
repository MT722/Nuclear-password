// Assignment Code
var alaphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789"
var special =  escape("!\"#$%&\"'()*+,-/:;<=>?@[\]^_`{|}~");
var generateBtn = document.querySelector("#generate");//calls the button created in html
var characters = prompt("enter your desired charaacters(s for special, l for lower, u for upper, and n for number");//prompts user to enter password characters
var length = prompt("enter your password length");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);