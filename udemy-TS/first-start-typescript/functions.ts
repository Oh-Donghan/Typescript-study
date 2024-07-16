// 리턴값이 있을경우 타입 추론
function add(n1: number, n2: number) {
  return n1 + n2;  // 리턴값은 number
}

// 리턴값이 없을경우 - void 리턴 (undefined와 같음)
function printResult(num: number) {
  console.log("Result: ", num);
}

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));