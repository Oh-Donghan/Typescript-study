// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Dong',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// 튜플(Tuple) role: [2, 'author'] 
// 튜플은 순서가 있고, 각 요소에 인덱스로 접근할 수 있으며, 값을 변경할 수 없다.
// person.role.push('admin'); // not error (튜플은 push를 오류로 인식하지 못한다)
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error 따로 내용을 추가하면 에러로 인식한다

// ENUM을 쓰지 않을때
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// ENUM을 사용할때
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Dong',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
  console.log('is admin');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
