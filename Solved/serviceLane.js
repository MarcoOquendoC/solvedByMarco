function serviceLane(n, width, cases) {
  // https://www.hackerrank.com/challenges/service-lane/problem
  // "width" argument on line ~58
  const arr = [];
  cases.forEach((e) => arr.push(Math.min(...width.slice(e[0], e[1] + 1))));
  return arr;
}
console.log('smile');
