/*

Given a string representing a Roman numeral, write a function to compute the Arabic numerical equivalent.
For example `roman_to_arabic("MDCCLXXVI")` should return `1776`.

*/

function romanToArabic(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currValue = values[roman[i]];
    const nextValue = values[roman[i + 1]];
    total += currValue < nextValue ? -currValue : currValue;
  }

  return total.toString();
};

/*

Python solution

def romanToArabic(roman):
  values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  prev, total = 0, 0

  for char in roman:
    currValue = values[char]
    if prev < currValue:
      total += -2 * prev + currValue
    else:
     total += currValue
    prev = currValue
  
  return str(total)

*/
