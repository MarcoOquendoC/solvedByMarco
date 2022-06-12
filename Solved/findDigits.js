function findDigits(n) {
  //https://www.hackerrank.com/challenges/find-digits/problem
  let arr=[...n.toString()]
  let accum=0
  for (let i=0;i<arr.length;i++){
      if(arr[i]!=0 && n%parseInt(arr[i])==0){
          accum++
      }//end if
  }//end for
  return accum
  //findDigits(1012)
}
