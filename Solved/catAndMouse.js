function catAndMouse(x, y, z) {
  // https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
  return;
  Math.abs(y - z) > Math.abs(x - z) ? 'Cat A'
    : Math.abs(x - z) > Math.abs(y - z) ? 'Cat B'
      : 'Mouse C';
}
