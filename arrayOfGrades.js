'use strict';
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
// your code goes here
//The range of the second half year grades
function halfYearRange(halfYearGrades) {
  halfYearGrades.sort((a, b) => a - b);
  return halfYearGrades[halfYearGrades.length - 1] - halfYearGrades[0];
}
//The range of all the grades
function range(grades) {
  grades.sort((a, b) => a - b);
  return grades[grades.length - 1] - grades[0];
}
//median
function median(grades) {
  grades.sort((a, b) => a - b);
  if (grades.length % 2 === 1) return grades[grades.length / 2 - 0.5];
  return (grades[grades.length / 2] + grades[grades.length / 2 - 1]) / 2;
}

console.log(
  'Stats:\n\tRange: ' +
    range(grades.slice()) +
    '\n\tMedian: ' +
    median(grades.slice()) +
    '\n\tHalf Range: ' +
    halfYearRange(grades.slice(grades.length / 2))
);
