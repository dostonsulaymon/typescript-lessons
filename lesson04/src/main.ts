/* Functions */


type stringOrNumber = string | number;

type stringOrNumberArray = (string | number) [];


interface MyInterface {
    name: string,
    active: boolean,
    albums: stringOrNumberArray,
}

let arr: stringOrNumberArray = ["hi", 21, 76, "hey"];


const myInterface: MyInterface = {
    name: "Doston",
    active: true,
    albums: arr

}

console.log(myInterface);


function myError(msg: string) {
    console.log(msg);
}


// example of fucking never type
function neverHappen(value: string | number) {

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

function fun1(val1: number, val2: number): number {

    if (val1 < val2) {
        throw Error("First argument of function should be larger than the second!")
    }

    return val1 * val2;
}

function fun2(val1: number, val2: number): number {

    if (val1 < val2) {
        throw Error("First argument of function should be larger than the second!")
    }

    return val1 / val2;
}


function complicatedFunc(
    func3: ((val1: number, val2: number) => number)[],
    values: [number, number][]) {

    const results = [] as number[];

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


const multipleParametersFunc = (name: string, ...args: number[]) => {

    if (args.length > 12) {
        alert("Easy tiger, you can do any math operation with less than 12 numbers");
        return;
    }

    const result = args.reduce((pre, curr) => pre + curr);

    console.log(`Hi! ${name}, the sum of numbers you provided is ${result}`)
}

multipleParametersFunc('John', 1,2,3,4,5,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);


function tooFlexible( val1: (string | string []), val2: (string | string [])){

}
















