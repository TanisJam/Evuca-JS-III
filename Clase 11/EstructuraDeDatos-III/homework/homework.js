// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "tarea" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  let node = new BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value && this.left !== null) return this.left.contains(value);
  if (value > this.value && this.right !== null) return this.right.contains(value);
  return false;
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, opt) {

  switch (opt) {
    case 'post-order':
      if (this.left) this.left.depthFirstForEach(cb, opt);
      if (this.right) this.right.depthFirstForEach(cb, opt);
      cb(this.value);
      break;

    case 'pre-order':
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, opt);
      if (this.right) this.right.depthFirstForEach(cb, opt);
      break;

    default:
      if (this.left) this.left.depthFirstForEach(cb, opt);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, opt);
      break;
  }

}
BinarySearchTree.prototype.deep = function () {
  let left = this.left ? this.left.deep() : 0;
  let right = this.right ? this.right.deep() : 0;
  let deep = 1 + (left > right ? left : right);
  return deep;
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
  let current = this;
  let queue = [current];
  while (queue.length > 0) {
    current = queue.shift();
    cb(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}
BinarySearchTree.prototype.size = function () {
  let size = 1;
  if (this.right !== null) size += this.right.size();
  if (this.left !== null) size += this.left.size();
  return size;
}

BinarySearchTree.prototype.draw = function () {
  let createItem = n => `#-#-#\n #-${n}-#\n #-#-#`;
  let deep = 0;

  function generate(node){
    let item = createItem(node.value);
    console.log(('-'.repeat(deep) + node.value));
    deep++;
    if (node.left){
      generate(node.left);
      deep--; 
    } 
    if (node.right){
      generate(node.right);      
      deep--;
    }
  }
  generate(this);

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
