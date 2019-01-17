// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

// Examples
// Input	Output
// string:
// "(x + y) - (4)"	true
// string:
// "(((10 ) ()) ((?)(:)))"	true
// string:
// "(50)("	false
// string:
// ""	true

function isBalanced(string) {
  // Write your code here, and
  // return your final answer.
  var close = ")"; // close parentheses
  var start = "("; // start parentheses
  // declare counter to count close and start parentheses
  var countParentheses = 0;

  // ittreative on the arr to count parentheses
  // it shoouldnt start with close parentheses
  for (var i = 0; i < string.length; i++) {
    if (string[0] === close) {
      return false;
    } else if (string[i] === close) {
      countParentheses++;
    } else if (string[i] === start) {
      countParentheses--;
    }
  }
  // return true of it is = else return false
  return countParentheses === 0;
}
