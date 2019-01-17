// Binary Search Array
// Given a sorted array of integers, find the index of a target value using a binary search algorithm.
// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing
//the search interval in half. The initial interval includes the whole array. If the value of the target
//value is less than the middle value of the interval, then the next interval will be the lower
//half of the current interval. If the value of the target value is greater than the middle value,
//then the next interval will be the upper half. The search process repeats until the middle value is
//equal to the target value, or the search interval is empty.

function binarySearch(array, target) {
  var first, last;
  first = 0; // first elemat
  last = array.length - 1; // last elemant
  // define var it will change depand on target if less than or more than
  var mid;
  while (first <= last) {
    // when always first less than last enter on scope
    mid = Math.floor((first + last) / 2);
    // mid var depand on first and last // we will divide the arr depand on this val
    if (array[mid] === target) {
      // if elemant equal the target return index of elemant wich mid
      return mid;
    } else if (array[mid] < target) {
      // if target value more than elmant increase the start from mid agnore the first half
      first = mid + 1;
    } else {
      // if target value less than elmant decrease the last from mid agnore the last half
      last = mid - 1;
    }
  }
  return -1;
}
