class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let index = 0; index < Math.min(key.length, 100); index++) {
      const char = key[index];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const currentBucket = this.keyMap[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const parentElement = this.keyMap[i];
      for (let j = 0; j < parentElement.length; j++) {
        const childElement = parentElement[j];
        const value = childElement[1];
        if (valuesArr.indexOf(value) === -1) {
          // ignore duplicate values
          valuesArr.push(childElement[1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const parentElement = this.keyMap[i];
      for (let j = 0; j < parentElement.length; j++) {
        const childElement = parentElement[j];
        const value = childElement[0];
        if (keysArr.indexOf(value) === -1) {
          // ignore duplicate keys
          keysArr.push(childElement[0]);
        }
      }
    }
    return keysArr;
  }
}
