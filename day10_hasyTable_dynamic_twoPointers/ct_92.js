// 조건 문자열

// ### **문제 설명**
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
// - 두 수가 `n`과 `m`이라면
//     - ">", "=" : `n` >= `m`
//     - "<", "=" : `n` <= `m`
//     - ">", "!" : `n` > `m`
//     - "<", "!" : `n` < `m`
// 두 문자열 `ineq`와 `eq`가 주어집니다. `ineq`는 "<"와 ">"중 하나고, `eq`는 "="와 "!"중 하나입니다. 그리고 두 정수 `n`과 `m`이 주어질 때, `n`과 `m`이 `ineq`와 `eq`의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

// ### 제한 사항
// - 1 ≤ `n`, `m` ≤ 100

// ### 입출력 예
// | ineq | eq | n | m | result |
// | --- | --- | --- | --- | --- |
// | "<" | "=" | 20 | 50 | 1 |
// | ">" | "!" | 41 | 78 | 0 |

// ### 입출력 예 설명
// 입출력 예 #1
// - 20 <= 50은 참이기 때문에 1을 return합니다.
// 입출력 예 #2
// - 41 > 78은 거짓이기 때문에 0을 return합니다.

const solution = (ineq, eq, n, m) => {
  // ">", "=" : n >= m
  if (ineq === '>' && eq === '=') {
    return n >= m ? 1 : 0;
  }
  // "<", "=" : n <= m
  else if (ineq === '<' && eq === '=') {
      return n <= m ? 1 : 0;
  }
  // ">", "!" : n > m
  else if (ineq === '>' && eq === '!') {
      return n > m ? 1 : 0;
  }
  // "<", "!" : n < m
  else if (ineq === '<' && eq === '!') {
      return n < m ? 1 : 0;
  }

};

////////////////

const solution_2 = (ineq, eq, n, m) => {
  const operators = {
    '>=' : (n, m) => n >= m, 
    '<=' : (n, m) => n <= m,
    '>!' : (n, m) => n > m,
    '<!' : (n, m) => n < m
  }

  return +operators[ineq + eq](n, m);
}

console.log(solution('<', '=', 20, 50)); // 1
console.log(solution('>', '!', 41, 78)); // 0

console.log(solution_2('<', '=', 20, 50)); // 1
console.log(solution_2('>', '!', 41, 78)); // 0