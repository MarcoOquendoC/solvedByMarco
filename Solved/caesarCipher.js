function caesarCipher(s, k) {
    //https://www.hackerrank.com/challenges/caesar-cipher-1/problem
    let arr=[]
    let alphabetLength=26
    k-= Math.floor(k / alphabetLength) * alphabetLength // if k>26
    // these are ascii codes
    let aCode = 97, zCode = 122, ACode = 65, ZCode = 90, hiphenCode = 45
    for(let i=0;i<s.length;i++){
        let ascii = s.charCodeAt(i)
        if(aCode<=ascii && ascii<=zCode-k || ACode<=ascii && ascii<=ZCode-k){
            arr.push(String.fromCharCode(ascii+k))
        }else if(zCode-k<ascii && ascii<=zCode || ZCode-k<ascii && ascii<=ZCode){
            arr.push(String.fromCharCode(ascii+k-alphabetLength))
        }else {
            arr.push(s.charAt(i))
        }//end else
    }//end for
    return arr.join('')
  }
}

function rot13(str) {
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
  let arr = str.split('')
  let A=65, Z=90, a=97, z=122
  let asciiArr = arr.map(e => {
    return (
      e.charCodeAt(0) >= A && e.charCodeAt(0) < A+13 ? e.charCodeAt(0) + 13 : 
      e.charCodeAt(0) > Z-13 && e.charCodeAt(0) <= Z ? e.charCodeAt(0) - 13 :
      e.charCodeAt(0) >= a && e.charCodeAt(0) < a+13 ? e.charCodeAt(0) + 13 : 
      e.charCodeAt(0) > z-13 && e.charCodeAt(0) <= z ? e.charCodeAt(0) - 13 : 
      e.charCodeAt(0)
    )
  });
  let strArr = asciiArr.map(e => String.fromCharCode(e))
  let ascii = String.fromCharCode(str.charCodeAt(0)-13)
  return strArr.join('');
}
console.log('smile');
