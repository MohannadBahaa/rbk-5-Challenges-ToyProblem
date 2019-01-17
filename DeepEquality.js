// Deep Equality
// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(a, b) {
  //compare the liength if it not equal return false
  // by change the key to elemant inside array and now we can now how much the length
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  } // check if a or b is array and if one of them not array
  // so there is no equal
  if (!Array.isArray(a) && Array.isArray(b)) {
    return false;
  }

  if (Array.isArray(a) && !Array.isArray(b)) {
    return false;
  }
  var output = true;
  for (key in a) {
    // if it is object or array return function (recursion)
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      output = deepEquals(a[key], b[key]);
    } else {
      // this eq return true when the same key have the same value
      output = a[key] === b[key];
    }
  }
  return output;
};
