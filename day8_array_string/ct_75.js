// 부분 문자열 이어 붙여 문자열 만들기

// ### **문제 설명**
// 길이가 같은 문자열 배열 `strings`와 이차원 정수 배열 `parts`가 매개변수로 주어집니다. `parts[i]`는 [s, e] 형태로, `strings[i]`의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 `strings`의 원소의 `parts`에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// ### 제한사항
// - 1 ≤ `strings`의 길이 = `parts`의 길이 ≤ 100
// - 1 ≤ `strings`의 원소의 길이 ≤ 100
// - `parts[i]`를 [s, e]라 할 때, 다음을 만족합니다.
//     - 0 ≤ s ≤ e < `strings[i]`의 길이

// ### 입출력 예
// | strings | parts | result |
// | --- | --- | --- |
// | ["progressive", "hamburger", "hammer", "ahocorasick"] | [[0, 4], [1, 2], [3, 5], [7, 7]] | "programmers" |

// ### 입출력 예 설명
// 입출력 예 #1
// - 예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.
//     | i | strings[i] | parts[i] | 부분 문자열 |
//     | --- | --- | --- | --- |
//     | 0 | "progressive" | [0, 4] | "progr" |
//     | 1 | "hamburger" | [1, 2] | "am" |
//     | 2 | "hammer" | [3, 5] | "mer" |
//     | 3 | "ahocorasick" | [7, 7] | "s" |
//     각 부분 문자열을 순서대로 이어 붙인 문자열은 "programmers"입니다. 따라서 "programmers"를 return 합니다.

const solution = (strings, parts) => {
  let res = '';
    for (let i = 0; i < strings.length; i++) {
        const [start, end] = parts[i]; // 현재 문자열에서 잘라낼 부분의 시작과 끝 인덱스
        const part = strings[i].substring(start, end + 1); // 잘라낸 부분 문자열
        res += part; // 결과 문자열에 부분 문자열을 이어붙임
    }
    return res;
};

// prettier-ignore
console.log(solution(
  ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
	[[0, 4], [1, 2], [3, 5], [7, 7]]
)); // "programmers"