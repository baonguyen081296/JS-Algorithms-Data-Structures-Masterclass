/**
 * 
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1,4,-2,1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
 */
const tar = 4;
const array = [3, -2, 7, -4, 1, -1, 4, -2, 1, 4, -2, 1, 4, -2, 1];

function maxSubarraySum(arr, target) {
  if (arr.length < target) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < target; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = target; i < arr.length; i++) {
    tempSum = tempSum - arr[i - target] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// const check = maxSubarraySum(array, tar);

const naiveMaxSubarraySum = (array, number) => {
  if (array.length < number) return null;
  let maximum = 0;
  for (let i = 0; i < array.length - number + 1; i++) {
    let tempSum = array[i];
    for (let j = 1; j < number; j++) {
      const elementSub = array[i + j];
      tempSum += elementSub;
    }
    maximum = Math.max(maximum, tempSum);
  }
  return maximum;
}; // => Time complexity: O(n^2)

const slidingWindowMaxSubarraySum = (arr, number) => {
  if (arr.length < number) return null;
  let maxSum = 0;
  let temp = 0;

  for (let i = 0; i < number; i++) {
    maxSum += arr[i];
    temp += arr[i];
  }
  const length = arr.length - number + 1;
  // console.log("length: ", length);
  for (let i = number; i < arr.length; i++) {
    temp = temp - arr[i - number] + arr[i];
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
};

const check = slidingWindowMaxSubarraySum([100, 200, 500, 300, 400], 3);
// console.log("check: ", check);

// [ 1 , 3 , 5 , 15 , 20, 30 ,40 , 65, 70 ]

// 66
const searchDivideAndConquer = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
const check2 = searchDivideAndConquer([1, 3, 5, 15, 20, 30, 40, 65, 70], 66);
