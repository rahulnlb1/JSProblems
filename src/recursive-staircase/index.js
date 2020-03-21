function staircase(n) {
  let count = 0;
  function recurseStairs(step) {
    if (step === n) {
      count++;
    }
    if (step <= n - 2) {
      recurseStairs(step + 1);
      recurseStairs(step + 2);
    }
    if (step === n - 1) {
      recurseStairs(step + 1);
    }
  }

  recurseStairs(0);
  return count;
}

// This lead to fibonacci series as stair n can be reached from either stair(n-1) or stair(n-2).
// So, number of ways to reach stair n = number of ways to reach start (n-1) + number of ways to reach stair (n-2)

function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(staircase(5)); //should print 3
console.log(fib(5)); //should print 3
