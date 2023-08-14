function hurdleRace(k, height) {
  // https://www.hackerrank.com/challenges/the-hurdle-race/problem
  let max = Math.max(...height);
  if(max >= k){
    return max - k;
  } else {
    return 0;
  }// end else
  // console.log(hurdleRace(2,[6,5,4,7,1,3,2,1]))
}
