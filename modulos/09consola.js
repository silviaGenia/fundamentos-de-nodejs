//console.info("Algo");

var tabla = [
  {
    a: 1,
    b: 2,
  },
  {
    a: 2,
    b: "otra",
  },
];
//console.table(tabla);
// Console.log(Grup) AGRUPA entre lineas

/* console.group("Conversacion");
console.log("Hola");
console.log("Adios");
console.groupEnd("Conversacion");

console.log("Otra cosas de otra funcion"); */

function function1() {
  console.group("function 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambien");
  console.log("Esto tambien");
  funcion2();
  console.log("Emos vuelto a la uno");
  console.groupEnd("function 1");
}

function funcion2() {
  //
  console.group("function 1");
  console.log("ahora estamos en la funcion 2");
  console.groupEnd("function 1");
}

console.log("Empezamos");
function1();

//contadores
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
