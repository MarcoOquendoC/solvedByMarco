function simpleArraySum(ar) {
//https://www.hackerrank.com/challenges/simple-array-sum/problem
    //console.log(ar)
    let x = 0
    let i=0
    while (i<ar.length){
        x += ar[i]
        i++
    }//end while
  return x
  //simpleArraySum([1,2,3,4,5,6])
}
