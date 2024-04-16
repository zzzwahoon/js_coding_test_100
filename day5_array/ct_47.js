// 순서 바꾸기

// ### **문제 설명**
// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `nums`를 `n` 번째 원소 이후의 원소들과 `n` 번째까지의 원소들로 나눠 `n` 번째 원소 이후의 원소들을 `n` 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 2 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ `nums`의 길이

// ### 입출력 예
// | nums | n | result |
// | --- | --- | --- |
// | [2, 1, 6] | 1 | [1, 6, 2] |
// | [5, 2, 1, 7, 5] | 3 | [7, 5, 5, 2, 1] |

// ### 입출력 예 설명
// 입출력 예 #1
// - [2, 1, 6]에서 첫 번째 이후의 원소는 [1, 6]이고 첫 번째까지의 원소는 [2]입니다. 두 리스트를 이어 붙이면 [1, 6, 2]가 됩니다.
// 입출력 예 #2
// - [5, 2, 1, 7, 5]에서 세 번째 이후의 원소는 [7, 5]이고 세 번째까지의 원소는 [5, 2, 1]입니다. 두 리스트를 이어 붙이면 [7, 5, 5, 2, 1]가 됩니다.

const solution = (nums, n) => {
  const part1 = [];
  const part2 = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < n) part1.push(nums[i]);
    else part2.push(nums[i]);
  }
  return [...part2, ...part1];
}

const solution_2 = (nums, n) => [...nums.filter((_, i) => i >= n), ...nums.filter((_, i) => i < n)];

const solution_3 = (nums, n) => [...nums.slice(n), ...nums.slice(0, n)];

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]