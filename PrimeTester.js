// Prime Tester
// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

// Parameters:
// n (required) - a number.

function primeTester(n) {
  // Write your code here, and
  // return your final answer.
  if (n < 2) return false;
  var root = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= root; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
