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

  let string;

  for (let i = 0; i < averages.length - 1; i++) {
    string += averages[i] + ", ";
  }

  string += averages[-1];

  document.getElementById(
    "matrix-disp"
  ).innerText = `The averages per row are: ${string}.`;
};

const numberReverser = (number) => {
  document.getElementById("reverse-output").innerText = Number(
    String(number).split("").reverse().join("")
  );
};

const calculatePoints = () => {
  let px = document.getElementById("point-a").value;
  let py = document.getElementById("point-b").value;
  px = px.split(",");
  py = py.split(",");
  const pointA = new Point(px[0], px[1]);
  const pointB = new Point(py[0], py[1]);

  document.getElementById(
    "distance-out"
  ).innerText = `La distancia es: ${pointA.getDistance(pointB)}`;
  document.getElementById(
    "slope-out"
  ).innerText = `La pendiente es: ${pointB.getSlope(pointA)}`;
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

document.getElementById("matrix-sign").addEventListener("click", (e) => {
  e.preventDefault();
  let numbers = document.getElementById("matrix-input").value;
  numbers = numbers.split(";");
  numbers = numbers.map((number) => number.split(","));
  numbers = numbers.forEach((number) => number.map((num) => Number(num)));
  console.log(numbers);
  matrixAverages(numbers);
});

document.getElementById("reverse-btn").addEventListener("click", (e) => {
  e.preventDefault();
  numberReverser(document.getElementById("reverse-input").value);
});

document.getElementById("point-distance").addEventListener("click", (e) => {
  e.preventDefault();
  calculatePoints();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
