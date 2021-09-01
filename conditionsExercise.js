'use strict';
//city variables
const telAviv = [false, true, true, false];
const acre = [false, true, false, true];
const katzrin = [false, false, false, true];
const zikim = [false, true, false, false];
const musmus = [false, false, false, false];

//this function returns a city based on your input
function guessCity(capital, coastal, famous, ancient) {
  const guess = [capital, coastal, famous, ancient];
  if (telAviv.every((val, index) => val === guess[index])) return 'Tel Aviv';
  if (acre.every((val, index) => val === guess[index])) return 'Acre';
  if (katzrin.every((val, index) => val === guess[index])) return 'Katzrin';
  if (zikim.every((val, index) => val === guess[index])) return 'Zikim';
  if (musmus.every((val, index) => val === guess[index])) return 'Musmus';
  return 'Not a City Option';
}

//below I test every case
console.log(guessCity(false, true, true, false));
console.log(guessCity(false, true, false, true));
console.log(guessCity(false, false, false, true));
console.log(guessCity(false, true, false, false));
console.log(guessCity(false, false, false, false));
console.log(guessCity(false, false, true, false));
