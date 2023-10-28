function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // https://www.hackerrank.com/challenges/apple-and-orange/problem
  function isElementIn(element) {
    if (s <= element && element <= t) { return 1; } return 0;
  }
  let accumApples = 0;
  let accumOranges = 0;
  apples.forEach((element) => accumApples += isElementIn(element + a));
  oranges.forEach((element) => accumOranges += isElementIn(element + b));
  console.log(accumApples);
  console.log(accumOranges);
  // countApplesAndOranges(3,7,2,8,[1,1],[-1,-1])
}
console.log('smile');
