// 홀수 vs 짝수

// ### **문제 설명**
// 정수 리스트 `nums`가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// ### 제한사항
// - 5 ≤ `nums`의 길이 ≤ 50
// - 9 ≤ `nums`의 원소 ≤ 9

// ### 입출력 예
// | nums               | result |
// | ------------------ | ------ |
// | [4, 2, 6, 1, 7, 6] | 17     |
// | [-1, 2, 5, 6, 3]   | 8      |

// ### 입출력 예 설명
// 입출력 예 #1
// - 홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다.
// 입출력 예 #2
// - 홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.

const solution = nums => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 ) sum1 += nums[i];
    else sum2 += nums[i];
  }

  // return sum1 > sum2 ? sum1 : sum2;
  return Math.max(sum1, sum2);
};

// functional
const solution_2 = nums => {
  const sum1 = nums.reduce((sum, n, i) => {
    if (i % 2 === 0) sum += n;
    return sum;
  }, 0);

  const sum2 = nums.reduce((sum, n, i) => {
    if (i % 2 !== 0) sum += n;
    return sum;
  }, 0);

  return Math.max(sum1, sum2);
};

const solution_3 = nums => {
  const sum = nums.reduce(
    (acc, n, i) => {
      // if (i % 2 !=== 0) acc[0] += n;
      // else acc[1] += n;
      acc[i % 2] += n;
      return acc;
    }, [0, 0]);
  
    return Math.max(...sum);
}

const solution_4 = nums => {
  const sum = nums.reduce(([s1, s2], n, i) => (i % 2 ? [s1 + n, s2] : [s1, s2 + n]), [0, 0]);
  
    return Math.max(...sum);
}




console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
console.log(solution_2([4, 2, 6, 1, 7, 6])); // 17
console.log(solution_2([-1, 2, 5, 6, 3])); // 8
console.log(solution_3([4, 2, 6, 1, 7, 6])); // 17
console.log(solution_3([-1, 2, 5, 6, 3])); // 8
console.log(solution_4([4, 2, 6, 1, 7, 6])); // 17
console.log(solution_4([-1, 2, 5, 6, 3])); // 8