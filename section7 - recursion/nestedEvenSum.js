/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  if (obj === null) return sum;

  for (const key in obj) {
    const element = obj[key];
    if (typeof element === "object") {
      sum += nestedEvenSum(element);
    } else {
      if (isNaN(element)) continue;

      if (element % 2 === 0) {
        sum += element;
      }
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 4,
    otherObj: {
      superInner: 8,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const res1 = nestedEvenSum(obj1); // 14
const res2 = nestedEvenSum(obj2); // 10

console.log("res1: ", res1);
console.log("res2: ", res2);
