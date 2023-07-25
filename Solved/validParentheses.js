// https://leetcode.com/problems/valid-parentheses/description/
// También se puede hacer con switch

var isValid = function(s) {
  const closing = (str) => {
    if (str === '{') return '}';
    if (str === '(') return ')';
    if (str === '[') return ']';
  }

  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.unshift(s[i]);
    } else if(s[i] === closing(stack[0])) {
      stack.shift();
    } else if(s[i] === ']' || s[i] === '}' || s[i] === ')') {
      return false;
    }
  }

  if (stack.length === 0) return true;
  return false;
};

let s = "(";
console.log(isValid(s));
