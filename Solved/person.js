function person(initialAge){
  // https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true
    // Add some more code to run some checks on initialAge
    let age = initialAge;
    let under0 = age < 0 // Age is not valid, setting age to 0.
    if(under0){
        console.log('Age is not valid, setting age to 0.');
        age = 0;
    }
      this.amIOld = function() {
       // Do some computations in here and print out the correct statement to the console
       let under13 = age < 13 // You are young.
       let teen = 13 <= age && age < 18 // You are a teenager. 13<=age<18
       let adult = 18 <= age // You are old.
       console.log(
           under13 ? 'You are young.' :
           teen ? 'You are a teenager.' :
           /*adult?*/'You are old.'
           )
      };
   this.yearPasses = function(){
          // Increment the age of the person in here
          age++;
   };
}
