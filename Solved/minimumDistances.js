function minimumDistances(a) {
  //https://www.hackerrank.com/challenges/minimum-distances/problem
    let output=[]
    let hash ={}
    for (const i in a){
      let key = a[i]
      hash[key]=0
    }//end for
    for (const i in a){
      let key = a[i]
      hash[key]+=1
    }//end for
    for(const x in hash){
      if(hash[x]>1){
        output.push(a.lastIndexOf(parseInt(x))-a.indexOf(parseInt(x)))
      }//end if
    }//end for
    if (output.length == 0){
      return -1
    }
    return Math.min(...output)
  //console.log(minimumDistances([7,1,1,2,3,4,7]))
  }
