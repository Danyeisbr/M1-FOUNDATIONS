'use strict'
// resolver estos ejercicios usando recursión

// Binary Search Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.right = null
  this.left = null
}
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    //Si el valor es menor al valor del nodo actual lo agregamos a la izquierda
    if (this.left !== null) {
      //Si la posicion ya esta ocupada entonces usamos recursividad para seguir evaluando donde hay un espacio a la izquierda
      this.left.insert(value)
    } //Si no esta ocupada entonces colocamos un nuevo nodo con el valor pasado por argumento
    else 
      {
        this.left = new BinarySearchTree(value)
      }
  }
  //Si el valor es mayor al valor del nodo actual lo agregamos a la derecha
  else if (value > this.value) {
    if (this.right !== null) {
      //Si la posicion ya esta ocupada entonces usamos recursividad para seguir evaluando donde hay un espacio a la derecha
      this.right.insert(value)
    } //Si no esta ocupada entonces colocamos un nuevo nodo con el valor pasado por argumento
    else 
      {
        this.right = new BinarySearchTree(value)
      }
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true
  //Si el valor es menor que el valor del nodo actual entonces buscamos en la izquierda
  if (value < this.value) {
    if (this.left === null) {
      //Si en el primer nodo de la izquierda no encuentra nada entonces el valor buscado no está
      return false
  } // pero si el valor de la izquierda no es igual al buscado usamos recursividad para seguir buscando 
    else
      {
        return this.left.contains(value)
    }
  } 
  //Si el valor es mayor que el valor del nodo actual entonces buscamos en la derecha
  if (value > this.value) {
    if (this.right === null) {
      //Si en el primer nodo de la derecha no encuentra nada entonces el valor buscado no está
      return false
  } // pero si el valor de la derecha no es igual al buscado usamos recursividad para seguir buscando 
    else
      {
        return this.right.contains(value)
    }
  }
}
BinarySearchTree.prototype.size = function () {
  //Si solo hay un elemento padre entonces devolvemos uno
  if (this.left === null && this.right === null) return 1
  //Chequeamos cuantos elementos hay a la izquierda
  if (this.left !== null && this.right === null) {
    //Usamos recursividad para chequear nuevamente si en ese nodo de la izquierda hay mas hijos 
    return 1 + this.left.size()
  } 
  else if (this.right !== null && this.left === null) {
    //Usamos recursividad para chequear nuevamente si en ese nodo actual hay mas hijos a la derecha  
    return 1 + this.right.size()
  }
  //Si hay elementos tanto a la izquierda como a la derecha debemos contar ese nodo tambien 
  if (this.left !== null && this.right !== null) {
    //Devuelvo 1 (el padre), más lo que haya en la izquierda más lo que haya en la derecha
    return 1 + this.left.size() + this.right.size()
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //Caso pre-order: top - bottom, left to right
  if (order === "pre-order"){
    cb(this.value)
    if(this.left !== null) this.left.depthFirstForEach(cb, order)
    if(this.right !== null) this.right.depthFirstForEach(cb, order)
  }
  //Caso post-order: bottom - top, left to right
  else if (order === "post-order"){
    if (this.left !== null) this.left.depthFirstForEach(cb, order)
    if (this.right !== null) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  } 
  else//Caso in-oder: bottom to top, left - node - right if (order === "in-order")
   {
    //No tengo que retornar el valor de la recursividad sino ir agregandolo como argumento de la callback
    if (this.left !== null) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right !== null) this.right.depthFirstForEach(cb, order)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  //top - bottom, left to right
  if(!array) {
    var array = []
  }
  cb(this.value)
  if (this.left !== null) array.push(this.left)
  if (this.right !== null) array.push(this.right)
  if (array.length > 0) array.shift().breadthFirstForEach(cb, array)
}

// const testArr = [];
// const tree = new BinarySearchTree(20);
// console.log(tree);
// tree.insert(12)
// tree.insert(33)
// tree.insert(4)
// tree.insert(5)
// tree.insert(13)
// tree.insert(23)
// console.log(tree.contains(4))
// console.log(tree.size())
// console.log(tree)
// tree.breadthFirstForEach(function(val){ 
//   console.log(testArr.push(val))
// })
// console.log(testArr)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
