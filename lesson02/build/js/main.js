"use strict";
// arrays and objects
let stringArr = ['a', 'b', 'c'];
let guitars = ['Strat', 'hhd', 'kkk'];
let mixedData = ['q', 1, true];
let custom = [];
let result = guitars.concat(stringArr);
custom.push('true');
// tuple example
let myTuple = ['Hi', 21, false];
let myTuple1 = ['Hi', 21, false, result];
console.log(myTuple);
let example = {
    name: "hi",
    value: "hey",
    age: 32,
    email: "hi@gmail.com"
};
let example2 = {
    name: "hi",
    value: "hey",
    age: 32,
};
// enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 3] = "A";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["D"] = 6] = "D";
})(Grade || (Grade = {}));
console.log(Grade.C.valueOf());
// literals
let myName;
myName = "Donyor";
//
