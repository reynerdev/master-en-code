// 1.- Implemente un procedimiento que inserte un dato de modo similar al
// insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos,
// si un dato ya está almacenado entonces la lista no cambia.

/* Nuesta base de nuestra Lista */
class List {
  constructor(node, next) {
    this.node = node;
    this.next = next;
  }
}

class LList {
  constructor(val) {
    this.first = new List(val, null);
  }

  /*Funcion agregar inicio */
  addFirst(val) {
    this.first = new List(val, this.first);
  }

  /* Recursion hasta we find a Null o repetidos*/
  addHelper(ListClass, val) {
    if (ListClass.next === null) {
      ListClass.next = new List(val, null);
    } else if (ListClass.node === val) {
      return true;
    } else {
      this.addHelper(ListClass.next, val);
    }
  }

  /* Funcion  agregar */
  add(val) {
    if (this.addHelper(this.first, val)) {
      console.log('Valor ya ingresado');
    }
  }

  /* Hagamos en forma iterativa, pero esta vez permite ingresar valores repetidos */
  addNoRepeat(val) {
    let node = this.first;

    while (node.next !== null) {
      node = node.next;
    }

    node.next = new List(val, null);
  }
}

let list = new LList(1);
list.addFirst(2);
list.add(2); //  Imprimi el valor ya ingresado, si se repite
list.addNoRepeat(3);
list.addNoRepeat(5);
list.addNoRepeat(7);
console.log(JSON.stringify(list));

// 2.- Escribir un programa para formar una lista que realice las siguientes tareas:

// a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.

// b) Recorrer la lista para mostrar los Elementos por pantalla.

// c) Mostrar todos los Nodos que superen un valor determinado.

class Pregunta2 extends LList {
  constructor(val) {
    super(val);
    /* Para guardar nuestro ultimo elemento de la lista */
  }

  /* Create a list of random intenger of quantity (Pregunta a y b ). Los valores estaran entre 0 y 10  */
  randomList(quantity) {
    for (let i = 0; i < quantity; i++) {
      let rndNumber = Math.floor(Math.random() * 11);
      this.addNoRepeat(rndNumber);
    }
  }

  /* Pregunta C */
  /* Mostrar todos los Nodos que superen un valor determinado */
  /* Lo vamos a mostrar en nueva Lista solamente con los valores que superen lo determinado */
  listbelowNumber(num) {
    let lista = this.first;
    let newLista = null;

    let init = 0;
    /* Esta vez, iteraremos revisamos cada nodo */

    while (lista.next !== null) {
      if (lista.node <= num) {
        if (init === 0) {
          //   console.log('solo una vez');
          /* Solo una vez para inicializar nuestra lista */
          newLista = new LList(lista.node, null);
          init++;
        } else {
          newLista.addNoRepeat(lista.node);
        }
      }
      lista = lista.next;
    }
    return newLista;
  }
}

let list2 = new Pregunta2(4);
list2.randomList(7);
console.log(list2.first);
/* Usamos JSON SRINGIFY c para ver mejor la lista, ya que con console.log(), no muestra toda el objeto*/
console.log('Lista Random\n', JSON.stringify(list2));
let newLista = list2.listbelowNumber(7);
console.log('PreguntacC\n', JSON.stringify(newLista));
