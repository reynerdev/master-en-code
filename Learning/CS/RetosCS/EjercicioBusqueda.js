// Creamos estra clase para ordenar nuestro array
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

function findValue (a,value){
    return BinarySearch(a,value,0,a.length-1)
}

function BinarySearch (a,value,start,end){
    let mid = Math.trunc((start+end)/2)
   
    if (start>end){
        return -1 
    }

    if (value > a[mid]){
        return BinarySearch (a,value,mid+1,end)
    }

    if (value < a[mid]){
        return BinarySearch(a,value,start,mid-1)
    }

    if (value===a[mid]){
        return mid
    }



}

let a = [1,2,3,4,5,6,7]
console.log(findValue(a,2))


// 1 .- Crear una función que encuentre el número más repetido en un array
// Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6
input = [3,6,1,8,2,3,6,3,2,5,6]
QuickSort.sort(input)
// Tenemos nuestro array sorted
console.log(input)


function BinarySearch2 (a,value,start,end){

    let result = -1 
    while(start<=end){
        let mid = Math.trunc((start+end)/2)
        if(a[mid] ==value){

            return value
        }else if( a[mid]< value)
        {
            start = mid + 1
        }else if( a[mid]>value)
        {
            end = mid -1 
        }
    }

    return result


}
let b = [1,2,3,4,5,6,7]
console.log(BinarySearch2(b,2,0,b.length-1))


