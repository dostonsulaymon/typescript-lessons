"use strict";
// Utility types
const info = (person) => {
    console.log(person);
};
info({ name: "Doston" });
/* Readonly utility type */
const person = {
    name: "Adham",
    age: 32,
    address: "Tashkent"
};
const person2 = Object.assign(Object.assign({}, person), { name: "Donyor" });
const person3 = Object.assign(Object.assign({}, person2), { name: "Alison" });
console.log(person3);
/* Record utility type */
const users = {
    person01: person,
    person02: person2,
    person03: person3
};
console.log(users.person03);
const person003 = users.person03;
console.log(person003);
/* Pick utility type */
// here | doesn't mean or, it means union, yani ikkalisiham bo'lishi kerak
const person4 = {
    name: "John",
    age: 98
};
console.log(person4);
/* Omit utility type */
const person5 = {
    address: "Tashkent"
};
console.log(person5);
