// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Examples
// Input	Output
// array:
// [ 1, 2, 3 ]	6
// array:
// [ 4, -1, 5 ]	8
// array:
// [ 10, -11, 11 ]	11
// array:
// [ 1, 2, 3, -6, 4, 5, 6 ]

function sumArray(array) {
  // Write your code here, and
  // return your final answer.
  var maxNum = Number.NEGATIVE_INFINITY;
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    var maxNum = Math.max(sum, maxNum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxNum;
}
