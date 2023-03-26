/* Process
El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado. */

/* process.on('uncaughtException', (error, origen) => console.log(error, origen)); */

/* exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal. */
/* process.on('exit', () => console.log('Adios')); */

// como poder acceder a nuestro proceso y escuchar los eventos

//const p = require("process");
//no es necessario traerlo por que viene en los globales

//Detectar cuando salga
process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});
// Se desconectatotalmente del evenLoop
process.on("exit", () => {
  console.log("el proceso acabo");
  setTimeout(() => {
    console.log("ESto no se va a ver nunca");
  }, 0);
});

//Escuchar cuando algo se rompe y no hay un cath
//Evitarlo
process.on("uncaughException", (err, origen) => {
  console.err("Vaya se nos ha olvidado capturar un error");
  //console.error(err);
  setTimeout(() => {
    console.log("ESto no se va a ver nunca");
  }, 0);
});

funcionquenoexiste();
console.log("ESto si el error no se recoje, nosale");

// Una promesa se rompe y no hay un cath
//process.on("uncaughtRejecti");
