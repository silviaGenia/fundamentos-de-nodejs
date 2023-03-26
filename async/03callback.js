function hola(nombre, micallback) {
  //console.log("Hola, soy una funcion asincrona");
  setTimeout(function () {
    console.log("Hola, " + nombre);
    micallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso");

hola("Silvia", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso....");
  });
});

// el mismo codigo pero llamando a una variable
/*hola("Silvia", function () {
  adios("Silvia", function () {
    console.log("Terminando proceso....");
  });
});
*/

//Escribimos funciones vacias
//hola("Silvia", function () {});
//adios("Silvia", function () {});
