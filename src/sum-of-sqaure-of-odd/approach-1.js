const isOdd = number => number % 2 === 1;
export const sumOfSquareOfOdd = arr => arr.reduce((result, element) => isOdd(element) ? result += element * element : result, 0)