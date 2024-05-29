const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

function pivot(arr, start = 0, end = arr.length + 1) {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = swapIdx + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const arr = [5, 7, 1, 2, 11, 10, 50, 3, 4, 6, 8, -9];
console.log(quickSort(arr));
