// 피보나치 수

// ### **문제 설명**
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
// 예를들어
// - F(2) = F(0) + F(1) = 0 + 1 = 1
// - F(3) = F(1) + F(2) = 1 + 1 = 2
// - F(4) = F(2) + F(3) = 1 + 2 = 3
// - F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 리턴하는 함수, solution을 완성해 주세요.

// ### 제한 사항
// - n은 2 이상 100,000 이하인 자연수입니다.

// ### 입출력 예
// | n | return |
// | --- | --- |
// | 3 | 2 |
// | 5 | 5 |
// | 7 | 13 |
// | 10 | 55 |
// | 30 | 832040 |

// ### 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … 와 같이 이어집니다.

const fib = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
  }
  
  return b;
};
const fib_2 = n => {
  if (n < 2) return n;

  const seq = [0, 1];

  for (let i = 2; i <= n; i++) {
    seq.push(seq.at(i - 1) + seq.at(i - 2))
  }

  return seq.at(-1);
}
const fib_3 = n => {
  if (n < 2) return n;

  let [a, b] = [0, 1];

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

// O(2^n)
const fib_4 = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(0)); // 0
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(7)); // 13
console.log(fib(10)); // 55
console.log(fib(30)); // 832040

console.log(fib_2(0)); // 0
console.log(fib_2(3)); // 2
console.log(fib_2(5)); // 5
console.log(fib_2(7)); // 13
console.log(fib_2(10)); // 55
console.log(fib_2(30)); // 832040

console.log(fib_3(0)); // 0
console.log(fib_3(3)); // 2
console.log(fib_3(5)); // 5
console.log(fib_3(7)); // 13
console.log(fib_3(10)); // 55
console.log(fib_3(30)); // 832040

console.log(fib_4(0)); // 0
console.log(fib_4(3)); // 2
console.log(fib_4(5)); // 5
console.log(fib_4(7)); // 13
console.log(fib_4(10)); // 55
console.log(fib_4(30)); // 832040