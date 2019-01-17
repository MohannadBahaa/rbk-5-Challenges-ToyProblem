// Array Middle
// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.

function middle(numbers) {
  // Write your code here, and
  // return your final answer.
  var avg = 1;
  var mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[mid] + numbers[mid - 1]) / 2;
  } else {
    return numbers[mid];
  }
}
