function timeConversion(s) {
//https://www.hackerrank.com/challenges/time-conversion/problem
  let lastTwo = s.slice(-2)
  let firstTwo = s.slice(0,2)
  let other = s.slice(2,8)
  if(lastTwo === "AM" && firstTwo == "12"){
    firstTwo = "00"
  } else 
  if(lastTwo === "PM" && firstTwo != "12"){
    firstTwo = parseInt(firstTwo)+12
  }//end else
  //console.log(firstTwo + other)
  return (firstTwo + other)
  //timeConversion("12:00:00AM")
}
