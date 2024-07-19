"use strict";
let userInput1;
let userName1;
userInput1 = 5;
userInput1 = 'Max';
if (typeof userInput === 'string') {
    userName1 = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=app2.js.map