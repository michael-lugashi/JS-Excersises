'use strict';
const a = 1;
const b = -6;
const c = 9; // stands for x**2 - 6*x + 9 = 0
let solutionA;
let solutionB;
// your code goes here
function quadraticEquation(a, b, c) {
  solutionA = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  solutionB = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  return solutionA + ' ' + solutionB;
}
console.log(quadraticEquation(a, b, c))
console.log(quadraticEquation(1, -2, -16))