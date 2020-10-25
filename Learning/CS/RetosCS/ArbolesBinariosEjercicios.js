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

  static copyBinaryTree(a) {

    if (a.left === null || a.right === null){
      return;
    }
    else {
      
    }


    if (a == null) {
      a.data = null;
    } else {

      let left = this.copyBinaryTree(a.left)
      let right = this.copyBinaryTree(a.right)

      this

      this.b = new Node(a.data, a.left, a.right);
    }
  }

  //3.Escribe una función que visualice los nodos que están en el nivel n de un árbol binario. 


  static nodeByLevel(a,n){
    let listaNodos = []
    this.nodeLevel(a,n,0,listaNodos)
    return listaNodos
  }

  static nodeLevel(a,n,k,listaNodos){

    if(a.left === null || a.right === null){

      listaNodos.push(a.data)
      return
    }else if (n === k) {

       listaNodos.push(a.data);
       return

    }else{


      
      this.nodeLevel(a.left,n,k+1,listaNodos)
      this.nodeLevel(a.right,n,k+1,listaNodos)

    }


  }


// 4.Escribe una función que devuelva el número de hojas de un árbol binario


static countLeaves(a){

  if(a.left == null || a.right == null)
  {
    
    return 1;
  }else{
    
    return  this.countLeaves(a.left) + this.countLeaves(a.right)
    
  }
} 
}

// Create a Tree

let tree = new BinaryTree(4)

tree.root.left =  new Node(5)
tree.root.right = new Node(2)
tree.root.right.right = new Node (4)
tree.root.right.left = new Node (6)
tree.root.left.right = new Node (7)
tree.root.left.left = new Node (9)
tree.root.left.left.left = new Node (19)
tree.root.left.left.right= new Node (15)

// Testing answer 3

console.log("Mostrar elementos por nivel");
console.log(BinaryTree.nodeByLevel(tree.root,0),"Pregunta 3");


// Testing answer 4
console.log("Contar Leaves")
console.log(tree.root.right.right) 

console.log(JSON.stringify(tree));
console.log(BinaryTree.countLeaves(tree.root),"Pregunta 4");

// Respuesta correcta Nª 5 

