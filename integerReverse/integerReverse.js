/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

// NON-RECURSIVE SOLUTION

const reverseInteger = (number) => {
  let output = 0;
  while (number > 0) {
    output = output * 10 + number % 10;
    number = Math.floor(number / 10);
  }
  return output;
}

// RECURSIVE SOLUTION

// function reverseInteger(number, powerOfTen){

//   if (number < 10) {
//     return number;
//   }

//   if (powerOfTen === undefined) {
//     powerOfTen = 0;
//     while (number / Math.pow(10, powerOfTen + 1) > 1) {
//       powerOfTen++;
//     }
//   }

//   for (let i = 0; i < 10; i++) {
//     if ((number - i) % 10 === 0) {
//       return i * Math.pow(10, powerOfTen) + reverseInteger((number - i) / 10, powerOfTen - 1);
//     }
//   }
// };
