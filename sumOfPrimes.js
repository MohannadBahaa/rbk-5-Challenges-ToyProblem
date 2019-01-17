// Sum of Primes
// Given a positive number, return the sum of all positive primes that are less than or equal to that number.

// Examples
// Input	Output
// n:
// 4	5
// n:
// 5	10
// n:
// 6	10

function sumOfPrimes(n) {
  var sum = 0;
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num !== 1 && num !== 0;
  };

  for (var i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
