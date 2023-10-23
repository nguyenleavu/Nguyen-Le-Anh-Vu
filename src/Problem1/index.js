// Provide 3 unique implementations of the following function in JavaScript.
// **Input**: `n` - any integer
// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

var sum_to_n_a = function (n) {
  return n.reduce((sum, number) => sum + number, 0);
};

var sum_to_n_b = function (n) {
  let sum = 0;
  for (let number of n) {
    sum += number;
  }
  return sum;
};

var sum_to_n_c = function (n) {
  let sum = 0;
  let i = 0;
  while (i < n.length) {
    sum += n[i];
    i++;
  }
  return sum;
};
