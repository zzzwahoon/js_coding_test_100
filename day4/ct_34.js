// 뒤에서 5등 위로

// ### **문제 설명**
// 정수로 이루어진 리스트 `nums`가 주어집니다. `nums`에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 6 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 100

// ### 입출력 예
// | nums                                   | result               |
// | -------------------------------------- | -------------------- |
// | [12, 4, 15, 46, 38, 1, 14, 56, 32, 10] | [15, 32, 38, 46, 56] |

// ### 입출력 예 설명
// 입출력 예 #1
// - [12, 4, 15, 46, 38, 1, 14, 56, 32, 10]를 정렬하면 [1, 4, 10, 12, 14, 15, 32, 38, 46, 56]이 되고, 앞에서 부터 6번째 이후의 수들을 고르면 [15, 32, 38, 46, 56]가 됩니다.

const solution = nums => {
	// 가장 작은 5개의 수 찾기
  const minNumbers = nums.sort((a, b) => a - b).slice(0, 5);
    
  // 가장 작은 5개의 수를 제외한 나머지 수 필터링
  const filteredNumbers = nums.filter(num => !minNumbers.includes(num));
  
  // 오름차순으로 정렬
  filteredNumbers.sort((a, b) => a - b);
  
  // 결과 반환
  return filteredNumbers;
};

const solution_2 = nums => nums.sort((a, b) => a - b).slice(5);
const solution_3 = nums => nums.toSorted((a, b) => a - b).slice(5);


console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]
console.log(solution_2([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]
console.log(solution_3([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]