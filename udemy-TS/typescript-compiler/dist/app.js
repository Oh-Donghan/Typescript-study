"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
button.addEventListener('click', () => {
    console.log('Clicked!');
});
//# sourceMappingURL=app.js.map