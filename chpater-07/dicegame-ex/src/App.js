import './App.css';
import Dice from './Dice';
import Button from './Button';
import { useState } from 'react';
import dice from './assets/logo.png';
import Board from './Board';


function random(n) {
  return Math.ceil(Math.random() * n);    // 1~6까지 랜덤으로 뽑을 수 있음
}

function App() {
  // 참조형 데이터 state
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  
  let myClassName = 'Board';
  let otherClassName = 'Board';
  if(myHistory[myHistory.length -1] > otherHistory[otherHistory.length -1]) {
    myClassName += ' Board-winner';
    otherClassName += ' App-board';
  }else if(myHistory[myHistory.length -1] < otherHistory[otherHistory.length -1]) {
    myClassName += ' App-board';
    otherClassName += ' Board-winner';
  } else {
    myClassName += ' App-board';
    otherClassName += ' App-board';
  }

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    
    // const prevHistory = gameHistory;
    // gameHistory.push(nextNum);
    // console.log(prevHistory === gameHistory);
    setMyHistory([...myHistory, nextMyNum]);    // 새로운 주소라 계속 변경됨
    setOtherHistory([...otherHistory, nextOtherNum]);
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }



  return (
    <div className='App'>
      <img className="App-logo" src={dice} alt="주사위게임 로고" />
      <h1 className='App-title'>주사위게임</h1>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='App-boards'>
          <Board name="나" color="blue" gameHistory={myHistory} 
            className={myClassName} 
          />
          <Board name="상대" color="red" gameHistory={otherHistory} 
            className={otherClassName} 
          />
      </div>   
    </div>
    
  )
}

export default App;
