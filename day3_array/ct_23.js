// 1부터 n까지의 합

// ### **문제 설명**
// 양수 n이 주어지면 1부터 n까지 자연수의 합을 반환하는 함수를 구현한다. 

// Example 1:
// Input: n = 10
// Output: 55
// Explanation: 1+2+3+4+5+6+7+8+9+10
// ​
// Example 2:
// Input: n = 2
// Output: 3
// Explanation: 1+2
// ​
// Example 3:
// Input: n = 1
// Output: 1

const sum = n => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};

// 재귀함수 
const sum_2 = n => (n === 0 ? 0 : sum_2(n - 1) + n); // 탈출 조건 필수

// map, filter, reduce 꼭 공부
// 미리 n까지 만들고 하나씩 더한다
const sum_3 = n => Array.from({length: n}, (_, i) => i + 1).reduce((res, n) => res + n, 0);

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1
console.log(sum_2(10)); // 55
console.log(sum_2(2)); // 3
console.log(sum_2(1)); // 1
console.log(sum_3(10)); // 55
console.log(sum_3(2)); // 3
console.log(sum_3(1)); // 1