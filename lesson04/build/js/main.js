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
