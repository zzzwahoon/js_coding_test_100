// 7의 개수

// ### **문제 설명**
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 `nums`가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// ### 제한사항
// - 1 ≤ `nums`의 길이 ≤ 100
// - 0 ≤ `nums`의 원소 ≤ 100,000

// ### 입출력 예
// | nums        | result |
// | ----------- | ------ |
// | [7, 77, 17] | 4      |
// | [10, 29]    | 0      |

// ### 입출력 예 설명
// 입출력 예 #1
// - [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
// 입출력 예 #2
// - [10, 29]에는 7이 없으므로 0을 return 합니다.

const solution = nums => {
  let count = 0;
    // 배열의 모든 요소를 순회
    nums.forEach(num => {
        // 각 숫자를 문자열로 변환
        const numStr = num.toString();
        // 문자열의 각 문자를 순회하며 '7'인 경우 카운트 증가
        for (let char of numStr) {
            if (char === '7') count++;
        }
    });
    return count;
};

const solution_2 = nums => {
  let count = 0;
  for (const c of nums.join('')) {
    if (c === '7') count += 1;
  }
  return count;
}

const solution_3 = nums => [...nums.join('')].filter(c => c === '7').length;

const solution_4 = nums => nums.join('').match(/7/g).length;

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
console.log(solution_2([7, 77, 17])); // 4
console.log(solution_2([10, 29])); // 0
console.log(solution_3([7, 77, 17])); // 4
console.log(solution_3([10, 29])); // 0
console.log(solution_4([7, 77, 17])); // 4
console.log(solution_4([10, 29])); // 0