import { useState, useEffect } from 'react';
import './App.css';
import '../Gifts/Gift.css';

import Circle from '../Circle';
import GiftGitInfo from '../GiftGitInfo/GiftGitInfo';
import tree from '../Tree/tree.svg';

function App() {
  let [top, setTop] = useState(1);
/*   let [left, setLeft] = useState(1); */
  let [coordX, setX] = useState('');
  let [coordY, setY] = useState('');
  let [circle, setCircle] = useState('');

  function moveBall(e) {
    setX(e.pageX);
    setY(e.pageY);
    console.log(coordX);
  }

  /* const ball = (<Circle color={'green'}
    position={{ top: 10, left: 100 }} />);
  
  function moveCircle() {
    setCircle(<Circle/>);
  } */

  function addCircle() {
    console.log('q');
    return circle;
  }

  /* function moveDown() {
    setTop(top + 50);
  } */

  return (
    <div className="App">
      <div className="wrap">
        <Circle
          color={'red'}
          position={{ top: coordY, left: coordX }}
        />
  <p className='description'>Вы можете нарядить ёлку, просто кликнув по ней!</p>
        <div className="Tree">
          
          <img src = {tree} alt = "XMastree" className="XMasTree" onClick={moveBall}></img>
        </div>
      </div>
      <button onClick={addCircle}>
        Новый шарик
      </button>
      <button /* onClick={GiftGitInfo} */>
        Получить подарок
      </button>
    </div>
  );
}

export default App;
