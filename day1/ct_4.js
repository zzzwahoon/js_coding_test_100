//홀짝

// ### **문제 설명**
// 정수 n이 주어질 때  n이 짝수이면 true, 홀수이면 false를 반환하는 함수를 구현한다.

const isEven = n => {
	return n % 2 === 0 ? true : false;
};

console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(101)); // false
console.log(isEven(-2)); // true