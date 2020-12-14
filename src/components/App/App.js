import { useState } from 'react';
import './App.css';
import '../Gifts/Gift.css';

import Circle from '../Circle';
import GiftGitInfo from '../GiftGitInfo/GiftGitInfo';
import tree from '../Tree/tree.svg';

function App() {
  let [id, setId] = useState('');
  const [coordX, setX] = useState('');
  const [coordY, setY] = useState('');
  const [circles, setCircles] = useState([]);

  function boxCircle() {
    setCircles([{ coordX, coordY, id }]);
  }

  function addCircle() {
    setId((circles.length));
    circles.push({ coordX, coordY, id });
    console.log(circles.length);
    console.log(id)
  }

  function moveBall(e) {
    setX(e.pageX);
    setY(e.pageY);
    console.log(coordX);
  }

  return (
    <div className="App">
      <div className="wrap">
        <p className='description'>Вы можете нарядить ёлку, просто кликнув по ней!</p>

        <button onClick={boxCircle}>
          Набрать корзину шариков
        </button>

        <div className="Tree">
          <img src={tree} alt="XMastree" className="XMasTree" onClick={moveBall}></img>
        </div>

      </div>
      <button onClick={addCircle}>
        Новый шарик
      </button>

      <div>{
        circles.map(({ coordX, coordY, id }) => {
          return <Circle
            key={id}
            color={'red'}
            position={{ top: coordY, left: coordX }}
          />
        })
      }</div>
      {/*  <button onClick={GiftGitInfo}>
        Получить подарок
      </button> */}
    </div>
  );
}

export default App;
