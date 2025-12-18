const arr = [3, 2, 1, 13, 8, 5, 1, 0];

const mergeSort = (arr, i = 0) => {
  if (i >= arr.length - 1) {
    return arr;
  }
  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    arr = mergeSort(arr, 0);
  } else {
    arr = mergeSort(arr, i + 1);
  }
  return arr;
};

console.log(mergeSort(arr));
