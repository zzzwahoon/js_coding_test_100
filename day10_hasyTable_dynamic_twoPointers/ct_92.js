// 한 번만 등장한 문자

// ### **문제 설명**
// 문자열 `str`이 매개변수로 주어집니다. `str`에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// ### 제한사항
// - 0 < `str`의 길이 < 1,000
// - `str` 은 소문자로만 이루어져 있습니다.

// ### 입출력 예
// | str | result |
// | --- | --- |
// | "abcabcadc" | "d" |
// | "abdc" | "abcd" |
// | "hello" | "eho" |

// ### 입출력 예 설명
// 입출력 예 #1
// - "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.
// 입출력 예 #2
// - "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.
// 입출력 예 #3
// - "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.

const solution = str => {
  const frequency = {};

  // 문자열을 순회하며 각 문자의 빈도를 세기
  for (const char of str) {
      if (frequency[char]) {
          frequency[char] += 1;
      } else {
          frequency[char] = 1;
      }
  }

  const uniqueChars = [];
  for (const char in frequency) {
      if (frequency[char] === 1) {
          uniqueChars.push(char);
      }
  }

  // 필터링된 문자들을 사전 순으로 정렬후 붙이기
  return uniqueChars.sort().join('');
};

console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "abcd"
console.log(solution('hello')); // "eho"