// 문자열을 정수로 변환하기

// ### **문제 설명**
// 숫자로만 이루어진 문자열 `nStr`이 주어질 때, `nStr`을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 1 ≤ `nStr` ≤ 5
// - `nStr`은 0부터 9까지의 정수 문자로만 이루어져 있습니다.

// ### 입출력 예
// | nStr   | result |
// | ------ | ------ |
// | "10"   | 10     |
// | "8542" | 8542   |

// ### 입출력 예 설명
// 입출력 예 #1
// - "10"을 정수로 바꾸면 10입니다.
// 입출력 예 #2
// - "8542"를 정수로 바꾸면 8542입니다.

// string => number
const solution = nStr => parseInt(nStr, 10);
const solution_2 = nStr => +nStr; // 추천
const solution_3 = nStr => Number(nStr);  // 추천
const solution_4 = nStr => nStr * 1;

// number => string
const n = 123;

console.log(solution('10')); // 10
console.log(solution('8542')); // 8542
console.log(solution_2('10')); // 10
console.log(solution_2('8542')); // 8542
console.log(solution_3('10')); // 10
console.log(solution_3('8542')); // 8542
console.log(solution_4('10')); // 10
console.log(solution_4('8542')); // 8542

console.log(n + '');
console.log(String(n));
console.log(toString(n));