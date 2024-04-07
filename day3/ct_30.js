// average

// ### **문제 설명**
// 숫자 배열 scores가 주어지면 모든 요소의 평균을 반환하는 함수를 구현한다.
// 평균이 실수인 경우 반올림해 정수를 반환한다.
// Math.round
// scores가 빈 배열이면 0을 반환한다.

const average = scores => {
  if (scores.length === 0) return 0;
  let sum = 0;
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const avg = Math.round(sum / scores.length);
  return avg;
};

console.log(average([73, 82, 99])); // 85
console.log(average([50, 100, 90, 45, 70])); // 71
console.log(average([100])); // 100
console.log(average([])); // 0