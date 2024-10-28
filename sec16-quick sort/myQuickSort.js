const swap = (arr, swapIndex, index) => {
  const temp = arr[swapIndex];
  arr[swapIndex] = arr[index];
  arr[index] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) return array;
  let pivotIndex = pivot(array, left, right);
  //left
  quickSort(array, left, pivotIndex - 1);
  // right
  quickSort(array, pivotIndex + 1, right);
  return array;
};

const newArr = quickSort([4, 8, 7, 2, 1, 5, 6, 3]);
console.log("newArr: ", newArr);
