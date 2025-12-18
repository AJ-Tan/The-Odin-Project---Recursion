const fibonachi = (counter, result = [0]) => {
  if(counter <= 1) return result;
  const len = result.length -1;
  return fibonachi(counter - 1, [...result, result[len] + (result[len - 1] ?? 1)])
}

console.log(fibonachi(8));
