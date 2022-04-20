//  for using es6 feature..
//  there are two method..
//  one to use .mjs extension instead of .js
// and
// second to use type = "module" in package.json..

import { add, sub, mul } from "./math.mjs";

const sum = add(2, 3);
console.log("sum (2 + 3) = " + sum);

const diff = sub(3, 4);
console.log("dif (3 - 4) = " + diff);

const prd = mul(3, 4);
console.log("product (4 * 5) = " + prd);
