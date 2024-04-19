// 인덱스 바꾸기

// ### **문제 설명**
// 문자열 `str`과 정수 `num1`, `num2`가 매개변수로 주어질 때, `str`에서 인덱스 `num1`과 인덱스 `num2`에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// ### 제한사항
// - 1 < `str`의 길이 < 100
// - 0 ≤ `num1`, `num2` < `str`의 길이
// - `str`은 소문자로 이루어져 있습니다.
// - `num1` ≠ `num2`

// ### 입출력 예
// | str          | num1 | num2 | result       |
// | ------------ | ---- | ---- | ------------ |
// | "hello"      | 1    | 2    | "hlelo"      |
// | "I love you" | 3    | 6    | "I l veoyou" |

// ### 입출력 예 설명
// 입출력 예 #1
// - "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
// 입출력 예 #2
// - "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

const solution = (str, num1, num2) => {
  let arr = [...str];
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
  return arr.join('');
};

const solution_2 = (str, num1, num2) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    // if (i === num1) res += str[num2]
    // else if (i === num2) res += str[num1]
    // else res += str[i]
    res += str[i === num1 ? num2 : i === num2 ? num1 : i];
  }
  return res;
}

console.log(solution('hello', 1, 2)); // 'hlelo'
console.log(solution('I love you', 3, 6)); // 'I l veoyou'
console.log(solution_2('hello', 1, 2)); // 'hlelo'
console.log(solution_2('I love you', 3, 6)); // 'I l veoyou'