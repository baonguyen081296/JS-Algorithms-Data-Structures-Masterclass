function capitalizeFirst(arr) {
	if (arr.length === 0) return [];
	return [arr[0].charAt(0).toUpperCase()+arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}
const check =['car','taco','banana']
console.log(capitalizeFirst(check)) // ['I', 'Am', 'A', 'String']