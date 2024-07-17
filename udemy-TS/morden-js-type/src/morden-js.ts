// let, const
const userName = 'Max';
// userName = 'Dong'; // error

let age = 30;
age = 29;


// 화살표 함수
const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) => console.log(output);

printOutput(add(5, 2));

//  spread 연산자
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name1: 'Max',
  age1: 30
};

const copiedPerson = {...person};

// rest 매개변수
const adD = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
};

const addedNumbers = adD(5, 10, 2, 3.7);
console.log(addedNumbers);

// 구조분해 할당
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2] = hobbies; // 배열은 임의로 이름 지정 가능

const {name1, age1} = person; // 객체는 해당 객체의 키값을 써야함