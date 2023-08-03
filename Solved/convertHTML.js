function convertHTML(str) {
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
  const arr = [...str];
  const ar = [];
  arr.forEach((element) => ar.push(pairs(element)));
  const st = ar.join('');
  return st;

  function pairs(x) {
    if (x == '&') return '&amp;';
    if (x == '<') return '&lt;';
    if (x == '>') return '&gt;';
    if (x == '"') return '&quot;';
    if (x == "'") return '&apos;';
    return x;
  }// pairs(x)
  // convertHTML("Dolce & Gabbana");
}
