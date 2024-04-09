// 배열 만들기 5

// ### **문제 설명**
// 문자열 배열 `intStrs`와 정수 `k`, `s`, `l`가 주어집니다. `intStrs`의 원소는 숫자로 이루어져 있습니다.
// 배열 `intStrs`의 각 원소마다 `s`번 인덱스에서 시작하는 길이 `l`짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 `k`보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

// ### 제한사항
// - 0 ≤ `s` < 100
// - 1 ≤ `l` ≤ 8
// - $10^{l - 1}$ ≤ `k` < $10^l$
// - 1 ≤ `intStrs`의 길이 ≤ 10,000
// - `s` + `l` ≤ `intStrs`의 원소의 길이 ≤ 120

// ### 입출력 예

// | intStrs                                       | k     | s | l | result         |
// | --------------------------------------------- | ----- | - | - | -------------- |
// | ["0123456789", "9876543210", "9999999999999"] | 50000 | 5 | 5 | [56789, 99999] |

// ### 입출력 예 설명
// 입출력 예 #1
// - idx에 따라 잘라낸 문자열과 그에 따른 `ret`의 변화를 표시하면 다음 표와 같습니다.
// | idx | 잘라낸 문자열 | ret            |
// | --- | ---------- | -------------- |
// | 0   | "56789"    | [56789]        |
// | 1   | "43210"    | [56789]        |
// | 2   | "99999"    | [56789, 99999] |
// - 따라서 [56789, 99999]를 return 합니다.

const solution = (intStrs, k, s, l) => {
  const result = [];
    
    for (let str of intStrs) {
        const substr = str.substr(s, l); // 문자열의 일부분을 잘라냄
        const num = parseInt(substr); // 부분 문자열을 정수로 변환
        
        if (!isNaN(num) && num > k) { // 정수가 NaN이 아니고 k보다 큰 경우에만 결과 배열에 추가
            result.push(num);
        }
    }
    
    return result;
};

console.log(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5));
// [56789, 99999]