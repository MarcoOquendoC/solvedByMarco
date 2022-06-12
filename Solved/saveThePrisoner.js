function saveThePrisoner(n, m, s) {
  //https://www.hackerrank.com/challenges/save-the-prisoner/problem
  return (m+s-1)%n==0? n : (m+s-1-Math.floor((m+s-1)/n)*n)
}
