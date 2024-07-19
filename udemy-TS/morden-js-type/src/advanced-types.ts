// * 교차타입
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Dong',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// * 타입가드
function add3(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    // 타입가드 구문
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    // 타입가드 구문
    console.log('StartDate: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
// 위에 if문으로 적은 타입가드로 인해 privileges가 없어도 에러 없이 잘 출력된다.
printEmployeeInformation({ name: 'Oh', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// * 구별된 유니언
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// * 형 변환
// 형 변환을 하는 두가지 방법
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi there!';

// !는 타입스크립트에게 절대 null이 아니란걸 알려준다
// !를 쓰지 않는 방법
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there';
}

// * 인덱스 속성
// 속성이름이나 속성이 몇개 일지 모를때 사용
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
  greeting: 'Hello!',
};

// 옵셔널 체이닝
const fetchedUserData = {
  id: 'u1',
  name: 'Dong',
  // job: { title: 'CEO', description: 'My own company' }
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
// console.log(fetchedUserData?.job?.title);

// Null 병합
// null이거나 undefined면 뒤에있는 디폴트 값을 내보낸다
const userInput = '';
// const userInput = undefined;
// const userInput = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
