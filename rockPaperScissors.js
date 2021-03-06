/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(n = 3) {
  var output = [''];

  var rpsIterator = function(input) {
    return [input + 'R', input + 'P', input + 'S'];
  };

  for (let i = 0; i < n; i++) {
    var current = [];
    for (let j = 0; j < output.length; j++) {
      current = current.concat(rpsIterator(output[j]));
    }
    output = current;
  }

  return output;
};