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

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1