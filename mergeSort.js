let countIteration = 0;

const mergeSort = (arr) => {
  if(arr.length === 1) return arr;
  const midLength = Math.round(arr.length / 2);
  const [leftNode, rightNode] = [mergeSort(arr.slice(0, midLength)), mergeSort(arr.slice(midLength))];
  
  const len = leftNode.length-1;
  rightNode.forEach(rightValue => {
    countIteration++;
    const findIndex = leftNode.findIndex(leftValue => leftValue > rightValue);

    if(findIndex < 0) {
      leftNode.push(rightValue);
    } else if(findIndex === 0) {
      leftNode.unshift(rightValue);
    } else {
      leftNode.splice(findIndex, 0, rightValue);
    }
  })

  return leftNode;
}

console.log(mergeSort([3,2,4,1,0,32,1,1,5,99,2,1]))
console.log(countIteration);
