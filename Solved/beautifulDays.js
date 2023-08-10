function beautifulDays(i, j, k) {
  // https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
  let arrFor = '';
  let arrRev = '';
  let a = 0;
  let b = 0;
  let result = 0;
  for (let p = i;p <= j; p ++){
      arrFor = [...p.toString()];
      arrRev = arrFor.reverse();
      a = parseInt(arrRev.join(''));
      b = Math.abs(a - p);
      result += b%k === 0 ? 1 : 0;
  }// end for
  return result;
  }
}
