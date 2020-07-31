/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let priDia = 0,
    secDia = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    priDia += arr[i][i];
    secDia += arr[i][Math.abs(n - 1 - i)];
  }

  return Math.abs(priDia - secDia);
}
