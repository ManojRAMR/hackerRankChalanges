// Complete the plusMinus function below.
function plusMinus(arr) {
  let n = arr.length,
    elementsCount = [0, 0, 0];
  arr.forEach((element) => {
    if (element > 0) {
      elementsCount[0]++;
    } else if (element < 0) {
      elementsCount[1]++;
    } else {
      elementsCount[2]++;
    }
  });

  let ratiosCounter = (element) => {
    console.log((element / n).toFixed(6));
  };

  elementsCount.forEach((element) => {
    ratiosCounter(element);
  });
}
