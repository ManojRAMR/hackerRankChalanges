// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let n = arr.length,
    min = 1000000000,
    max = 0,
    sum = 0;

  arr.forEach((num) => {
    sum += num;
    min = num < min ? num : min;
    max = num > max ? num : max;
  });
  console.log(sum - max, sum - min);
}
