let startTime, n1, n2;

const tableWithSqrsAndCubes = () => {
  const number = document.getElementById("table-number").value;
  const table = document.getElementById("number-table");

  let htmlString = "";

  for (let i = 1; i <= number; i++) {
    htmlString += `<tr><td>${i}</td><td>${i * i}</td><td>${
      i * i * i
    }</td></tr>`;
  }

  table.innerHTML = htmlString;
};

const randomNumberSumStart = () => {
  n1 = getRandomInt(1, 20);
  n2 = getRandomInt(1, 20);

  document.getElementById("nums-disp").innerText = `${n1} + ${n2} = ?`;
  startTime = Date.now();
};

const randomNumberSumCheck = () => {
  const res = document.getElementById("rand-input").value;
  const res_disp = document.getElementById("res-disp");
  const time = (Date.now() - startTime) / 1000;
  if (n1 + n2 == res) {
    res_disp.innerText = `Respuesta correcta. Tiempo: ${time}s`;
  } else {
    res_disp.innerText = `Respuesta incorrecta. Tiempo: ${time}s`;
  }
};

const signCounter = (numbers) => {
  res = [0, 0, 0];

  numbers.forEach((number) => {
    if (number < 0) {
      res[0]++;
    } else if (number > 0) {
      res[2]++;
    } else {
      res[1]++;
    }
  });

  document.getElementById(
    "sign-disp"
  ).innerText = `Negativos: ${res[0]} Ceros: ${res[1]} Positivos: ${res[2]}`;
};

const matrixAverages = (matrix) => {
  const averages = [];

  matrix.forEach((row) => {
    averages.push(row.reduce((number, sum) => number + sum) / row.length);
  });

  return averages;
};

const numberReverser = (number) => {
  document.getElementById("reverse-output").innerText = Number(
    String(number).split("").reverse().join("")
  );
};

document.getElementById("btn-table").addEventListener("click", (e) => {
  e.preventDefault();
  tableWithSqrsAndCubes();
});

document.getElementById("generate-rand").addEventListener("click", (e) => {
  e.preventDefault();
  randomNumberSumStart();
});

document.getElementById("check-rand").addEventListener("click", (e) => {
  e.preventDefault();
  randomNumberSumCheck();
});

document.getElementById("count-sign").addEventListener("click", (e) => {
  e.preventDefault();
  let numbers = document.getElementById("sign-input").value;
  numbers = numbers.split(",");
  numbers = numbers.map((number) => Number(number));
  signCounter(numbers);
});

document.getElementById("reverse-btn").addEventListener("click", (e) => {
  e.preventDefault();
  numberReverser(document.getElementById("reverse-input").value);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
