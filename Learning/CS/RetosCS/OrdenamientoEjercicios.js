// 1. Crea una función que ordene de forma descendente  un arreglo de números
// Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]
// Salida → [88,9,7,6,5,3,1,-1]

class QuickSort {
  static sort(arr, reverse = false) {
    this.quicksort(arr, 0, arr.length - 1, reverse);
    // arr.shift();
  }

  static quicksort(arr, start, end, reverse) {
    // if (start >= end) {
    //   return;
    // }

    // let index = this.partition(arr, start, end);

    // this.quicksort(arr, start, index - 1);
    // this.quicksort(arr, index + 1, end);

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

let A = [7, 2, 1, 6, 8, 5, 3, 4];
let B = [9, 3, 1, 6, 5, 88, -1, 2, 7];
//1* Reverse, el valor de true, significa que se ordena en forma reversa
QuickSort.sort(A, true);
console.log(A);
QuickSort.sort(B, true);
console.log(B);

/*2 Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
Ej. Entrada ---> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida ----> [‘a’,‘b’,‘e’,‘h’,‘w’]
*/

let input = ['b', 'h', 'w', 'e', 'a'];
function ordenaListaCaracteres(input) {
  let asciiarray = input.map((element) => element.charCodeAt(0));
  QuickSort.sort(asciiarray);
  let ordered = asciiarray.map((element) => String.fromCharCode(element));
  return ordered;
}

console.log(ordenaListaCaracteres(input), 'Pregunta 2');

/* 3* Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio*/

class Student {
  constructor(name, grades = []) {
    this.name = name;
    this.grades = grades;
    this.promedio = this.average();
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    return sum / this.grades.length;
  }

  addNota(grade) {
    this.grades.push(grade);
    this.promedio = this.average(); //Actualizamos el promedio con la nueva nota actualizada
  }
}

class Classroom {
  constructor(nameClassroom, students = []) {
    this.nameClassroom = nameClassroom;
    this.students = students;
  }

  add(student) {
    this.students.push(student);
  }

  // una version de quicksort adaptada al problema
  ordernarByPromedio() {
    this.quicksortclassroom(this.students, 0, this.students.length - 1);
  }

  quicksortclassroom(students, start, end) {
    if (start < end) {
      console.log(students[0].promedio, end);
      let index = this.partition(students, start, end);
      this.quicksortclassroom(students, start, index - 1);
      this.quicksortclassroom(students, index + 1, end);
    }
  }

  partition(students, start, end) {
    let pivot = students[end].promedio;
    let pindex = start;

    for (let i = start; i < end; i++) {
      if (students[i].promedio >= pivot) {
        let temp = students[i];
        students[i] = students[pindex];
        students[pindex] = temp;
        pindex++;
      }
    }

    let temp = students[pindex];
    students[pindex] = students[end];
    students[end] = temp;

    return pindex;
  }
}

let studentA = new Student('Nestor', [20, 19, 18, 15, 19]);
let studentB = new Student('Maui', [10, 18, 14, 15, 19]);
let studentC = new Student('Gera', [10, 12, 14, 14, 15]);
let studentD = new Student('Christiam', [15, 15, 14, 15, 19]);
let studentE = new Student('Carlos', [10, 13, 14, 15, 19]);

let classA = new Classroom('Cinta Roja', [
  studentA,
  studentB,
  studentC,
  studentD,
  studentE,
]);

console.log(classA.students);

classA.ordernarByPromedio();
console.log('SORTED');
console.log(classA.students);

// 4* Crear una funcion que ordene palabras de menor numero de letras a mayor
// Ej Entrada [“adios”,“hola”,“maximo”,“uno”,“despedida”]
// salida -> [“”uno,“hola”,“adios”,“maximo”,“despedida”]

function ordenar(arr) {
  ordenarByStringLenght(arr, 0, arr.length - 1);
}

function ordenarByStringLenght(arr, start, end) {
  if (start < end) {
    let index = partition4(arr, start, end);
    ordenarByStringLenght(arr, start, index - 1);
    ordenarByStringLenght(arr, index + 1, end);
  }
}

function partition4(arr, start, end) {
  let pivot = arr[end].length;
  let pindex = start;
  for (let i = start; i < end; i++) {
    if (arr[i].length <= pivot) {
      let temp = arr[pindex];
      arr[pindex] = arr[i];
      arr[i] = temp;
      pindex++;
    }
  }

  let temp = arr[pindex];
  arr[pindex] = arr[end];
  arr[end] = temp;

  return pindex;
}

a = ['adios', 'hola', 'maximo', 'uno', 'despedida'];
// ordenamos nuestros elementos en base al tamano de la palabra
ordenar(a);
console.log(a);

// 5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0
// Entrada -> [[7,3],[2,2],[1,0],[4,3]]
// Salida ---> [[1,0],[2,2],[4,3],[7,3]]

// Aplicando los conocimientos de vectores, hallamos la distancia del 0.0 hacia el punto mediante propiedades de vectores sqrt(a^2 + b^2) = distancia

// Agregamos una metodo a nuestro array
Array.prototype.distance = function () {
  let sum = 0;
  for (i = 0; i < this.length; i++) {
    sum = sum + Math.pow(this[i], 2);
  }

  return Math.pow(sum, 0.5);
};

// una version de quicksort adaptado al problema 5
function ordenar5(arr) {
  quicksort5(arr, 0, arr.length - 1);
}

function quicksort5(arr, start, end) {
  if (start < end) {
    let index = partition5(arr, start, end);
    quicksort5(arr, start, index - 1);
    quicksort5(arr, index + 1, end);
  }
}

function partition5(arr, start, end) {
  let pivot = arr[end].distance();
  let pindex = start;
  for (let i = start; i < end; i++) {
    if (arr[i].distance() <= pivot) {
      let temp = arr[pindex];
      arr[pindex] = arr[i];
      arr[i] = temp;
      pindex++;
    }
  }

  let temp = arr[pindex];
  arr[pindex] = arr[end];
  arr[end] = temp;
  console.log(arr);
  return pindex;
}

coordenadas = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
console.log(coordenadas);

// Llamamos a la funcion para ordenar nuestro array
ordenar5(coordenadas);

// Las coordenas ordenadas !!!!!
console.log(coordenadas);
