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

const average_2 = scores => {
  if (scores.length === 0) return 0;

  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return Math.round(sum / scores.length);
};

const average_3 = scores => {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  // 0 / 0 => NaN
  return Math.round(sum / scores.length) || 0;
};

const average_4 = scores =>
  Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) || 0;

console.log(average([73, 82, 99])); // 85
console.log(average([50, 100, 90, 45, 70])); // 71
console.log(average([100])); // 100
console.log(average([])); // 0
console.log(average_2([73, 82, 99])); // 85
console.log(average_2([50, 100, 90, 45, 70])); // 71
console.log(average_2([100])); // 100
console.log(average_2([])); // 0
console.log(average_3([73, 82, 99])); // 85
console.log(average_3([50, 100, 90, 45, 70])); // 71
console.log(average_3([100])); // 100
console.log(average_3([])); // 0
console.log(average_4([73, 82, 99])); // 85
console.log(average_4([50, 100, 90, 45, 70])); // 71
console.log(average_4([100])); // 100
console.log(average_4([])); // 0