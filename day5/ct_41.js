// 나누어 떨어지는 숫자 배열

// ### **문제 설명**
// `nums`의 각 element 중 `divisor`로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// `divisor`로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// ### 제한사항
// - `nums`는 자연수를 담은 배열입니다.
// - 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// - `divisor`는 자연수입니다.
// - `nums`는 길이 1 이상인 배열입니다.

// ### 입출력 예
// | nums          | divisor | return        |
// | ------------- | ------- | ------------- |
// | [5, 9, 7, 10] | 5       | [5, 10]       |
// | [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
// | [3, 2, 6]     | 10      | [-1]          |

// ### 입출력 예 설명
// 입출력 예#1
// `nums`의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
// 입출력 예#2
// `nums`의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

const solution = (nums, divisor) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % divisor === 0) {
      res.push(nums[i]);
    }
  }
  return res.length === 0 ? [-1] : res.sort((a, b) => a - b);
};

const solution_2 = (nums, divisor) => {
  const res = [];

  for (const n of nums) {
    if (n % divisor === 0) res.push(n);
  }

  return res.length === 0 ? [-1] : res.sort((a, b) => a - b);
}

// 함수형
const solution_3 = (nums, divisor) => {
  const filtered = nums.filter(n => n % divisor === 0);
  return filtered.length === 0 ? [-1] : filtered;
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
console.log(solution_2([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution_2([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution_2([3, 2, 6], 10)); // [-1]
console.log(solution_3([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution_3([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution_3([3, 2, 6], 10)); // [-1]