// 글자 이어 붙여 문자열 만들기

// ### **문제 설명**
// 문자열 `str`과 정수 배열 `indices`가 매개변수로 주어집니다. `str`의 `indices`의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// ### 제한사항
// - 1 ≤ `str`의 길이 ≤ 1,000
// - `str`의 원소는 영소문자로 이루어져 있습니다.
// - 1 ≤ `indices`의 길이 ≤ 1,000
// - 0 ≤ `indices`의 원소 < `str`의 길이

// ### 입출력 예
// | str                  | indices                                  | result        |
// | -------------------- | ---------------------------------------- | ------------- |
// | "cvsgiorszzzmrpaqpe" | [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7] | "programmers" |
// | "zpiaz"              | [1, 2, 0, 0, 3]                          | "pizza"       |

// ### 입출력 예 설명
// 입출력 예 #1
// - 예제 1번의 `str`에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 각각 g, o, r, m, r, a, p, e이므로 `str`에서 `indices`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 "programmers"를 return 합니다.
// 입출력 예 #2
// - 예제 2번의 `str`에서 인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 `str`에서 `indices`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 따라서 "pizza"를 return 합니다.

const solution = (str, indices) => {
  let res = '';
  for (let i = 0; i < indices.length; i++) {
    res += str[indices[i]].toString();
  }
  return res;
};

const solution_2 = (str, indices) => indices.map(index => str[index]).join('');

console.log(solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
// 'programmers'
console.log(solution('zpiaz', [1, 2, 0, 0, 3]));
// 'pizza'
console.log(solution_2('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
// 'programmers'
console.log(solution_2('zpiaz', [1, 2, 0, 0, 3]));
// 'pizza'