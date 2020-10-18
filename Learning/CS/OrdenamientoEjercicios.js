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
