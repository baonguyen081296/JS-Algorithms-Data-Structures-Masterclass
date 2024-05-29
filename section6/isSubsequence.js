/**
 * 
 *
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

function isSubsequence(firstString, secondString) {
  if (firstString.length === 0) return true;
  if (secondString.length === 0) return false;
  // good luck. Add any arguments you deem necessary.
  const check = firstString[4];

  console.log('check: ', check);
  if (firstString.length > secondString.length) {
    return false;
  }
}
// isSubsequence('hello', 'hello world')

function isSubsequenceTest(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0])
    return isSubsequenceTest(str1.slice(1), str2.slice(1));
  return isSubsequenceTest(str1, str2.slice(1));
}

const str = 'abc';
const strTwo = 'acbcabasd';
// const check2 = isSubsequenceTest(str,strTwo)
const check2 = isSubsequenceTest('abc', 'acbdc');
console.log('check2: ', check2);
