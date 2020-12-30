import { useState } from 'react';
import './App.scss';

import tree from './tree.svg';
import Circle from '../Circle';
import Gifts from '../Gifts';

function App() {
  const [circles, setCircles] = useState([]);

  function addCircle(e) {
    setCircles(
      [...circles,
      { coordX: e.pageX, coordY: e.pageY, id: circles.length }
      ]
    )
  }


  return (
    <div className="App">
      <div className="wrap">

        <p className='description'>Ёлка засветится огоньками, как только вы кликните по ней!</p>
        <p className='description'> 10 огоньков и появятся подарки!</p>

        <img src={tree} alt="XMastree" className="XMasTree" onClick={addCircle}></img>

        {(circles.length >= 2) &&
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
