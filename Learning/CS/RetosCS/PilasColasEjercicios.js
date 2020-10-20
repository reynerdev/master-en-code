// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).

// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],

// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]

/* USANDO FUNCIONES DE ARRAY */

const returnStack = function (arr, quantity) {
  return arr.slice(0, quantity);
};

console.log(
  returnStack(
    ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'],
    4
  )
);

// [ 'Manzana', 'Cebolla', 'Apio', 'Naranja' ]

// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”,
//  de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

const replace = function (arr, new_, old) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== old) {
      arr.pop();
    } else {
      console.log('afterPop');
      arr.pop();
      arr.push(new_);
      break;
    }
  }

  return arr;
};

console.log('Pregunta_2\n', replace([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2));

// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.

// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino

// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const pathRecorrido = ['origen', 'pueblo1', 'pueblo2', 'destino'];

// Using ES6

const pathRegreso = pathRecorrido.reverse();

console.log('Pregunta 3\n', pathRecorrido, pathRegreso);

// 4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación.
//  Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila,
//   efectuar el retiro y regresarlos a su respectivo lugar`

const contenedor = ['cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6'];
const contenedorRespaldo = [];
const removeContenedor = (nameContenedor, arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== nameContenedor) {
      contenedorRespaldo.push(arr.pop());
    } else {
      arr.pop();
      console.log(`El contenedor: ${arr[i]} fue retirado`);
      arr.push(contenedorRespaldo.reverse());
      console.log(`\n ${arr}`);
      break;
    }
  }
};

console.log(removeContenedor('cont3', contenedor));

// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra

// Cola original:

// Cola 1: [ amarillo, rojo, azul, morado]

// Cola 2: [rosa, verde, negro, blanco]

// Implementando el Queque (Cola)

let cola1 = [];
const cola2 = [];

const colaOriginal = [
  'amarillo',
  'rosa',
  'rojo',
  'verde',
  'azul',
  'negro',
  'morado',
  'blanco',
];

const separarCola = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      cola1.push(arr[i]);
    } else {
      cola2.push(arr[i]);
    }
  }
};

separarCola(colaOriginal);
console.log('Pregunta5:\n', cola1, cola2);

function Queque() {
  this.elements = [];
}

Queque.prototype.enqueue = function (e) {
  this.elements.push(e);
};

Queque.prototype.dequeue = function () {
  return this.elements.shift();
};

// 6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”,
//es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

// Cola: [

// { user:‘User1’, ticket:true },

// { user:‘User2’, ticket:true },

// { user:‘User3’, ticket:false },

// { user:‘User4’, ticket:true },

// { user:‘User5’, ticket:false },

// { user:‘User6’, ticket:false },

// { user:‘User7’, ticket:true },

// { user:‘User8’, ticket:true },

// { user:‘User9’, ticket:true },

// { user:‘User10’, ticket:false },

// { user:‘User11’, ticket:true },

// ];

const cola = [
  { user: 'User1', ticket: true },

  { user: 'User2', ticket: true },

  { user: 'User3', ticket: false },

  { user: 'User4', ticket: true },

  { user: 'User5', ticket: false },

  { user: 'User6', ticket: false },

  { user: 'User7', ticket: true },

  { user: 'User8', ticket: true },

  { user: 'User9', ticket: true },

  { user: 'User10', ticket: false },

  { user: 'User11', ticket: true },
];

elementosRetirados = [];
arrayFinal = [];
const removeColados = (cola) => {
  let times = cola.length;
  for (let index = 0; index < times; index++) {
    let shiftedVal = cola.shift();
    console.log(shiftedVal);
    if (shiftedVal.ticket === true) {
      arrayFinal.push(shiftedVal);
    } else {
      elementosRetirados.push(shiftedVal);
    }
  }
};

removeColados(cola);
console.log('Pregunta6\n', elementosRetirados, arrayFinal);
