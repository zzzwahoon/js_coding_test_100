// 꼬리 문자열

// ### **문제 설명**
// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.
// 문자열 리스트 `strList`와 제외하려는 문자열 `ex`가 주어질 때, `strList`에서 `ex`를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 2 ≤ `strList`의 길이 ≤ 10
// - 1 ≤ `strList`의 원소의 길이 ≤ 10
// - 1 ≤ `ex`의 길이 ≤ 5

// ### 입출력 예
// | strList               | ex   | result   |
// | --------------------- | ---- | -------- |
// | ["abc", "def", "ghi"] | "ef" | "abcghi" |
// | ["abc", "bbc", "cbc"] | "c"  | ""       |

// ### 입출력 예 설명
// 입출력 예 #1
// - 본문과 동일합니다.
// 입출력 예 #2
// - 리스트 안의 모든 문자열이 "c"를 포함하므로 빈 문자열을 return합니다.

const solution = (strList, ex) => {
  let res = '';
  for (let i = 0; i < strList.length; i++) {
    if (!strList[i].includes(ex)) res += strList[i]; 
    // 'ex'를 포함하지 않는 경우에만 추가
  }
  return res;
};

///////////////

const solution_2 = (strList, ex) => strList.filter(str => !str.includes(ex)).join('');

console.log(solution(['abc', 'def', 'ghi'], 'ef')); // 'abcghi'
console.log(solution(['abc', 'bbc', 'cbc'], 'c')); // ''
console.log(solution_2(['abc', 'def', 'ghi'], 'ef')); // 'abcghi'
console.log(solution_2(['abc', 'bbc', 'cbc'], 'c')); // ''