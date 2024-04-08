// Star pattern 4

// ### **문제 설명**
// 아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.
/*
*****
 ****
  ***
   **
    *
*/

const star4 = n => {
  for (let i = n; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= n - i; j++) {
      stars += ' ';
    }
    for (let k = 1; k <= i; k++) {
      stars += '*';
    }
    console.log(stars);
  }
};

const star4_2 = n => {
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(i) + '*'.repeat(n - i));
  }
}

star4(5);
star4_2(5);
/*
*****
 ****
  ***
   **
    *
*/
