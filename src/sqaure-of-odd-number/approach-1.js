const isOdd = number => number % 2 === 1;
export const squareOfOdd = arr => arr.reduce((result, element) => isOdd(element) ? [...result, element * element] : result, [])