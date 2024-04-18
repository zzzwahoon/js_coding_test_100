// 공백으로 구분하기 2

// ### **문제 설명**
// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 `str`이 매개변수로 주어질 때, `str`에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// ### 제한사항
// - `str`은 영소문자와 공백으로만 이루어져 있습니다.
// - 1 ≤ `str`의 길이 ≤ 1,000
// - `str`의 맨 앞과 맨 뒤에도 공백이 있을 수 있습니다.
// - `str`에는 단어가 하나 이상 존재합니다.

// ### 입출력 예
// | str | result |
// | --- | --- |
// | " i    love  you" | ["i", "love", "you"] |
// | "    programmers  " | ["programmers"] |

// ### 입출력 예 설명
// 입출력 예 #1
// - 예제 1번의 `str`은 " i love you"로 공백을 기준으로 단어를 나누면 "i", "love", "you" 3개의 단어가 있습니다. 따라서 ["i", "love", "you"]를 return 합니다.
// 입출력 예 #2
// - 예제 2번의 `str`은 " programmers "로 단어는 "programmers" 하나만 있습니다. 따라서 ["programmers"]를 return 합니다.

const solution = str => {
  let result = [];
  let currentWord = '';

  for (let i = 0; i <= str.length; i++) {
      // 문자열 끝에 도달하거나 공백 문자를 만났을 때
      if (i === str.length || str[i] === ' ') {
          // 현재 단어가 비어 있지 않다면 결과 배열에 추가
          if (currentWord.length > 0) {
              result.push(currentWord);
              currentWord = '';  // 현재 단어를 초기화
          }
      } else {
          // 공백이 아닌 경우, 현재 단어에 문자 추가
          currentWord += str[i];
      }
  }

  return result;
}

const solution_2 = str => str.trim().split(/\s+/);
// '\s': 하나 이상의 공백문자
// '+': 하나 이상의 해당 문자가 연속으로 나타남
// trim(): 문자열의 앞뒤 공백을 제거한후 진행

console.log(solution(' i    love  you')); // ["i", "love", "you"]
console.log(solution('    programmers  ')); // ["programmers"]