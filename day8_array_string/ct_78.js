// sum matrix

// ### **문제 설명**
// 2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환하는 함수를 구현한다.

const sumMatrix = matrix => {
	// 빈 배열인 경우
  if (matrix.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let row of matrix) {
      for (let num of row) {
          sum += num;
      }
  }
  return sum;
};

const sumMatrix_2 = matrix => matrix.flat().reduce((sum, n) => sum + n, 0);

console.log(sumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(sumMatrix([])); // 0
console.log(sumMatrix_2([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(sumMatrix_2([])); // 0