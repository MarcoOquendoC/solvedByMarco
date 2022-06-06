function caesarCipher(s, k) {
    //https://www.hackerrank.com/challenges/caesar-cipher-1/problem
    let arr=[]
    let alphabetLength=26
    k-= Math.floor(k/alphabetLength)*alphabetLength //if k>26
    //these are ascii codes
    let aCode=65, zCode=90, ACode=97, ZCode=122, hiphenCode=45
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
