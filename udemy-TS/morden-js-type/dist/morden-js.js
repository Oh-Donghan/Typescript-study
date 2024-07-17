"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Max';
var age = 30;
age = 29;
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
printOutput(add(5, 2));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    name1: 'Max',
    age1: 30
};
var copiedPerson = __assign({}, person);
var adD = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = adD(5, 10, 2, 3.7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
var name1 = person.name1, age1 = person.age1;
//# sourceMappingURL=morden-js.js.map