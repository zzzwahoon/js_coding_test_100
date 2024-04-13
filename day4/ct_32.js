// 배열 뒤집기

// ### **문제 설명**
// 정수가 들어 있는 배열 `nums`가 매개변수로 주어집니다. `nums`의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 1 ≤ `nums`의 길이 ≤ 1,000
// - 0 ≤ `nums`의 원소 ≤ 1,000

// ### 입출력 예
// | nums                  | result                |
// | --------------------- | --------------------- |
// | [1, 2, 3, 4, 5]       | [5, 4, 3, 2, 1]       |
// | [1, 1, 1, 1, 1, 2]    | [2, 1, 1, 1, 1, 1]    |
// | [1, 0, 1, 1, 1, 3, 5] | [5, 3, 1, 1, 1, 0, 1] |

// ### 입출력 예 설명
// 입출력 예 #1
// - `num_list`가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.
// 입출력 예 #2
// - `num_list`가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.
// 입출력 예 #3
// - `num_list`가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.

const solution = arr => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr.length - 1 - i] = arr[i];
  }
  return res;
};

// TC=O(n),SC=O(1)
const solution_2 = arr => arr.reverse();

// TC=O(n),SC=O(n)
const solution_3 = nums => nums.toReversed();

// TC ⇒ O(n), SC ⇒ O(n)
const solution_4 = arr => {
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) res.push(arr[i]);
  return res;
};

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
console.log(solution_2([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution_2([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution_2([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
console.log(solution_3([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution_3([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution_3([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]