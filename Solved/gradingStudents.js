function gradingStudents(grades) {
  //https://www.hackerrank.com/challenges/grading/problem
    let g=grades
    for(const i in g){
        g[i]+=toAdd(g[i])
    }
    function toAdd(num){
        if(num<38)return 0  //Code to get the last digit "num.toString().slice(-1)"
        if(num.toString().slice(-1)==3){return 2}
        if(num.toString().slice(-1)==4){return 1}
        if(num.toString().slice(-1)==8){return 2}
        if(num.toString().slice(-1)==9){return 1}
        return 0
    }
    return g
  //console.log(gradingStudents(73,67,38,33))
}
