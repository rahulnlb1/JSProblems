import {
    approach3
} from "./src/sqaure-a-number";
import {
    squareOfOdd
} from "./src/sqaure-of-odd-number"
import {
    sumOfSquareOfOdd
} from "./src/sum-of-sqaure-of-odd"

import {
    productLoop,
    recurse
} from "./src/product"


console.log("Sqaure of Arrays " + approach3([1, 2, 3, 4, 5]));
console.log("Sqaure of Odd Numbers " + squareOfOdd([1, 2, 3, 4, 5]));
console.log("Sum of Sqaure of Odd Numbers " + sumOfSquareOfOdd([1, 2, 3, 4, 5]));
console.log("Product of 2 and 3 is " + productLoop(2, 3));
console.log("Product of 2 and 3 using recursion is " + recurse(2, 3));