// n 번째 원소부터

// ### **문제 설명**
// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `n` 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 2 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ `nums`의 길이

// ### 입출력 예
// | nums            | n   | result       |
// | --------------- | --- | ------------ |
// | [2, 1, 6]       | 3   | [6]          |
// | [5, 2, 1, 7, 5] | 2   | [2, 1, 7, 5] |

// ### 입출력 예 설명
// 입출력 예 #1
// - [2, 1, 6]의 세 번째 원소부터 마지막 원소까지의 모든 원소는 [6]입니다.
// 입출력 예 #2
// - [5, 2, 1, 7, 5]의 두 번째 원소부터 마지막 원소까지의 모든 원소는 [2, 1, 7, 5]입니다.

const solution = (nums, n) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i >= n - 1) res.push(nums[i]);
  }

  return res;
};
const solution_2 = (nums, n) => {
  const res = [];

  for (let i = n - 1; i < nums.length; i++) {
    res.push(nums[i]);
  }

  return res;
};

//
const solution_3 = (nums, n) => nums.slice(n - 1);



console.log(solution_3([2, 1, 6], 3)); // [6]
console.log(solution_3([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]