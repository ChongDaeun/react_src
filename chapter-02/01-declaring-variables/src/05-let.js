const factor = 5;

// 함수 선언. 호출 아님
function calc() {
  return num * factor;    // 아래 박스에서 num 접근 불가. 에러 발생 : not define num 
}

{
  const num = 10;   // 이 박스 안에서만  num을 알 수 있음. const, let 블럭 범위 한정됨. calc(num)으로 파라미터로 num을 설정하면 접근 가능
  let result = calc();
  // console.log("result : " + result);
  console.log(`result : ${result}`);    //템플릿 문자열 사용
}