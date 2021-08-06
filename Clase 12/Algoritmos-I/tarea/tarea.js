// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let number = num;
  let array = []
  let factor = 1;
  let div;
  while (div != 1) {
    div = number / factor;
    if (Number.isInteger(div)) {
      array.push(factor);
      number = div;
      factor = 2;
    } else {
      factor++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let length = array.length - 1;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    /* select value to be inserted */
    let selected = array[i];
    let umbral = i - 1;

    /*locate hole position for the element to be inserted */
    while (umbral >= 0 && array[umbral] > selected) {
      array[umbral + 1] = array[umbral];
      umbral--;
    }
    /* insert the number at hole position */
    array[umbral + 1] = selected;
  }
  return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    [array[min], array[i]] = [array[i], array[min]];
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
