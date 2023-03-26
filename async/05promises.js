function hola(nombre, micallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla ..");
      //resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}
/*
function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla ..");
    callbackHablar();
  }, 1000);
}*/

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

//<= =>
// las promesas se anidan

console.log("Iniciando el proceso..");
hola("Silvia")
  /*.then((nombre) => {
    return adios(nombre);
  })
  */
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.error("Ha habido un error");
    console.error(error);
  });
