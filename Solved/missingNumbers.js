function missingNumbers(arr,brr){
  //https://www.hackerrank.com/challenges/missing-numbers/problem
  let hash = {}
  for(let i = 0 ; i< brr.length ; i++){
    let key = brr[i]
    hash[key] = 0
  }//end for
  
  for(let i=0 ; i<brr.length ; i++){
    let key = brr[i]
    hash[key] += 1
  }//end for
  
  for(let i = 0 ; i<arr.length ; i++ ){
    let key = arr[i]
    hash[key] -=1
  }//end for
  
  let output = []
  for (const e in hash){
    //console.log(e)
    //console.log(hash[e])
    if(hash[e] != 0){
      output.push(e)
    }//end if
  }//end for
  
  return output
  //console.log(missingNumbers([7,2],[7,2,5]))
}
