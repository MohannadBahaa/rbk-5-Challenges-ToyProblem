// Alphabet Inventory
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Examples
// Input	Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"	"a:2,b:2,c:2"
// alphabet:
// "x"
// text:
// "Racer X is my friend :)"	"x:1"
// alphabet:
// "123"
// text:
// "o hai"	"no matches"

function alphaCount(alphabet, text) {
  // Write your code here, and
  // return your final answer.
  var obj = {};
  var res = "";
  var alpha = alphabet.toLowerCase().split("");
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (alpha.includes(text[i])) {
      if (!obj[text[i]]) {
        obj[text[i]] = 1;
      } else {
        obj[text[i]]++;
      }
    }
  }

  for (let i = 0; i < alpha.length; i++) {
    if (obj[alpha[i]] !== undefined) {
      res = res + alpha[i] + ":" + obj[alpha[i]] + ",";
    }
  }
  var newStr = res.slice(0, res.length - 1);

  if (newStr === "") {
    return "no matches";
  }

  return newStr;
}
