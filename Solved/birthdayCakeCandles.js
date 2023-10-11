function birthdayCakeCandles(candles) {
  // https://www.hackerrank.com/challenges/birthday-cake-candles/problem
  let tallest = candles[0];
  let count = 1;
  let i = 1
  while(i<candles.length) {
    if(candles[i] < tallest) {
      i++;
    } else if(candles[i] > tallest) {
      tallest = candles[i]
      i++;
    } else if(candles[i] === tallest) {
      count++;
      i++;
    }// end else
  }// end while
 console.log(count);
 // birthdayCakeCandles([3,2,3,1,2,3,3,2,1])
}
console.log('smile');
