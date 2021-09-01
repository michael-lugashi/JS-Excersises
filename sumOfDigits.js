'use strict';
const num = 123;
let sum = 0;
// your code goes here
const numStr = String(num);
for (let i = 0; i < 3; i++) sum += Number(numStr[i]);
console.log(sum);
