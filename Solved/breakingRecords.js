function breakingRecords(scores) {
  // https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
  let highest = scores[0];
  let lowest = scores[0];
  let Lcount = 0;
  let Hcount = 0;
  let i = 1;
  while(i < scores.length) {
  if(lowest <= scores[i] && scores[i] <= highest) {
    i += 1;
  } else if(scores[i] > highest) {
    highest = scores[i];
    Hcount++;
    i++;
  } else if(scores[i] < lowest) {
  lowest = scores[i];
  Lcount++;
  i++;
  }// end else
  }// end while
    console.log([Hcount, Lcount]);
    return ([Hcount, Lcount]);
  // breakingRecords([3,2,5,4,6]);
  }
}
console.log('smile');
