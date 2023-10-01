function hurdleRace(k, height) {
  // https://www.hackerrank.com/challenges/the-hurdle-race/problem
  const max = Math.max(...height);
  if (max >= k) {
    return max - k;
  }
  return 0;
  // console.log(hurdleRace(2,[6,5,4,7,1,3,2,1]))
}
