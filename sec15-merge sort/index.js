const merge = (arr1, arr2) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
};

const inputArray = [110, 200, 2, 14, 99, 100];
const sortedArray = mergeSort(inputArray);

console.log('sortedArray: ', sortedArray);
