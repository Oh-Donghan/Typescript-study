"use strict";
const e1 = {
    name: 'Dong',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
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
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
    greeting: 'Hello!',
};
const fetchedUserData = {
    id: 'u1',
    name: 'Dong',
};
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=advanced-types.js.map