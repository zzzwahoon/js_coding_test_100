// 중복된 문자 제거

// ### **문제 설명**
// 문자열 `str`이 매개변수로 주어집니다. `str`에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - 1 ≤ `str` ≤ 110
// - `str`은 대문자, 소문자, 공백으로 구성되어 있습니다.
// - 대문자와 소문자를 구분합니다.
// - 공백(" ")도 하나의 문자로 구분합니다.
// - 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

// ### 입출력 예
// | str | result |
// | --- | --- |
// | "people" | "peol" |
// | "We are the world" | "We arthwold" |

// ### 입출력 예 설명
// 입출력 예 #1
// - "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
// 입출력 예 #2
// - "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

const solution = str => {
  let result = '';        
  let seen = new Set();   // Set 객체는 값의 집합으로, 각 값은 유일하게만 존재

  // 문자열을 순회하며 각 문자에 대해 처리
  for (let char of str) {
    if (!seen.has(char)) { // 1. 현재 문자가 집합에 없으면, 즉 중복되지 않았으면
      // Set 객체의 has() 메소드는 Set에 특정 값 char가 존재하는지를 검사, 존재하면 true를, 존재하지 않으면 false를 반환
      seen.add(char);      // 2. 집합에 문자를 추가
      // Set 객체의 add() 메소드는 새로운 요소 char를 Set에 추가
      result += char;      // 3. 결과 문자열에 문자를 추가
    }
  }

  return result;
}

const solution_2 = str => {
  // 문자열에서 공백도 제거하지 않고 중복만 제거
  let uniqueChars = [...new Set(str)]; // Set은 자동으로 중복을 제거하여, 각 문자가 단 한 번씩만 포함되도록 한다
  return uniqueChars.join('');
};

console.log(solution('people')); // 'peol'
console.log(solution('We are the world')); // 'We arthwold'
console.log(solution_2('people')); // 'peol'
console.log(solution_2('We are the world')); // 'We arthwold'