function processData(input) {
    // https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
    let arr = input.split('\n').map(e=> e.split(' '));
    const N = +arr[0]
    let dir = {}
    let i=1
    while(i <= N){
        let [name, number]=arr[i]
        dir[name]=number
        i++
    }
    while(i<arr.length){
        const [name,] = arr[i]
        console.log(dir[name]? name+'='+dir[name]:'Not found')
        i++
    }
}
