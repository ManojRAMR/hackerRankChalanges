/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let periodIndicator = s.slice(-2),
    hoursCount = s.slice(0, 2),
    militaryTime = "",
    minuteAndSeconds = s.slice(2, -2);
  if (periodIndicator === "AM") {
    if (hoursCount === "12") {
      militaryTime = "00" + minuteAndSeconds;
    } else {
      militaryTime = hoursCount + minuteAndSeconds;
    }
  } else if (periodIndicator === "PM") {
    let hours = hoursCount * 1 + 12;
    militaryTime = (hours === 24 ? 12 : hours) + minuteAndSeconds;
  }

  return militaryTime;
}
