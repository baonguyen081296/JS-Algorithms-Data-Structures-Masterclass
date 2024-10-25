const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const curI = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curI; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curI;
  }
  return array;
};

const check = insertionSort([37, 45, 29, 8]);
// []
console.log("check: ", check);
