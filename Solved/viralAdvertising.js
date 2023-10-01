function viralAdvertising(n) {
  // https://www.hackerrank.com/challenges/strange-advertising/problem
  let accum = 0n;
  let currentDayLikes = 2n;
  for (let i = 0n; i < n; i++) {
    accum += currentDayLikes;
    currentDayLikes = currentDayLikes * 3n / 2n;
  }
  return accum;
}
