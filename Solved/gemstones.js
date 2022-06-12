function gemstones(arr) {
  //https://www.hackerrank.com/challenges/gem-stones/problem
  let hash = {}
  
  for (let i = 0 ; i<[...arr[0]].length ; i++ ){
    let key = [...arr[0]][i]
    hash[key] = 0
  }//end for
  
  console.log(hash)
  
  for(let i=1 ; i<arr.length ; i++){
    for (let j = 0 ; j<arr[i].length ; j++){
      let key = [...arr[i]][j]
      if(hash[key]==i-1){
      hash[key] += 1
      }//end if
    }//end for
  }//end for
  
  console.log(hash)
  
  let max = arr.length-1
  let accum = 0
  for (const e in hash){
    if(hash[e] == max){
      accum ++
    }//end if
  }//end for
  return accum
  //console.log(gemstones(["abcdef","abcdef","abcfde","abcfde","afbcde"]))
}
