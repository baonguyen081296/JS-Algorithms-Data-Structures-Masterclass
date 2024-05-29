const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    const ele1 = array[i];
    let min = ele1;
    for (let j = i + 1; j < array.length; j++) {
      const ele2 = array[j];
      if (min > array[j]) {
        array[i] = ele2;
        array[j] = min;
        min = ele2;
      }
    }
  }
};

selectionSort([37, 45, 29, 8]);
