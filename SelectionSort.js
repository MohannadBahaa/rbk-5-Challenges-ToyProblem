// Selection Sort
// Selection sort is a sorting algorithm, specifically an in-place comparison sort which repeatedly selects the next-smallest element and swaps it into place.

// For the first iteration, we find the smallest element in the array and swap it with the first element in the array.
// On the second iteration, we find the next smallest element in the array and swap it with the second element in the array.
// etc.

// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function selectionSort(arr) {
  var leng = arr.length;
  var selectedIndex = 0;

  for (i = 0; i < leng; i++) {
    //s tor i in var if we found small ellmant
    selectedIndex = i;
    for (j = i + 1; j < leng; j++) {
      if (arr[j] < arr[selectedIndex]) {
        // let the current index = selected index
        selectedIndex = j;
      }
    }
    // if selected index changed that is mean we found smmal elmant from arr[selectedIndex]
    if (selectedIndex != i) {
      // swap(varibals)
      var temp = 0;
      temp = arr[i];
      arr[i] = arr[selectedIndex];
      arr[selectedIndex] = temp;
    }
  }
  return arr;
}
