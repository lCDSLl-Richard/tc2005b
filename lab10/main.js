const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const path = request.url;

  switch (path) {
    case "/home":
      response.setHeader("Content-Type", "text/html");
      response.write('<meta charset="UTF-8" />');
      response.write(`<a href='lab1'>lab1</a> <br>`);
      response.write(`<a href='lab4'>lab4</a> <br>`);
      response.write(`<a href='lab6'>lab6</a> <br>`);
      response.write(`<a href='file'>Post Form</a> <br>`);
      break;

    case "/lab1":
      response.setHeader("Content-Type", "text/html");
      response.write(lab1);
      break;

    case "/lab4":
      response.setHeader("Content-Type", "text/html");
      response.write(lab4);
      break;

    case "/lab6":
      response.setHeader("Content-Type", "text/html");
      response.write(lab6);
      break;

    case "/file":
      if (request.method === "GET") {
        response.setHeader("Content-Type", "text/html");
        response.write(postForm);
      } else {
        response.setHeader("Content-Type", "text/html");
        response.write(`<h1>Información enviada</h1>`);
        response.write('<meta charset="UTF-8" />');

        const fullData = [];

        request.on("data", (data) => fullData.push(data));

        request.on("end", () => {
          const parsedData = Buffer.concat(fullData).toString();
          const text = parsedData.split("=")[1];
          fs.writeFileSync("lab10/info.txt", text);
          return response.end();
        });
      }
      break;

    default:
      response.writeHead(404);
      response.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
      break;
  }

  response.end();
});

server.listen(3000);

