// Star pattern 5

// ### **문제 설명**
/*
    *
   ***
  *****
 *******
*********
*/

const star5 = n => {
	for (let i = 1; i <= n; i++) {
    let stars = ''; // n개의 줄수 생성
    for (let j = 1; j <= n - i; j++) {
      stars += ' '; // 공백 생성 (맨 밑이 1부터 위로 n - 1까지)
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += '*'; // 공백옆으로 2n - 1 개의 * 출력
    }
    console.log(stars);
  } 
};

star5(5);
/*
    *
   ***
  *****
 *******
*********
*/