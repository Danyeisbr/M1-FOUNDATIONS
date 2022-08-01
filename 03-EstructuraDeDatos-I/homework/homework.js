'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  // n! = n*(n-1)!  hasta que lleguemos a 1
  // 1!= 1  y 0!=1

  if (n===1 || n=== 0 ) return 1;
  return n*nFactorial (n-1);
}
// OTRA FORMA DE HACERLO CON WHILE
/*let factorial = 1;
let i = 1;

while (i<=n) {
  factorial *=i;
  ++i;
}
return factorial;
*/
// // OTRA FORMA DE HACERLO 
// if (n>0)
// {return (n * nFactorial(n - 1));}
// else
// return (1);
// nFactorial(n);


function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  // nFibonacci(n)= nFibonacci(n-1) + nFibonacci(n-2);
  // nFibonacci(0)= 0
  // nFibonacci(1)= 1

  
  if (n>=0 && n<2) return n;                // if n === 0 return 0 // if n === 1 return 1;
  return nFibonacci(n-1) + nFibonacci(n-2);
}

// OTRA FORMA DE HACERLO 
  /*let a = 0;
  let b = 1;
  let c = 0;
  if(n === 1){
    return 1;
  }
  for(let i = 0; i < n - 1; i++){
    c = a + b;
    a = b;
    b = c;
  }
  return c;

                                  nFibonacci(0) => return 0;
                  nFibonacci(2) => 0 + 1 = return 1
                                nFibonacci(1) = > return 1
  nFibonacci(4) --> 2 + 1 = 3
                              nFibonacci(1) => return 1
                  nFibonacci(3) => return 1 + 1 = 2
                                          nFibonacci(0) => return 0;
                              nFibonacci(2) => 0 + 1 = return 1
                                          nFibonacci(1) = > return 1
  */
 


// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

//function Queue() {

  // clases 2 formas:   como una funcion => function Queue (){  
  //   }     
  // class Queue {      o como una clase propiamente
  //  } 

  class Queue {
    constructor () {
      this.queue = [];
      this.length = 0;
   }
  }

  Queue.prototype.enqueue = function(dato) { 
    this.length ++;
    this.queue.push(dato);
    return "Dato agregado a la queue"
  }

  Queue.prototype.dequeue = function(){
    if (this.length === 0) return undefined
    this.length --;
    let item = this.queue.shift();
    return item
  }
  
  Queue.prototype.size = function(){
    return this.length;
  }  

let nuevaQueue = new Queue();
console.log(nuevaQueue);
nuevaQueue.enqueue(34)
nuevaQueue.enqueue(32)
console.log(nuevaQueue)
console.log(nuevaQueue.dequeue())
console.log(nuevaQueue.dequeue())
nuevaQueue.enqueue(344545)
console.log(nuevaQueue.size())
console.log(nuevaQueue)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
