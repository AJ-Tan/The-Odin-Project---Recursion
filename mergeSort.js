let countIteration = 0;

const mergeSort = (arr, result = []) => {
  if(arr.length <= 0) return result;

  const currentNum = arr.shift();

  if(result.length <= 0) {
    result.push(currentNum);
  } else {
    for(let i = 0; i < result.length; i++) {
      countIteration += 1;
      if(currentNum < result[i]) {
        result.splice(i, 0, currentNum);
        break;
      }
      if(i === result.length - 1) {
        result.push(currentNum);
        break;
      }
    }
  }

  return mergeSort(arr, result);
}

console.log(mergeSort([3,2,4,1,0,32,1,1,5,99,2,1]))
console.log(countIteration);
