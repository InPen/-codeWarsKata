// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers) {
  let sqrt = [];
  for (let i = 0; i < numbers.length; i++) {
    sqrt.push(numbers[i] * numbers[i]);
  }

  return sqrt.reduce((accum, current) => accum + current, 0);
}