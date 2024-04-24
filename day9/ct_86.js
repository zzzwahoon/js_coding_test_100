// 약수 구하기

// ### **문제 설명**
// 정수 `n`이 매개변수로 주어질 때, `n`의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 1 ≤ `n` ≤ 10,000

// ### 입출력 예
// | n | result |
// | --- | --- |
// | 24 | [1, 2, 3, 4, 6, 8, 12, 24] |
// | 29 | [1, 29] |

// ### 입출력 예 설명
// 입출력 예 #1
// - 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
// 입출력 예 #2
// - 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.

const findDivisors = n => {
  let res = []; 
    for (let i = 1; i <= n; i++) { 
        if (n % i === 0) res.push(i); 
    }
    return res;
};
const findDivisors_2 = n => {
  let res = []; 
    for (let i = 1; i <= n / 2; i++) { 
        if (n % i === 0) res.push(i); 
    }
    return [...res, n];
};
const findDivisors_3 = n => {
  const set = new Set(); 
    for (let i = 1; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) set.add(i).add(n / i); 
    }
    return [...set].sort((a, b) => a - b);
};

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]
console.log(findDivisors_2(1)); // [1]
console.log(findDivisors_2(15)); // [1, 3, 5, 15]
console.log(findDivisors_2(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors_2(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors_2(29)); // [1, 29]
console.log(findDivisors_3(1)); // [1]
console.log(findDivisors_3(15)); // [1, 3, 5, 15]
console.log(findDivisors_3(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors_3(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors_3(29)); // [1, 29]