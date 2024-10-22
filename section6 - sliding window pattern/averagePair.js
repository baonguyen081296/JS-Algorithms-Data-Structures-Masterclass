/**
 * 
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 */

function averagePair(arr, num) {
  const target = num * 2;
  const arrLength = arr.length;
  if (arrLength === 0) return false;
  const fisrtEle = arr[0];
  const lastEle = arr[arrLength - 1];
  if (fisrtEle + lastEle === target && arrLength > 1) {
    return true;
  }

  if (fisrtEle + lastEle < target && arrLength > 1)
    return averagePair(arr.slice(1), num);

  if (fisrtEle + lastEle > target && arrLength > 1)
    return averagePair(arr.slice(0, arrLength - 1), num);

  return false;
}

const example = [1, 3, 3, 5, 6, 7, 10, 12, 19];
const check = averagePair(example, 3);
console.log('check: ', check);
