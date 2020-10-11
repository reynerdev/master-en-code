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
