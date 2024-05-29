/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 * 
 */

function sameFrequency(firstInt,secondInt){
  // good luck. Add any arguments you deem necessary.
	let firstIntStr = firstInt.toString();
	let secondIntStr = secondInt.toString();
	if (firstIntStr.length !== secondIntStr.length) return false;
	const firstIntObj = {};
	const secondIntObj = {};
	for (let i = 0; i < firstIntStr.length; i++) {
		const digit = firstIntStr[i];
		firstIntObj[digit] = (firstIntObj[digit] || 0) + 1;
	}
	for (let i = 0; i < secondIntStr.length; i++) {
		const digit = secondIntStr[i];
		secondIntObj[digit] = (secondIntObj[digit] || 0) + 1;
	}
	for (const key in firstIntObj) {
		if (firstIntObj[key] !== secondIntObj[key]) return false;
	}
	return true;
}