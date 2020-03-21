function isGoodIndex(arr) {
  let lastIndex = arr.length - 1;

  for (let i = lastIndex - 1; i >= 0; i--) {
    if (arr[i] + i >= lastIndex) {
      lastIndex = i;
    }
  }

  return lastIndex === 0;
}

const input1 = [2, 3, 1, 1, 4];
console.log(isGoodIndex(input1)); //Should return true

const input2 = [3, 2, 1, 0, 4];
console.log(isGoodIndex(input2)); //Should return false
