import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Counter(props) {
  const [num, setNum] = React.useState(props.initNum);
  function increaseNum() {
    setNum(num + 1);
  };
  function decreaseNum() {
    setNum(num - 1);
  };
  return (
    <>
      <h1>カウンターアプリ</h1>
      現在の値: { num }
      <button onClick={ increaseNum }>
        +
      </button>
      <button onClick={ decreaseNum }>
        -
      </button>
    </>
  );
}

function RockPaperScissors() {
  const hands = ['グー', 'チョキ', 'パー'];
  const computer_hand_index = Math.floor(Math.random() * 3); // 0-2の整数
  const [computer_hand, setComputerHand] = React.useState(hands[computer_hand_index]);
  const [judge, setJudge] = React.useState('勝負');
  function showRock() {
    switch(computer_hand) {
      case 'グー':
        setJudge('あいこです');
        break;
      case 'チョキ':
        setJudge('あなたの勝ちです');
        break;
      case 'パー':
        setJudge('あなたの負けです');
        break;
    }
    const next_hand_index = Math.floor(Math.random() * 3);
    setComputerHand(hands[next_hand_index]);
  };
  function showPaper() {
    switch(computer_hand) {
      case 'パー':
        setJudge('あいこです');
        break;
      case 'グー':
        setJudge('あなたの勝ちです');
        break;
      case 'チョキ':
        setJudge('あなたの負けです');
        break;
    }
    const next_hand_index = Math.floor(Math.random() * 3);
    setComputerHand(hands[next_hand_index]);
  };
  function showScissors() {
    switch(computer_hand) {
      case 'チョキ':
        setJudge('あいこです');
        break;
      case 'パー':
        setJudge('あなたの勝ちです');
        break;
      case 'グー':
        setJudge('あなたの負けです');
        break;
      }
      const next_hand_index = Math.floor(Math.random() * 3);
      setComputerHand(hands[next_hand_index]);  
  };
  return (
    <>
      <h1>じゃんけんアプリ</h1>
      <h2>{ judge }</h2>
      <button onClick={ showRock }>
        グー
      </button>
      <button onClick={ showScissors }>
        チョキ
      </button>
      <button onClick={ showPaper }>
        パー
      </button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <Link to='/counter'>
              カウンターアプリ
          </Link>          
          <Link to='/rock-paper-scissors'>
            じゃんけんアプリ
          </Link> 
        </Route>
        <Route exact path='/counter'>
          <Counter initNum={ 100 } />
        </Route>
        <Route exact path='/rock-paper-scissors'>
          <RockPaperScissors />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
