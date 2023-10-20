function chocolateFeast(n = 15, c = 3, m = 2) {
  // https://www.hackerrank.com/challenges/chocolate-feast/problem
  let chocolats = Math.floor(n / c);
  let w = chocolats;
  let result = chocolats;
  while (w >= m) {
    chocolats = Math.floor(w / m);
    w = w % m + chocolats;
    result += chocolats;
  }
  return result;
}
console.log('smile');
