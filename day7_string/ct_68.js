// 문자열 정렬하기 (1)

// ### **문제 설명**
// 문자열 `str`이 매개변수로 주어질 때, `str` 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// ### 제한사항
// - 1 ≤ `str`의 길이 ≤ 100
// - `str`에는 숫자가 한 개 이상 포함되어 있습니다.
// - `str`은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

// ### 입출력 예
// | str | result |
// | --- | --- |
// | "hi12392" | [1, 2, 2, 3, 9] |
// | "p2o4i8gj2" | [2, 2, 4, 8] |
// | "abcde0" | [0] |

// ### 입출력 예 설명
// 입출력 예 #1
// - "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.
// 입출력 예 #2
// - "p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.
// 입출력 예 #3
// - "abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.

const solution = str => {
  let num = [];

  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {  // char 또는 공백이 아닐떄
      num.push(+char);      // 숫자(문자열)을 정수로 변환
    }
  }

  return  num.sort((a, b) => a - b);

};

const solution_2 = str => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    // if (!Number.isNaN(+str[i])) res.push(+str[i]);
    if (Number.isInteger(+str[i])) res.push(+str[i]);
  }
  return res.sort();
}

const solution_3 = str => 
  [...str]
    .filter(c => Number.isInteger(+c))
    .map(Number)
    .sort();

console.log(solution('hi12392')); // [1, 2, 2, 3, 9]
console.log(solution('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution('abcde0')); // [0]
console.log(solution_2('hi12392')); // [1, 2, 2, 3, 9]
console.log(solution_2('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution_2('abcde0')); // [0]
console.log(solution_3('hi12392')); // [1, 2, 2, 3, 9]
console.log(solution_3('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution_3('abcde0')); // [0]