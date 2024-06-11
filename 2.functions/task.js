function getArrayParams(...arr) {

  let min, max, avg, sum, count;

  min = max = avg = sum = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }

    if(arr[i] < min){
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
