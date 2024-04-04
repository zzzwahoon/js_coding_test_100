// Star pattern 1

// ### **문제 설명**
// 아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.
// /*
// *
// **
// ***
// ****
// *****
// */

const star1 = n => {
	for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
};

star1(5);
/*
*
**
***
****
*****
*/