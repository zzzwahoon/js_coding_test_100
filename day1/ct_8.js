// swap

// ### **문제 설명**
// 2개 이상의 정수 요소를 가지는 배열과 2개의 인덱스를 전달받아 두 개의 요소값을 바꾼 배열을 반환하는 함수를 구현한다.

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
  return arr;
};


const arr = [1, 2, 3, 4];
console.log(swap(arr, 1, 2)); // [1, 3, 2, 4]