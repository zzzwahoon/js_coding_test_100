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

const star1_2 = n => {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(i + 1));
  }
}

star1(5);
star1_2(5);
/*
*
**
***
****
*****
*/

const repeat = (str, n) => {
  let res = '';
  for (let i = 0; i < n; i++) {
    console.log(str.repeat(i + 1));
  }
}
repeat('o',10);