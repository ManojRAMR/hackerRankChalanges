// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) {
    return "NO";
  }
  if (v1 > v2) {
    for (let i = 0; i < 10000; i++) {
      let firstKangarooJump = x1 + v1 * i,
        secondKangarooJump = x2 + v2 * i;
      if (firstKangarooJump === secondKangarooJump) {
        return "YES";
      }
    }
    return "NO";
  }
}
