"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
        reject('An error occurred');
    }, 200);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Dong', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
console.log(mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Dong' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Dong');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names1 = ['Max', 'Sports'];
names1.push('Anna');
//# sourceMappingURL=generic.js.map