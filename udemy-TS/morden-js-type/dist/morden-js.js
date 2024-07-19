"use strict";
const userName = 'Max';
let age = 30;
age = 29;
const add = (a, b) => a + b;
const printOutput = (output) => console.log(output);
printOutput(add(5, 2));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name1: 'Max',
    age1: 30
};
const copiedPerson = Object.assign({}, person);
const adD = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = adD(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2] = hobbies;
const { name1, age1 } = person;
//# sourceMappingURL=morden-js.js.map