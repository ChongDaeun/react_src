var topic = "자바스크립트";

if (topic) {
  var topic = "리액트";   // 재선언
  //let topic = "리액트";
  console.log('블록: ', topic);   // let topic 참조
}

console.log('글로벌', topic);   // var topic 참조