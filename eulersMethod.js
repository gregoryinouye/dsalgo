/* 

 Given the differential equation f'(x) = x^x, write a function that uses Euler's method to approximate the value of f(x1),
 given an initial condition (x0, f(x0)) and the value of x1. 

*/

function eulersMethod(x0, y0, x1) {
  function diff(x) {
    return Math.pow(x, x);
  }
  
  // return f(x1), which is approximately equal to f(x0) + (x1 - x0) * f'(x0);
  return y0 + (x1 - x0) * diff(x0);
};


/*

Python solution

def eulersMethod(x0, y0, x1):
  return y0 + (x1 - x0) * x0 ** x0

*/
