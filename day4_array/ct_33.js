// 배열 자르기

// ### **문제 설명**
// 정수 배열 `nums`와 정수 `num1`, `num2`가 매개변수로 주어질 때, `nums`의 `num1`번 째 인덱스부터 `num2`번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// ### 제한사항
// - 2 ≤ `nums`의 길이 ≤ 30
// - 0 ≤ `nums`의 원소 ≤ 1,000
// - 0 ≤`num1` < `num2` < `numbers`의 길이

// ### 입출력 예
// | nums | num1 | num2 | result |
// | --- | --- | --- | --- |
// | [1, 2, 3, 4, 5] | 1 | 3 | [2, 3, 4] |
// | [1, 3, 5] | 1 | 2 | [3, 5] |

// ### 입출력 예 설명
// 입출력 예 #1
// - [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
// 입출력 예 #2
// - [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

// Imperative
const solution_2 = (nums, num1, num2) => {
  const res = [];

  for (let i = num1; i <= num2; i++) {
    res.push(nums[i]);
  }

  return res;
};

// Functional
const solution = (nums, num1, num2) => nums.slice(num1, num2 + 1)
// num2 + 1을 지정하는 이유는 num2까지 갔을때 num2는 포함이 되지 않기 때문



console.log(solution_2([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution_2([1, 3, 5], 1, 2)); // [3, 5]
console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]