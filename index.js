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

import {
    objectTransform1,
    objectTransform2
} from "./src/objectTransformation"

import {
    flatten_access
} from "./src/flatten"

import {
    combinations
} from "./src/combinations"


console.log("Sqaure of Arrays " + approach3([1, 2, 3, 4, 5]));
console.log("Sqaure of Odd Numbers " + squareOfOdd([1, 2, 3, 4, 5]));
console.log("Sum of Sqaure of Odd Numbers " + sumOfSquareOfOdd([1, 2, 3, 4, 5]));
console.log("Product of 2 and 3 is " + productLoop(2, 3));
console.log("Product of 2 and 3 using recursion is " + recurse(2, 3));

const obj = {
    1: "John",
    2: "Doe",
    3: "Superman"
};

console.log("Object Transformation" + JSON.stringify(objectTransform2(objectTransform1(obj))));

const obj1 = {
    a: {

        b: {

            c: {

                d: [{

                    e: "Hello"
                }]
            }
        },

        f: {
            fg: {
                gg: [{

                    abc: {
                        some: "Value"
                    }
                }]
            }
        }
    }
};

console.log("Flattened Access" + flatten_access(obj1, "a.b.c.d[0].e"));


console.log("All combinations of 123 are " + JSON.stringify(combinations(123)));