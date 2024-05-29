function power(number, count) {
  if (count === 0) return 1;
  return number * power(number, count - 1);
}
// power(2,0) // 1
// power(2,1) // 2
// power(2,2) // 4
// power(2,4) // 16

// const check = power(2, 2);
// console.log('check: ', check)

function factorial(num){
	if(num===1) return 1;
	return num * factorial(num-1)
}

// const res = factorial(7);
// console.log('res: ', res)

function productOfArray(array){
	if(array.length===1) return array[0];
	if(array.length===0) return 0;
	return array[0] * productOfArray(array.slice(1))
}

// const arr = [1,2,3];
// const res = productOfArray(arr);
// console.log('res: ', res)


function recursiveRange(number){
   if(number===0) return 0;
	 return number + recursiveRange(number-1)
}