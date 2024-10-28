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

console.log("sortedArray: ", sortedArray);

const myMergeHelper = (arr1, arr2) => {
  console.log("arr1: ", arr1);
  console.log("arr2: ", arr2);
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
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

const myMergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = myMergeSort(array.slice(0, mid));
  console.log("left: ", left);
  const right = myMergeSort(array.slice(mid));
  console.log("right: ", right);
  const res = myMergeHelper(left, right);
  return res;
};

const myInputArray = [
  779797, 13, 233, 23, 2, 310, 200, 70, 202, 300, 19, 2, 310, 6436, 1539, 2649,
];
const mySortedArray = myMergeSort(myInputArray);
console.log("mySortedArray: ", mySortedArray);
