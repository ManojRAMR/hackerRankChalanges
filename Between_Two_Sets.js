/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Find largest number of "a"
  let largestOfA = getLargestNum(a);
  // Find smallest number of "b"
  let smallestOfB = getSmallestNum(b);
  // Array to save numbers that have all emement of "a" as factors
  let numberArrayA = [];
  // Array to save numbers that are factors of all emement of "b"
  let numberArrayB = [];

  // Find numbers that have all emement of "a" as factors
  for (let i = largestOfA; i <= smallestOfB; i++) {
    let anAX = a.every((num) => {
      return i % num === 0;
    });

    if (anAX) {
      numberArrayA.push(i);
    }
  }

  // Find numbers that are factors of all emement of "b"
  numberArrayA.forEach((num) => {
    let anBX = b.every((elem) => {
      return elem % num === 0;
    });

    if (anBX) {
      numberArrayB.push(num);
    }
  });
  return numberArrayB.length;
}

// Get the smallerst number of an array
const getSmallestNum = (arr) => {
  let smallestNum = 101;
  arr.forEach((num) => {
    smallestNum = num < smallestNum ? num : smallestNum;
  });
  return smallestNum;
};

// Get the largest number of an array
const getLargestNum = (arr) => {
  let largestNum = 0;
  arr.forEach((num) => {
    largestNum = num > largestNum ? num : largestNum;
  });
  return largestNum;
};
