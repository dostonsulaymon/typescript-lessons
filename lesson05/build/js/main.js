"use strict";
// Generics
class Doston {
    constructor(somethings) {
        this.somethings = somethings;
    }
    getThings() {
        return this.somethings;
    }
    setThings(things) {
        this.somethings = things;
    }
}
const hello = new Doston([true, false]);
console.log(hello.getThings());
const hello2 = new Doston(["true", 22]);
console.log(hello2.getThings());
/* Function example */
function hiWorld(key, value) {
    console.log(key);
    console.log(value);
}
hiWorld("Hello", [23, 43, "hiWorld"]);
