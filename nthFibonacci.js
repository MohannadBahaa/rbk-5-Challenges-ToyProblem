// Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

// Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.

// Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.

// How many pairs of iguanas will there be after n months?

// For example, the iguana pair size for months zero through five are:

// 0 1 1 2 3 5

var nthFibonacci = function(n) {
  var next = 1;
  var second = 1;
  var first = 0;
  // next fib second n-1 \\ first n-2
  if (n === 1 || n === 0) {
    return n;
  }
  // fib(0) and fib(1) === n
  for (var i = 2; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
};
