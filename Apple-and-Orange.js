// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countFruitsInHomeRange = (s, t, p, dropPoints) => {
    let FruitsInHomeRange = 0;
    dropPoints.forEach((dropPoint) => {
      FruitsInHomeRange += p + dropPoint >= s && p + dropPoint <= t ? 1 : 0;
    });
    return FruitsInHomeRange;
  };
  if (apples.length > 0) {
    console.log(countFruitsInHomeRange(s, t, a, apples));
  }
  if (oranges.length > 0) {
    console.log(countFruitsInHomeRange(s, t, b, oranges));
  }
}
