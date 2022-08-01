'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   // "1 1 1" === 7
   //  2   0
   //  i
   //  0
   var decimal = 0;
   for (var i = 0; i < num.length; i++) {
    decimal = decimal + Math.pow ( 2, num.length - i - 1) * num [i];
  }
  return decimal;
}
        // otra forma de resolverlo
  /*
  var BASE = 2;                                               // paso de binario mi base es 2
  var ultimoIndice = num.length -1;
  var posicion = 0;
  var acumulador = 0;

  for (let i = ultimoIndice; i>= 0; i--) {
    var valor = num [i];
    acumulador = acumulador + Math.pow (BASE, posicion) * valor
    posicion = posicion + 1
  }
  return acumulador;
  */


  // otra forma de resolverlo
  /* var binario = num.split("");
  binario = binario.reverse();

  var decimal = 0;
  for (var i = 0; i < binario.length; i++) {
    var factor = 2 ** i;                           // Math.pow (2, i)
    decimal = decimal + factor * binario[i];
    }
    return decimal;
 } 
 */
  // otra forma de resolverlo
  /*
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);  // ** potencia
  }
  return sum;
  */


function DecimalABinario(num) {
  // tu codigo aca
  if (num <= 0) return "0";
  var array = [];
 
  while (num > 0) {
  array.unshift(num % 2);
  num = Math.floor (num / 2);
  }
 return array.join("");
 }

 console.log(DecimalABinario(45))

 // otra forma de resolverlo
  
 
   //   var acc = "" // es un string
   //   while (num >0 ) {
  //    var resto = num % 2;
  //    num = ( num - resto )/ 2;
  //   acc = resto + acc;
  //   return acc;
 

 // otra forma de resolverlo

  // var resultado = num.toString(2)
  // return resultado


 // otra forma de resolverlo

  //    var binario = "";
  //    while (num > 0 ) {
  //    binario = (num % 2 ) + binario;
  //    num = Math.floor(num / 2);
 //     }
//      return binario;




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}