let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // unknown타입은 무엇이든 들어올 수 있지만 다른 타입에 할당 할 수 없다.
// 하지만 any타입은 어떤 타입도 가능하기에 에러가 나지 않는다.

if (typeof userInput === 'string') {
  userName = userInput;
}

// 타입추론으로 void를 명시하지만 실제로는 never타입이다.
// throw는 다음줄로 넘어가지 않고 멈추기 때문에 
// 절대 리턴값이 없는 never타입으로 적용된다.
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
