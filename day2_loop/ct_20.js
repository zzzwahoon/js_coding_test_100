// Star pattern 7

// ### **문제 설명**
// 아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.
/*
*****
*****
*****
*****
*****
*/

const star7 = n => {
	for (let i = 1; i <= n; i++) {
    let stars = '' // n개의 줄수 생성
    for (let j = 1; j <= n; j++) {
      stars += '*' // 각줄에 n개의 *생성
    }
    console.log(stars);
  }
};

star7(5);
/*
*****
*****
*****
*****
*****
*/