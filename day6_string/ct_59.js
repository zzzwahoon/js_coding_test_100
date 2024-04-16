// 글자 지우기

// ### **문제 설명**
// 문자열 `str`과 정수 배열 `indices`가 주어질 때, `str`에서 `indices`의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// ### 제한사항
// - 1 ≤ `indices`의 길이 < `str`의 길이 ≤ 100
// - `my_string`은 영소문자로만 이루어져 있습니다
// - 0 ≤ `indices`의 원소 < `str`의 길이
// - `indices`의 원소는 모두 서로 다릅니다.

// ### 입출력 예
// | str                   | indices                      | result        |
// | --------------------- | ---------------------------- | ------------- |
// | "apporoograpemmemprs" | [1, 16, 6, 15, 0, 10, 11, 3] | "programmers" |

// ### 입출력 예 설명
// 입출력 예 #1
// - 예제 1번의 `str`의 인덱스가 잘 보이도록 표를 만들면 다음과 같습니다.
    
    
//     | index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
//     | ----- | - | - | - | - | - | - | - | - | - | - | -- | -- | -- | -- | -- | -- | -- | -- | -- |
//     | str   | a | p | p | o | r | o | o | g | r | a | p  | e  | m  | m  | e  | m  | p  | r  | s  |
    
//     `indices`에 있는 인덱스의 글자들을 지우고 이어붙이면 "programmers"가 되므로 이를 return 합니다.

const solution = (str, indices) => {
  let characters = Array.from(str); // 배열로 변환
  indices.sort((a, b) => b - a);  // 인덱스 내림차순으로 
  for (let i = 0; i < indices.length; i++) {
      characters.splice(indices[i], 1); // 뒤에서부터 문자 제거
  }
  return characters.join(''); // 배열을 문자열로 변환
}

const solution_2 = (str, indices) => {
  let characters = Array.from(str);
    indices.sort((a, b) => b - a).forEach(index => characters.splice(index, 1));
    return characters.join('');
};

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'
console.log(solution_2('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'