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

const solution_2 = str => {
    let res = '';
    for (const c of str) {
        if (str.indexOf(c) === str.lastIndexOf(c)) {
            res += c;
        }
    }
    return [...res].sort().join('');
}

const solution_3 = str => {
    // const hash = {};

    // for (const c of str) {
    //     hash[c] = (hash[c] || 0) + 1;
    // }

    const hash = [...str].reduce((acc, c) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(hash)
    .filter(([key, val]) => val ===1)
    .map(([key, val]) => key)
    .sort()
    .join('');
}

const solution_4 = str => {
    const hash = [...str].reduce((map, c) => map.set(c.)) (c) || 0) + 1), new Map());

    return [...hash]
    .filter(([, val]) => val === 1)
    .map(([key]) => key)
    .sort()
    .join('')
}

console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "abcd"
console.log(solution('hello')); // "eho"
console.log(solution_2('abcabcadc')); // "d"
console.log(solution_2('abdc')); // "abcd"
console.log(solution_2('hello')); // "eho"
console.log(solution_3('abcabcadc')); // "d"
console.log(solution_3('abdc')); // "abcd"
console.log(solution_3('hello')); // "eho"
console.log(solution_4('abcabcadc')); // "d"
console.log(solution_4('abdc')); // "abcd"
console.log(solution_5('hello')); // "eho"