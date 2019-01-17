//Make an array method that can return whether or not a context array is a subset of an input array.
// To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(arr) {
  var newArr = [];
  // itrative onarray
  for (var i = 0; i < this.length; i++) {
    // if the array does'nt contain the elemants output is flase
    if (!arr.includes(this[i])) {
      return false;
    }
  }
  return true;
};
