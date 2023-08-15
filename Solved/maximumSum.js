function maximumSum(a, m) {
// NOT SOLVED BY ME
// https://www.hackerrank.com/challenges/maximum-subarray-sum/problem
var sums = [[-1, 0]];
    var maxSum = 0;
    for (var i=0; i<a.length; i++) {
        let z=(sums[i][1] + a[i]) % m
        sums.push([i, z]);
        // One can always compute the difference between 0 and the current element.
        maxSum = sums[i+1][1]>maxSum?sums[i+1][1]: maxSum;
    }
    // Sort the array by sum value.
    sums.sort(function(a,b){return a[1]-b[1];});
    
    for (var i=1; i<sums.length; i++) {
        var origIndex = sums[i][0]
        var curSum = sums[i][1]
        // Look for the first element with greater sum with index before it.
        var j = i+1;
        while (j<sums.length && (sums[j][0] >= origIndex || sums[j][1] == curSum)) {
            j++;
        }
        // If we found one, compute the negative difference and update max.
        if (j<sums.length) {
            maxSum = Math.max(curSum - sums[j][1] + m, maxSum);
        }
    }
    return maxSum;
}
