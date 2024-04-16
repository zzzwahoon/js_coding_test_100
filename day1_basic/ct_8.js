// swap

// ### **문제 설명**
// 2개 이상의 정수 요소를 가지는 배열과 2개의 인덱스를 전달받아 두 개의 요소값을 바꾼 배열을 반환하는 함수를 구현한다.

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

const swap2 = (arr2, i, j) => {
  const copy = [...arr2];
  [copy[i], copy[j]] = [arr2[j], arr2[i]];
  return copy;
}

const swap3 = (arr3, i, j) => (arr3.with(i, arr3[j]).with(j, arr3[i]));



const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];
console.log(swap(arr, 1, 2)); // [1, 3, 2, 4]
console.log(swap2(arr2, 1, 2)); // [1, 3, 2, 4]
console.log(swap3(arr3, 1, 2)); // [1, 3, 2, 4]

