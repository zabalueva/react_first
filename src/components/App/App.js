import { useState } from 'react';
import './App.css';

import tree from './tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';

function App() {
  const [coordX, setX] = useState('');
  const [coordY, setY] = useState('');
  const [circles, setCircles] = useState([]);


  function addCircle(e) {
    setX(e.pageX);
    setY(e.pageY);
    setCircles(
      [...circles,
      { coordX: coordX, coordY: coordY, id: circles.length }
      ]
    );
  }




  return (
    <div className="App">
      <div className="wrap">

        <p className='description'>Ёлка засветится огоньками, как только вы кликните по ней!</p>
        <p className='description'> За 10 огоньков можно выбрать подарок!</p>
        <img src={tree} alt="XMastree" className="XMasTree" onClick={addCircle}></img>

        {(circles.length >= 10) &&
          <Gifts />
        }
      </div>

      <div>{
        circles.map(({ coordX, coordY, id }) => {
          return <Circle
            key={id}
            position={{ top: coordY, left: coordX }}
          />
        })
      }</div>

    </div>
  );
}

export default App;
