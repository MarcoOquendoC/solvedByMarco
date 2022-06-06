function processData(input) {
  //https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
    //Enter your code here
    let arr = input.split('\n')
    let dir = []
    let i=1
    while(i<=arr[0]){
        let elem = {}
        let y=arr[i].split(' ')
        elem.name = y[0]
        elem.number = y[1]
        dir.push(elem)
        i++
    }
    while(i<arr.length){
        let x=dir.find(e => e.name===arr[i])
        console.log(x?x.name+'='+x.number:'Not found')
        i++
    }
    //console.log(arr)
    //console.log(dir)
} 
