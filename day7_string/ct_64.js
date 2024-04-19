// x 사이의 개수

// ### **문제 설명**
// 문자열 `str`이 주어집니다. `str`을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// ### 제한사항
// - 1 ≤ `str`의 길이 ≤ 100,000
//     - `str`은 알파벳 소문자로 이루어진 문자열입니다.

// ### 입출력 예
// | str            | result             |
// | -------------- | ------------------ |
// | "oxooxoxxox"   | [1, 2, 1, 0, 1, 0] |
// | "xabcxdefxghi" | [0, 3, 3, 3]       |

// ### 입출력 예 설명
// 입출력 예 #1
// - "x"를 기준으로 문자열을 나누면 ["o", "oo", "o", "", "o", ""]가 됩니다. 각각의 길이로 배열을 만들면 [1, 2, 1, 0, 1, 0]입니다. 따라서 [1, 2, 1, 0, 1, 0]을 return 합니다.
// 입출력 예 #2
// - "x"를 기준으로 문자열을 나누면 ["", "abc", "def", "ghi"]가 됩니다. 각각의 길이로 배열을 만들면 [0, 3, 3, 3]입니다. 따라서 [0, 3, 3, 3]을 return 합니다.

const solution = str => {
  let countArr = []; 
  let currentLength = 0; 

  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
          countArr.push(currentLength); // 'x'를 만났을떄 현재 길이를 배열에 추가
          currentLength = 0; // 길이를 리셋
      } else currentLength++; // 'x'가 아니면 길이를 증가
  }
  countArr.push(currentLength); // 마지막 부분 문자열의 길이 추가

  return countArr;
};

const solution_2 = str => str.split('x').map(part => part.length);
// 1. split: 문자열 str을 'x' 문자를 기준으로 나누기. 'x'를 포함하지 않은 문자열 배열을 반환
// ['o', 'oo', 'o', '', 'o', '']
// 2. map: 생성된 배열의 길이를 측정 후 이 길이를 새로운 배열로 맵핑

console.log(solution('oxooxoxxox')); // [1, 2, 1, 0, 1, 0]
console.log(solution('xabcxdefxghi')); // [0, 3, 3, 3]