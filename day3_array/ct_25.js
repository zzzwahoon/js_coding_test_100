// 짝수의 합

// ### **문제 설명**
// 정수 `n`이 주어질 때, `n`이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// ### 제한사항
// 0 < `n` ≤ 1000

// ### 입출력 예
// | n   | result |
// | --- | ------ |
// | 10  | 30     |
// | 4   | 6      |

// ### 입출력 예 설명
// 입출력 예 #1
// - `n`이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
// 입출력 예 #2
// - `n`이 4이므로 2 + 4 = 6을 return 합니다.

const solution = n => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) result += i;
  }
  return result;
};

const solution_2 = n => {
  let res = 0;
  for (let i = 2; i <= n; i += 2) {
    res += i;
  }
  return res;
}

const solution_3 = n => {
  const count = Math.trunc(n / 2); // 홀수 때문에 trunc 이용
  return count ** 2 + count;
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
console.log(solution(3)); // 2
console.log(solution(1)); // 0
console.log(solution_2(10)); // 30
console.log(solution_2(4)); // 6
console.log(solution_2(3)); // 2
console.log(solution_2(1)); // 0
console.log(solution_3(10)); // 30
console.log(solution_3(4)); // 6
console.log(solution_3(3)); // 2
console.log(solution_3(1)); // 0