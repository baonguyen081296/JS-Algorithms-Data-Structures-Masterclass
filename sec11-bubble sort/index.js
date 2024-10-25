const bubbleSort = (array) => {
	let noSwaps;
  for (let i = array.length; i > 0; i--) {
		noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      const eleJ = array[j];
      if (eleJ > array[j + 1]) {
        //swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
				noSwaps = false;
      }
    }
		if(noSwaps) break;
  }
  console.log('array: ', array);
  return array;
};
bubbleSort([37, 45, 29, 8]);
