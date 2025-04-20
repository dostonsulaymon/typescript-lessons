// Generics

class Doston<T> {

    somethings: T[];

    constructor(somethings: T[]) {
        this.somethings = somethings;
    }


    getThings() {
        return this.somethings;
    }

    setThings(things: T[]) {
        this.somethings = things;
    }
}


const hello = new Doston([true, false]);

console.log(hello.getThings());

const hello2 = new Doston(["true", 22]);
console.log(hello2.getThings());


/* Function example */

function hiWorld<K, V>(key: K, value: V) {

    console.log(key);

    console.log(value);


}

hiWorld("Hello", [23, 43, "hiWorld"]);
