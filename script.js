// Assignment Code, declares varibles to be used.

var generateBtn = document.querySelector("#generate");//calls the button created in html




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  console.log(password);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword()
{
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "123456789";
  var special =  escape("!\"#$%&\"'()*+,-/:;<=>?@[\]^_`{|}~");
  var password1 = "";

  var characters = prompt("enter your desired charaacters(s for special, l for lower, u for upper, and n for number");//prompts user to enter password characters
  var pLength = parseInt(prompt("enter your password length"), 10);//password has been generated. 


  var specialFinder = "";
  var numberFinder = "";
  var upperFinder = "";
  var lowerFinder = "";
  var tempPassword = "";
  
  
   if(characters.indexOf("s")>=0){//checks if the user wants special characters
    //assigns chosen special characters to a new array 'specials'.
    
      specialFinder = special.charAt(Math.floor(Math.random() * special.length));//grabs random 'special' element
      console.log(specialFinder);
    }

   if(characters.indexOf("n")>=0){//looks for numbers
     numberFinder = numbers.charAt(Math.floor(Math.random() * numbers.length));//grabs random 'special' element
     console.log(numberFinder);
   }

     if(characters.indexOf("u")>=0){//upper
       upperFinder = alphabet.charAt(Math.floor(Math.random() * alphabet.length)).toUppercase();//grabs random 'special' element
       console.log(upperFinder);
    }
    
     if(characters.indexOf("l")>=0){//lower
       lowerFinder = alphabet.charAt(Math.floor(Math.random() * alphabet.length));//grabs random 'special' element
       console.log(lowerFinder);
    }

    if((characters.indexOf("s")<0) && (characters.indexOf ("n")<0) && (characters.indexOf("u")<0) && (characters.indexOf ("l")<0)){//checks for invalid input
      alert("!invalid input");
      
    }
    if(pLength>128 || pLength<8){
      alert("!invalid length");
    }

    tempPassword += (specialFinder.concat(numberFinder).concat(upperFinder).concat(lowerFinder));

  //cut down new arrays

   for(var i = 0; i<pLength; i++){
     //use math.random method to populate 'specials'
   //assign arrays to password.
     password1 += tempPassword.charAt(i);
     for(var j = pLength-1; j>=0 ;j--){

     }
    
   }




  console.log(password1);
  return password1;
  
  
    
}