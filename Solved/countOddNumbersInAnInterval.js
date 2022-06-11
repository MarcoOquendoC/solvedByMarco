function countOddNumbersInAnInterval(low,high){
  //https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/
    let x=0
    if(high%2!=0 && low%2!=0){
        x = (high-low+2)/2
    }else{
        x = Math.ceil((high-low)/2)
    }//end else
    return x
  //console.log(countOddNumbersInAnInterval(3,7))
}
