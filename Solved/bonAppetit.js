function bonAppetit(bill,k, b) {
    //https://www.hackerrank.com/challenges/bon-appetit/problem
    let sum=0
    for(let i=0; i<bill.length; i++){
        sum+=bill[i]
    }
    sum-=bill[k]
    if(sum/2==b){
        console.log('Bon Appetit')
    }else{
        console.log(b-sum/2)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
//previous Solution
function bonAppetit(bill,k, b) {
  //https://www.hackerrank.com/challenges/bon-appetit/problem
  let totalShared=0
  let x=bill.length
  let i=0
  while(i<x){
    if(i!=k){
        totalShared += bill[0]
        bill.shift()
        i++
    } else {
        bill.shift()
        i++
    }//end else
  }//end while
  if(totalShared/2 === b){
    console.log("Bon Appetit")
  } else {
    console.log((b - totalShared/2))
  }//end else
  //console.log(bonAppetit([3,10,2,9],1,12))
  }
}
