// 이어 붙인 수

// ### **문제 설명**
// 정수가 담긴 리스트 `nums`가 주어집니다. `nums`의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 2 ≤ `nums`의 길이 ≤ 10
// - 1 ≤ `nums`의 원소 ≤ 9
// - `nums`에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

// ### 입출력 예
// | nums            | result |
// | --------------- | ------ |
// | [3, 4, 5, 2, 1] | 393    |
// | [5, 7, 8, 3]    | 581    |

// ### 입출력 예 설명
// 입출력 예 #1
// - 홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.
// 입출력 예 #2
// - 홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.

const solution = nums => {
  let odd = '';
  let even = '';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even += nums[i].toString();
    else odd += nums[i].toString();
  }
  return parseInt(odd, 10) + parseInt(even, 10);
};

const solution_2 = nums => {
  let odd = '', even = '';
  nums.forEach(num => num % 2 === 0 ? even += num : odd += num);
  return parseInt(odd, 10) + parseInt(even, 10);
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581