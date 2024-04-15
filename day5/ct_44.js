// n개 간격의 원소들

// ### **문제 설명**
// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `nums`의 첫 번째 원소부터 마지막 원소까지 `n`개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 5 ≤ `nums`의 길이 ≤ 20
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ 4

// ### 입출력 예
// | nums | n | result |
// | --- | --- | --- |
// | [4, 2, 6, 1, 7, 6] | 2 | [4, 6, 7] |
// | [4, 2, 6, 1, 7, 6] | 4 | [4, 7] |

// ### 입출력 예 설명
// 입출력 예 #1
// - [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
// 입출력 예 #2
// - [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.

const solution = (nums, n) => {
    const result = [];
    // 배열의 길이를 확인하면서 n 간격으로 원소 추출
    for (let i = 0; i < nums.length; i += n) {
        result.push(nums[i]);
    }
    return result;
};

const solution_2 = (nums, n) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % n === 0) res.push(nums[i]);
  }
  return res;
}

// functional
const solution_3 = (nums, n) => nums.filter((_, i) => i % n === 0);

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
console.log(solution_2([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution_2([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
console.log(solution_3([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution_3([4, 2, 6, 1, 7, 6], 4)); // [4, 7]