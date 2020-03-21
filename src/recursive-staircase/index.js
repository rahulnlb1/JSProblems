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

console.log(staircase(3)); //should print 3
