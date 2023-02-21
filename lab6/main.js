let passwordValidator = document.getElementById("password-validate");
let password = document.getElementById("password");
let output = document.getElementById("password-output");

passwordValidator.addEventListener("keyup", () => {
  let validation = validatePassword();
  if (validation[0]) {
    output.innerText = "Passwords match";
    output.classList = ["notification is-success"];
  } else {
    output.innerText = validation[1];
    output.classList = ["notification is-danger"];
  }
});

password.addEventListener("keyup", () => {
  let validation = validatePassword();
  if (validation[0]) {
    output.innerText = "Passwords match";
    output.classList = ["notification is-success"];
  } else {
    output.innerText = validation[1];
    output.classList = ["notification is-danger"];
  }
});

function validatePassword() {
  const reqCharacters = [
    "!",
    "#",
    "$",
    "%",
    "&",
    ",",
    ".",
    "/",
    "=",
    "+",
    "?",
    "_",
  ];
  const reqNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  let containsSpecChar = false;
  let containsNumber = false;
  let isReqLength = true;
  let match = true;
  let errorMessage = "";

  for (char of reqCharacters) {
    if (password.value.includes(char)) {
      containsSpecChar = true;
      break;
    }
  }

  if (!containsSpecChar) {
    errorMessage = "Password must contain a special character";
  }

  for (char of reqNums) {
    if (password.value.includes(char)) {
      containsNumber = true;
      break;
    }
  }

  if (!containsNumber) {
    errorMessage = "Password must contain a number";
  }

  if (password.value.length < 8 || password.value.toLowerCase() === password) {
    isReqLength = false;
    errorMessage = "Password must be at least 8 characters";
  }

  if (password.value !== passwordValidator.value) {
    match = false;
    errorMessage = "Passwords dont match";
  }

  return [
    containsNumber && containsSpecChar && isReqLength && match,
    errorMessage,
  ];
}
