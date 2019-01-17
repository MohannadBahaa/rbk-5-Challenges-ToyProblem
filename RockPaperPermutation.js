// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

//Examples;
// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]

function rockPaperPermutation(roundCount) {
  var pos = [];
  var arr = ["r", "p", "s"];
  if (roundCount === 0) {
    return [];
  }
  // make recursion to iterative roundCount time on arr
  var again = function(newStr, roundCount) {
    // if roundCount = 0
    if (roundCount === 0) {
      // push ther string to pos arr
      pos.push(newStr);
      return; // this arr to stop function
    }
    for (var i = 0; i < 3; i++) {
      //iterative on arr
      // take each string with other string depand on round count
      again(newStr + arr[i], roundCount - 1);
    }
  };
  // call the function
  again("", roundCount);
  // return all possiblity
  return pos;
}
