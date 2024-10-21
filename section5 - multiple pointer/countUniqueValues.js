/**
 * accept sorted array & counts the unique values in the array
 * [] => 0
 * [1, 1, 1, 1, 1, 2] => 2
 * [-1, -2, 3, 4, 4, 4, 7, 7, 12, 12, 13] => 7
 */
const countUniqueValues = (array) => {
  if (array.length === 0) return 0;
  let result = 1;
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    const previousValue = array[i - 1];
    if (value !== previousValue) {
      result++;
    }
  }
  return result;
};
const arr = [1, 1, 1, 1, 1, 2];
const arr2 = [-1, -2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const empty = [1];
const check = countUniqueValues(empty);
console.log("check: ", check);
