// 문자 리스트를 문자열로 변환하기

// ### **문제 설명**
// 문자들이 담겨있는 배열 `arr`가 주어집니다. `arr`의 원소들을 순서대로 이어 붙인 문자열을 return하는 solution함수를 작성해 주세요.

// ### 제한사항
// - 1 ≤ `arr`의 길이 ≤ 200
//     - `arr`의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.

// ### 입출력 예
// | arr           | result |
// | ------------- | ------ |
// | ["a","b","c"] | "abc"  |

const solution = arr => {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};
const solution_2 = arr => {
  let res = '';
  for (const element of arr) {
    res += element;
  }
  return res;
};

const solution_3 = arr => arr.join(); // 'a' + '' + 'b' + '' + 'c'

console.log(solution(['a', 'b', 'c'])); // 'abc'
console.log(solution_2(['a', 'b', 'c'])); // 'abc'
console.log(solution_3(['a', 'b', 'c'])); // 'abc'