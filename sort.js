function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

/**
 * 交换排序，每一轮找到最小的值，依次与第一个、第二个位置的数交换....
 * @param {*} arr 
 * @returns 
 */
function swapSort(arr) {
  const len = arr.length;
  if (!arr || len < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}


/**
 * 冒泡排序，相邻两个交换，一轮排序后最大的到最末尾 
 */
function bubbleSort(arr) {
  const len = arr.length;
  if (!arr || len < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

/**
 * 插入排序, 当前位置往前看，如果前面有比自己大的值，交换位置，如果到达最左边或者左边比自己小，结束
 */

function insertSort(arr) {
  const len = arr.length;
  if (!arr || len < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while(j - 1 >= 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }
  return arr;
}

/**
 * 快速排序，分治法，选择privot中间值，比他小的放进left数组，大的放到right数组，递归进行这个操作，直到所有都有序
 */
function quickSort(arr) {
  const len = arr.length;
  if (!arr || len < 2) return arr;
  const midIndex = Math.ceil(arr.length / 2);
  const privot = arr[midIndex]; // 中间值
  const mid = arr.splice(midIndex, 1);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < privot ? left.push(arr[i]) : arr[i] > privot ? right.push(arr[i]) : mid.push(arr[i]);  
  }
  return quickSort(left).concat(privot).concat(quickSort(right));
}

/**
 * 归并排序
 */

function mergeSort() {
  
}

/**
 * 堆排序
 */
function heapSort() {

}


const testArr = [5, 1, 2, 6, 0, 9, 7, 7, 2, 8];
const testArr2 = [6, 5, 4, 3, 2, 1];

// console.log('result', swapSort(testArr));
// console.log('result', bubbleSort(testArr));
// console.log('result', insertSort(testArr));
console.log('result', quickSort(testArr));
console.log('result', quickSort(testArr2));