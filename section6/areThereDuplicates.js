/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
 */

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
	const obj = {};
	for (let index = 0; index < arguments.length; index++) {
		const element = arguments[index];
		obj[element] = (obj[element] || 0) + 1;
		if(obj[element]>1){
			return true
		}
	}
	return false
}
// const check = areThereDuplicates(1,2,3,4,5,'a','b',2);
// console.log('check: ', check)

// one liner solution
function areThereDuplicatesOneLiner() {
  return new Set(arguments).size !== arguments.length;
}
const check2 = areThereDuplicatesOneLiner(1,2,3,4,5,'a','b');
console.log('check2: ', check2)