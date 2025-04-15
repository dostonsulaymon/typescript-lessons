// arrays and objects

let stringArr = ['a', 'b', 'c'];

let guitars = ['Strat', 'hhd', 'kkk'];

let mixedData = ['q', 1, true];

let custom: (string | number)[] = [];

let result = guitars.concat(stringArr);

custom.push('true');

// tuple example


let myTuple: [string, number, boolean, ...any[]] = ['Hi', 21, false];

let myTuple1: [string, number, boolean, ...any[]] = ['Hi', 21, false, result];


console.log(myTuple);


// interface and type

interface myInterface {
    name: string,
    value: string,
    age: number

}

interface myInterface {
    email: string
}


let example: myInterface = {
    name: "hi",
    value: "hey",
    age: 32,
    email: "hi@gmail.com"
}

type myType = {

    name: string,
    value: string,
    age: number
}

type myType2 = myType & {
    email?: string,

}

let example2: myType2 = {
    name: "hi",
    value: "hey",
    age: 32,
}

// enums

enum Grade {
    A = 3,
    B,
    C,
    D
}

console.log(Grade.C.valueOf());

// literals

let myName: "Doston" | "Donyor";

myName = "Donyor";


//