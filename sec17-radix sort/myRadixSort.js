/**
 * 456 , 1 => 5
 * 456 , 0 => 6
 */
const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (numbers) => {
  // return the number of digits in the largest number in the list ex: [345,2,11111] => 5
  let maxDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }
};

const check = getDigit(456, 4); // 6

const radixSort = (array) => {
  let maxDigitCount = mostDigits(array);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBucket[digit].push(array[i]);
    }
    array = [].concat(...digitBucket);
    console.log("digitBucket: ", digitBucket);
  }
  return array;
};
