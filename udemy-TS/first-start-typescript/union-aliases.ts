// 유니언 타입과 타입앨리어스
type Combinable = number | string;
// 리터럴 타입과 타입앨리어스
type ConversionDescriptor = 'as-number' | 'as-text';

// 유니언 타입 - something: number | string | boolean
// 여러 타입을 정의할 수 있다
// 유니언 타입으로 작업할 때는 런타임 검사가 필요하다 (필수는 아니지만 대부분!)
function combine(
  input1: Combinable,
  input2: number | string,
  // 리터럴 타입
  // resultConversion: 'as-number' | 'as-text'
  resultConversion: ConversionDescriptor,
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
