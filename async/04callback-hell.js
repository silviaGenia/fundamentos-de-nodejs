function hola(nombre, micallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    micallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla ..");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

//<= =>

function conversacion(nombre, veces, callback) {
  //Utilizar la recursividad cuando se tiene un Callback Hell
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso");
hola("Silvia", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso Terminado");
  });
});

//hola("Silvia", adios)
/*hola("Silvia", function (nombre) {
  adios(nombre, function () {
    console.log("Terminamos");
  });
});
*/

// Esto se llama callback Hell
/*hola("Silvia", function (nombre) {
  hablar(function () {
    hablar(function () {
      adios(nombre, function () {
        console.log("Terminando proceso....");
      });
    });
  });
});
*/
