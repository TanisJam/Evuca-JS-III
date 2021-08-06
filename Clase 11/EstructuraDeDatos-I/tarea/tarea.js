// resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  // function factorial(n){
  //   if(n <= 1) return n;
  //   return n * factorial(n-1);
  // }
  // let numero = factorial(n);
  // return numero;

  return n < 2 ? n : n * nFactorial(n - 1);
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  // function calcularN(n, actual = 1, anterior = 0, index = 2) {
  //   if (n === 0) return 0;
  //   if (n === 1) return 1;
  //   let auxiliar = actual;
  //   actual = actual + anterior;
  //   anterior = auxiliar;
  //   if (n === index) {
  //     return actual;
  //   } else {
  //     index++
  //     return calcularN(n, actual, anterior, index);
  //   }
  // }
  // let fibo = calcularN(n);
  // return fibo;

  if (n < 0) return 0;

  let fibo = {
    0: 0,
    1: 1
  }

  function calcularN(n) {
    let index = Object.getOwnPropertyNames(fibo).length - 1;
    fibo[index + 1] = fibo[index] + fibo[index - 1];
    return fibo.hasOwnProperty(n) ? fibo[n] : calcularN(n);
  }

  return calcularN(n);

}

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

function Queue() {

  let queue = [];
  this.size = function(){
    return queue.length;
  };

  this.enqueue = function (data) {
    queue.push(data);
  }
  this.dequeue = function () {
    return queue.shift();
  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
