/**
 * Sum Zero
 * [-4 , -3, -2, -1, 0, 1, 2, 3, 10] => [-3, 3]
 * [-4, -3, -2, -1, 0, 5, 10] => undefined
 */

const sumZero = (sortedArray) => {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    if (sortedArray[left] + sortedArray[right] === 0) {
      return [sortedArray[left], sortedArray[right]];
    }
    if (sortedArray[left] + sortedArray[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};
const res1 = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
const res2 = sumZero([-4, -3, -2, -1, 0, 5, 10]);
console.log("res1: ", res1);
console.log("res2: ", res2);
