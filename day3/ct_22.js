// // 카운트 업

// ### **문제 설명**
// 정수 `start`와 `end`가 주어질 때, `start`부터 `end`까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 0 ≤ `start` ≤ `end` ≤ 50

// ### 입출력 예
// | start | end | result                    |
// | ----- | --- | ------------------------- |
// | 3     | 10  | [3, 4, 5, 6, 7, 8, 9, 10] |

// ### 입출력 예 설명
// 입출력 예 #1
// - 3부터 10까지의 숫자들을 담은 리스트 [3, 4, 5, 6, 7, 8, 9, 10]를 return합니다.

const solution = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]