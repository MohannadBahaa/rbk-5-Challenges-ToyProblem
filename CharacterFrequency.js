// //Character Frequency
// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input	Output
// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]

function characterFrequency(string) {
  // Write your code here, and
  // return your final answer.
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }

  var result = Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (result[i][1] > result[j][1]) {
        // if there is elemant less than the current elemant swap
        temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      } else if (result[i][1] === result[j][1]) {
        if (result[i][0] < result[j][0]) {
          temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      }
    }
  }

  return result;
}
