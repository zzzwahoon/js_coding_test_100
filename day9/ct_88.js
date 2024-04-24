// deepReverse

// ### **문제 설명**
// 주어진 중첩된 배열 arr을 뒤집은 새로운 배열을 반환하는 함수를 구현한다. 
// - arr은 반드시 배열이다.
// - for 문, for…in 문, for…of 문, Array#forEach는 사용하지 않는다.

const deepReverse = arr => { 
  if(!Array.isArray(arr)) return arr;
  const res = [];

  for (const v of arr) {
    if (Array.isArray(v)) res.push(deepReverse(v));
    else res.push(v);
  }

  return res.reverse();
};

const deepReverse_2 = arr => {
  if(!Array.isArray(arr)) return arr;
  return arr.map(v => (Array.isArray(v) ? deepReverse_2(v) : v)).reverse();
}

const deepReverse_3 = arr => 
  Array.isArray(arr) ? arr.map(v => deepReverse_3(v)).reverse() : arr;

const deepReverse_4 = arr => 
  arr?.map?.(v => (Array.isArray(v) ? deepReverse_4(v) : v)).reverse() ?? arr;


console.log(deepReverse([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse(1)); // 1
console.log(deepReverse(null)); // null
console.log(deepReverse()); // undefined

console.log(deepReverse_2([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse_2(1)); // 1
console.log(deepReverse_2(null)); // null
console.log(deepReverse_2()); // undefined

console.log(deepReverse_3([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse_3(1)); // 1
console.log(deepReverse_3(null)); // null
console.log(deepReverse_3()); // undefined

console.log(deepReverse_4([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse_4(1)); // 1
console.log(deepReverse_4(null)); // null
console.log(deepReverse_4()); // undefined