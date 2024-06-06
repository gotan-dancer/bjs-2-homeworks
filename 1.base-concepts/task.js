"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b * b - 4 * a *c;

  if (d === 0) {
    arr = [ (-1) * b / ( 2 * a) ];
  }
  else if (d > 0){
      arr = [ (-b + Math.sqrt(d)) / ( 2 * a), (-b - Math.sqrt(d)) / ( 2 * a) ];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let percentNorm = percent / (100 * 12);

  let retFull = amount - contribution;

  let retMonth = retFull * (percentNorm + (percentNorm / (((1 + percentNorm)**countMonths) - 1)));

  return Number((retMonth * countMonths).toFixed(2));
}