// 최빈값 구하기

// ### **문제 설명**
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 `nums`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// ### 제한사항
// - 0 < `nums`의 길이 < 100
// - 0 ≤ `nums`의 원소 < 1000

// ### 입출력 예
// | nums | result |
// | --- | --- |
// | [1, 2, 3, 3, 3, 4] | 3 |
// | [1, 1, 2, 2] | -1 |
// | [1] | 1 |

// ### 입출력 예 설명
// 입출력 예 #1
// - [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
// 입출력 예 #2
// - [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
// 입출력 예 #3
// - [1]에는 1만 있으므로 최빈값은 1입니다.

const solution = nums => {
  const frequency = {};
    
    // 각 숫자의 빈도를 계산
    nums.forEach(num => {
        if (frequency[num]) {
            frequency[num] += 1;
        } else {
            frequency[num] = 1;
        }
    });

    // 최대 빈도수 찾기
    let maxFrequency = 0;
    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
        }
    }

    // 최대 빈도수를 갖는 숫자들 찾기
    const modes = [];
    for (const key in frequency) {
        if (frequency[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }

    // 최빈값이 하나인지 여러 개인지 확인
    if (modes.length === 1) {
      return modes[0];
  } else {
      return -1;
  }
};

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1