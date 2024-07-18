// * 제네릭

// const names = ["Dong", "Pyo"];
// 위 코드를 제네릭으로 나타내면
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
    reject('An error occurred');
  }, 200);
});

// * 제네릭 함수 생성하기
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: 'Dong', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);
console.log(mergedObj.name);