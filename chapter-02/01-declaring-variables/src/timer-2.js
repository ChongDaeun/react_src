// greeting 함수 선언한 후 콜백 함수로 사용
// 타이머 끝낼수 있게 해 줌
let count = 0;

let timer = setInterval(() => {
  count++;
  console.log("hello " + count);
  if(count === 3) {
    clearInterval(timer);
  }
}, 2000);