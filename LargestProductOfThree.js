// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples
// Input	Output
// array:
// [ 2, 1, 3, 7 ]	42
// array:
// [ 0, 2, 3 ]	0

function largestProductOfThree(array) {
  array.sort(function(a, b) {
    //sort the array;
    return a - b;
  });
  //store the length in varible
  var x = array.length - 1;
  // calculate the pro for the last 3 number cuse we sorted ;
  var pro = array[x] * array[x - 1] * array[x - 2];
  // may ther is mainus number in the first with pro with + number it will be highr
  var proFirst = array[0] * array[1] * array[x];
  // take the max from the first and the last
  return Math.max(pro, proFirst);

  return pro;
}
