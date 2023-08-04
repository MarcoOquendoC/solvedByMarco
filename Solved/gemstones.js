function gemstones(arr) {
  // https://www.hackerrank.com/challenges/gem-stones/problem
  const hash = {};

  for (let i = 0; i < [...arr[0]].length; i++) {
    const key = [...arr[0]][i];
    hash[key] = 0;
  }// end for

  console.log(hash);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const key = [...arr[i]][j];
      if (hash[key] == i - 1) {
        hash[key] += 1;
      }// end if
    }// end for
  }// end for

  console.log(hash);

  const max = arr.length - 1;
  let accum = 0;
  for (const e in hash) {
    if (hash[e] == max) {
      accum++;
    }// end if
  }// end for
  return accum;
  // console.log(gemstones(["abcdef","abcdef","abcfde","abcfde","afbcde"]))
}
