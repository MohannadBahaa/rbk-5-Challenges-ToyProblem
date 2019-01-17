// Even Occurrence
// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.

function evenOccurrence(arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}
