/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// 3, 6, 9, 12, 15, 18

Number.prototype.toEnglish = function () {
  let current = this;
  let words = '';
  const power = Math.floor(Math.log10(current));

  if (power / 3 >= 1) {
    let next = current.toPrecision((power % 3) + 1);
    let remainder = Number(current - next);
    next = Number(next / Math.pow(10, Math.floor(power / 3) * 3));
    words += next.toEnglish() + ' ' + numbersToPlace[Math.pow(10, Math.floor(power / 3) * 3)] + ' ' + remainder.toEnglish();
  } else if (Math.log10(current) > 1.31) {

  } else {
    words += numbersToWords[current];
  }
  
  return words;
};


console.log(Number(5500001).toEnglish())
