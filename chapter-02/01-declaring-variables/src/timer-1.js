// greeting 함수 선언한 후 콜백 함수로 사용

let count = 0;

// function greeting() {
//   count++;
//   console.log("안녕하세요? " + count);
// }

// setInterval(greeting, 2000);    // 함수가 greeting 함수를 갖고있는 것 콜백함수

// 직접 함수 선언(화살표 함수) 실행
setInterval(() => {
  count++;
  console.log("안녕하세요? " + count);
}, 2000);