//os => Sistema operativo
const os = require("os");

//Arquitectura
//console.log(os.arch())

//Plataforma
//console.log(os.platform());

//Se puede acceder a la informacion de cpu
console.log(os.cpus().length);

//Errores del Sistema operativo
console.log(os.constants);

//Memoria del cpu
const SIZE = 1024;
function kb(bites) {
  return bytes / SIZE;
}

function mb(bites) {
  return bytes / SIZE;
}

function gb(bites) {
  return bytes / SIZE;
}
console.log(os.freemen);
console.log(kb(os.freemen));
console.log(mb(os.freemen));
console.log(gb(os.freemen));

console.log(gb(os.totalmem()));

//Directorio raiz
console.log(os.homedir());
console.log(os.tmpdir);

//hostname con el que trabajamos
console.log(os.hostname());
//a la red
console.log(os.networkInterfaces());

//Interfaz de bajo nivel
