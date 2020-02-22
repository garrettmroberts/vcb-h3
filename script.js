// Char strings for Password Generation
var lowerAlpha="abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChars = "!\\\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength = 0;

// Global passwordLibrary Variable
var passwordLibrary = "";

var formFace = document.querySelector("#passwordGenerator");

// Query selectors for forms and continue buttons
var forms = document.querySelectorAll("form");
var continueButtons = document.querySelectorAll(".continueButton");

// Gives functionality to "start" button
var startButton = document.querySelector("#startButton");
startButton.addEventListener('click', function() {
  event.preventDefault();
  updateUI();
});

// This function calls on all remaining forms
function runGenerator() {
  forms[0].setAttribute("style", "display: inherit");

  continueButtons[0].addEventListener("click", function() {
    event.preventDefault();
    var userInput = forms[0].children[1].firstElementChild.value;
    if (userInput >= 8 && userInput <= 128) {
      passwordLength = userInput;
      forms[0].setAttribute("style", "display: none");
      form2()
    };
  });
};

// Asks user if they want lowercase letters
function form2() {
  forms[1].setAttribute("style", "display: inherit");

  continueButtons[1].addEventListener("click", function () {
    event.preventDefault();
    passwordLibrary += lowerAlpha;
    forms[1].setAttribute("style", "display: none");
    form3();
  });
  continueButtons[2].addEventListener("click", function() {
    event.preventDefault();
    forms[1].setAttribute("style", "display: none");
    form3();
  });
};

// Asks user if they want uppercase letters
function form3() {
  forms[2].setAttribute("style", "display: inherit");

  continueButtons[3].addEventListener("click", function () {
    event.preventDefault();
    passwordLibrary += upperAlpha;
    forms[2].setAttribute("style", "display: none");
    form4();
  });
  continueButtons[4].addEventListener("click", function () {
    event.preventDefault();
    forms[2].setAttribute("style", "display: none");
    form4();
  });
}

// Asks user if they want numbers
function form4() {
  forms[3].setAttribute("style", "display: inherit");

  continueButtons[5].addEventListener("click", function () {
    event.preventDefault();
    passwordLibrary += nums;
    forms[3].setAttribute("style", "display: none");
    form5();
  });
  continueButtons[6].addEventListener("click", function () {
    event.preventDefault();
    forms[3].setAttribute("style", "display: none");
    form5();
  });
}

// Asks user if they want special letters
function form5() {
  forms[4].setAttribute("style", "display: inherit");

  continueButtons[7].addEventListener("click", function () {
    event.preventDefault();
    passwordLibrary += specialChars;
    forms[4].setAttribute("style", "display: none");

    if (passwordLibrary.length > 0) {
      var newPassword = generate(passwordLength);
      var passwordPlaceholderEl = document.querySelector("#passwordPlaceholder")
      passwordPlaceholderEl.innerText = newPassword;
    } else {
      alert("You need to select something! Refresh the page and try again.");
    };
  });

  continueButtons[8].addEventListener("click", function () {
    event.preventDefault();
    forms[4].setAttribute("style", "display: none");

    if (passwordLibrary.length > 0) {
      var newPassword = generate(passwordLength);
      var passwordPlaceholderEl = document.querySelector("#passwordPlaceholder")
      passwordPlaceholderEl.innerText = newPassword;
    } else {
      alert("You need to select something! Refresh the page and try again.");
    };
  });
};

function generate(passwordLength) {
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var charIndex = Math.floor(Math.random() * passwordLibrary.length);
    generatedPassword += passwordLibrary[charIndex];
  };
  return generatedPassword;
};

function updateUI() {
  var reuseTest = document.querySelector("#passwordPlaceholder");
  if (reuseTest.classList.value == "checkForThis") {
    reuseTest.innerText = "";
  };
  passwordLibrary = "";
  passwordLength = 0;
  
  runGenerator();
};