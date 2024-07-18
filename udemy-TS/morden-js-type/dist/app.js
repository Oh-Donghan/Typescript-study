"use strict";
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
        reject('An error occurred');
    }, 200);
});
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
var mergedObj = merge({ name: 'Dong', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);
console.log(mergedObj.name);
//# sourceMappingURL=app.js.map