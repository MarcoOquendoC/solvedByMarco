function staircase(n) {
  // https://www.hackerrank.com/challenges/staircase/problem
  const space = ' '; const hash = '#';
  for (let i = n - 1, j = 1; j <= n; i--, j++) {
    console.log(space.repeat(i) + hash.repeat(j));
  }
}
