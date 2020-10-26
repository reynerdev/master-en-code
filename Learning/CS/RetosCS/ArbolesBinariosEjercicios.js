// Arboles binarios.

// 1.Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
// 2.Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
// 3.Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
// 4.Escribe una función que devuelva el número de hojas de un árbol binario.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new Node(val);
  }

  //Learning Breadth First
  static LevelOrderTraversal(a) {
    if (a === null) {
      return;
    }
    let queque = [];
    queque.push(a.root);

    while (queque.length !== 0) {
      let current = queque[0];
      console.log(current.data);
      if (current.left !== null) {
        queque.push(current.left);
      }
      if (current.right !== null) {
        queque.push(current.right);
      }
      queque.shift(); //quitamos el elemento de adelante
    }
  }

  /////////////////////// PREGUNTA N1 ////////////////
  compareBinaryTree(a, b) {
    if (!a && !b) {
      return true;
    } else if (!a || !b) {
      return false;
    } else {
      return (
        a.data === b.data &&
        this.compareBinaryTree(a.left, b.left) &&
        this.compareBinaryTree(a.right, b.right)
      );
    }
  }

  /////////////////////// PREGUNTA N2 ////////////////
  static copyBinaryTree(a) {
    if (a === null) {
      return null;
    }
    console.log(a, 'compare');
    let newNode = new Node(a.data);
    newNode.left = this.copyBinaryTree(a.left);
    newNode.right = this.copyBinaryTree(a.right);
    return newNode;
  }

  /////////////////////// PREGUNTA N3 ////////////////
  //3.Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.

  // funcion de ayuda para acceder a la funcion recursiva
  static nodeByLevel(a, n) {
    let listaNodos = [];
    this.nodeLevel(a, n, 0, listaNodos);
    return listaNodos;
  }

  static nodeLevel(a, n, k, listaNodos) {
    if (a.left === null || a.right === null) {
      listaNodos.push(a.data);
      return;
    } else if (n === k) {
      listaNodos.push(a.data);
      return;
    } else {
      this.nodeLevel(a.left, n, k + 1, listaNodos);
      this.nodeLevel(a.right, n, k + 1, listaNodos);
    }
  }

  /////////////////////// PREGUNTA N4 ////////////////
  // 4.Escribe una función que devuelva el número de hojas de un árbol binario

  static countLeaves(a) {
    if (a.left == null || a.right == null) {
      return 1;
    } else {
      return this.countLeaves(a.left) + this.countLeaves(a.right);
    }
  }
}

// Creamos un Tree para realizar nuestras pruebas

let tree = new BinaryTree(4);

tree.root.left = new Node(5);
tree.root.right = new Node(2);
tree.root.right.right = new Node(4);
tree.root.right.left = new Node(6);
tree.root.left.right = new Node(7);
tree.root.left.left = new Node(9);
tree.root.left.left.left = new Node(19);
tree.root.left.left.right = new Node(15);

//Testing pregunta N`2
console.log(BinaryTree.copyBinaryTree(tree.root), tree.root, 'Pregunta 2');

// Testing answer 3

console.log('Mostrar elementos por nivel');
console.log(BinaryTree.nodeByLevel(tree.root, 0), 'Pregunta 3');

// Testing answer 4
console.log('Contar Leaves');
console.log(tree.root.right.right);

console.log(JSON.stringify(tree)); // JSON stringify para que nos muestre todo el objeto
console.log(BinaryTree.countLeaves(tree.root), 'Pregunta 4'); // Respuesta correcta Nª 5
