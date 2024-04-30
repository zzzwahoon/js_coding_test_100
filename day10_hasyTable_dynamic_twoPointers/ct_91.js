// 영어가 싫어요 

// ### **문제 설명**
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 `nums`가 매개변수로 주어질 때, `nums`를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// ### 제한사항
// - `nums`는 소문자로만 구성되어 있습니다.
// - `nums`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// - 1 ≤ `nums`의 길이 ≤ 50
// - "zero"는 `nums`의 맨 앞에 올 수 없습니다.

// ### 입출력 예
// | nums | result |
// | --- | --- |
// | "onetwothreefourfivesixseveneightnine" | 123456789 |
// | "onefourzerosixseven" | 14067 |

// ### 입출력 예 설명
// 입출력 예 #1
// - "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
// 입출력 예 #1
// - "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

const solution = nums => {
  // 영어 단어와 숫자 매핑
  const numWords = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };

  let result = "";
  let currentWord = "";

  // 문자열을 순회하면서 각 문자를 검사
  for (const char of nums) {
      currentWord += char; // 현재 단어 구성
      if (numWords[currentWord] !== undefined) { // 매핑된 숫자가 있는지 확인
          result += numWords[currentWord]; // 결과에 숫자 추가
          currentWord = ""; // 현재 단어 초기화
      }
  }

  return +result; // 결과 문자열을 정수로 변환
};

/////////////

const solution_2 = nums => {
  // 사전
  const dictionary = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };

  // Object => array
  // Object.keys() : key 값만 출력 ('zero', 'one', ...)
  // Object.values() : value 값만 출력 (0, 1, ...)
  // Object.entries() : [key, value] 값 출력 (['zero', 0] ['one', 1] ...)
  for (const [key, val] of Object.entries(dictionary)) {
    nums = nums.replace(key,val);
  }

  return +nums;
}

console.log(solution_2('onetwothreefourfivesixseveneightnine')); // 123456789
console.log(solution_2('onefourzerosixseven')); // 14067