// 문자열 겹쳐쓰기

// ### **문제 설명**
// 문자열 `str`, `overwriteStr`과 정수 `s`가 주어집니다. 문자열 `str`의 인덱스 `s`부터 `overwriteStr`의 길이만큼을 문자열 `overwriteStr`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// ### 제한사항
// - `str`와 `overwriteStr`은 숫자와 알파벳으로 이루어져 있습니다.
// - 1 ≤ `overwriteStr`의 길이 ≤ `str`의 길이 ≤ 1,000
// - 0 ≤ `s` ≤ `str`의 길이 - `overwriteStr`의 길이

// ### 입출력 예
// | str              | overwriteStr | s   | result           |
// | ---------------- | ------------ | --- | ---------------- |
// | "He11oWor1d"     | "lloWorl"    | 2   | "HelloWorld"     |
// | "Program29b8UYP" | "merS123"    | 7   | "ProgrammerS123" |

// ### 입출력 예 설명
// 입출력 예 #1
// - 예제 1번의 `str`에서 인덱스 2부터 `overwriteStr`의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.
// 입출력 예 #2
// - 예제 2번의 `str`에서 인덱스 7부터 `overwriteStr`의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.

const solution = (str, overwriteStr, s) => {
  let result = str.slice(0, s);
  result += overwriteStr;
  result += str.slice(s + overwriteStr.length);
  return result;
};

const solution_2 = (str, overwriteStr, s) => `${str.slice(0, s)}${overwriteStr}${str.slice(s + overwriteStr.length)}`

const solution_3 = (str, overwriteStr, s) => str.slice(0, s) + overwriteStr + str.slice(s + overwriteStr.length);

console.log(solution('He11oWor1d', 'lloWorl', 2)); // 'HelloWorld'
console.log(solution('Program29b8UYP', 'merS123', 7)); // 'ProgrammerS123'
console.log(solution_2('He11oWor1d', 'lloWorl', 2)); // 'HelloWorld'
console.log(solution_2('Program29b8UYP', 'merS123', 7)); // 'ProgrammerS123'
console.log(solution_3('He11oWor1d', 'lloWorl', 2)); // 'HelloWorld'
console.log(solution_3('Program29b8UYP', 'merS123', 7)); // 'ProgrammerS123'