// 스코프 : 선언한 변수의 적용범위
/*
var 키워드 : 함수 레벨 스코프 > function{ } 중괄호 안의 영역에만 영향을 줌 중괄호 밖에서도 사용 가능
let, const 키워드 사용 변수는 블록 레벨 스코프 { } 블럭 안에서만 사용 가능

*/

const pizza = true;
pizza = false;  // const : 재할당 불가
