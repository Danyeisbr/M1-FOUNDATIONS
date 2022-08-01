'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // agarramos un elemento del array como pivote
  // [5,1,4,2,8]
  if (array.length <= 1) return array
  const pivot = array[0]
  const left = []
  const right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
    
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))
 }

//console.log(quickSort([5,1,4,2,8]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // tengo que saber el indice del medio
  //  [5,1,4,2,8]
  if (array.length === 1) return array
    const middle = Math.floor(array.length/2)
    console.log(middle);
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let leftIndex = 0
  let rightIndex = 0
  const ordered = []
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      ordered.push(left[leftIndex])
      leftIndex++
    } else {
      ordered.push(right[rightIndex])
      rightIndex++
    }
  }
  return ordered.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
console.log(mergeSort([5,1,4,2,8]))

/*

 left = mergeSort(left);
 right= mergeSort(right);

 const result = [];

 while (left.length && right.length) {
   if(left[0] < right[0]){
   result.push(left.shift())
   }else{
     result.push(right.shift())
   }
  }
  if(left.length){
    return result.concat(left)
    }else{
    return result.concat(right)
  }
   */


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};