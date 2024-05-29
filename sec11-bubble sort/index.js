const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      const eleJ = array[j];
      if (eleJ > array[j + 1]) {
        //swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log('array: ', array);
  return array;
};
bubbleSort([37, 45, 29, 8]);
