const fibonachi = (counter, result = [0]) => {
  if (counter <= 1) {
    return result;
  }
  const len = result.length - 1;
  const x = result[len - 1] !== undefined ? result[len - 1] : 1;

  result.push(
    result[len] + (result[len - 1] !== undefined ? result[len - 1] : 1)
  );
  return fibonachi(counter - 1, result);
};

console.log(fibonachi(8));
