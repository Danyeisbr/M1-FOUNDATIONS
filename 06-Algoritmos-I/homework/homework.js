"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
  const resultado = [1]
  let descomponer = num
  for (let i = 0; i < primos.length; i++) {
    while (descomponer % primos[i] === 0) {
      console.log(descomponer);
      resultado.push(primos[i])
      descomponer = descomponer / primos[i]  
   }
  }
  return resultado
}
console.log(factorear(32))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Restando 1 al tamaño del arreglo ahorramos espacion en memoria pues el ultimo numero no tiene con quien compararse, entonces recorremos solo hasta el penultimo
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j]
        array[j] = array[j + 1]
        array[j + 1] = aux
      }
    }
  }
  return array
}
console.log(bubbleSort([28, 25, 24, 78, 20]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let aux = array[i]
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]
      j--;
    }
    array[j + 1] = aux;
  }
  return array
}
console.log(insertionSort([28, 25, 24, 78, 20]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length - 1; j++) {
    let min = j; // guardando el menor
    for (var i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    if (j !== min) {
      const aux = array[j];
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
}
console.log(selectionSort([28, 25, 24, 78, 20]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
