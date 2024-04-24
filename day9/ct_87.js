// flat

// ### **문제 설명**
// 중첩된 정수 배열 `arr`이 주어지면 평탄화한 배열을 반환하는 함수를 구현한다.
// - Array#flat, Array#flatMap은 사용하지 않는다.

const flat = arr => {
  let result = []; 
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // 요소가 배열인 경우, 재귀 호출을 통해 해당 배열을 평탄화하고 결과를 현재의 결과 배열에 연결
            result = result.concat(flat(item));
        } else {
            // 요소가 배열이 아닌 경우, 직접 결과 배열에 추가
            result.push(item);
        }
    });

    return result;
}

const flat_2 = arr => {
  let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) result.push(...flat(arr[i]));
        else result.push(arr[i]);
    };

    return result;
}

const flat_3 = arr => {
  let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(...(Array.isArray(arr[i]) ? flat(arr[i]) : [arr[i]]));
    };
    return result;
}
const flat_4 = arr => {
  let result = []; 
    for (const v of arr) {
        result.push(...(Array.isArray(v) ? flat(v) : [v]));
    };
    return result;
}
const flat_5 = arr => 
  arr.reduce((flatten, v) => [...flatten, ...(Array.isArray(v) ? flat(v) : [v])], []);

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])); // [1, 2, 3]
console.log(flat([])); // []
console.log(flat_2([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat_2([1, 2, 3])); // [1, 2, 3]
console.log(flat_2([])); // []
console.log(flat_3([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat_3([1, 2, 3])); // [1, 2, 3]
console.log(flat_3([])); // []
console.log(flat_4([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat_4([1, 2, 3])); // [1, 2, 3]
console.log(flat_4([])); // []
console.log(flat_5([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat_5([1, 2, 3])); // [1, 2, 3]
console.log(flat_5([])); // []
