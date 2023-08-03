// let me know if it is dificult to read
const level3 = {
  L3E1() {
    // level 3
    // slide 3
    // Exercise 1
    for (let i = 102; i >= 27; i -= 3) {
      console.log(i);
    }
  },
  L3E2() {
    // Level 3
    // Slide 5
    // Exercise 2
    const arr = [];
    for (let i = 3; i <= 12; i++) {
      arr.push(i);
    } // end for
    console.log(arr);
  },
  L3E3(x, y) {
    // Level 3
    // Slide 7
    // Exercise 3
    const arr = [];
    for (let i = x; i <= y; i++) {
      arr.push(i);
      if (i >= 3 && i <= 7) {
        console.log(arr[i - 1]);
      } // end if
    } // end for
    return arr;
  },
  L3E4() {
    // Level 3
    // Slide 8
    // Exercise 4
    const arr = [];
    for (let i = 1; i <= 15; i++) {
      arr.push(i);
      if (i < 3 || i > 7) {
        console.log(arr[i - 1]);
      } // end if
    } // end for
  },
  L3E5() {
    // Level 3
    // Slide 10
    // Exercise 5
    const x = 'Microverse';
    console.log(x.substring(0, 5));
    console.log(x.substring(5));
  },
  L3E6() {
    // Level 3
    // Slide 12
    // Exercise 6
    const arr = [];

    for (let i = 1; i <= 13; i++) {
      arr.push(i);
    } // end for

    if (arr.includes(13)) {
      console.log('Found it!');
    } // end if
    else {
      console.log('Not found');
    } // end else
  },
  L3E7() {
    // Level 3
    // Slide 14
    // Exercise 7
    const arr = [];
    const newArr = [];

    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    } // end for

    // filter
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] >= 3 && arr[i] <= 8) {
        newArr.push(arr[i]);
      } // end if
    } // end for

    console.log(arr);
    console.log(newArr);
  },
  L3E8() {
    // Level 3
    // Slide 16
    // Exercise 8
    const bigArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    for (let i = bigArr.length - 1; i >= 0; i--) {
      for (let j = bigArr[i].length - 1; j >= 0; j--) {
        console.log(bigArr[i][j]);
      } // end for
    } // end for
  },
  L3E9() {
    // Level 3
    // Slide 18
    // Exercise 9
    const bigArray = [];
    let externalCounter = 9;
    for (let i = 0; i < 3; i++) {
      const littleArray = [];
      for (let j = 0; j < 3; j++) {
        littleArray.push(externalCounter);
        externalCounter--;
      } // end j for
      bigArray.push(littleArray);
    } // end i for
    console.log(bigArray);
  },
  L3E10() {
    // Level 3
    // Slide 20
    // Exercise 10
    function mult(a, b) {
      console.log(a * b);
    } // end mult function
    mult(5, 3); // run mult function

    function sayHello(name) {
      console.log('Hello', name);
    } // end sayHello function
    sayHello('Marco'); // run sayHello function
  },
  L3E11() {
    // Level 3
    // Slide 22
    // Exercise 11
    let outputArray = [];
    function exercise11(a, b, name) {
      const array = [];

      function mult(a, b) {
        return `Your result is ${a * b}`;
      } // end mult function
      array.push(mult(a, b));

      function sayHello(name) {
        return `Hello ${name}`;
      } // end sayHello function
      array.unshift(sayHello(name));

      return array;
    } // end exercise11 function
    outputArray = (exercise11(8, 2, 'Vinicio'));
    console.log(outputArray);
  },
  L3E12() {
    // Level 3
    // Slide 24
    // Exercise 12
    const arr = [1, 2, 1, 2];

    function reverseTranslate(inputArray) {
      function reverse(arr) {
        const reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          reversed.push(arr[i]);
        }// end for
        return reversed;
      }// end reverse function

      function translate(arr) {
        const translated = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 1) {
            translated.push('one');
          }
          if (arr[i] === 2) {
            translated.push('two');
          }
          if (arr[i] === 3) {
            translated.push('three');
          }
          if (arr[i] === 4) {
            translated.push('four');
          }
        }
        return translated;
      }// end translate function

      const yarra = reverse(inputArray);
      const detalsnart = translate(yarra);
      return detalsnart;
    }// end reverseTranslate function

    const detalsnart = reverseTranslate(arr);
    console.log(detalsnart);
  },
};// end object level3
