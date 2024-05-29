// helper method
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (array) => {
  let maxDigitCount = mostDigits(array);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBucket[digit].push(array[i]);
    }
    array = [].concat(...digitBucket);
    console.log('digitBucket: ', digitBucket);
  }
  return array;
};
const inputArray = [23, 345, 5467, 12, 2345, 9852];
const result = radixSort(inputArray);
console.log('result: ', result);
console.log('inputArray: ', inputArray);
