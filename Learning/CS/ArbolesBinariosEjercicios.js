// Arboles binarios.

// 1.Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
// 2.Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
// 3.Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
// 4.Escribe una función que devuelva el número de hojas de un árbol binario.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = null;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new Node(val);
  }

  addLeft(val) {}

  addRight() {}

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

  copyBinaryTree(a) {
    if (a == null) {
    }
  }
}
