
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  const firstVal = DIGIT_VALUES[romanNumeral[0]] || 0;
  if (romanNumeral.length > 1) {
    const secondVal = DIGIT_VALUES[romanNumeral[1]] || 0;
    if (firstVal < secondVal) {
      return secondVal - firstVal + translateRomanNumeral(romanNumeral.slice(2));
    } else {
      return firstVal + translateRomanNumeral(romanNumeral.slice(1));
    }
  }
  return firstVal;
}

// var translateRomanNumeral = function(romanNumeral) {
//   let value = 0;

//   const parseRoman = romanNumeral => {
//     const firstVal = DIGIT_VALUE[romanNumeral[0]];
//     if (romanNumeral.length > 1) {
//       const secondVal = DIGIT_VALUE[romanNumeral[1]];
//       if (firstVal < secondVal) {
//         return secondVal - firstVal + parseRoman(romanNumeral.slice(2));
//       } else {
//         return firstVal + parseRoman(romanNumeral.slice(1));
//       }
//     }
//     return firstVal;
//   }

// // decide if first numeral is additive or subtractive

// // subtractive if first numeral is smaller than second numeral

// // if no second numeral must be additive

// // calculate value

// // then iterate on remaining
//   return value;
// };
