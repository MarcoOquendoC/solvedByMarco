function convertToRoman(num) {
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
  // units
  const u = {
    u1: 'I',
    u2: 'II',
    u3: 'III',
    u4: 'IV',
    u5: 'V',
    u6: 'VI',
    u7: 'VII',
    u8: 'VIII',
    u9: 'IX',
    u0: '',
  };

  // tens
  const ten = {
    u1: 'X',
    u2: 'XX',
    u3: 'XXX',
    u4: 'XL',
    u5: 'L',
    u6: 'LX',
    u7: 'LXX',
    u8: 'LXXX',
    u9: 'XC',
    u0: '',
  };

  // hundreds
  const hun = {
    u1: 'C',
    u2: 'CC',
    u3: 'CCC',
    u4: 'CD',
    u5: 'D',
    u6: 'DC',
    u7: 'DCC',
    u8: 'DCCC',
    u9: 'CM',
    u0: '',
  };

  // thousands
  const th = {
    u1: 'M',
    u2: 'MM',
    u3: 'MMM',
  };

  const steps = [u, ten, hun, th];

  let result = '';
  const arrNum = [...num.toString()];
  const loops = arrNum.length;

  for (let i = 0; i < loops; i += 1) {
    const digit = arrNum.pop();
    result = steps[i][`u${digit}`] + result;
  }

  return result;
}

console.log(convertToRoman(3999)); // MMMCMXCIX
console.log('smile');
