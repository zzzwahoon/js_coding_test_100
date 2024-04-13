// 정수 찾기

// ### **문제 설명**
// 정수 리스트 `nums`와 찾으려는 정수 `n`이 주어질 때, `nums`안에 `n`이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 3 ≤ `nums`의 길이 ≤ 100
// - 1 ≤ `nums`의 원소 ≤ 100
// - 1 ≤ `n` ≤ 100

// ### 입출력 예
// | nums                | n  | result |
// | ------------------- | -- | ------ |
// | [1, 2, 3, 4, 5]     | 3  | 1      |
// | [15, 98, 23, 2, 15] | 20 | 0      |

// ### 입출력 예 설명
// 입출력 예 #1
// - [1, 2, 3, 4, 5] 안에 3이 있으므로 1을 return합니다.
// 입출력 예 #2
// - [15, 98, 23, 2, 15] 안에 20이 없으므로 0을 return합니다.

const solution = (nums, n) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      res += 1;
    }
  }
  return res;
};

const solution_2 = (nums, n) => {
  for (const num of nums) {
    if (num === n) return 1;
  }

  return 0;
};

// Functional
const solution_3 = (nums, n) => (nums.includes(n) ? 1 : 0);

const solution_4 = (nums, n) => +nums.includes(n);


console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0
console.log(solution_2([1, 2, 3, 4, 5], 3)); // 1
console.log(solution_2([15, 98, 23, 2, 15], 20)); // 0
console.log(solution_3([1, 2, 3, 4, 5], 3)); // 1
console.log(solution_3([15, 98, 23, 2, 15], 20)); // 0
console.log(solution_4([1, 2, 3, 4, 5], 3)); // 1
console.log(solution_4([15, 98, 23, 2, 15], 20)); // 0