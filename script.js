// Char strings for Password Generation
var lowerAlpha="abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChars = "!\\\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Global passwordLibrary Variable
var passwordLibrary = "";

// Locates part of page to be updated
var formFace = document.getElementById("passwordGenerator");


// Gives functionality to "start" button
var updateButton = document.getElementById("startButton");
updateButton.addEventListener('click', updateUI, false);

// Gets number of chars needed from user.
function getCharNumber() {
  numChars = prompt("How long does your passcode need to be (in digits?)");
}

// Form Updates
// Asks user if they want lowercase letters
function form1() {
  var useLowerCase = confirm("Would you like to use lowercase letters?");
  if (useLowerCase) {
    passwordLibrary += lowerAlpha;
  }
}

// Asks user if they want uppercase letters
function form2() {
  var useUpperCase = confirm("Would you like to use uppercase letters?");
  if (useUpperCase) {
    passwordLibrary += upperAlpha;
  }
}

// Asks users if they want lowercase letters
function form3() {
  var useNums = confirm("Would you like to use numbers?");
  if (useNums) {
    passwordLibrary += nums;
  }
}

function form4() {
  var useSpecialChars = confirm("Would you like to use special characters?");
  if (useSpecialChars) {
    passwordLibrary += specialChars;
  }
}

function generate(numChars) {
  var generatedPassword = "";
  for (var i = 0; i < numChars; i++) {
    var charIndex = Math.floor(Math.random() * passwordLibrary.length);
    generatedPassword += passwordLibrary[charIndex];
  }
  return generatedPassword;
}

function updateUI() {
  passwordLibrary = "";
  getCharNumber();
  form1();
  form2();
  form3();
  form4();
  var newPassword = generate(numChars);
  var formFace = document.getElementById("passwordGenerator");
  formFace.innerText = newPassword;
}

function collectUserInput() {

};