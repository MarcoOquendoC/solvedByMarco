function findDay(myDate='10/11/2009') {
  // https://www.hackerrank.com/contests/javascript-challenges/challenges
  // Return day for date myDate(MM/DD/YYYY)
  // Note that myDate contains the date in string format
  let date=new Date(myDate)
  let weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  console.log(weekDays[date.getDay()])
}
