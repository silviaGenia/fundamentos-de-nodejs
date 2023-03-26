/* Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.
En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.
Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor. */

const http = require("http");
http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva Peticion!");
  console.log(req.url);
  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }
  /*   res.writeHead(201, { "Content-Type": "text/plain" });
  //Escribir respuesta al usuario
  res.write("Hola, ya se usar HTTP de NodeJS");
  res.end(); */
}

console.log("Escuchando http en el puerto 3000");

/* http
  .createServer(function (req, res) {
    console.log("Nueva Peticion!");
    console.log(req.url);
    //Trabajar con cabezeras
    res.writeHead(201, { "Content-Type": "text/plain" });
    //responder la peticion
    //Escribir respuesta al usuario
    res.write("Hola, ya se usar HTTP de NodeJS");
    res.end();
  })
  .listen(3000); */

// console.log("Escuchando http en el puerto 3000");
