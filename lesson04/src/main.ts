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








