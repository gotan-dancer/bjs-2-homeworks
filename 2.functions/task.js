function getArrayParams(...arr) {

  let min, max, avg, sum, count;

  min = max = avg = sum = arr[0];

  for(let i = 1; i < arr.length; i++) {
  
    if(arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if(arr.length === 0) return 0;

  let sum = 0;

  for(let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

function differenceMaxMinWorker(...arr) {

  if(arr.length === 0) return 0;

  let min, max;

  min = max = arr[0];

  for(let i = 1; i < arr.length; i++) {

    if(arr[i] > max) max = arr[i];

    if(arr[i] < min) min = arr[i];

  }

  return (max - min);

}

function differenceEvenOddWorker(...arr) {

  if(arr.length === 0) return 0;

  let sumEvenElement, sumOddElement;

  sumEvenElement = sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {

    if((arr[i] / 2) === Math.floor(arr[i] / 2)) {

      sumEvenElement += arr[i];

    } else {
      
      sumOddElement += arr[i];

    }

  }

  return (sumEvenElement - sumOddElement);

}

function averageEvenElementsWorker(...arr) {

  if(arr.length === 0) return 0;

  let sumEvenElement, countEvenElement;

  sumEvenElement = countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {

    if((arr[i] / 2) === Math.floor(arr[i] / 2)){

      sumEvenElement += arr[i];

      countEvenElement++;
    }

  }

  return Number( (sumEvenElement / countEvenElement).toFixed(2) );

}

function makeWork (arrOfArr, func) {

}
