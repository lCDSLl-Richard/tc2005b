const fs = require("fs");
const http = require("http");

const average = (array) => {
  return (
    array.reduce((sum, number) => {
      return sum + number;
    }) / array.length
  );
};

const stringToFile = (string) => {
  fs.writeFileSync("string.txt", string);
};

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (target === array[i] + array[j]) {
        return [i, j];
      }
    }
  }
};

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(twoSum([1, 3, 4, 51, 2, 3], 3));
stringToFile("Hello World");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "html/text");
  response.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Validator</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
    </head>
    <body>
      <nav class="navbar is-spaced">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a href="#" class="navbar-item">Password Validator</a>
            <a href="shop.html" class="navbar-item">Shop</a>
            <a href="questions.html" class="navbar-item">Questions</a>
          </div>
        </div>
      </nav>
      <main class="columns content my-3">
        <div class="column is-three-fifths is-offset-one-fifth">
          <h1>Password validator</h1>
          <p>
            Create a password that is at least 8 characters long, has a number,
            has an uppercase letter and a special character
          </p>
          <form>
            <input
              class="input is-big my-3"
              id="password"
              type="password"
              placeholder="Enter password"
            />
            <input
              class="input is-big my-3"
              id="password-validate"
              type="password"
              placeholder="Enter password again"
            />
          </form>
          <p id="password-output"></p>
  
          <script src="main.js"></script>
        </div>
      </main>
    </body>
  </html>
  `);
  response.end();
});

server.listen(3000);
