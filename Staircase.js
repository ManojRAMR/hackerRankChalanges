// Complete the staircase function below.
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaceCount = n - i,
      hashCount = i;
    console.log(`${" ".repeat(spaceCount)}${"#".repeat(hashCount)}`);
  }
}
