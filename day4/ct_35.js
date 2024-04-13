// 배열 만들기

// ### **문제 설명**
// 정수 `n`과 `k`가 주어졌을 때, 1 이상 `n`이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

// ### 제한사항
// - 1 ≤ `n` ≤ 1,000,000
// - 1 ≤ `k` ≤ min(1,000, n)

// ### 입출력 예
// | n   | k   | result      |
// | --- | --- | ----------- |
// | 10  | 3   | [3, 6, 9]   |
// | 15  | 5   | [5, 10, 15] |

// ### 입출력 예 설명
// 입출력 예 #1
// - 1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 [3, 6, 9]를 return 합니다.
// 입출력 예 #2
// - 1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 [5, 10, 15]를 return 합니다.

// Imperative
const solution = (n, k) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      arr.push(i);
    }
  }
  return arr;
};

// Functional
const solution_2 = (n, k) => Array.from({ length: n }, (_, i) => i + 1).filter(n => n % k === 0);
const solution_3 = (n, k) => Array.from({ length: n / k }, (_, i) => (i + 1) * k);  // n 이하의 정수 중에 k의 배수는 n / k 개 존재한다.

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
console.log(solution_2(10, 3)); // [3, 6, 9]
console.log(solution_2(15, 5)); // [5, 10, 15]
console.log(solution_3(10, 3)); // [3, 6, 9]
console.log(solution_3(15, 5)); // [5, 10, 15]