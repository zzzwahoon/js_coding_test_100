// n부터 m까지의 합

// ### **문제 설명**
// 양수 n, m이 주어지면 n부터 m까지 자연수의 합을 반환하는 함수를 구현한다. 
// n > m이면 0을 반환한다.
// n = m이면 n 또는 m을 반환한다.

// Example 1:
// Input: n = 3, m = 8
// Output: 33
// Explanation: 3+4+5+6+7+8
// ​
// Example 2:
// Input: n = 3, m = 3
// Output: 3
// ​
// Example 3:
// Input: n = 3, m = 2
// Output: 0

const sum = (n, m) => {
	let result = 0;
  for (i = n; i <= m; i++) {
    result += i;
  }
  return result;
};

const sum_2 = (n, m) => Array.from({length: m - n + 1}, (_, i) => i + n).reduce((sum_2, n) => sum_2 + n, 0);

// 가우스 계산법 최상의 복잡도 O(1)
const sum_3 = (n, m) => {
  return ((n + m) * (m - n + 1)) / 2
}

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0
console.log(sum_2(3, 8)); // 33
console.log(sum_2(3, 3)); // 3
console.log(sum_2(3, 2)); // 0
console.log(sum_3(3, 8)); // 33
console.log(sum_3(3, 3)); // 3
console.log(sum_3(3, 2)); // 0