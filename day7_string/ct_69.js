// 문자열 정렬하기 (2)

// ### **문제 설명**
// 영어 대소문자로 이루어진 문자열 `str`이 매개변수로 주어질 때, `str`을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// ### 제한사항
// - 0 < `str` 길이 < 100

// ### 입출력 예
// | str | result |
// | --- | --- |
// | "Bcad" | "abcd" |
// | "heLLo" | "ehllo" |
// | "Python" | "hnopty" |

// ### 입출력 예 설명
// 입출력 예 #1
// - "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.
// 입출력 예 #2
// - "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.
// 입출력 예 #3
// - "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.

const solution = str => str.toLowerCase().split('').sort().join('');
const solution_2 = str => [...str.toLowerCase()].sort().join('');


console.log(solution('Bcad')); // "abcd"
console.log(solution('heLLo')); // "ehllo"
console.log(solution('Python')); // "hnopty"

console.log(solution_2('Bcad')); // "abcd"
console.log(solution_2('heLLo')); // "ehllo"
console.log(solution_2('Python')); // "hnopty"