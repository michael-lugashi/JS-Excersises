'use strict';
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
// your code goes here
//The range of the second half year grades
const halfYearGrades = grades.slice(grades.length / 2);
halfYearGrades.sort(function (a, b) {return a - b;});
const halfYearRange =
  halfYearGrades[halfYearGrades.length - 1] - halfYearGrades[0];
//The range of all the grades
grades.sort(function (a, b) {return a - b;});
const range = grades[grades.length - 1] - grades[0];
//median
let median;
if (grades.length % 2 === 1) median = grades[grades.length / 2 - 0.5];
else median = (grades[grades.length / 2] + grades[grades.length / 2 - 1]) / 2;

console.log(
  'Stats:\n\tRange: ' +
    range +
    '\n\tMedian: ' +
    median +
    '\n\tHalf Range: ' +
    halfYearRange
);
