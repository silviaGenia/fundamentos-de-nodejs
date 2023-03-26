/*let i = 0;
let intervalo = setInterval(function () {
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);


setImmediate(function () {
  console.log("Hola");
});
*/

//request

//console.log(process)

//console.log(__ dirname)

//console.log(__filename)

//<no usar variables globales son un foco de problemas>

global.miVariable = "elValor";

console.log(miVariable);
