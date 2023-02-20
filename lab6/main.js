let passwordValidator = document.getElementById("password-validate");
let password = document.getElementById("password");
let output = document.getElementById("password-output");

passwordValidator.addEventListener("keyup", () => {
  if (
    validatePassword(password.value) &&
    password.value === passwordValidator.value
  ) {
    output.innerText = "Passwords match";
    output.classList = ["notification is-success"];
  } else {
    output.innerText = "Passwords do not match or are invalid";
    output.classList = ["notification is-danger"];
  }
});

password.addEventListener("keyup", () => {
  if (
    validatePassword(password.value) &&
    password.value === passwordValidator.value
  ) {
    output.innerText = "Passwords match";
    output.classList = ["notification is-success"];
  } else {
    output.innerText = "Passwords do not match or are invalid";
    output.classList = ["notification is-danger"];
  }
});

function validatePassword(password) {
  const reqCharacters = ["!", "#", "$", "%", "&"];
  const reqNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  let valid = false;

  for (char of reqCharacters) {
    if (password.includes(char)) {
      valid = true;
      break;
    }
  }

  for (char of reqNums) {
    if (password.includes(char)) {
      valid = true;
      break;
    }
  }

  if (password.length < 8 || password.toLowerCase() === password) {
    valid = false;
  }

  return valid;
}
