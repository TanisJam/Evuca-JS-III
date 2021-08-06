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

  this.add = function (data) {
    let node = new Node(data);
    let current = this.head;
    if (!current) {
      this.head = node;
      this._length++;
      return node;
    }
    while (current.next) {
      current = current.next
    }
    current.next = node;
    this._length++;
    return node;
  }

  this.remove = function () {
    let data;
    if (this._length === 0) return null;
    if (this._length === 1) {
      data = this.head.value;
      this.head = null
      this._length--;
      return data;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    data = current.next.value;
    current.next = null;
    this._length--;
    return data;
  }

  this.search = function (value) {
    let current = this.head;

    if (typeof value === 'function') {
      if (value(current.value)) return current.value;
      while (current.next) {
        current = current.next;
        if (value(current.value)) return current.value;
      }
      return null;
    } else {
      if (current.value == value) return current.value;
      while (current.next) {
        current = current.next;
        if (current.value == value) return current.value;
      }
      return null;
    }
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {
  this.numBuckets = 35;
  let table = {}

  this.set = function (key, val) {
    let item = { key, val }
    let hashKey = this.hash(key);
    let exist = table[hashKey];
    if (exist) {
      let found = exist.find(e => e.key === key);
      if (found && found.key === key) {
        let index = exist.findIndex(e => e.key === key);
        exist[index] = item;
      }
      table[hashKey] = [...table[hashKey], item];
    } else {
      table[this.hash(key)] = [item];
    }

  }
  this.get = function (key) {
    let hashKey = this.hash(key);
    let exist = table[hashKey];
    if (exist) {
      let found = table[hashKey].find(e => e.key === key);
      return found.val;
    } else {

    }

  }
  this.hasKey = function (key) {
    let hashKey = this.hash(key);
    let exist = table[hashKey];
    if (exist) {
      let found = table[hashKey].find(e => e.key === key);
      return !!found;
    } else {
      return false;
    }

  }

  this.hash = function (value) {
    let num = value.split('')
      .map(s => s.charCodeAt(0))
      .reduce((acc, curr) => acc + curr, 0);
    let key = num % this.numBuckets;
    return key;
  }

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
