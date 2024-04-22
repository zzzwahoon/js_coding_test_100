// 외계어 사전

// ### **문제 설명**
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 `spell`과 외계어 사전 `dic`이 매개변수로 주어집니다. `spell`에 담긴 알파벳을 한번씩만 모두 사용한 단어가 `dic`에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// ### 제한사항
// - `spell`과 `dic`의 원소는 알파벳 소문자로만 이루어져있습니다.
// - 2 ≤ `spell`의 크기 ≤ 10
// - `spell`의 원소의 길이는 1입니다.
// - 1 ≤ `dic`의 크기 ≤ 10
// - 1 ≤ `dic`의 원소의 길이 ≤ 10
// - `spell`의 원소를 모두 사용해 단어를 만들어야 합니다.
// - `spell`의 원소를 모두 사용해 만들 수 있는 단어는 `dic`에 두 개 이상 존재하지 않습니다.
// - `dic`과 `spell` 모두 중복된 원소를 갖지 않습니다.

// ### 입출력 예
// | spell | dic | result |
// | --- | --- | --- |
// | ["p", "o", "s"] | ["sod", "eocd", "qixm", "adio", "soo"] | 2 |
// | ["z", "d", "x"] | ["def", "dww", "dzx", "loveaw"] | 1 |
// | ["s", "o", "m", "d"] | ["moos", "dzx", "smm", "sunmmo", "som"] | 2 |

// ### 입출력 예 설명
// 입출력 예 #1
// - "p", "o", "s" 를 조합해 만들 수 있는 단어가 `dic`에 존재하지 않습니다. 따라서 2를 return합니다.
// 입출력 예 #2
// - "z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 `dic`에 존재합니다. 따라서 1을 return합니다.
// 입출력 예 #3
// - "s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 `dic`에 존재하지 않습니다. 따라서 2을 return합니다.

// ### 유의사항
// - 입출력 예 #3 에서 "moos", "smm", "som"도 "s", "o", "m", "d" 를 조합해 만들 수 있지만 `spell`의 원소를 모두 사용해야 하기 때문에 정답이 아닙니다.

const solution = (spell, dic) => {
  // spell 배열을 정렬하여 문자열로 합칩니다.
  const sortedSpell = spell.sort().join('');

  // dic 배열의 각 단어를 정렬하여 검사합니다.
  for (let word of dic) {
      if (word.length === spell.length) { // 길이가 같은 경우에만 검사
          const sortedWord = word.split('').sort().join('');
          if (sortedWord === sortedSpell) {
              return 1; // 정렬된 문자열이 일치하면 1 반환
          }
      }
  }
  
  return 2; // 일치하는 단어가 없으면 2 반환
};

const solution_2 = (spell, dic) => {
  const str = spell.sort().join('');  // O(nlogn) sort 때문에

  // O(n*nlogn)
  for (const word of dic) { // O(n)
    if (str === [...word].sort().join('')) return 1 // O(nlogn)
  }
  return 2;
}

const solution_3 = (spell, dic) => {
  // dic의 개수 n
  // spell의 개수 m
  // word의 평균 개수 l
  // O(nml)
  for (const word of dic) {
    if (spell.length === word.length && spell.every(c => word.includes(c))) return 1;
  }
  return 2;
}
const solution_4 = (spell, dic) => {  // 복잡도 우위
  for (const word of dic) {
    const set = new Set(word);
    if (spell.length === word.length && spell.every(c => set.has(c))) return 1;
  }
  return 2;
}

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
console.log(solution_2(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution_2(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution_2(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
console.log(solution_3(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution_3(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution_3(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
console.log(solution_4(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution_4(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution_4(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2