const lab1 = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.min.css" />
    <title>Presentación</title>
  </head>
  <body>
    <header class="header">
      <h1 class="header--title">Ricardo Fernández</h1>
    </header>

    <main>
      <section class="container">
        <h2 class="container--header">
          ¡Hola! Soy Ricardo Fernández, estudiante de ITC en el Tec de
          Monterrey.
        </h2>
        <p class="container--text">
          Desde pequeño conocí los videojuegos, lo que más tarde en la
          secundaria, me llevó a querer crearlos. Esto, a su vez, llevo a,
          eventualmente, querer programarlos, y así fue como descubrí esto que
          me gustó mucho.
        </p>

        <p class="container--text">
          He trabajado en un par de proyectos web freelance, uno como becario y
          otro por parte del servicio social, además de que cuento con
          experiencia en el campo laboral, pues trabajé como tester de software
          en General Electric Aerospace 6 meses.
        </p>

        <p class="container--text">
          A parte de los ya mencionados videojuegos, me gusta mucho la música.
          Actualmente toco la guitarra y las cuerdas en general.
        </p>
      </section>
      <section class="container__second">
        <h2 class="container--header">Preguntas</h2>
        <ol start="1">
          <li class="list-item">
            ¿Cuál es la diferencia entre Internet y la World Wide Web?
            <p class="list-item--answer">
              El internet es el conjunto de computadoras conectadas en todo el
              mundo, mientras que la WWW es la colección de páginas de internet
            </p>
          </li>
          <li class="list-item">
            ¿Cuáles son las partes de un URL?
            <p class="list-item--answer">
              El URL tiene protocolo, servicio, dominio, tipo/país, ruta y
              parámetros.
            </p>
          </li>
          <li class="list-item">
            ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT,
            PATCH, DELETE?

            <ul class="list--sublist">
              <li class="list-item">
                GET: Solicita algún recurso al servidor. Únicamente trae
                información.
              </li>
              <li class="list-item">
                HEAD: Pide únicmaente el encabezado de la respuesta.
              </li>
              <li class="list-item">
                POST: Envía algún tipo de recurso al servidor.
              </li>
              <li class="list-item">
                PUT: Reemplaza algún recurso en el servidor
              </li>
              <li class="list-item">
                PATCH: Realiza modificaciones parciales a algún recurso en el
                servidor.
              </li>
              <li class="list-item">
                DELETE: Elimina algún recurso del servidor.
              </li>
            </ul>
          </li>
          <li class="list-item">
            ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por
            ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por
            qué?
            <p class="list-item--answer">
              POST. Para poder mandar la información al servidor y que éste
              compare la información para realizar la autenticación.
            </p>
          </li>
          <li class="list-item">
            ¿Qué método HTTP se utiliza cuando a través de un navegador web se
            accede a una página a través de un URL?
            <p class="list-item--answer">
              GET. Esto dado que se hace la solicitud al servidor para traer la
              información de la página.
            </p>
          </li>
          <li class="list-item">
            Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué
            significa esto? ¿Ocurrió algún error?
            <p class="list-item--answer">
              Significa que todo salió bien y no hay ningún error.
            </p>
          </li>
          <li class="list-item">
            ¿Es responsabilidad del desarrollador corregir un sitio web si un
            usuario reporta que intentó acceder al sitio y se encontró con un
            error 404? ¿Por qué?
            <p class="list-item--answer">
              No. Lo más probable es que el usuario esté intentando acceder a
              algún recurso prohibido o que no existe.
            </p>
          </li>
          <li class="list-item">
            ¿Es responsabilidad del desarrollador corregir un sitio web si un
            usuario reporta que intentó acceder al sitio y se encontró con un
            error 500? ¿Por qué?
            <p class="list-item--answer">
              Sí. Algún error en el servidor o en el código del sitio web a la
              hora de desplegarse pudo haber causado el error.
            </p>
          </li>
          <li class="list-item">
            ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado
            (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5
            estén desaprobados.
            <p class="list-item--answer">
              Quiere decir que ya no son soportados por HTML5 y que son más
              fáciles de controlar a través de estilos. Algunos ejemplos son:
              acronym, applet, basefont, big, center, dir, font, frame,
              frameset, isindex, noframes, strike, tt, u.
            </p>
          </li>
          <li class="list-item">
            ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
            <p class="list-item--answer">
              Principalmente la adición de nuevas tags y atributos, así como la
              más fácil declaración de tipo de documento y el uso de mejor
              almacenamiento local.
            </p>
          </li>
          <li class="list-item">
            ¿Qué componentes de estructura y estilo tiene una tabla?
            <p class="list-item--answer">
              Table (table), Table Row (tr), Table Data (td), Table Header (th).
              En HTML5, tenemos también Table Caption (caption), Table Header
              Group (thead), Table Footer Group (tfoot), Table Body (tbody).
            </p>
          </li>
          <li class="list-item">
            ¿Cuáles son los principales controles de una forma HTML5?
            <p class="list-item--answer">
              Input, Button, Textarea, Select, Option.
            </p>
          </li>
          <li class="list-item">
            Mi navegador cuenta con 468/555 puntos (Safari)
          </li>
          <li class="list-item">
            El Ciclo de Vida de Desarrollo de Software, hace referencia al
            proceso de planificar, crear, probar, desplegar y mantener Software.
          </li>
          <li class="list-item">
            Como ingeniero de software ¿cuál es tu recomendación sobre el uso de
            !important en un CSS?
            <p class="list-item--answer">
              Usarlo únicamente cuando sea realmente necesario y no contar con
              la declaración, dado que hacerlo podría causar problemas de
              legibilidad.
            </p>
          </li>
          <li class="list-item">
            Si se pone una imagen de fondo en una página HTML, ¿por qué debe
            escogerse con cuidado?
            <p class="list-item--answer">
              Porque puede afectar la legibilidad del resto de elementos, además
              de que puede hacer que la página tarde más en cargar.
            </p>
          </li>
          <li class="list-item">
            Como ingeniero de software, ¿cuál es tu recomendación al elegir las
            unidades de un propiedad de estilo entre %, px y pt?
            <p class="list-item--answer">
              La responsividad de la página y la precisión de las medidas de los
              elementos.
            </p>
          </li>
          <li class="list-item">
            ¿Por qué el uso de una versión minimizada del CSS mejora el
            rendimiento del sitio?
            <p class="list-item--answer">
              Porque reduce la cantidad de bytes que se deben de mandar por el
              internet, aumentando la velocidad de respuesta.
            </p>
          </li>
        </ol>
      </section>
    </main>

    <footer class="footer">
      <p>
        Hecho con
        <a href="https://code.visualstudio.com" target="_blank"
          >Visual Studio Code</a
        >
      </p>
    </footer>
  </body>
</html>
`;

const lab4 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div>
      <form>
        <input type="number" id="table-number" />
        <button class="button" id="btn-table">Crear tabla</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Cuadrado</th>
            <th>Cubo</th>
          </tr>
        </thead>
        <tbody id="number-table"></tbody>
      </table>
    </div>

    <div class="callout">
      <p id="nums-disp"></p>
      <form>
        <button class="button" id="generate-rand">Generar números</button>
        <input type="number" id="rand-input" />
        <button class="button" id="check-rand">Enviar respuesta</button>
      </form>
      <p id="res-disp"></p>
    </div>

    <div>
      <form>
        <label>Escribe los numeros separados por comas</label>
        <input type="text" id="sign-input" />
        <button class="button" id="count-sign">Contar signos</button>
      </form>
      <p id="sign-disp"></p>
    </div>

    <div>
      <form>
        <label>Escribe la matriz, separadas por ; y por ,</label>
        <input type="text" id="matrix-input" />
        <button class="button" id="matrix-sign">Promediar matriz</button>
      </form>
      <p id="matrix-disp"></p>
    </div>

    <div>
      <form>
        <label>Escribe el numero a voltear</label>
        <input type="number" id="reverse-input" />
        <button class="button" id="reverse-btn">Voltear</button>
      </form>
      <p id="reverse-output"></p>
    </div>

    <div>
      <form>
        <label>Ingrese las coordenadas del punto A separadas por coma</label>
        <input type="text" id="point-a" />
        <label>Ingrese las coordenadas del punto B separadas por coma</label>
        <input type="text" id="point-b" />
        <button class="button" id="point-distance">Calcular Distancia</button>
      </form>
      <p id="distance-out"></p>
      <p id="slope-out"></p>
    </div>

    <section>
      <ol>
        <li>
          ¿Qué diferencias y semejanzas hay entre Java y JavaScript?
          <p>
            Java es un lenguaje que corre en un ambiente de desarrollo locar,
            mientras que JS es un lenguaje interpretado que corre en todos los
            navegadores Web. Java es compilado e interpretado a la vez. Por otro
            lado, ambos son lenguajes de programación fuertemente orientado a
            objetos.
          </p>
        </li>
        <li>
          ¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)
          <ul>
            <li>Now: Devuelve la fecha actual</li>
            <li>Parse: Genera una fecha a partir de una string</li>
            <li>UTC: Da el tiempo en UTC</li>
            <li>getDay: Regresa el día de la fecha</li>
            <li>getFullYear: Retorna los 4 dígitos del año</li>
          </ul>
        </li>
        <li>
          ¿Qué métodos tienen los arreglos? (Menciona al menos 5*)
          <ul>
            <li>forEach(): Recorre los elementos del arreglo</li>
            <li>reduce(): Retorna un solo elemento calculado del arreglo</li>
            <li>
              filter(): Retorna los valores que cumplen cierta función booleana
            </li>
            <li>indexOf(): Retorna el índice del valor en el arreglo</li>
            <li>
              map(): Aplica la función a dada a todos los elementos del arreglo
            </li>
          </ul>
        </li>
        <li>
          ¿Cómo se declara una variable con alcance local dentro de una función?
          <p>Usando let</p>
        </li>
        <li>
          ¿Qué implicaciones tiene utilizar variables globales dentro de
          funciones?
          <p>
            Que su valor puede ser modificado por otras funciones y las
            iteraciones "recordarán" pasos anteriores
          </p>
        </li>
        <li>
          Describe Material design
          <p>
            Material Desing es un sistema construido por Google para diseñar y
            mantener el código en el Front-end
          </p>
        </li>
      </ol>
    </section>

    <script src="main.js"></script>
    <script src="Point.js"></script>
  </body>
</html>
`;

const lab6 = `<!DOCTYPE html>
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
`;

const postForm = `<!DOCTYPE html>
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
    <div class='content'>
      <form action='/file' method='POST'>
        <label>Ingrese el texto a guardar</label>
        <textarea name='text'></textarea>
        <button>Mandar</button>
      </form>
    </div>
  </body>
</html>
`;
