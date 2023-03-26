async function hola(nombre, micallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla ..");
      //resolve(nombre);
      resolve("Hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("silvia");
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}

console.log("Empezamos el proceso");
main();
console.log("Va a ser la segunda instruccion");
