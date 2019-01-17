// Given two strings, return true if one string is an anagram of another.

// Examples
// Input	Output
// a:
// "silent"
// b:
// "listen"	true
// a:
// "torchwood"
// b:
// "doctor who"	true
// a:
// "why?"
// b:
// "why not?"	false

function isAnagram(a, b) {
  // delete space split space and join string again
  var str1 = a.split(" ").join("");
  var str2 = b.split(" ").join("");
  // if not the same length return false no Anagram
  if (str1.length !== str2.length) {
    return false;
  }

  var obj1 = {}; // declare obj1 for str1
  var obj2 = {}; // declare obj2 for str2
  // collect the repate in str1
  for (var i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] = obj1[str1[i]] + 1;
    }
  }
  // collect the repate in str2
  for (var j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]] = obj2[str2[j]] + 1;
    }
  }
  // obj1 and obj2 have all char with how many times is repated
  for (var key in obj1) {
    if (obj1[key] !== obj2[key]) {
      // if there is no match how many times the char is repated
      return false;
    }
  }

  return true;
}
