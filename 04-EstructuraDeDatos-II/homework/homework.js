'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this._length = 0;

}

function Node(value) {
  this.value = value;
  this.next = null;
}

let list = new LinkedList();
LinkedList.prototype.add = function (data) {
  let node = new Node(data);
  let current = this.head;
  if (this.head === null) { // pregunta si tiene el head vacio?
    this.head = node;       // agrega un nodo
    this._length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};
let head = new LinkedList();
head.add("FirstElem");
console.log(head);
head.add("SecondElem");
console.log(head);
//console.log(head.search("SecondElem"))

LinkedList.prototype.remove = function () {
  let current = this.head;
  if (this._length === 0) return null;
  if (this._length === 1) {

    let aux = current.value;
    this.head = null;
    this._length--;
    return aux;
  }
  while (current.next.next) {// de a 2 nodos hasta ver que sea nulo. El anteultimo. Si tiene el siguiente del siguiente
    current = current.next;
  }
  let aux = current.next.value;
  current.next = null;
  this._length--;
  return aux;
};// seguir en code review parte II


LinkedList.prototype.search = function (value) {
  let current = this.head;
  if (typeof value === "function") {
    while (current !== null) {

      if (value(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  } else {
    while (current) {
      if (current.value === value) return current.value

      current = current.next;
    }
  }
  return null;
}

/* 
function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.data = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
  let nuevoNodo = new Node(data);
  let current = this.head;
  if (current == null) {
    this.head = nuevoNodo;
    this._length++;
    return nuevoNodo;
  }
  //Si no esta vacía recorro hasta encontrar el ultimo
  while (current.next) {
    current = current.next;
  }
  current.next = nuevoNodo;
  this._length++;
  return nuevoNodo;
}

LinkedList.prototype.remove = function () {
  let removedElem;
  let current = this.head;
  //¿Esta vacía?
  if (current == null) return "Es una lista vacia";

  //Caso en el que la lista tiene un unico elemento
  if (current.next === null) { //es igual que decir if(!current.next)
    removedElem = current.data;
    this.head = null;
    return removedElem;
  }
  //Caso en que la lista tiene mas de un elemento
  // Antes de que el ciclo llegue al ultimo valor de next que sea nulo
  while (current.next.next != null) { // es igual a decir while(current.next.next)
    //me posiciono en el penultimo elemento que si tiene un valor definido en next
    current = current.next;
  }
  //Guardo en una variable el valor de ese dato del Nodo eliminado para poder devolverlo
  removedElem = current.next.data
  //Y digo que ese valor de next en ese penultimo nodo sea nulo
  current.next = null;
  //Y le resto ese ultimo elemento al tamaño de la lista para actualizar el valor de length
  this._length--;
  //Y devuelvo el valor eliminado
  return removedElem;
}


LinkedList.prototype.search = function (arg) {
  //if (this._length == 0) return console.log('Es una lista vacia');
  let current = this.head;
  while (current) { //Si en head hay algo entonces...
    //Evaluamos si arg es un valor o una funcion 
    if (typeof arg === "function") {
      //ejecuto arg pasandole como argumento el valor actual 
      if (arg(current.data)) {
        return current.data;
      }
    } else if (current.data === arg) {
      return arg;
    }
    // Me voy moviendo a traves de los nodos para evaluar todos los valores diferentes a null.
    current = current.next;
  }
}

let head = new LinkedList();
head.add("FirstElem");
console.log(head);
head.add("SecondElem");
console.log(head);
console.log(head.search("SecondElem"))
*/
_______________________________________________________________________________
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.data = new Array(this.numBuckets);
}

HashTable.prototype.hash = function (str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }
  return result % this.numBuckets;
}

HashTable.prototype.get = function (key) {
  const numBucket = this.hash(key);
  if (!this.data[numBucket]) return null;
  return this.data[numBucket][key];
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw new TypeError("Keys must be strings");
  const numBucket = this.hash(key);
  if (!this.data[numBucket]) {
    this.data[numBucket] = {};
  }
  this.data[numBucket][key] = value;
};

HashTable.prototype.hasKey = function (key) {
  // const numBucket = this.hash(key);
  // if (!this.data[numBucket]) return false;
  // return this.data[numBucket].hasOwnProperty(key);
  // return this.data[this.hash(key)]?.hasOwnProperty(key) ? true : false;
  return this.data[this.hash(key)]?.hasOwnProperty(key) || false;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
