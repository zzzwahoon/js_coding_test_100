// 문자열 묶기

// ### **문제 설명**
// 문자열 배열 `strings`가 주어집니다. `strings`의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// ### 제한사항
// - 1 ≤ `strings`의 길이 ≤ 100,000
//     - 1 ≤ `strings`의 원소의 길이 ≤ 30
//     - `strings`의 원소들은 알파벳 소문자로 이루어진 문자열입니다.

// ### 입출력 예
// | strings                   | result |
// | ------------------------- | ------ |
// | ["a","bc","d","efg","hi"] | 2      |

// ### 입출력 예 설명
// **입출력 예 #1**
// - 각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.
// | 문자열 길이 | 문자열 목록 | 개수 |
// | --- | ----------- | --- |
// | 1   | ["a","d"]   | 2   |
// | 2   | ["bc","hi"] | 2   |
// | 3   | ["efg"]     | 1   |
// - 개수의 최댓값은 2이므로 2를 return 합니다.


const solution = strings => {
  // 길이를 키로 하는 객체를 생성하여 각 길이에 해당하는 문자열 수를 카운트
  const length = {};

  // 각 문자열의 길이에 따라 카운트 증가
  for (const str of strings) {
      const len = str.length;
      if (length[len]) {
          length[len] += 1;
      } else {
          length[len] = 1;
      }
  }
  let result = 0;
    for (const len in length) {
        if (length[len] > result) {
            result = length[len];
        }
    }

    return result;
};

const solution_2 = strings => {
  // ['a', 'bc', 'd', 'efg', 'hi'] => {1: 2, 2: 2, 3: 1} => 2

  // key : length, value: count
  const hash = {};

  for (const str of strings) {
    hash[str.length] = (hash[str.length] || 0) + 1;
  }

  return Math.max(...Object.values(hash));
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])); // 2
console.log(solution_2(['a', 'bc', 'd', 'efg', 'hi'])); // 2