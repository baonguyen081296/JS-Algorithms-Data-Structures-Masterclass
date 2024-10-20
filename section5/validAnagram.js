const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    obj1[element] = (obj1[element] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    obj2[element] = (obj2[element] || 0) + 1;
  }

  for (const property in obj1) {
    if (obj2[property] !== obj1[property]) return false;
  }

  return true;
};

// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true
// validAnagram('rat', 'car'); // false) // false
// validAnagram('awesome', 'awesom'); // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
// validAnagram('qwerty', 'qeywrt'); // true
// validAnagram('texttwisttime', 'timetwisttext');
const check = validAnagram("rat", "car"); // true
console.log("check: ", check);

/**
 * advanced solution:
 */
const validAnagramAdvanced = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    obj[element] = (obj[element] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    if (!obj[element]) return false;
    obj[element]--;
  }

  return true;
};

const myVidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const currentElement = str2[i];
    if (!obj[currentElement]) return false;
    obj[currentElement]--;
  }

  return true;
};
