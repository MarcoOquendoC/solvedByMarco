function person(initialAge) {
  // https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true
  // Add some more code to run some checks on initialAge
  let age = initialAge;
  const under0 = age < 0; // Age is not valid, setting age to 0.
  if (under0) {
    console.log('Age is not valid, setting age to 0.');
    age = 0;
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    const under13 = age < 13; // You are young.
    const teen = age >= 13 && age < 18; // You are a teenager. 13<=age<18
    const adult = age >= 18; // You are old.
    console.log(
      under13 ? 'You are young.'
        : teen ? 'You are a teenager.'
        /* adult? */: 'You are old.',
    );
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age++;
  };
}
