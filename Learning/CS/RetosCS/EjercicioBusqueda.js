
/
class QuickSort {
  static sort(arr, reverse = false) {
    this.quicksort(arr, 0, arr.length - 1, reverse);
  }

  static quicksort(arr, start, end, reverse) {
    if (start < end) {
      let index = this.partition(arr, start, end, reverse);

      this.quicksort(arr, start, index - 1, reverse);
      this.quicksort(arr, index + 1, end, reverse);
    }
  }

  static partition(arr, start, end, reverse) {
    let index = start;
    let pivot = arr[end];

    for (let i = start; i < end; i++) {
      if (!reverse) {
        if (arr[i] <= pivot) {
          let temp = arr[i];

          arr[i] = arr[index];
          arr[index] = temp;
          index++;
        }
      } else {
        if (arr[i] >= pivot) {
          let temp = arr[i];

          arr[i] = arr[index];
          arr[index] = temp;
          index++;
        }
      }
    }

    let temp = arr[index];

    arr[index] = pivot;
    arr[end] = temp;

    return index;
  }
}

function findValue(a, value) {
  return BinarySearch(a, value, 0, a.length - 1);
}

function BinarySearch(a, value, start, end) {
  let mid = Math.trunc((start + end) / 2);

  if (start > end) {
    return -1;
  }

  if (value > a[mid]) {
    return BinarySearch(a, value, mid + 1, end);
  }

  if (value < a[mid]) {
    return BinarySearch(a, value, start, mid - 1);
  }

  if (value === a[mid]) {
    return mid;
  }
}



function BinarySearch2(a, value, start, end) {
  let result = -1;
  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    if (a[mid] == value) {
      return value;
    } else if (a[mid] < value) {
      start = mid + 1;
    } else if (a[mid] > value) {
      end = mid - 1;
    }
  }

  return result;
}
// let b = [1, 2, 3, 4, 5, 6, 7];
// console.log(BinarySearch2(b, 2, 0, b.length - 1));


////////////////////////////////// ////////////////////////////////// ////////////////////////////////// ////////////////////////////////// ////////////////////////////////// ////////////////////////////////// 
////////////////////////////////// ////////////////////////////////// PREGUNTAS/////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////// ////////////////////////////////// ////////////////////////////////// ////////////////////////////////// 
// 1 .- Crear una función que encuentre el número más repetido en un array
// Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6
input = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
QuickSort.sort(input);
// Tenemos nuestro array sorted
console.log(input);

function masRepetidoArray(input) {
  QuickSort.sort(input);
  // Como ya tenemos nuestro array sorted, el elemento del lado derecho, si es igual al anterior significa que es repetido
  console.log(input);
  let num = -1;
  let previous = null;
  let hash = {};
  let max = 0;

  input.forEach((element) => {
    console.log(hash);
    if (previous !== element) {
      hash[element] = 1;
      previous = element;
    } else {
      hash[element] = hash[element] + 1;
    }

    if (max <= hash[element]) {
      max = hash[element];
      num = element;
    }
  });

  console.log(num);
}

// nos va a mostrar el  numero mayor de los mass repetido si en caso tenemos dos numeros que se repiten en la misma cantidad
masRepetidoArray(input);

// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// Ej input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’]
input = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
function letrasArreglos(input) {
  let salida = [];

  input.forEach((element) => {
    if (isNaN(element)) {
      salida.push(element);
    }
  });
  return salida;
}

console.log(letrasArreglos(input));

// 3.- Crear una función que busque el número más grande en un arreglo
// Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12

input = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
function numberGrande(input) {
  QuickSort.sort(input);
  return input[input.length - 1];
}

console.log(numberGrande(input));

// 4.- Crear una función que busque el número más pequeño en el arreglo
// Ej. [1,4,5,-1,-7,2,3,9]
// Salida -->  -7

input = [1, 4, 5, -1, -7, 2, 3, 9];
function masPequenio(input) {
  QuickSort.sort(input);
  return input[0];
}

console.log(masPequenio(input));

// 5.- Crear una clase llamada  Contacto con los siguientes datos

// Nombre
// Apellidos
// Telefono

// Después crear una clase que sea ListaContactos la cual tendrá dos métodos

// Agregar un contacto
// Buscar un contacto por nombre

// Prueba que tus clases funcionen correctamente.

class Contacto {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class ListaContactos {
  constructor() {
    this.contactos = [];
  }

  addContacto(contacto) {
    this.contactos.push = contacto;
  }

  findContactoByName(name) {
    this.contactos.forEach((element) => {
      if (element.nombre === name) {
        // devolvemos nuestro objeto contacto en el que los nombres coinciden
        return element;
      }
    });
    return -1; // si el contacto no ha sido encontrado
  }
}
