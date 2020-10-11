/* Using Recursion */
class List {
  constructor(item, head) {
    this.item = item;
    this.head = head;
  }

  size() {
    /* Caso base*/
    if (this.head === null) {
      return 1;
    } else {
      return 1 + this.head.size();
    }
  }

  get(nth) {
    // console.log('object');
    // console.log(this.head);
    if (nth === 0) {
      return this.item;
    } else {
      return this.head.get(nth - 1);
    }
  }
}

let lista = new List(1, null);
let lista2 = new List(2, lista);
let lista3 = new List(3, lista2);
let lista4 = new List(4, lista3);

console.log('Imprimir la posicion');
console.log(lista4.get(2));
console.log('Imprimir Lista2');
console.log(lista2);
/* Version 2 */

lt = new List(1, null);
lt.head = new List(2, null);

console.log(lt);

/*Implenting of SList. HAVING A RECURSIVE NAKED INSTRUCTION IS STRANGE AND DIFFICULT TO UNDERSTAND. FOr that reason we need to make it simple*/
/*SSL SLL means single limked list */
class SLList {
  // constructor(item, node) {
  //   this.item = item;
  //   this.node = node;
  // }

  constructor(x) {
    this.first = new List(x, null);
  }

  addLast(item) {
    var pointer = this.first;

    while (pointer.head) {
      console.log('inside while');
      console.log(pointer);
      pointer = pointer.head;
      console.log(pointer);
    }

    pointer.head = new List(item, null);
  }

  addFirst(item) {
    this.first = new List(item, this.first);
  }

  size(){
    rere
  }


  /* To create this function we need to use a special helper */
  size(){

    if(this.first.head === null){
      return 0 
    } else 
    {
      return 1 + 
    }

  }
}

let list = new SLList(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
console.log(list);

let listAddFirst = new SLList(1);
listAddFirst.addFirst(2);
listAddFirst.addFirst(3);
console.log(listAddFirst);
