// Flatten
// Given an array of arrays, return all elements in a single array. You must use recursion.

// Hint: Use Array.isArray(elem) to see if something is an array.

function flatten(arrays) {
  // debugger;
  var newArr = [];

  var again = function(arrays) {
    for (let i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        again(arrays[i]);
      } else {
        newArr.push(arrays[i]);
      }
    }
    return newArr;
  };
  return again(arrays);
}
