// 문자열 잘라서 정렬하기

// ### **문제 설명**
// 문자열 `str`이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.

// ### 제한사항
// - 1 ≤ `str` ≤ 100,000
//     - `str`은 알파벳 소문자로 이루어진 문자열입니다.

// ### 입출력 예
// | str             | result                  |
// | --------------- | ----------------------- |
// | "axbxcxdx"      | ["a","b","c","d"]       |
// | "dxccxbbbxaaaa" | ["aaaa","bbb","cc","d"] |

// ### 입출력 예 설명
// 입출력 예 #1
// - `str`을 "x"를 기준으로 자른 배열은 ["a","b","c","d"]이며, 이 배열은 이미 사전순으로 정렬된 상태입니다. 따라서 해당 배열을 return 합니다.
// 입출력 예 #2
// - `str`을 "x"를 기준으로 자른 배열은 ["d","cc","bbb","aaaa"]이며, 이 배열을 사전순으로 정렬하면 ["aaaa","bbb","cc","d"]입니다. 따라서 해당 배열을 return 합니다.

const solution = str => str.split('x').filter(part => part).sort();
// part => part는 각 부분 문자열 part가 참 같은 값(즉, 비어 있지 않은 문자열)인 경우에만 해당 요소를 새 배열에 포함시키라는 조건

const solution_2 = str => str.split('x').filter(Boolean).sort();

console.log(solution("axbxcxdx")); // ["a","b","c","d"]
console.log(solution('dxccxbbbxaaaa')); // ["aaaa","bbb","cc","d"]
console.log(solution_2("axbxcxdx")); // ["a","b","c","d"]
console.log(solution_2('dxccxbbbxaaaa')); // ["aaaa","bbb","cc","d"]