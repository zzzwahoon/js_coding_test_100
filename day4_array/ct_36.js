// 배열 만들기 2

// ### **문제 설명**
// 정수 `l`과 `r`이 주어졌을 때, `l` 이상 `r`이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// ### 제한사항
// - 1 ≤ `l` ≤ `r` ≤ 1,000,000

// ### 입출력 예
// | l  | r   | result                          |
// | -- | --- | ------------------------------- |
// | 5  | 555 | [5, 50, 55, 500, 505, 550, 555] |
// | 10 | 20  | [-1]                            |

// ### 입출력 예 설명
// 입출력 예 #1
// - 5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.
// 입출력 예 #2
// - 10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.

const solution = (l, r) => {
	const result = [];
    for (let i = l; i <= r; i++) {
        let num = i;  // 현재 숫자인 'i'를 'num' 변수에 저장
        let isZeroFive = true;  // 현재숫자가 '0'과 '5'로 이루어 져있는지 판별한 값 저장 true or false
        while (num > 0) { // while루프로 현재 숫자 'num'이 0이 될때까지 검사
            const digit = num % 10; // 현재 숫자의 일의 자리 숫자 구하기 
            if (digit !== 0 && digit !== 5) { // 현재 숫자의 일의 자리 숫자가 0 또는 5인지 확인 
                isZeroFive = false; // 0 또는 5가 아니면 break 후 다음 숫자
                break;
            }
            num = Math.floor(num / 10); // 0 또는 5였으면 다시 일의 자리숫자를 없앤뒤 검사 시작 
        }
        if (isZeroFive) {
            result.push(i); // 모든 숫자가 0 또는 5인 숫자가 나오면 result에 저장
        }
    }
    return result.length > 0 ? result : [-1];
};


/////////////
const solution_2 = (l, r) => {
  const res = [];

  outer: for (let i = l; i <= r; i++) {
    for (const c of i + '') {
      if (c !== '0' && c !== '5') continue outer;
    }

    res.push(i);
  }

  return res.length === 0 ? [-1] : res;
};

/////////
const solution_3 = (l, r) => {
  const res = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(n =>
    [...(n + '')].every(c => c === '0' || c === '5')
  );

  return res.length === 0 ? [-1] : res;
};

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]