// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

function commonCharacters(string1, string2) {
  var newStr = {};
  var res = "";

  if (!string1 || !string2) {
    return "";
  }

  for (var i = 0; i < string1.length; i++) {
    if (string2.includes(string1[i]) && string1[i] !== " ") {
      newStr[string1[i]] = "";
    }
  }

  return Object.keys(newStr).join("");
}
