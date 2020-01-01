/*

Write a generic function to compute various scenarios for the following optimization problem:
A farmer owns X acres of land. She profits P1 dollars per acre of corn and P2 dollars per acre of oats.
Her team has Y hours of labor available. The corn takes H1 hours of labor per acre and oats require H2 hours of labor per acre.
How many acres of each can be planted to maximize profits?

Test the function for the following cases:
  a) X = 240, Y = 320, P1 = $40, P2 = $30, H1 = 2, H2 = 1
  b) X = 300, Y = 380, P1 = $70, P2 = $45, H1 = 3, H2 = 1
  c) X = 180, Y = 420, P1 = $65, P2 = $55, H1 = 3, H2 = 2

*/

function getOptimalCrops(x, y, p1, p2, h1, h2) {
  // find critical points under constraints described by c >= 0, o >= 0, c + o <= x, c*h1 + o*h2 <= y
  const criticalPoints = [];
  // at c = 0, o is described by the lesser of x (from c + o <= x) or y/h2 (from c*h1 + o*h2 <= y)
  criticalPoints.push([0, Math.min(x, y / h2)]);
  // at o = 0, c is described by the lesser of x (from c + o <= x) or y/h1 (from c*h1 + o*h2 <= y)
  criticalPoints.push([Math.min(y / h1, x), 0]);
  // third critical point is at intersection of c + o <= x and c*h1 + o*h2 <= y, if exists
  // does not exist if intersection is at c < 0 or o < 0 or h1 = h2
  if (h1 !== h2) {
    const c = (y - x * h2) / (h1 - h2);
    const o = (y - x * h1) / (h2 - h1);
    if (c > 0 && o > 0) criticalPoints.push([c, o]);
  }

  // evaluate profit optimization expression P(c,o) = c * p1 + o * p2 at each critical point to find optimal resource allocation
  let [ cBest, oBest, max ] = [ 0, 0, 0 ];
  for (const [ corn, oats ] of criticalPoints) {
    const curr = corn * p1 + oats * p2;
    if (curr > max) [ cBest, oBest, max ] = [ corn, oats, curr ];
  }

  // return optimal point
  return [cBest, oBest];
};

const a = [ 240, 320, 40, 30, 2, 1 ];
const b = [ 300, 380, 70, 45, 3, 1 ];
const c = [ 180, 420, 65, 55, 3, 2 ];
const d = [ 180, 560, 65, 55, 3, 2 ];

console.log(getOptimalCrops(...a)); // [80, 160]
console.log(getOptimalCrops(...b)); // [40, 260]
console.log(getOptimalCrops(...c)); // [60, 120]
console.log(getOptimalCrops(...d)); // [180, 0]

/*

Python solution

def getOptimalCrops(x, y, p1, p2, h1, h2):
  # find critical points under constraints described by c >= 0, o >= 0, c + o <= x, c*h1 + o*h2 <= y
  criticalPoints = []
  # at c = 0, o is described by the lesser of x (from c + o <= x) or y/h2 (from c*h1 + o*h2 <= y)
  criticalPoints.append([0, min(x, y / h2)])
  # at o = 0, c is described by the lesser of x (from c + o <= x) or y/h1 (from c*h1 + o*h2 <= y)
  criticalPoints.append([min(y / h1, x), 0])
  # third critical point is at intersection of c + o <= x and c*h1 + o*h2 <= y, if exists
  # does not exist if intersection is at c < 0 or o < 0 or h1 = h2
  if h1 != h2:
    c = (y - x * h2) / (h1 - h2)
    o = (y - x * h1) / (h2 - h1)
    if c > 0 and o > 0:
      criticalPoints.append([c, o])

  # evaluate profit optimization expression P(c,o) = c * p1 + o * p2 at each critical point to find optimal resource allocation
  cBest, oBest, max = 0, 0, 0

  for [corn, oats] in criticalPoints:
    curr = corn * p1 + oats * p2
    if curr > max:
      cBest, oBest, max = corn, oats, curr

  # return optimal point
  return [cBest, oBest]

*/
