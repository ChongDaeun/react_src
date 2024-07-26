// 화살표 함수의 리턴값이 객체일 때 괄호로 묶어주기
var lordify = (firstName, lastName) => ({   // 괄호 꼭 써줘야 함 아님 에러 생김
  
  first: firstName,
  last: lastName
})

console.log( lordify("다은", "고") )