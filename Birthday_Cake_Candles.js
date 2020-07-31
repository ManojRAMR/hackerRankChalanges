// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let tallestCandle = 0,
    tallestCandleCount = 0;

  ar.forEach((candle) => {
    if (candle > tallestCandle) {
      tallestCandle = candle;
      tallestCandleCount = 1;
    } else if (candle === tallestCandle) {
      tallestCandleCount++;
    }
  });
  return tallestCandleCount;
}
