"use strict";
/* Functions */
let arr = ["hi", 21, 76, "hey"];
const myInterface = {
    name: "Doston",
    active: true,
    albums: arr
};
console.log(myInterface);
function myError(msg) {
    console.log(msg);
}
// example of fucking never type
function neverHappen(value) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return value;
    }
    return myError("This should never happen.");
}
// @ts-ignore
console.log(neverHappen(undefined));
// very complicated example of types with function
function fun1(val1, val2) {
    if (val1 < val2) {
        throw Error("First argument of function should be larger than the second!");
    }
    return val1 * val2;
}
function fun2(val1, val2) {
    if (val1 < val2) {
        throw Error("First argument of function should be larger than the second!");
    }
    return val1 / val2;
}
function complicatedFunc(func3, values) {
    const results = [];
    for (let i = 0; i < func3.length; i++) {
        const args = values[i];
        const result = func3[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
console.log(complicatedFunc([fun1, fun2], [
    [8, 4],
    [6, 3]
]));
/* Advanced function types*/
const multipleParametersFunc = (name, ...args) => {
    if (args.length > 12) {
        alert("Easy tiger, you can do any math operation with less than 12 numbers");
        return;
    }
    const result = args.reduce((pre, curr) => pre + curr);
    console.log(`Hi! ${name}, the sum of numbers you provided is ${result}`);
};
multipleParametersFunc('John', 1, 2, 3, 4, 5, 56, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
function tooFlexible(val1, val2) {
}
