/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  let whole = Math.floor(number);
  let numerator = number - whole;
  let denominator = 1;
  let power = String(number).length - String(whole).length;

  numerator *= Math.pow(10, power);
  numerator = Math.floor(numerator);
  denominator *= Math.pow(10, power);

  let leastCommonMultiple = 2;

  while (numerator >= leastCommonMultiple) {
    if (numerator % leastCommonMultiple === 0 && denominator % leastCommonMultiple === 0) {
      numerator /= leastCommonMultiple;
      denominator /= leastCommonMultiple;
    } else {
      leastCommonMultiple += 1;
    }
  }
  return (whole * denominator + numerator) + '/' + denominator;
};
