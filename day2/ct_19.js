// Star pattern 6

// ### **문제 설명**
// 아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.
/*
*********
 *******
  *****
   ***
    * 
*/

const star6 = n => {
	for (let i = n; 1 <= i; i--) {
    let stars = ''; // n개의 줄수 생성
    for (let j = 1; j <= n - i; j++) {
      stars += ' '; // 공백 생성 (맨 밑이 0부터 n - 1까지)
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += '*'; // 각줄 공백옆으로 2i - 1 개의 * 출력
    }
    console.log(stars);
  } 
};

const star6_2 = n => {
  // space : 0 1 2 3 4 => i
  // star : 9 7 5 3 1 => 2 * n - 1 - 2 * i
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(i) + '*'.repeat(2 * n - 1 - 2 * i));
  }
}

star6(5);
star6_2(5);
/*
*********
 *******
  *****
   ***
    * 
*/