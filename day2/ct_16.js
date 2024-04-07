// // Star pattern 3

// ### **문제 설명**
// 아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.
/*
    *
   **
  ***
 ****
*****
*/

const star3 = n => {                    // 'n'이라는 매개변수로 출력할 줄의 수를 결정한다
  for (let i = 1; i <= n; i++) {
    let stars = '';                    // 'i = n'개의 줄 생성
    for (let j = 1; j <= n - i; j++) {
      stars += ' ';                   // ' '공백의 수를 n - i(= n)갯수 만큼 생성
    }
    for (let k = 1; k <= i; k++) {
      stars += '*';                   // '*'를 줄의 번호 (i = n)개 만큼 생성
    }
    console.log(stars);
}};

star3(5);
/*
    *
   **
  ***
 ****
*****
*/