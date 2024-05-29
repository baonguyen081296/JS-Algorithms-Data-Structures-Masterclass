/**
 *
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */
function flatten(array){
	if(array.length===0) return [];
	if(Array.isArray(array[0])) return [...flatten(array[0]), ...flatten(array.slice(1))];
	if(!Array.isArray(array[0])) return [array[0], ...flatten(array.slice(1))];
} 
// const check = [1, 2, 3, [4, 5] ];
const check = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
const res = flatten(check);
console.log('res: ', res)