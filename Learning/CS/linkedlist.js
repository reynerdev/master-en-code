/* Using Recursion */

class List {
  constructor(item, head) {
    this.item = item;
    this.head = head;
  }

  size() {
    /* Base Case*/

    if (this.head === null) {
      return 1;
    } else {
      return 1 + this.head.size();
    }
  }

  get(nth) {
    console.log('object');
    console.log(this.head);
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

console.log(lista4.get(0));

class SList {
  constructor(item, node) {
    this.item = item;
    this.node = node;
  }

  add(item) {
    this.node = new List(item, null);
  }
}

let slist = new SList(1, null);
slist.add(1);
slist.add(2);

console.log(slist);
