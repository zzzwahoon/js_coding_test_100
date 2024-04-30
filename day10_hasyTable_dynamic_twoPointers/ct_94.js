// 진료 순서 정하기

// ### **문제 설명**
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 `emergency`가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 중복된 원소는 없습니다.
// - 1 ≤ `emergency`의 길이 ≤ 10
// - 1 ≤ `emergency`의 원소 ≤ 100

// ### 입출력 예
// | emergency               | result                |
// | ----------------------- | --------------------- |
// | [3, 76, 24]             | [3, 1, 2]             |
// | [1, 2, 3, 4, 5, 6, 7]   | [7, 6, 5, 4, 3, 2, 1] |
// | [30, 10, 23, 6, 100]    | [2, 4, 3, 5, 1]       |

// ### 입출력 예 설명
// 입출력 예 #1
// - `emergency`가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
// 입출력 예 #2
// - `emergency`가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
// 입출력 예 #3
// - `emergency`가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

const solution = emergency => {
  let indexed = [];
  for (let i = 0; i < emergency.length; i++) {
      indexed.push([emergency[i], i]);
  }
  indexed.sort((a, b) => b[0] - a[0]);

  const result = new Array(emergency.length);
  for (let i = 0; i < indexed.length; i++) {
      let item = indexed[i];
      result[item[1]] = i + 1; // i + 1 로 순위를 할당 (1부터 시작하는 순위)
  }

  return result;
}

const solution_2 = emergency => {
  let indexed = emergency.map((value, index) => [value, index]);
  indexed.sort((a, b) => b[0] - a[0]);
  const result = new Array(emergency.length);
  indexed.forEach((item, index) => {
    result[item[1]] = index + 1;
  });
  return result;
};

/////////////

const solution_3 = emergency => {
  const sorted = [...emergency].sort((a, b) => b - a);
  const res = [];
  for (const n of emergency) {
    res.push(sorted.indexOf(n) + 1);
  }
  
  return res;
}

const solution_4 = emergency => {
  // [3, 76, 24] => [76, 24, 3] => {3: 3, 76: 1, 24: 2} => [3, 1, 2]
  
  const sortedHash = [...emergency]
  .sort((a, b) => b - a)  // O(nlogn)
  .reduce((hash, n, i) => { // O(n)
    hash[n] = i + 1;
    return hash;
  }, {});

  return emergency.map(n => sortedHash[n]); // O(n)
} // O(nlogn + n + n) => O(nlogn)

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]

console.log(solution_2([3, 76, 24])); // [3, 1, 2]
console.log(solution_2([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution_2([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]

console.log(solution_3([3, 76, 24])); // [3, 1, 2]
console.log(solution_3([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution_3([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]

console.log(solution_4([3, 76, 24])); // [3, 1, 2]
console.log(solution_4([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution_4([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]