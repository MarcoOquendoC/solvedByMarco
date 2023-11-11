function getGrade(score) {
// Day 2: Conditional Statements: If-Else
// https://www.hackerrank.com/challenges/js10-if-else/problem
  let grade;
  if (score > 25 && score <= 30) { grade = 'A'; } else
  if (score > 20 && score <= 25) { grade = 'B'; } else
  if (score > 15 && score <= 20) { grade = 'C'; } else
  if (score > 10 && score <= 15) { grade = 'D'; } else
  if (score > 5 && score <= 10) { grade = 'E'; } else
  if (score >= 0 && score <= 5) { grade = 'F'; }
  return grade;
  // getGrade(26)
}
console.log('smile');
