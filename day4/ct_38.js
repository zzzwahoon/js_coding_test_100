// 배열 만들기 4

// ### **문제 설명**
// 정수 배열 `arr`가 주어집니다. `arr`를 이용해 새로운 배열 `stk`를 만드려고 합니다.
// 변수 `i`를 만들어 초기값을 0으로 설정한 후 `i`가 `arr`의 길이보다 작으면 다음 작업을 반복합니다.
// - 만약 `stk`가 빈 배열이라면 `arr[i]`를 `stk`에 추가하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`보다 작으면 `arr[i]`를 `stk`의 뒤에 추가하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있는데 `stk`의 마지막 원소가 `arr[i]`보다 크거나 같으면 `stk`의 마지막 원소를 `stk`에서 제거합니다.
// 위 작업을 마친 후 만들어진 `stk`를 return 하는 solution 함수를 완성해 주세요.

// ### 제한사항
// - 1 ≤ `arr`의 길이 ≤ 100,000
// - 1 ≤ `arr`의 원소 ≤ 100,000

// ### 입출력 예
// | arr             | result    |
// | --------------- | --------- |
// | [1, 4, 2, 5, 3] | [1, 2, 3] |

// ### 입출력 예 설명
// 입출력 예 #1
// - 각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.
// | i | arr[i] | stk       |
// | - | ------ | --------- |
// | 0 | 1      | []        |
// | 1 | 4      | [1]       |
// | 2 | 2      | [1, 4]    |
// | 2 | 2      | [1]       |
// | 3 | 5      | [1, 2]    |
// | 4 | 3      | [1, 2, 5] |
// | 4 | 3      | [1, 2]    |
// | - | -      | [1, 2, 3] |
// - 따라서 [1, 2, 3]을 return 합니다.

// for 
const solution = arr => {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0 || stk[stk.length - 1] <= arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] > arr[i]) {
      stk.pop();
      i--; 
    }
  }
  return stk;
};

// while
const solution_2 = arr => {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else {
      stk.pop();
    }
  }

  return stk;
};

const solution_3 = arr => {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0 || stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else {
      stk.pop();
    }
  }

  return stk;
};
console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]