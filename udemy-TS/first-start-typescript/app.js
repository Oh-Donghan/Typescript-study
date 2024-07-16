var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; // unknown타입은 무엇이든 들어올 수 있지만 다른 타입에 할당 할 수 없다.
// 하지만 any타입은 어떤 타입도 가능하기에 에러가 나지 않는다.
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
