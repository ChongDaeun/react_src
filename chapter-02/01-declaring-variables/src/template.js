// 템플릿 문자열 : 연결 연산자(+) 대신 사용

// const lastName = "강";
// const middleName = "감찬";
// const firstName = "킹";

// console.log(lastName + ", " + firstName + " " + middleName);    // 자바스크립트만 사용했을 때

// // 템플릿 문자열 사용했을 때. EL식과 헷갈리지 않게 조심하기
// console.log(`${lastName}, ${firstName}, ${middleName}`);

var lastName = "Ferrell"
var middleName = "William"
var firstName = "John"

var ticketAgent = "The iO Theater"
var event = "TJ & Dave"
var qty = 2
var price = 10

// ES6 template strings do not ignore whitespace

console.log(`

  Hello ${firstName},

  Thanks for ordering ${qty} tickets to ${event}.

  Order Details
    ${firstName} ${middleName} ${lastName}
    ${qty} x $${price} = $${qty*price} to ${event}
            
  You can pick your tickets up at will call 30 minutes before 
  the show.

  Thanks,

  ${ticketAgent}

`)